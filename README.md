# React Portal 便签应用

一个基于 React + Zustand + TailwindCSS 的简易便签管理应用，支持深色/浅色主题切换，便签数据本地存储，界面美观，交互流畅。

## ✨ 主要功能

- 📝 新建、删除便签
- 💾 便签数据自动保存到浏览器本地（localStorage）
- 🌗 支持深色/浅色主题切换，自动跟随系统
- ⚡ 响应式布局，适配不同屏幕
- 🚀 纯前端实现，无需后端

## 📦 技术栈

- React 19
- Zustand（状态管理）
- TailwindCSS（样式）
- Radix UI、Ant Design（部分UI组件）
- React Router v7

## 🛠️ 安装与启动

1. **安装依赖**

   ```bash
   npm install
   ```

2. **启动开发环境**

   ```bash
   npm start/npm run start
   ```

   启动后访问 [http://localhost:3000](http://localhost:3000)

3. **打包构建**

   ```bash
   npm run build
   ```

   构建产物会输出到 `build/` 目录。

4. **运行测试**

   ```bash
   npm test
   ```

## 📁 目录结构

```
src/
  components/      // 复用组件
  pages/           // 页面组件
  store/           // 状态管理
  router/          // 路由配置
  App.js           // 应用入口
```

## 📝 说明

- 所有便签数据仅保存在本地浏览器，不会上传服务器。
- 主题切换按钮位于页面右上角，支持深色/浅色模式。
- 如需重置数据，请清除浏览器 localStorage。
