// 从 index.html 提取 getDefaultData() 的 return 对象，写入 data.json
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');

// 找到 function getDefaultData
const fnIdx = html.indexOf('function getDefaultData');
if (fnIdx < 0) throw new Error('未找到 getDefaultData 函数');

// 找到第一个 return
const returnIdx = html.indexOf('return', fnIdx);
if (returnIdx < 0) throw new Error('未找到 return');

// 找到第一个 {
let i = html.indexOf('{', returnIdx);
if (i < 0) throw new Error('未找到 return 后的 {');

// 大括号配对（注意跳过字符串内的大括号）
let depth = 0;
let inStr = false;
let strCh = '';
let escape = false;
let start = i;
for (; i < html.length; i++) {
  const c = html[i];
  if (inStr) {
    if (escape) { escape = false; continue; }
    if (c === '\\') { escape = true; continue; }
    if (c === strCh) { inStr = false; continue; }
    continue;
  }
  if (c === '"' || c === "'" || c === '`') { inStr = true; strCh = c; continue; }
  if (c === '{') depth++;
  else if (c === '}') {
    depth--;
    if (depth === 0) { i++; break; }
  }
}
const objLiteral = html.slice(start, i);

// 用 eval 解析（容忍裸键、单引号）
const obj = eval('(' + objLiteral + ')');

// 重组：updatedAt 在最前
const ordered = { updatedAt: new Date().toISOString() };
for (const k of Object.keys(obj)) ordered[k] = obj[k];

fs.writeFileSync('data.json', JSON.stringify(ordered, null, 2), 'utf8');

// 验证
const dates = Object.keys(ordered).filter(k => /^2026-/.test(k)).sort();
console.log('total dates:', dates.length, 'latest:', dates.slice(-3));
const latest = ordered[dates[dates.length - 1]];
const items = (latest.hongguo && latest.hongguo.items) || [];
console.log('latest items count:', items.length);
console.log('sample item type/tags:', items.slice(0, 3).map(it => ({name: it.name, type: it.type, tags: it.tags})));
console.log('OK');
