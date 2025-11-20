<template>
  <div class="py-16 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold mb-4">合作伙伴</h2>
        <p class="text-base-content/70">
          我们与全球领先的企业和机构建立合作关系，共同推动技术创新
        </p>
      </div>

      <!-- 在实际项目中，合作伙伴的logo应该从后端获取 -->
      <!-- 由于API文档中没有提供相关接口，我们使用占位符 -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
        <div class="flex justify-center">
          <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-transparent">
            Logo 1
          </div>
        </div>
        <div class="flex justify-center">
          <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-transparent">
            Logo 2
          </div>
        </div>
        <div class="flex justify-center">
          <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-transparent">
            Logo 3
          </div>
        </div>
        <div class="flex justify-center">
          <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-transparent">
            Logo 4
          </div>
        </div>
        <div class="flex justify-center">
          <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-transparent">
            Logo 5
          </div>
        </div>
        <div class="flex justify-center">
          <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-transparent">
            Logo 6
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div class="card bg-base-100 shadow">
          <div class="card-body items-center text-center">
            <div class="bg-primary/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="card-title text-lg">全球覆盖</h3>
            <p class="text-base-content/70">服务网络遍布50多个国家和地区</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow">
          <div class="card-body items-center text-center">
            <div class="bg-secondary/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="card-title text-lg">安全可靠</h3>
            <p class="text-base-content/70">通过多项国际安全认证</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow">
          <div class="card-body items-center text-center">
            <div class="bg-accent/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="card-title text-lg">技术创新</h3>
            <p class="text-base-content/70">持续研发投入占营收的15%以上</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow">
          <div class="card-body items-center text-center">
            <div class="bg-info/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="card-title text-lg">客户至上</h3>
            <p class="text-base-content/70">99%的客户满意度评价</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 在实际项目中，合作伙伴数据应该从后端获取
// 由于API文档中没有提供相关接口，我们使用静态内容
</script>

<style scoped>
</style>