<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Banner背景 -->
    <div class="fixed top-0 left-0 right-0 h-screen pointer-events-none">
      <div class="h-full bg-gradient-to-b from-white via-[#5382DB]/40 to-[#5382DB]/30 dark:from-gray-900 dark:via-[#5382DB]/30 dark:to-transparent"></div>
    </div>

    <!-- 导航栏 -->
    <AppHeader />

    <!-- 主内容区域 -->
    <main class="relative z-10 pt-20 pb-16">
      <div class="container mx-auto px-6">
        <!-- 页面标题 -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            作品展示
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            探索我们社团成员的精彩创作，从编程项目到设计作品，展现全栈开发的无限可能
          </p>
        </div>

        <!-- 作品展示网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(work, index) in works" 
            :key="index"
            class="group cursor-pointer transform transition-transform duration-300 hover:scale-102"
            @click="openLightbox(index)"
          >
            <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-98 will-change-transform">
              <!-- 图片容器 -->
              <div class="relative overflow-hidden aspect-[4/3]">
                <NuxtImg
                  :src="work.image"
                  :alt="work.title"
                  class="w-full h-full object-cover transform transition-transform duration-400 group-hover:scale-108 will-change-transform"
                  width="400"
                  height="300"
                  format="webp"
                  loading="lazy"
                />
                <!-- 悬停遮罩 -->
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <div class="opacity-0 group-hover:opacity-100 transform transition-opacity duration-300">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- 作品信息 -->
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2 line-clamp-1">
                  {{ work.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {{ work.description }}
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-blue-500 font-medium">{{ work.category }}</span>
                  <span class="text-xs text-gray-500">{{ work.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 灯箱模态框 -->
    <Transition name="lightbox" mode="out-in">
      <div
        v-if="lightboxVisible"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md will-change-opacity"
        @click="closeLightbox"
      >
        <div class="relative max-w-6xl w-full mx-4 transform transition-transform duration-300 ease-out will-change-transform" @click.stop>
          <!-- 导航按钮 -->
          <button
            @click.stop="navigateWork(-1)"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 group"
          >
            <svg class="w-6 h-6 transform transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            @click.stop="navigateWork(1)"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 group"
          >
            <svg class="w-6 h-6 transform transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- 关闭按钮 -->
          <button
            @click="closeLightbox"
            class="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-200 z-10 transform hover:scale-110"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- 灯箱内容 -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 ease-out will-change-transform">
            <div class="grid lg:grid-cols-2 gap-8 p-8">
              <!-- 图片区域 -->
              <div class="relative group">
                <NuxtImg
                  :src="currentWork.image"
                  :alt="currentWork.title"
                  class="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-102 will-change-transform"
                  width="600"
                  height="400"
                  format="webp"
                  preload
                />
              </div>

              <!-- 详细信息 -->
              <div class="space-y-6">
                <div>
                  <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {{ currentWork.title }}
                  </h2>
                  <div class="flex items-center gap-4 mb-4">
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-200">
                      {{ currentWork.category }}
                    </span>
                    <span class="text-gray-500 text-sm">{{ currentWork.date }}</span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ currentWork.description }}
                  </p>
                </div>

                <!-- 技术栈 -->
                <div v-if="currentWork.technologies">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">技术栈</h3>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="(tech, techIndex) in currentWork.technologies"
                      :key="techIndex"
                      class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- 项目链接 -->
                <div v-if="currentWork.links" class="pt-4">
                  <div class="flex gap-4">
                    <a
                      v-for="(link, linkIndex) in currentWork.links"
                      :key="linkIndex"
                      :href="link.url"
                      target="_blank"
                      class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                      <span>{{ link.label }}</span>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>

<script setup>
// 导入组件
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';

// 作品数据
const works = [
  {
    title: '智能校园管理系统',
    description: '基于Vue3和Node.js开发的校园信息管理平台，包含学生管理、课程安排、成绩查询等功能模块。',
    image: '/images/官网截图.webp',
    category: 'Web应用',
    date: '2024-12',
    technologies: ['Vue3', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    links: [
      { label: '查看演示', url: 'https://demo.example.com' },
      { label: 'GitHub', url: 'https://github.com/example' }
    ]
  },
  {
    title: '3D建模科普项目',
    description: '使用Blender和Three.js创建的交互式3D建模教学平台，支持实时渲染和模型交互。',
    image: '/images/大社开展3D建模科普.webp',
    category: '3D设计',
    date: '2024-11',
    technologies: ['Blender', 'Three.js', 'WebGL'],
    links: [
      { label: '在线体验', url: 'https://3d-demo.example.com' }
    ]
  },
  {
    title: '社团文化艺术节游戏',
    description: '为社团文化艺术节开发的互动小游戏，包含多个趣味关卡和排行榜功能。',
    image: '/images/开展社团文化艺术节小游戏.webp',
    category: '游戏开发',
    date: '2024-10',
    technologies: ['Unity', 'C#', 'WebGL'],
    links: [
      { label: '开始游戏', url: 'https://game.example.com' }
    ]
  },
  {
    title: '编程学习平台',
    description: '面向初学者的交互式编程学习网站，提供实时代码编辑器和进度跟踪功能。',
    image: '/images/社员们正在学习编程知识.webp',
    category: '教育科技',
    date: '2024-09',
    technologies: ['React', 'Python', 'Docker'],
    links: [
      { label: '学习平台', url: 'https://learn.example.com' }
    ]
  },
  {
    title: '3D打印校徽项目',
    description: '使用3D建模和打印技术制作的精美校徽模型，展现学校文化和技术创新。',
    image: '/images/校徽3D打印.png',
    category: '3D打印',
    date: '2024-08',
    technologies: ['Fusion 360', '3D打印', '后期处理'],
    links: [
      { label: '项目详情', url: 'https://3d-print.example.com' }
    ]
  },
  {
    title: '新世纪Cycles渲染',
    description: '使用Cycles渲染引擎创作的高质量3D场景，展现先进的光照和材质技术。',
    image: '/images/新世纪Cycles.webp',
    category: '3D渲染',
    date: '2024-07',
    technologies: ['Blender', 'Cycles', 'Substance'],
    links: [
      { label: '艺术画廊', url: 'https://gallery.example.com' }
    ]
  }
];

// 灯箱状态
const lightboxVisible = ref(false);
const currentWorkIndex = ref(0);

// 当前作品
const currentWork = computed(() => works[currentWorkIndex.value]);

// 防抖函数
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// 打开灯箱
const openLightbox = (index) => {
  currentWorkIndex.value = index;
  lightboxVisible.value = true;
  document.body.style.overflow = 'hidden';
};

// 关闭灯箱
const closeLightbox = () => {
  lightboxVisible.value = false;
  document.body.style.overflow = '';
};

// 导航作品（带防抖）
const navigateWork = debounce((direction) => {
  const newIndex = (currentWorkIndex.value + direction + works.length) % works.length;
  currentWorkIndex.value = newIndex;
}, 150);

// 键盘事件监听
onMounted(() => {
  const handleKeydown = (e) => {
    if (lightboxVisible.value) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateWork(-1);
      } else if (e.key === 'ArrowRight') {
        navigateWork(1);
      }
    }
  };

  window.addEventListener('keydown', handleKeydown);
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
});
</script>

<style scoped>
/* 自定义动画 */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 灯箱入场动画 */
.lightbox-enter-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.lightbox-leave-active {
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
}

.lightbox-enter-from .relative.max-w-6xl {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.lightbox-leave-to .relative.max-w-6xl {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}

.lightbox-enter-from .fixed.inset-0 {
  opacity: 0;
}

.lightbox-leave-to .fixed.inset-0 {
  opacity: 0;
}

/* 性能优化：使用transform和opacity进行硬件加速 */
.transform-gpu {
  transform: translateZ(0);
}

/* 减少重绘和重排 */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

/* 图片缩放动画 */
.group:hover img {
  transform: scale(1.05);
}

/* 确保灯箱内容居中 */
.fixed.inset-0 {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .lg\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>