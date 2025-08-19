<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform translate-x-full opacity-0"
    enter-to-class="transform translate-x-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-x-0 opacity-100"
    leave-to-class="transform translate-x-full opacity-0"
  >
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-y-0 right-0 z-40 w-64 bg-white dark:bg-gray-900 pt-20 shadow-lg"
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      <div class="px-6">
        <h2 id="mobile-menu-title" class="sr-only">移动端导航菜单</h2>
        <div class="flex flex-col space-y-6">
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="index"
            :to="link.href"
            class="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
            @click="handleMobileNavClick(link.href)"
          >
            {{ link.text }}
          </NuxtLink>

          <!-- 移动端主题切换按钮 -->
          <div class="flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  </Transition>
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

const handleMobileNavClick = (href) => {
  scrollToSection(href);
  isMobileMenuOpen.value = false;
};

const scrollToSection = (href) => {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>