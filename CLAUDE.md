# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Nuxt.js 3 的全栈信息处理协会官网，使用 Vue 3、TypeScript 和 Tailwind CSS 构建。项目采用单页应用设计，具有丰富的动画效果和响应式布局。

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 生成静态站点
npm run generate

# 预览构建结果
npm run preview
```

## 技术栈

- **框架**: Nuxt.js 3 (Vue 3)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: GSAP (GreenSock Animation Platform)
- **图标**: Nuxt Icon + Iconify
- **SEO**: @nuxtjs/sitemap, @nuxtjs/robots
- **图片优化**: @nuxt/image

## 项目架构

### 目录结构
- `app.vue` - 主应用组件，包含完整的单页应用内容
- `assets/css/` - 样式文件
- `public/` - 静态资源（图片、图标等）
- `server/` - 服务器端配置
- `types/` - TypeScript 类型定义

### 核心组件
项目采用单页应用架构，所有内容都在 `app.vue` 中实现：

1. **导航系统** - 固定顶部导航，支持移动端菜单
2. **主题切换** - 深色/浅色模式切换，本地存储偏好
3. **动画效果** - 使用 GSAP 和 ScrollTrigger 实现滚动动画
4. **响应式设计** - 移动优先的响应式布局

### 主要功能模块
- Banner 区域（标题动画）
- 社团特色展示
- 近期活动展示
- 发展历程时间线
- 社团部门介绍
- 成果展示（带进度条动画）
- 加入我们区域

## 开发规范

### 代码风格和结构
- 编写简洁、技术性的 TypeScript 代码，并提供准确的示例
- 使用组合 API 和声明式编程模式；避免使用选项 API
- 优先考虑迭代和模块化，避免代码重复
- 使用描述性变量名，包含辅助动词（例如：isLoading，hasError）
- 文件结构：导出组件、组合函数、辅助函数、静态内容、类型

### 命名约定
- 目录使用小写字母和短横线（例如：components/auth-wizard）
- 组件名称使用 PascalCase（例如：AuthWizard.vue）
- 组合函数使用 camelCase（例如：useAuthState.ts）
- 变量使用 camelCase，布尔值使用 is/has 前缀

### TypeScript 使用
- 所有代码使用 TypeScript；优先使用 type 而非 interface
- 避免使用枚举；使用常量对象代替
- 使用 Vue 3 和 TypeScript，利用 defineComponent 和 PropType
- 启用严格的类型检查，避免 any 类型

### 语法和格式
- 方法和计算属性使用箭头函数
- 在条件语句中避免不必要的花括号；对简单语句使用简洁语法
- 使用模板语法进行声明式渲染
- 使用 `<script setup>` 语法进行简洁的组件定义

### UI 和样式
- 使用 Tailwind CSS 进行组件和样式设计
- 使用 Tailwind CSS 实现响应式设计；采用移动优先的方法
- 自定义样式放在 `<style>` 标签中，支持深色模式（使用 dark: 前缀）
- 优先使用实用类而非自定义 CSS

### 性能优化
- 利用 Nuxt 的内置性能优化
- 对于异步组件使用 Suspense
- 实现路由和组件的懒加载
- 优化图像：使用 WebP 格式，包含大小数据，实现懒加载
- 优化 Web Vitals（LCP、CLS、FID）

### 关键约定
- 使用 VueUse 进行常见组合函数和工具函数
- 使用 Pinia 进行状态管理（如需要）
- 利用 Nuxt 的自动导入功能导入组件和组合函数
- 使用 GSAP 进行复杂动画，CSS 动画用于简单过渡效果

### Nuxt 特定指南
- 遵循 Nuxt 3 目录结构（例如：pages/、components/、composables/）
- 使用 Nuxt 的内置功能：
  - 组件和组合函数的自动导入
  - 在 pages/ 目录中基于文件的路由
  - 在 server/ 目录中的服务器路由
  - 利用 Nuxt 插件实现全局功能
- 使用 useFetch 和 useAsyncData 进行数据获取
- 使用 Nuxt 的 useHead 和 useSeoMeta 实现 SEO 最佳实践

### Vue 3 和组合 API 最佳实践
- 使用 `<script setup>` 语法进行简洁的组件定义
- 利用 ref、reactive 和 computed 进行响应式状态管理
- 在适当时使用 provide/inject 进行依赖注入
- 实现自定义组合函数以复用逻辑
- 使用生命周期钩子（onMounted, onUnmounted 等）管理副作用

### 动画规范
- 使用 GSAP 实现复杂动画和滚动触发效果
- 使用 ScrollTrigger 实现基于滚动的动画
- CSS 动画用于简单的过渡效果
- 确保动画性能，避免过度动画导致性能问题
- 为动画元素添加适当的 will-change 属性

### 响应式设计
- 移动优先的设计方法
- 使用 Tailwind 的响应式前缀（sm:, md:, lg:, xl:）
- 确保所有交互元素在移动端可正常使用
- 测试不同屏幕尺寸下的布局和功能

### 深色模式支持
- 所有组件都应支持深色模式
- 使用 Tailwind 的 dark: 前缀定义深色模式样式
- 实现主题切换功能，保存用户偏好到本地存储
- 确保深色模式下的文本可读性和对比度

### 错误处理和边界情况
- 为异步操作添加适当的错误处理
- 使用 try-catch 处理可能的异常
- 为组件添加加载状态和错误状态
- 实现适当的降级方案

### 代码质量
- 遵循 DRY（Don't Repeat Yourself）原则
- 提取公共逻辑到组合函数或工具函数
- 使用适当的代码注释解释复杂逻辑
- 保持代码的一致性和可维护性

遵循官方 Nuxt.js 和 Vue.js 文档，以获取最新的数据获取、渲染和路由最佳实践。

## 重要配置

### Nuxt 配置 (nuxt.config.ts)
- 启用 Tailwind CSS 模块
- 配置 SEO 相关模块
- 设置网站元信息和结构化数据

### Tailwind 配置 (tailwind.config.js)
- 启用深色模式支持
- 配置内容扫描路径

### Cursor 规则 (.cursorrules)
项目遵循 Cursor IDE 的开发规范，包括：
- TypeScript 最佳实践
- Vue 3 组合 API 使用
- 性能优化建议
- 响应式设计原则

## 开发注意事项

1. **性能优化**：项目使用大量动画，注意性能影响
2. **移动端适配**：确保所有功能在移动端正常工作
3. **SEO 优化**：已配置 sitemap 和 robots，注意内容更新
4. **图片优化**：使用 WebP 格式，配置适当的尺寸
5. **主题切换**：所有组件都应支持深色模式

## 动画系统

项目使用 GSAP 作为主要动画库：

- **标题动画**：字符逐个显示和弹性效果
- **滚动动画**：ScrollTrigger 触发的元素动画
- **进度条动画**：成果展示区域的滚动进度条
- **悬停效果**：卡片和按钮的交互效果

## 部署

项目支持静态部署：
```bash
npm run generate
# 将 .output/public 目录内容部署到静态服务器
```