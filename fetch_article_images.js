#!/usr/bin/env node
/**
 * 从微信公众号文章页面提取所有图片URL
 */
const https = require('https');
const http = require('http');
const cheerio = require('cheerio');
const zlib = require('zlib');

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
      }
    };
    client.get(url, options, (res) => {
      const chunks = [];
      const encoding = res.headers['content-encoding'];
      let stream = res;
      if (encoding === 'gzip') {
        stream = res.pipe(zlib.createGunzip());
      } else if (encoding === 'deflate') {
        stream = res.pipe(zlib.createInflate());
      } else if (encoding === 'br') {
        stream = res.pipe(zlib.createBrotliDecompress());
      }
      stream.on('data', (chunk) => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node fetch_article_images.js <article_url>');
    process.exit(1);
  }

  console.error('Fetching article:', url);
  const html = await fetchPage(url);
  console.error('HTML length:', html.length);

  const $ = cheerio.load(html);
  
  // 提取所有图片
  const images = [];
  $('img').each((i, el) => {
    const src = $(el).attr('data-src') || $(el).attr('src');
    if (src && src.includes('mmbiz.qpic.cn')) {
      images.push(src);
    }
  });

  // 也从 CSS background-image 中提取
  $('[style*="mmbiz.qpic.cn"]').each((i, el) => {
    const style = $(el).attr('style');
    const match = style.match(/url\(['"]?(https?:\/\/mmbiz\.qpic\.cn[^'")\s]+)['"]?\)/);
    if (match) images.push(match[1]);
  });

  // 从data-src属性提取
  $('[data-src*="mmbiz.qpic.cn"]').each((i, el) => {
    const src = $(el).attr('data-src');
    if (src && !images.includes(src)) images.push(src);
  });

  // 也从HTML源码中正则匹配
  const regex = /https?:\/\/mmbiz\.qpic\.cn\/[^\s"'<>]+/g;
  const matches = html.match(regex) || [];
  for (const m of matches) {
    const cleaned = m.replace(/&amp;/g, '&').replace(/['")\]}>]+$/, '');
    if (!images.includes(cleaned)) images.push(cleaned);
  }

  console.log(JSON.stringify({ imageCount: images.length, images }, null, 2));
}

main().catch(err => { console.error('Error:', err.message); process.exit(1); });
