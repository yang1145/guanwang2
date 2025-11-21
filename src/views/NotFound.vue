<template>
  <div class="min-h-screen flex items-center justify-center bg-base-100">
    <div class="text-center max-w-2xl mx-auto px-4">
      <div class="mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 mx-auto text-primary/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 class="text-5xl font-bold mb-4">404</h1>
      <h2 class="text-3xl font-semibold mb-6">页面未找到</h2>
      <p class="text-xl text-base-content/70 mb-8">
        抱歉，您访问的页面不存在或已被移除。
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/" class="btn btn-primary btn-lg rounded-full">
          返回首页
        </router-link>
        <router-link to="/contact" class="btn btn-outline btn-lg rounded-full">
          联系我们
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>