<template>
  <section id="activities" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <SectionTitle>近期活动</SectionTitle>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="activity in activities"
          :key="activity.title"
          class="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all dark:bg-gray-800"
        >
          <div class="w-full aspect-video bg-blue-100 rounded-lg mb-6 overflow-hidden">
            <ImageCard :image-src="activity.image" :alt-text="activity.title" />
          </div>
          <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-300">{{ activity.title }}</h3>
          <p class="text-gray-600 mb-4 dark:text-gray-400">{{ activity.desc }}</p>
          <p class="text-blue-500">{{ activity.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 导入ImageCard组件
import ImageCard from '~/components/common/ImageCard.vue';
import SectionTitle from '~/components/common/SectionTitle.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';

const activities = [
  {
    title: '学习开发知识',
    desc: '学习有关编程知识，提升自身开发能力',
    date: '2024年6月10日',
    image: '/images/社员们正在学习编程知识.webp',
  },
  {
    title: '3D建模技术讲座',
    desc: '社团合作开展3D建模科普',
    date: '2024年6月7日',
    image: '/images/大社开展3D建模科普.webp',
  },
  {
    title: '社团文化艺术节',
    desc: '社团文化艺术节，举行有趣的社文小游戏',
    date: '2024年6月6日',
    image: '/images/开展社团文化艺术节小游戏.webp',
  },
];

onMounted(() => {
  // 为活动部分添加滚动动画
  const activities = document.querySelectorAll('#activities .grid > div');
  activities.forEach((activity, index) => {
    // 为动画元素添加 will-change 属性
    activity.style.willChange = 'transform, opacity';
    
    // 设置初始状态
    gsap.set(activity, { opacity: 0, y: 100 });
    gsap.set(activity.querySelector('img'), { scale: 1.5 });
    gsap.set(activity.querySelector('h3'), { opacity: 0, x: -30 });
    gsap.set(activity.querySelector('p'), { opacity: 0, x: -20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: activity,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    tl.to(activity, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.4,
      ease: 'power2.out',
    })
      .to(
        activity.querySelector('img'),
        {
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
        },
        '-=0.6' // 修改重叠时间
      )
      .to(
        activity.querySelector('h3'),
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
        },
        '-=0.5' // 修改重叠时间
      )
      .to(
        activity.querySelector('p'),
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
        },
        '-=0.4' // 修改重叠时间
      );
  });
});
</script>