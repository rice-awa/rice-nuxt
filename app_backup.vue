<template>
  <div class="min-h-screen overflow-x-hidden">
    <!-- Banner背景 -->
    <div class="fixed top-0 left-0 right-0 h-screen pointer-events-none">
      <div class="h-full bg-gradient-to-b from-white via-[#5382DB]/40 to-[#5382DB]/30 dark:from-gray-900 dark:via-[#5382DB]/30 dark:to-transparent"></div>
    </div>

    <!-- 内容容器 -->
    <div class="relative z-10">
      <!-- 导航栏 -->
      <AppHeader />

      <!-- 移动端菜单按钮 -->
      <div class="md:hidden fixed top-4 right-4 z-50">
        <button 
          class="p-2 bg-gray-100 rounded-lg dark:bg-gray-800" 
          @click="toggleMobileMenu"
        >
          <svg 
            class="w-6 h-6 text-gray-600 dark:text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMobileMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16m-16 6h16" 
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>

      <!-- 移动端导航菜单 -->
      <MobileMenu />

      <!-- Banner部分 -->
      <HeroSection />

      <!-- 其他内容区域 - 使用白色背景 -->
      <div class="relative bg-white dark:bg-gray-900">
        <!-- 社团特色 -->
        <FeaturesSection />

        <!-- 近期活动 -->
        <ActivitiesSection />

        <!-- 发展历程 -->
        <TimelineSection />

        <!-- 社团部门 -->
        <DepartmentsSection />

        <!-- 成果展示部分 -->
        <SuccessSection />

        <!-- 加入我们 -->
        <JoinSection />

        <!-- 页脚 -->
        <AppFooter />
      </div>
    </div>

    <!-- 滚动指示器 -->
    <ScrollIndicator />
  </div>
</template>

<script setup>
// 导入组件
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
import MobileMenu from '~/components/layout/MobileMenu.vue';
import HeroSection from '~/components/sections/HeroSection.vue';
import FeaturesSection from '~/components/sections/FeaturesSection.vue';
import ActivitiesSection from '~/components/sections/ActivitiesSection.vue';
import TimelineSection from '~/components/sections/TimelineSection.vue';
import DepartmentsSection from '~/components/sections/DepartmentsSection.vue';
import SuccessSection from '~/components/sections/SuccessSection.vue';
import JoinSection from '~/components/sections/JoinSection.vue';
import ScrollIndicator from '~/components/ui/ScrollIndicator.vue';

const isMobileMenuOpen = useState('isMobileMenuOpen', () => false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style>
/* 自定义动画 */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

/* 毛玻璃效果 */
.backdrop-blur-md {
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

/* 导航链接样式 */
.nav-link {
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, #a855f7); /* 使用 Tailwind 的颜色值 */
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* 确保所有文本清晰可见 */
h1,
h2,
h3,
p {
  text-shadow: none;
}

/* 按钮样式优化 */
button {
  font-weight: 500;
  letter-spacing: 0.025em;
}

.scroll-trigger-item {
  visibility: hidden; /* 初始隐藏所有动画元素 */
}

.scroll-trigger-item.is-visible {
  visibility: visible;
}

/* 确保页面有足够的滚动空间 */
#timeline,
#join {
  min-height: 50vh; /* 确保每个部分都有足够的高度 */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 100%;
    overflow-x: hidden;
  }

  h1 {
    font-size: clamp(1.5rem, 10vw, 5rem);
  }

  .nav-link {
    padding: 0.75rem 0;
  }
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 添加到现有的 style 标签中 */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

/* 确保暗模式文本可读性 */
.dark text-gray-300 {
  color: rgba(209, 213, 219, var(--tw-text-opacity));
}

/* 添加过渡效果 */
:root {
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}

/* 为所有可能需要过渡的元素添加过渡效果 */
*,
::before,
::after {
  transition: background-color 0.5s ease, border-color 0.5s ease, color 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
}

/* 为渐变背景添加过渡效果 */
.from-gray-50,
.to-white,
.dark\:from-gray-900,
.dark\:to-black {
  transition: background-image 0.5s ease;
}

/* 优化一些不需要过渡的属性 */
.transition-none,
.transition-none::before,
.transition-none::after {
  transition: none !important;
}

/* 为导航栏背景模糊效果添加平滑过渡 */
nav {
  transition: background-color 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease;
}

/* 为卡片和容器添加过渡效果 */
.bg-white,
.dark\:bg-gray-800,
.bg-gray-50,
.dark\:bg-gray-900 {
  transition: background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
}

/* 添加到现有的 style 标签中 */
.inline-block {
  display: inline-block;
  overflow: hidden;
}

/* 添加字符动画样式 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.char-animate {
  animation: fadeInUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* 添加字符动画相关样式 */
.char-enter-active {
  transition: all 0.5s cubic-bezier(0.3, 0, 0.2, 1);
}

.char-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.char-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* 为标题字符添加悬停效果 */
h2 span {
  display: inline-block;
  cursor: default;
}

h2 span:hover {
  animation: bounce 0.7s cubic-bezier(0.25, 0, 0.2, 1);
  background-image: linear-gradient(to right bottom, #3b82f6, #6163f4, #7f4af8);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* 添加背景动画过渡 */
.bg-gradient-to-b,
.bg-gradient-to-br {
  background-size: 200% 200%;
  transition: background-position 0.5s ease-in-out;
}

.bg-gradient-to-b:hover,
.bg-gradient-to-br:hover {
  background-position: 0 100%;
}

/* 优化按钮悬停效果 */
button.bg-gradient-to-r {
  background-size: 200% auto;
  transition: all 0.3s ease;
}

button.bg-gradient-to-r:hover {
  background-position: right center;
}

/* 防止移动端菜单打开时页面滚动 */
.overflow-hidden {
  overflow: hidden;
}

/* 移动端菜单动画 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 添加背景渐变过渡效果 */
.fixed.inset-0 {
  transition: background-image 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 确保内容区域有适当的背景透明度 */
.bg-white\/95 {
  backdrop-filter: blur(10px);
}

.dark .bg-gray-900\/95 {
  backdrop-filter: blur(8px);
}

/* 优化内容区域的阴影，增加层次感 */
.relative.z-10 {
  box-shadow: 0 -1px 20px -8px rgba(0, 0, 0, 0.1);
}

/* 深色模式下的阴影 */
.dark .relative.z-10 {
  box-shadow: 0 -1px 20px -8px rgba(0, 0, 0, 0.3);
}

/* 为内容区域添加渐变边框效果 */
.relative.z-10::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.05), transparent);
}

.dark .relative.z-10::before {
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05), transparent);
}

/* 优化背景渐变过渡 */
.fixed {
  transition: opacity 1s ease;
}

/* Banner背景渐变效果 */
.bg-gradient-to-b {
  background-size: 100% 100%;
  transition: background-image 1s ease;
}

/* 导航栏模糊效果 */
nav {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

/* 确保内容区域有适当的层级和过渡 */
.relative.z-10 {
  isolation: isolate;
}

/* 深色模式过渡 */
:root {
  transition: background-color 1s ease;
}

/* 添加一些过渡效果的辅助类 */
.gsap-reveal {
  visibility: hidden;
}

/* 优化滚动性能 */
.smooth-scroll {
  will-change: transform;
}

/* 确保动画元素有正确的变换原点 */
#features .container > div,
#activities .grid > div,
#timeline .space-y-8 > div {
  transform-origin: center center;
}

/* 优化时间线样式 */
#timeline .space-y-8 > div {
  opacity: 1;
  transform: none;
}

/* 优化性能相关的样式 */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

/* 只在动画过程中应用 will-change */
.animating {
  will-change: transform, opacity;
}

/* 确保年份显示正确 */
#timeline .text-3xl {
  white-space: nowrap;
  text-align: right;
  padding-right: 1rem;
}

/* 优化加入我们部分的按钮样式 */
#join button {
  position: relative;
  overflow: hidden;
}

#join button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

#join button:hover::before {
  left: 100%;
}

.scroll-trigger-item {
  visibility: hidden; /* 初始隐藏所有动画元素 */
}

.scroll-trigger-item.is-visible {
  visibility: visible;
}

/* 确保页面有足够的滚动空间 */
#timeline,
#join {
  min-height: 50vh; /* 确保每个部分都有足够的高度 */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 添加以下样式来防止水平溢出 */
html,
body {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

/* 确保动画不会导致水平溢出 */
.gsap-reveal,
.scroll-trigger-item {
  overflow-x: hidden;
}

/* 添加新的样式 */
.department-card {
  transition: transform 0.3s ease;
}

.department-card:hover {
  transform: translateY(-5px);
}

.department-card li {
  transition: color 0.3s ease;
}

.department-card:hover li {
  color: currentColor;
}

/* 确保列表样式正确显示 */
.list-disc {
  list-style-type: disc;
  margin-left: 1.5rem;
}

/* 成果展示部分 */
/* 父容器 */
#success {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 中间进度条 */
#success .progress-line {
  width: 8px; /* 加粗进度条 */
  background-color: #3b82f6;
  transition: height 0.3s ease; /* 平滑动画 */
}

/* 项目卡片 */
.success-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  width: 100%;
}

/* 图片样式 */
.success-item img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.success-item:hover img {
  transform: scale(1.05); /* 鼠标悬停时放大图片 */
}

/* 文字信息 */
.success-item h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937; /* 深灰色 */
  transition: color 0.3s ease;
}

.success-item p {
  margin: 0;
  font-size: 1rem;
  color: #6b7280; /* 浅灰色 */
  transition: color 0.3s ease;
}

.success-item span {
  font-size: 0.875rem;
  color: #3b82f6; /* 蓝色 */
}

/* 响应式调整 */
@media (min-width: 1024px) {
  .success-item {
    flex-direction: row; /* 大屏幕水平排列 */
    gap: 2rem;
  }

  /* 偶数项与奇数项的方向控制 */
  .success-item:nth-child(odd) {
    flex-direction: row-reverse; /* 奇数项反转图片和文字 */
  }
}

@media (max-width: 768px) {
  #success .relative {
    padding: 0 1rem; /* 确保内容不贴边 */
  }

  /* 图片与文字垂直堆叠 */
  .success-item {
    flex-direction: column;
  }

  /* 文字居中对齐 */
  #success .text-left {
    text-align: center;
  }

  #success .lg\:pl-8,
  #success .lg\:pr-8 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>