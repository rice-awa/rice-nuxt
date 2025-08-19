<template>
  <footer class="bg-gray-900 text-gray-400 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 资源 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">资源</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/support" class="hover:text-white">支持</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white">博客</NuxtLink></li>
            <li><NuxtLink to="/security" class="hover:text-white">安全</NuxtLink></li>
          </ul>
        </div>

        <!-- 开发人员 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">开发人员</h3>
          <ul class="space-y-2">
            <li><a href="https://github.com/rice-awa/rice-nuxt" class="hover:text-white" target="_blank">Github</a></li>
            <li><NuxtLink to="/teams-api" class="hover:text-white">Teams API</NuxtLink></li>
            <li><NuxtLink to="/docs" class="hover:text-white">开发指南</NuxtLink></li>
          </ul>
        </div>

        <!-- 关于 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">关于</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="hover:text-white">关于我们</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm">© 2025 全栈信息处理协会 保留所有权利</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer组件不需要额外的逻辑
</script>