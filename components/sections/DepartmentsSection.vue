<template>
  <section id="departments" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle>下设部门</SectionTitle>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- 编程部 -->
        <div class="department-card" ref="deptCard1">
          <div class="p-8 bg-white rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">编程部</h3>
            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-400">其中包括：</p>
              <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>py支部（python）</li>
                <li>CJ支部（C++、Java）</li>
                <li>程序设计</li>
                <li>自动化</li>
                <li>网页编写</li>
                <li>网络安全</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 媒体部 -->
        <div class="department-card" ref="deptCard2">
          <div class="p-8 bg-white rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">媒体部</h3>
            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-400">其中包括：</p>
              <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>剪辑（视频剪辑、动画）</li>
                <li>平面设计（logo、海报、周边、绘画）</li>
                <li>3维设计（3D建模、3D打印、动画CG）</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 硬件部 -->
        <div class="department-card" ref="deptCard3">
          <div class="p-8 bg-white rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">硬件部</h3>
            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-400">其中包括：</p>
              <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>电脑硬件（装机）</li>
                <li>机器人编程</li>
                <li>电路设计</li>
                <li>DIY</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const departmentTitle = ref(null);
const deptCard1 = ref(null);
const deptCard2 = ref(null);
const deptCard3 = ref(null);

onMounted(() => {
  // 部门标题动画
  gsap.from(departmentTitle.value, {
    scrollTrigger: {
      trigger: departmentTitle.value,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse',
      once: true,
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
  });

  // 部门卡片动画
  const cards = [deptCard1.value, deptCard2.value, deptCard3.value];
  cards.forEach((card, index) => {
    // 为动画元素添加 will-change 属性
    card.style.willChange = 'transform, opacity';
    
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse',
        once: true,
      },
      opacity: 0,
      y: 100,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power2.out',
    });

    // 添加hover效果
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  // 为列表项添加渐入动画
  const listItems = document.querySelectorAll('.department-card li');
  listItems.forEach((item, index) => {
    // 为动画元素添加 will-change 属性
    item.style.willChange = 'transform, opacity';
    
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top bottom-=20',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -20,
      duration: 0.5,
      delay: index * 0.1,
    });
  });
});
</script>