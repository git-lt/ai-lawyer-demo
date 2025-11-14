# GitHub Pages 自动部署指南

## 🚀 GitHub Actions 自动部署

本项目已配置 GitHub Actions，当您推送代码到 `main` 分支时，会自动构建并部署到 GitHub Pages。

### 部署流程

1. **自动触发**：每次推送代码到 `main` 分支
2. **构建项目**：自动安装依赖并构建生产版本
3. **部署页面**：将构建好的文件部署到 GitHub Pages

### 手动触发部署

如果需要在不推送代码的情况下重新部署：

1. 进入 GitHub 仓库页面
2. 点击 "Actions" 选项卡
3. 选择 "Deploy to GitHub Pages" 工作流
4. 点击 "Run workflow" 按钮

### 部署状态查看

- **成功部署**：访问 https://git-lt.github.io/ai-lawyer-demo/
- **查看日志**：GitHub 仓库 → Actions → 选择具体的工作流运行

### 配置要求

确保您的仓库设置中已启用 GitHub Pages：

1. 进入仓库 Settings → Pages
2. 选择 "Deploy from a branch"
3. 选择 "gh-pages" 分支和 "/ (root)" 目录

### 故障排除

如果部署失败：

1. 检查 Actions 日志中的错误信息
2. 确保 package.json 中的构建脚本正确
3. 验证 dist 目录是否正确生成

## 🔧 本地构建和测试

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 构建输出

构建完成后，所有静态文件会生成在 `dist/` 目录中，可以直接部署到任何静态文件服务器。