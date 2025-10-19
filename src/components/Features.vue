<template>
  <div class="py-16 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold mb-4">我们的核心产品</h2>
        <p class="text-base-content/70">
          通过创新的技术解决方案，我们帮助企业提升效率、降低成本并加速业务增长
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 产品卡片1 -->
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="card-title">智能数据分析平台</h3>
            <p class="text-base-content/70">
              实时收集、处理和分析企业数据，提供可视化报表和商业洞察，
              帮助企业做出更明智的决策。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products" class="btn btn-primary btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>
        
        <!-- 产品卡片2 -->
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 class="card-title">云端协作系统</h3>
            <p class="text-base-content/70">
              安全高效的团队协作平台，支持文档共享、实时编辑、视频会议等功能，
              提升团队协作效率。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products" class="btn btn-secondary btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>
        
        <!-- 产品卡片3 -->
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="card-title">企业安全解决方案</h3>
            <p class="text-base-content/70">
              全方位的企业级安全防护体系，包括网络安全、数据加密、身份认证等，
              保障企业信息安全。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products" class="btn btn-accent btn-sm rounded-full">了解更多</router-link>
            </div>
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