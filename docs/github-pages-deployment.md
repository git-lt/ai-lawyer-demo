# GitHub Pages 部署说明

本项目已配置 GitHub Actions 自动部署到 GitHub Pages。

## 配置步骤

### 1. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** (设置)
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** (源) 下拉菜单中选择 **GitHub Actions**

### 2. 推送代码触发部署

配置完成后，每次向 `main` 分支推送代码时，都会自动触发部署流程：

```bash
git add .
git commit -m "your commit message"
git push origin main
```

### 3. 查看部署状态

1. 在仓库页面点击 **Actions** 标签
2. 查看最新的 workflow 运行状态
3. 部署成功后，可以在 **Settings > Pages** 中看到你的网站 URL

### 4. 访问网站

部署成功后，你的网站将可以通过以下 URL 访问：

```
https://<your-username>.github.io/<repository-name>/
```

## 工作流说明

`.github/workflows/deploy.yml` 文件定义了以下流程：

1. **触发条件**：当代码推送到 `main` 分支时
2. **构建步骤**：
   - 检出代码
   - 安装 Node.js 20
   - 安装依赖 (`npm ci`)
   - 构建 H5 应用 (`npm run build:h5`)
   - 上传构建产物 (`dist/build/h5`)
3. **部署步骤**：
   - 将构建产物部署到 GitHub Pages

## 本地测试构建

在推送代码前，建议先在本地测试构建：

```bash
npm run build:h5
```

构建成功后，可以在 `dist/build/h5` 目录中查看生成的文件。

## 注意事项

1. 确保 `package.json` 中有 `build:h5` 脚本
2. 如果仓库是私有的，需要升级到 GitHub Pro 或使用组织账号才能使用 GitHub Pages
3. 首次部署可能需要几分钟时间
4. 如果遇到权限问题，检查 **Settings > Actions > General > Workflow permissions** 是否设置为 "Read and write permissions"

## 故障排查

### 构建失败

1. 查看 Actions 标签页中的错误日志
2. 确认本地 `npm run build:h5` 可以成功执行
3. 检查 Node.js 版本是否兼容（工作流使用 Node.js 20）

### 部署失败

1. 确认已在 Settings > Pages 中选择 "GitHub Actions" 作为源
2. 检查仓库的 Actions 权限设置
3. 查看 deploy 步骤的详细错误信息

### 页面 404

1. 确认部署已成功完成
2. 检查 GitHub Pages 的 URL 是否正确
3. 可能需要等待几分钟让 CDN 更新
