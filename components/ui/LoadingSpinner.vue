<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" :class="spinnerClass"></div>
    <span v-if="text" class="ml-2 text-gray-600 dark:text-gray-400">{{ text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  containerClass: {
    type: String,
    default: ''
  },
  spinnerClass: {
    type: String,
    default: ''
  }
});
</script>