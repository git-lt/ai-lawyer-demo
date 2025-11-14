#!/bin/bash

# 部署脚本 - 将 dist 目录内容推送到 gh-pages 分支

echo "🚀 开始部署到 GitHub Pages..."

# 检查是否存在 dist 目录
if [ ! -d "dist" ]; then
    echo "❌ 错误：dist 目录不存在，请先运行 npm run build"
    exit 1
fi

# 保存当前分支
current_branch=$(git rev-parse --abbrev-ref HEAD)
echo "📍 当前分支：$current_branch"

# 创建临时工作目录
temp_dir=$(mktemp -d)
echo "📁 创建临时目录：$temp_dir"

# 复制 dist 内容到临时目录
cp -r dist/* "$temp_dir/"
echo "📋 已复制 dist 内容到临时目录"

# 切换到 gh-pages 分支，如果不存在则创建
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# 清空 gh-pages 分支的所有文件（除了 .git）
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# 从临时目录复制文件到当前目录
cp -r "$temp_dir"/* .

# 添加所有文件到 git
git add .

# 创建提交
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# 推送到远程
git push origin gh-pages

# 切换回原来的分支
git checkout "$current_branch"

# 清理临时目录
rm -rf "$temp_dir"

echo "✅ 部署完成！您的网站将在几分钟后可用。"
echo "🌐 网址：https://git-lt.github.io/ai-lawyer-demo/"