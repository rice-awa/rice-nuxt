<template>
  <div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 transition-all duration-300" :style="{ width: scrollProgress + '%' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollProgress = ref(0);

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / documentHeight) * 100;
  scrollProgress.value = progress;
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress);
});
</script>