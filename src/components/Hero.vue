<template>
  <div class="hero min-h-screen bg-base-100">
    <div class="hero-content text-center">
      <div class="max-w-4xl">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          引领科技创新，驱动未来变革
        </h1>
        <p class="py-6 text-xl">
          我们致力于通过前沿技术和创新解决方案，帮助企业实现数字化转型，
          提升业务效率，创造更大价值。
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link to="/products" class="btn btn-primary text-primary-content rounded-full px-8">
            立即体验
          </router-link>
          <router-link to="/contact" class="btn btn-outline rounded-full px-8">
            了解更多
          </router-link>
        </div>
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-base-200 p-4 rounded-xl shadow">
            <div class="text-2xl font-bold text-primary">99.9%</div>
            <div class="text-sm text-base-content/70">系统可用性</div>
          </div>
          <div class="bg-base-200 p-4 rounded-xl shadow">
            <div class="text-2xl font-bold text-primary">1000+</div>
            <div class="text-sm text-base-content/70">企业客户</div>
          </div>
          <div class="bg-base-200 p-4 rounded-xl shadow">
            <div class="text-2xl font-bold text-primary">50+</div>
            <div class="text-sm text-base-content/70">国家覆盖</div>
          </div>
          <div class="bg-base-200 p-4 rounded-xl shadow">
            <div class="text-2xl font-bold text-primary">24/7</div>
            <div class="text-sm text-base-content/70">技术支持</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>