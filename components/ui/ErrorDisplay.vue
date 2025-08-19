<template>
  <div class="flex flex-col items-center justify-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800" :class="containerClass">
    <div class="text-red-500 dark:text-red-400 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 class="text-xl font-bold text-red-800 dark:text-red-200 mb-2">{{ title }}</h3>
    <p class="text-red-600 dark:text-red-400 text-center mb-4">{{ message }}</p>
    <button 
      v-if="showRetryButton"
      @click="$emit('retry')"
      class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
    >
      重试
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '出错了'
  },
  message: {
    type: String,
    default: '发生了一个未知错误'
  },
  showRetryButton: {
    type: Boolean,
    default: false
  },
  containerClass: {
    type: String,
    default: ''
  }
});

defineEmits(['retry']);
</script>