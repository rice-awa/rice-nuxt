<template>
  <section id="success" class="py-20 bg-gray-50 dark:bg-gray-900 relative z-10 min-h-screen">
    <div class="container mx-auto px-6 relative">
      <SectionTitle>成果展示</SectionTitle>

      <!-- 内容布局 -->
      <div class="relative">
        <!-- 中间进度条 -->
        <div class="absolute left-1/2 h-full -translate-x-1/2 w-px mx-auto hidden lg:block">
          <div class="h-full w-full bg-blue-100 dark:bg-blue-900/30"></div>
          <div ref="progressLine" class="absolute top-0 w-full bg-blue-500" style="height: 0%"></div>
        </div>

        <!-- 项目卡片循环 -->
        <div class="space-y-32">
          <template v-for="(project, index) in successProjects" :key="project.id">
            <div :ref="(el) => setItemRef(el, index)" class="relative flex flex-col lg:flex-row items-center gap-4">
              <!-- 偶数项靠左，奇数项靠右 -->
              <div class="relative w-full lg:w-1/2" :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
                <ImageCard :image-src="project.image" :alt-text="project.title" />
              </div>

              <!-- 文字信息 -->
              <div class="flex flex-col justify-center lg:w-1/2 text-center lg:text-left" :class="index % 2 === 0 ? 'lg:pl-8 lg:order-2' : 'lg:pr-8 lg:order-1'">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-300">
                  {{ project.title }}
                </h3>
                <p class="text-lg text-gray-600 dark:text-gray-400 mt-2">
                  {{ project.description }}
                </p>
                <span class="inline-block text-blue-500 dark:text-blue-400 mt-2">
                  {{ project.date }}
                </span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 导入ImageCard组件
import ImageCard from '~/components/common/ImageCard.vue';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const successProjects = [
  {
    id: 1,
    title: '新世纪Cycles',
    image: '/images/新世纪Cycles.webp',
    description: '使用 Blender 制作的3D建模作品',
    date: '2024-04',
  },
  {
    id: 2,
    title: '3D建模作品',
    image: '/images/校徽3D打印.png',
    description: '校徽3D打印作品',
    date: '2024-05',
  },
  {
    id: 3,
    title: '宿舍全景图',
    image: '/images/宿舍全景图.webp',
    description: '使用全景相机拍摄的宿舍图片',
    date: '2024-06',
  },
  {
    id: 4,
    title: '全栈官网',
    image: '/images/官网截图.webp',
    description: '使用 Vue3 + Nuxt3 开发的社团官方网站',
    date: '2025-02',
  },
  {
    id: 5,
    title: '新社徽',
    image: '/images/2025新社徽.webp',
    description: '全新设计的2025全栈社徽',
    date: '2025-02',
  },
];

const successTitle = ref(null);
const progressLine = ref(null);
const successItems = ref(Array(successProjects.length).fill(null));

// 添加设置 ref 的函数
const setItemRef = (el, index) => {
  if (el) {
    successItems.value[index] = el;
  }
};

onMounted(() => {
  // 成果展示标题动画
  gsap.from(successTitle.value, {
    scrollTrigger: {
      trigger: successTitle.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
  });

  // 项目卡片动画
  requestAnimationFrame(() => {
    successItems.value.forEach((item, index) => {
      if (item) {
        // 为动画元素添加 will-change 属性
        item.style.willChange = 'transform, opacity';
        
        // 设置初始状态
        gsap.set(item, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        });

        // 执行动画
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
        });
      }
    });
  });

  // 进度条动画
  gsap.to(progressLine.value, {
    scrollTrigger: {
      trigger: '#success',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,
    },
    height: '100%',
    width: '8px', // 设置进度条宽度
    ease: 'none',
  });
});
</script>