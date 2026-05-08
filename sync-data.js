// 从 index.html 的 getDefaultData() 提取数据，覆盖 data.json
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// 找 function getDefaultData()
const fnIdx = html.indexOf('function getDefaultData()');
if (fnIdx < 0) { console.error('not found getDefaultData'); process.exit(1); }

// 找之后第一个 return
const retIdx = html.indexOf('return', fnIdx);
if (retIdx < 0) { console.error('not found return'); process.exit(1); }

// 找 return 后第一个 {
const braceStart = html.indexOf('{', retIdx);
if (braceStart < 0) { console.error('not found {'); process.exit(1); }

// 大括号配对
let depth = 0, i = braceStart, inStr = null, esc = false;
for (; i < html.length; i++) {
  const c = html[i];
  if (inStr) {
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (c === inStr) inStr = null;
    continue;
  }
  if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
  if (c === '{') depth++;
  else if (c === '}') { depth--; if (depth === 0) { i++; break; } }
}
const objText = html.slice(braceStart, i);

// eval 成对象
let dataObj;
try { dataObj = eval('(' + objText + ')'); }
catch (e) { console.error('eval failed:', e.message); process.exit(1); }

// updatedAt 放最前
const out = { updatedAt: new Date().toISOString() };
for (const k of Object.keys(dataObj)) out[k] = dataObj[k];

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(out, null, 2), 'utf8');

const days = Object.keys(dataObj);
console.log('OK, days:', days.length);
console.log('latest:', days[0], '->', (dataObj[days[0]] || []).length, 'items');
// 验证0508 rank3,11,21,22,25
const d = dataObj['2026-05-08'] || [];
const picks = [3, 11, 21, 22, 25];
for (const r of picks) {
  const x = d.find(it => it.rank === r);
  if (x) console.log('  rank', r, ':', x.name, '|', x.tags, '|', x.type);
}
