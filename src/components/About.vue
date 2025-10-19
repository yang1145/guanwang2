<template>
  <div class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold mb-4">关于我们</h1>
        <div class="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <!-- 公司简介 -->
      <div class="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div class="lg:w-1/2">
          <div class="relative">
            <div class="bg-gradient-to-br from-primary to-secondary rounded-2xl w-full h-96 flex items-center justify-center">
              <div class="text-center text-white p-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 class="text-2xl font-bold">TechCorp 科技有限公司</h3>
                <p class="mt-2 opacity-90">引领科技创新，驱动未来变革</p>
              </div>
            </div>
            <div class="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent to-secondary rounded-2xl w-64 h-64 opacity-80"></div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h2 class="text-3xl font-bold mb-6">引领科技创新，驱动未来变革</h2>
          <p class="text-base-content/80 mb-6 text-lg">
            TechCorp 是一家全球领先的科技创新公司，专注于为企业提供前沿的数字化解决方案。
            我们的团队由来自世界各地的技术专家组成，致力于通过技术创新推动行业发展。
          </p>
          <p class="text-base-content/80 mb-6 text-lg">
            自成立以来，我们已经服务了超过1000家客户，涵盖金融、制造、零售、医疗、教育等多个行业。
            我们始终坚持以客户需求为导向，持续研发创新产品，为客户创造长期价值。
          </p>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="flex items-center">
              <div class="mr-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span class="font-medium">安全可靠</span>
            </div>
            <div class="flex items-center">
              <div class="mr-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="font-medium">技术创新</span>
            </div>
            <div class="flex items-center">
              <div class="mr-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span class="font-medium">客户至上</span>
            </div>
            <div class="flex items-center">
              <div class="mr-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span class="font-medium">数据驱动</span>
            </div>
          </div>
          <router-link to="/products" class="btn btn-primary text-primary-content rounded-full px-8">
            查看更多产品
          </router-link>
        </div>
      </div>

      <!-- 我们的价值观 -->
      <div class="mb-20">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">我们的价值观</h2>
          <p class="text-base-content/70 max-w-2xl mx-auto">
            我们的价值观是我们一切行动的基石，指导我们如何与客户、合作伙伴和彼此互动。
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card bg-base-200 shadow-lg">
            <div class="card-body items-center text-center">
              <div class="bg-primary/10 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="card-title">创新驱动</h3>
              <p class="text-base-content/70">
                我们不断探索新技术，推动产品和服务的创新，为客户创造独特价值。
              </p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-lg">
            <div class="card-body items-center text-center">
              <div class="bg-secondary/10 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 class="card-title">客户至上</h3>
              <p class="text-base-content/70">
                我们始终以客户需求为中心，提供超出期望的解决方案和服务体验。
              </p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-lg">
            <div class="card-body items-center text-center">
              <div class="bg-accent/10 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="card-title">诚信为本</h3>
              <p class="text-base-content/70">
                我们坚持诚实守信的原则，建立长期可靠的合作伙伴关系。
              </p>
            </div>
          </div>
          <div class="card bg-base-200 shadow-lg">
            <div class="card-body items-center text-center">
              <div class="bg-info/10 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="card-title">卓越执行</h3>
              <p class="text-base-content/70">
                我们追求卓越，以专业的态度和高效的执行力交付每一个项目。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 团队介绍 -->
      <div class="mb-20">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">核心团队</h2>
          <p class="text-base-content/70 max-w-2xl mx-auto">
            我们的团队由来自世界各地的顶尖技术专家组成，拥有丰富的行业经验和创新能力。
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="flex flex-col items-center text-center">
            <div class="avatar mb-4">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.dicebear.com/6.x/initials/svg?seed=张伟&backgroundColor=ffdfbf" alt="张伟" />
              </div>
            </div>
            <h3 class="text-xl font-bold">张伟</h3>
            <p class="text-primary mb-2">创始人兼CEO</p>
            <p class="text-base-content/70 text-sm">
              拥有15年科技行业经验，曾就职于多家知名科技公司
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="avatar mb-4">
              <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src="https://api.dicebear.com/6.x/initials/svg?seed=李娜&backgroundColor=d1d4f9" alt="李娜" />
              </div>
            </div>
            <h3 class="text-xl font-bold">李娜</h3>
            <p class="text-secondary mb-2">首席技术官</p>
            <p class="text-base-content/70 text-sm">
              技术专家，专注于人工智能和大数据领域
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="avatar mb-4">
              <div class="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                <img src="https://api.dicebear.com/6.x/initials/svg?seed=王强&backgroundColor=c0aede" alt="王强" />
              </div>
            </div>
            <h3 class="text-xl font-bold">王强</h3>
            <p class="text-accent mb-2">产品总监</p>
            <p class="text-base-content/70 text-sm">
              产品设计专家，拥有丰富的用户体验设计经验
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="avatar mb-4">
              <div class="w-24 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                <img src="https://api.dicebear.com/6.x/initials/svg?seed=赵敏&backgroundColor=ffd5dc" alt="赵敏" />
              </div>
            </div>
            <h3 class="text-xl font-bold">赵敏</h3>
            <p class="text-info mb-2">市场总监</p>
            <p class="text-base-content/70 text-sm">
              市场营销专家，擅长品牌建设和客户关系管理
            </p>
          </div>
        </div>
      </div>

      <!-- 公司数据 -->
      <div class="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">1000+</div>
            <div class="text-primary-content/80">企业客户</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">50+</div>
            <div class="text-primary-content/80">国家覆盖</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">200+</div>
            <div class="text-primary-content/80">技术专家</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">99.9%</div>
            <div class="text-primary-content/80">系统可用性</div>
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