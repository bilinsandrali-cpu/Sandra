const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 基于4/18修正的映射：4/19错误 → 正确
const nameFixes = {
  '芒弓逆袭，送相爹爹奖上天': '乞丐逆袭，丞相爹爹宠上天',
  '我的丧尸小班长超会围！': '我的丧尸小班长超会囤！',
  '破贼的秘密': '破房的秘密',
  '退伍海归语目日，我转身无情逝': '道侣悔婚当日，我转修无情道',
};

let changes = 0;
for (const [old, fixed] of Object.entries(nameFixes)) {
  const count = (html.match(new RegExp(old, 'g')) || []).length;
  if (count > 0) {
    html = html.replace(new RegExp(old, 'g'), fixed);
    console.log('剧名修正: "' + old + '" → "' + fixed + '" (' + count + ')');
    changes += count;
  }
}

// 写回
fs.writeFileSync('index.html', html, 'utf8');

// 基于4/18重新构建library，回补所有日期
const m = html.match(/function\s+getDefaultData\s*\(\)\s*\{[\s\S]*?return\s+(\{[\s\S]*?\});\s*\}/);
const data = eval('(' + m[1] + ')');

const library = {};
// 优先用4/18的数据（用户最新修正）
if (data['2026-04-18'] && data['2026-04-18'].hongguo) {
  for (const item of data['2026-04-18'].hongguo.items) {
    library[item.name] = {
      tags: item.tags, type: item.type, publisher: item.publisher, onlineDate: item.onlineDate, synopsis: item.synopsis
    };
  }
}
// 再补其他日期的（不覆盖4/18）
for (const [date, dd] of Object.entries(data)) {
  if (date === '2026-04-18') continue;
  if (!dd.hongguo || !dd.hongguo.items) continue;
  for (const item of dd.hongguo.items) {
    if (!library[item.name]) library[item.name] = {};
    const lib = library[item.name];
    if (item.tags && item.tags.length > (lib.tags || '').length) lib.tags = item.tags;
    if (item.type && item.type.length > (lib.type || '').length) lib.type = item.type;
    if (item.publisher && item.publisher.length > (lib.publisher || '').length) lib.publisher = item.publisher;
    if (item.onlineDate && !lib.onlineDate) lib.onlineDate = item.onlineDate;
  }
}

// 回补所有日期中空信息的剧
const lines = html.split('\n');
let filled = 0;
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (!line.includes('rank:') || !line.includes('name:"')) continue;
  const nameMatch = line.match(/name:"([^"]+)"/);
  if (!nameMatch) continue;
  const name = nameMatch[1];
  const lib = library[name];
  if (!lib) continue;
  
  let changed = false;
  if (/tags:""/.test(line) && lib.tags) { line = line.replace('tags:""', 'tags:"' + lib.tags + '"'); changed = true; }
  if (/type:""/.test(line) && lib.type) { line = line.replace('type:""', 'type:"' + lib.type + '"'); changed = true; }
  if (/publisher:""/.test(line) && lib.publisher) { line = line.replace('publisher:""', 'publisher:"' + lib.publisher + '"'); changed = true; }
  if (/onlineDate:""/.test(line) && lib.onlineDate) { line = line.replace('onlineDate:""', 'onlineDate:"' + lib.onlineDate + '"'); changed = true; }
  
  if (changed) {
    lines[i] = line;
    filled++;
  }
}
html = lines.join('\n');
fs.writeFileSync('index.html', html, 'utf8');

// Sync data.json
const m2 = html.match(/function\s+getDefaultData\s*\(\)\s*\{[\s\S]*?return\s+(\{[\s\S]*?\});\s*\}/);
const data2 = eval('(' + m2[1] + ')');
fs.writeFileSync('data.json', JSON.stringify(data2, null, 2), 'utf8');

console.log('\n总计：剧名修正 ' + changes + ' 处，信息回补 ' + filled + ' 处');
console.log('data.json synced: ' + Object.keys(data2).length + ' dates');

// Verify 4/19
console.log('\n=== 4/19 修正后 ===');
data2['2026-04-19'].hongguo.items.forEach(item => {
  const miss = [];
  if (!item.tags) miss.push('tags');
  if (!item.type) miss.push('type');
  console.log(`  #${String(item.rank).padStart(2)} ${item.name.padEnd(28)} ${miss.length ? '留白:'+miss.join('+') : '✅'}`);
});
