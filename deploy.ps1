# deploy.ps1 — 一键部署漫剧日报到 GitHub Pages
# 用法：.\deploy.ps1 "提交说明"

param(
    [string]$Message = "update: 更新数据"
)

$file = Join-Path $PSScriptRoot "index.html"
$ts = Get-Date -Format "yyyyMMdd-HHmm"

# 更新 BUILD_TS 版本标记（让页面自动检测到新版本）
$content = Get-Content $file -Raw -Encoding UTF8
$content = $content -replace 'BUILD_TS\s*=\s*"[^"]*"', "BUILD_TS = `"$ts`""
[System.IO.File]::WriteAllText($file, $content, [System.Text.UTF8Encoding]::new($false))

Write-Host "✅ BUILD_TS 已更新为: $ts" -ForegroundColor Green

# Git 提交并推送
git add index.html
git commit -m "$Message"
git push

Write-Host "✅ 已推送到 GitHub Pages" -ForegroundColor Green
