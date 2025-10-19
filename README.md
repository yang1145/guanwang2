# TechCorp 企业官网

> 基于 Vue 3、Vite、Tailwind CSS 和 DaisyUI 构建的现代化企业官网

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-4.x-1AD1A5?logo=daisyui&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

TechCorp 企业官网是一个现代化、响应式的网站项目，展示了公司的产品、服务和新闻资讯。

## 功能特性

- 🌐 响应式设计，支持各种设备
- 🌙 深色/浅色主题切换
- 📱 完整的路由系统
- 🎨 使用 Tailwind CSS 和 DaisyUI 构建
- ⚡ 基于 Vite 的快速开发体验
- 📦 组件化架构，易于维护和扩展

## 页面结构

- **首页** - 展示公司概览、核心产品、关于我们等
- **产品中心** - 展示公司核心产品和服务
- **新闻资讯** - 公司动态、行业资讯和新闻
- **联系我们** - 联系方式和留言表单

## 技术栈

- [Vue 3](https://v3.vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 新一代前端构建工具
- [Vue Router](https://router.vuejs.org/) - Vue.js 的官方路由管理器
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [DaisyUI](https://daisyui.com/) - Tailwind CSS 组件库
- [PostCSS](https://postcss.org/) - CSS 处理工具

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
# 检查代码
npm run lint

# 自动修复代码问题
npm run lint:fix
```

### 代码格式化

```bash
npm run format
```

## 项目结构

```
src/
├── assets/           # 静态资源
├── components/       # 可复用组件
├── router/           # 路由配置
├── views/            # 页面组件
├── App.vue           # 根组件
├── main.js           # 入口文件
└── style.css         # 全局样式
```

## 路由配置

项目使用 Vue Router 实现单页面应用路由：

- `/` - 首页
- `/products` - 产品中心
- `/products/detail/:id` - 产品详情
- `/news` - 新闻资讯
- `/news/detail/:id` - 新闻详情
- `/contact` - 联系我们

## 自定义配置

### Tailwind CSS

项目使用 Tailwind CSS 作为基础样式框架，并集成了 DaisyUI 组件库。

### DaisyUI

DaisyUI 提供了丰富的组件和主题支持，项目默认启用了 light 和 dark 主题。

## 浏览器支持

- 最新的 Chrome, Firefox, Safari, Edge
- 支持现代浏览器，不支持 IE

## 许可证

[MIT](LICENSE)

## 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。