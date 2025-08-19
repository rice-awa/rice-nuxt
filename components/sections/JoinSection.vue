<template>
  <section id="join" class="py-32 text-center bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <SectionTitle>全栈信息处理协会</SectionTitle>
      <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto dark:text-gray-400">"栈"在信息技术中是一种特殊的数据结构，"全栈"体现了我们包容的理念。在这里，我们欢迎每一位想从0到1，从1到100的同学共同进步！</p>
      <button class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">立即加入</button>
    </div>
  </section>
</template>

<script setup>
// 导入SectionTitle组件
import SectionTitle from '~/components/common/SectionTitle.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  // 修改加入我们部分的动画配置
  const joinSection = document.querySelector('#join');
  // 为动画元素添加 will-change 属性
  joinSection.querySelector('p').style.willChange = 'transform, opacity';
  joinSection.querySelector('button').style.willChange = 'transform, opacity';
  
  const joinTl = gsap.timeline({
    scrollTrigger: {
      trigger: joinSection,
      start: 'top bottom', // 修改触发位置
      end: 'bottom top',
      toggleActions: 'play none none none',
      once: true,
    },
  });

  joinTl
    .fromTo(
      joinSection.querySelector('p'),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.4'
    )
    .fromTo(
      joinSection.querySelector('button'),
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      },
      '-=0.2'
    );
});
</script>