<template>
  <div class="py-16 bg-base-100 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h1 class="text-4xl font-bold mb-4">我们的产品</h1>
        <p class="text-base-content/70">
          探索我们创新的科技解决方案，助力您的业务增长和数字化转型
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 产品卡片1 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-br from-primary to-secondary rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">智能数据分析平台</h2>
            <p class="text-base-content/70">
              实时收集、处理和分析企业数据，提供可视化报表和商业洞察，
              帮助企业做出更明智的决策。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products/detail/1" class="btn btn-primary btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>

        <!-- 产品卡片2 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-br from-secondary to-accent rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">云端协作系统</h2>
            <p class="text-base-content/70">
              安全高效的团队协作平台，支持文档共享、实时编辑、视频会议等功能，
              提升团队协作效率。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products/detail/2" class="btn btn-secondary btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>

        <!-- 产品卡片3 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-br from-accent to-neutral rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">企业安全解决方案</h2>
            <p class="text-base-content/70">
              全方位的企业级安全防护体系，包括网络安全、数据加密、身份认证等，
              保障企业信息安全。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products/detail/3" class="btn btn-accent btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>

        <!-- 产品卡片4 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-br from-info to-primary rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">人工智能服务</h2>
            <p class="text-base-content/70">
              基于深度学习和机器学习技术，提供智能客服、图像识别、自然语言处理等AI服务，
              赋能企业智能化升级。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products/detail/4" class="btn btn-info btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>

        <!-- 产品卡片5 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-br from-success to-info rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">物联网平台</h2>
            <p class="text-base-content/70">
              提供设备连接、数据采集、远程控制等物联网核心功能，
              助力企业实现设备智能化管理和运营优化。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products/detail/5" class="btn btn-success btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>

        <!-- 产品卡片6 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-br from-warning to-success rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">区块链解决方案</h2>
            <p class="text-base-content/70">
              基于区块链技术，提供数字身份认证、供应链溯源、智能合约等解决方案，
              构建可信的商业环境。
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products/detail/6" class="btn btn-warning btn-sm rounded-full">了解更多</router-link>
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