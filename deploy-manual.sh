#!/bin/bash

# 手动部署脚本 - 更简单的版本

echo "🚀 开始手动部署到 GitHub Pages..."

# 1. 构建项目
echo "📦 构建项目中..."
npm run build || npx vite build

# 2. 进入 dist 目录
cd dist

# 3. 初始化 git（如果不存在）
if [ ! -d ".git" ]; then
    git init
    git remote add origin git@github.com:git-lt/ai-lawyer-demo.git
fi

# 4. 添加所有文件
git add .

# 5. 创建提交
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')" || echo "没有更改需要提交"

# 6. 推送到 gh-pages 分支
git push --force origin main:gh-pages

# 7. 返回原目录
cd ..

echo "✅ 手动部署完成！"
echo "🌐 网址：https://git-lt.github.io/ai-lawyer-demo/"