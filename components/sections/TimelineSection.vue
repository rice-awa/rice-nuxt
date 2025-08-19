<template>
  <section id="timeline" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle>发展历程</SectionTitle>
      <div class="space-y-8">
        <div
          v-for="item in timeline"
          :key="item.year"
          class="flex items-center gap-8 group"
        >
          <div class="text-3xl font-bold text-blue-500 w-32 flex-shrink-0">{{ item.year }}</div>
          <div class="flex-1 p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all dark:bg-gray-800">
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-300">{{ item.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ item.desc }}</p>
          </div>
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

const timeline = [
  {
    year: '2021.11',
    title: '社团成立',
    desc: '全栈信息技术社正式成立，确定部门，开启技术探索之旅',
  },
  {
    year: '2021.12',
    title: '开展迎新讲座--星辰大海',
    desc: '举办信息技术讲座，C++编程教学',
  },
  {
    year: '2022',
    title: '开创社团交流本',
    desc: '社团交流本以及社团明信片选定',
  },
  {
    year: '2023',
    title: '部门更新',
    desc: '新增硬件，数字媒体技术相关部门，新增部长，联络员',
  },
  {
    year: '2024',
    title: '社服与交流本',
    desc: '首套社服选定，交流本内容优化',
  },
  {
    year: '2024.6',
    title: '科技文化艺术节',
    desc: '首次与科技社合作开展科技游园活动',
  },
  {
    year: '2024.11',
    title: '24届社团招新',
    desc: '开展24届招新活动',
  },
  {
    year: '2024.12',
    title: '24届迎新',
    desc: '开展24届迎新活动',
  },
  {
    year: '2025.5',
    title: '科技文化艺术节',
    desc: '2025届科技文化艺术节',
  },
];

onMounted(() => {
  // 修改时间线部分的动画配置
  const timelineItems = document.querySelectorAll('#timeline .space-y-8 > div');
  timelineItems.forEach((item, index) => {
    // 为动画元素添加 will-change 属性
    item.style.willChange = 'transform, opacity';
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top bottom-=100', // 当元素顶部到达视窗底部往上100px时
        end: 'bottom top', // 当元素底部到达视窗顶部时
        toggleActions: 'play none none none',
        once: true,
        markers: false, // 调试用，可以看到触发位置
      },
    });

    tl.fromTo(
      item.querySelector('.text-3xl'),
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
      }
    ).fromTo(
      item.querySelector('.flex-1'),
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.4'
    );
  });
});
</script>