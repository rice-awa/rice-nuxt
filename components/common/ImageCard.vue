<template>
  <div class="overflow-hidden rounded-lg shadow-xl group aspect-video mx-auto max-w-full">
    <NuxtImg
      :src="imageSrc"
      :alt="altText"
      loading="lazy"
      sizes="sm:100vw md:50vw lg:400px"
      format="webp"
      class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    default: ''
  }
});
</script>