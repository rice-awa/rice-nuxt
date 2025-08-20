<template>
  <section id="features" class="py-20" role="region" aria-labelledby="features-title">
    <div class="container mx-auto px-6">
      <SectionTitle id="features-title">社团特色</SectionTitle>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-8 bg-white rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
          role="article"
          aria-labelledby="feature-title-{{ index }}"
        >
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Icon :name="feature.icon" class="w-8 h-8 text-blue-500" :aria-hidden="true" />
          </div>
          <h3 id="feature-title-{{ index }}" class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-300">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 导入SectionTitle组件
import SectionTitle from '~/components/common/SectionTitle.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';

const features = [
  {
    icon: 'ph:code-bold',
    title: '前沿技术',
    desc: '掌握最新开发工具与框架',
  },
  {
    icon: 'ph:lightbulb-bold',
    title: '创新项目',
    desc: '参与多个创新项目的开发',
  },
  {
    icon: 'ph:users-bold',
    title: '团队合作',
    desc: '与团队成员合作完成项目',
  },
  {
    icon: 'ph:graduation-cap-bold',
    title: '实践经验',
    desc: '获得实践经验和技能提升',
  },
];

onMounted(() => {
  // 为特色部分添加滚动动画
  const features = document.querySelectorAll('#features .container > div > div');
  features.forEach((feature, index) => {
    // 为动画元素添加 will-change 属性
    feature.style.willChange = 'transform, opacity';
    
    gsap.from(feature, {
      scrollTrigger: {
        trigger: feature,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none none',
        once: true,
      },
      opacity: 0,
      y: 50,
      rotation: 15,
      scale: 0.8,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'back.out(1.7)',
    });
  });
});
</script>