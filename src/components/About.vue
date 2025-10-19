<template>
  <div class="py-16" id="about">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2">
          <div class="relative">
            <div class="bg-gradient-to-br from-primary to-secondary rounded-2xl w-full h-96"></div>
            <div class="absolute -bottom-6 -right-6 bg-gradient-to-br from-secondary to-accent rounded-2xl w-64 h-64"></div>
            <div class="absolute -top-6 -left-6 bg-gradient-to-br from-accent to-neutral rounded-2xl w-48 h-48"></div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h2 class="text-3xl font-bold mb-6">关于我们</h2>
          <p class="text-base-content/70 mb-6">
            TechCorp 是一家全球领先的科技创新公司，专注于为企业提供前沿的数字化解决方案。
            我们的团队由来自世界各地的技术专家组成，致力于通过技术创新推动行业发展。
          </p>
          <p class="text-base-content/70 mb-6">
            自成立以来，我们已经服务了超过1000家客户，涵盖金融、制造、零售、医疗等多个行业。
            我们始终坚持以客户需求为导向，持续研发创新产品，为客户创造长期价值。
          </p>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="flex items-center">
              <div class="mr-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>技术创新</span>
            </div>
            <div class="flex items-center">
              <div class="mr-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>客户至上</span>
            </div>
            <div class="flex items-center">
              <div class="mr-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>专业团队</span>
            </div>
            <div class="flex items-center">
              <div class="mr-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>持续发展</span>
            </div>
          </div>
          <router-link to="/products" class="btn btn-primary text-primary-content rounded-full">
            查看更多
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>