<template>
  <header class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-2">
          <NuxtImg src="/images/logo.webp" alt="社徽" class="w-8 h-8 md:w-10 md:h-10 object-contain" width="40" height="40" format="webp" />
          <h1 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            全栈<span class="font-extrabold">FULLSTACK</span>
          </h1>
        </div>
        
        <!-- 桌面端导航 -->
        <nav class="hidden md:flex items-center space-x-8" role="navigation" aria-label="主导航">
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="index"
            :to="link.href"
            class="text-gray-600 hover:text-blue-500 transition-all duration-300 text-sm font-medium nav-link dark:text-gray-300 dark:hover:text-blue-400"
            @click.prevent="scrollToSection(link.href)">
            {{ link.text }}
          </NuxtLink>
          <ThemeToggle />
        </nav>
        
        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button
            class="p-2 bg-gray-100 rounded-lg dark:bg-gray-800"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="切换移动端菜单">
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
            <svg v-else class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// 导入ThemeToggle组件
import ThemeToggle from '~/components/ui/ThemeToggle.vue';

const navLinks = [
  { text: '社团特色', href: '#features' },
  { text: '近期活动', href: '#activities' },
  { text: '发展历程', href: '#timeline' },
  { text: '社团部门', href: '#departments' },
  { text: '成果展示', href: '#success' },
  { text: '加入我们', href: '#join' },
];

const isMobileMenuOpen = useState('isMobileMenuOpen', () => false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToSection = (href) => {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    isMobileMenuOpen.value = false;
  }
};
</script>