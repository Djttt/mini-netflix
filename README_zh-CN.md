# Mini Netflix

基于 TMDB API 构建的现代响应式电影和电视剧发现应用。浏览热门内容，搜索您喜爱的影视作品，并查看详细信息——所有这些都通过一个流畅的界面呈现。

[English](README.md) | [简体中文](README_zh-CN.md)

## 功能特性

- **电影**: 探索正在上映、好评如潮及即将上映的电影。
- **电视剧**: 浏览热门、今日播出、好评如潮及电视热播的剧集。
- **详细视图**: 每部电影和电视剧的全面信息展示。
- **搜索**: 强大的搜索功能，助您精准找到想看的内容。
- **响应式设计**: 针对桌面端和移动端设备进行了优化。

## 技术栈

- **框架**: [React 19](https://react.dev/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [TailwindCSS](https://tailwindcss.com/) & [Material UI](https://mui.com/)
- **状态管理**: [Zustand](https://github.com/pmndrs/zustand)
- **路由**: [React Router v7](https://reactrouter.com/)
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/)

## 快速开始

### 前置要求

确保您的机器上已安装 [Node.js](https://nodejs.org/)。

### 安装

1. **克隆仓库:**

   ```bash
   git clone <repository-url>
   cd mini-netflix
   ```

2. **安装依赖:**

   ```bash
   npm install
   ```

3. **配置环境变量:**

   在根目录下创建一个 `.env` 文件，并添加您的 TMDB API 密钥：

   ```env
   VITE_TMDB_KEY=your_tmdb_api_key_here
   ```

   > 您可以在 [The Movie Database](https://www.themoviedb.org/) 注册账号以获取 API 密钥。

### 运行应用

启动开发服务器：

```bash
npm run dev
```

在浏览器中打开 [http://localhost:5173](http://localhost:5173) 查看应用。

## 脚本

- `npm run dev`: 启动开发服务器。
- `npm run build`: 构建生产版本应用。
- `npm run lint`: 运行 ESLint 检查代码质量问题。
- `npm run preview`: 本地预览生产构建。

---
Built with ❤️ using React and Vite.
