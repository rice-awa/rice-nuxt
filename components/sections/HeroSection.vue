<template>
  <section class="h-screen flex items-center justify-center relative" role="region" aria-labelledby="hero-title">
    <div class="container mx-auto px-6 text-center">
      <h1 id="hero-title" ref="titleRef" class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-sm flex flex-col gap-4">
        <div class="flex justify-center">
          <span
            v-for="(char, index) in titleLines.line1"
            :key="`line1-${index}`"
            class="line1-char inline-block bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400">
            {{ char }}
          </span>
        </div>
        <div class="flex justify-center">
          <span
            v-for="(char, index) in titleLines.line2"
            :key="`line2-${index}`"
            class="line2-char inline-block bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400">
            {{ char }}
          </span>
        </div>
      </h1>
      <p class="intro-text text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto dark:text-gray-200 leading-relaxed" ref="introText">
        创新 · 协作 · 未来
      </p>
      <button
        @click="scrollToSection('#activities')"
        class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full transition-all transform hover:scale-105 shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-describedby="hero-button-description">
        了解详情
      </button>
      <div id="hero-button-description" class="sr-only">点击按钮了解社团近期活动</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

const titleRef = ref(null);
const introText = ref(null);

const titleLines = {
  line1: '探索数字宇宙'.split(''),
  line2: 'FULLSTACK'.split(''),
};

const scrollToSection = (href) => {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  nextTick(() => {
    // 获取所有标题字符
    const chars = titleRef.value.querySelectorAll('span');
    
    // 为动画元素添加 will-change 属性
    chars.forEach(char => {
      char.style.willChange = 'transform, opacity';
    });
    
    // 设置初始状态
    gsap.set(chars, {
      opacity: 0,
      y: 40,
    });
    
    // 创建时间轴
    const tl = gsap.timeline();
    
    // 第一行文字动画
    const line1Chars = titleRef.value.querySelectorAll('.line1-char');
    tl.to(line1Chars, {
      duration: 0.6,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: 'power2.out',
    })
    // 第二行文字动画
    .to(
      titleRef.value.querySelectorAll('.line2-char'),
      {
        duration: 0.6,
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power2.out',
      },
      '-=0.3'
    )
    // 所有字符的下落动画
    .to(
      chars,
      {
        duration: 0.8,
        y: '+=20',
        ease: 'elastic.out(1, 0.4)',
        stagger: {
          amount: 0.5,
          from: 'random',
        },
      },
      '+=0.4'
    );
    
    // 创建介绍文字的动画
    gsap.fromTo(
      introText.value,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2.5,
        ease: 'power4.out',
      }
    );
  });
});
</script>