<template>
  <div class="py-16 bg-base-100 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <router-link to="/products" class="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回产品列表
        </router-link>
      </div>
      
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
              <div class="bg-gradient-to-br from-primary to-secondary rounded-xl w-full h-96"></div>
            </div>
            <div class="md:w-1/2">
              <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
              <p class="text-base-content/70 mb-6">{{ product.description }}</p>
              
              <div class="mb-6">
                <h2 class="text-xl font-bold mb-3">主要特性</h2>
                <ul class="list-disc pl-5 space-y-2">
                  <li v-for="(feature, index) in product.features" :key="index" class="text-base-content/80">
                    {{ feature }}
                  </li>
                </ul>
              </div>
              
              <div class="mb-6">
                <h2 class="text-xl font-bold mb-3">技术规格</h2>
                <div class="overflow-x-auto">
                  <table class="table w-full">
                    <tbody>
                      <tr v-for="(spec, key) in product.specs" :key="key">
                        <td class="font-medium">{{ key }}</td>
                        <td>{{ spec }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-4">
                <button class="btn btn-primary text-primary-content">立即试用</button>
                <button class="btn btn-outline">预约演示</button>
                <button class="btn btn-outline">下载白皮书</button>
              </div>
            </div>
          </div>
          
          <div class="mt-12">
            <h2 class="text-2xl font-bold mb-6">产品详情</h2>
            <div class="prose max-w-none">
              <p class="text-base-content/80 mb-4">
                智能数据分析平台是一个全面的企业级解决方案，旨在帮助企业从海量数据中提取有价值的洞察。
                通过我们先进的算法和直观的可视化工具，您的团队可以快速做出基于数据的决策。
              </p>
              <p class="text-base-content/80 mb-4">
                该平台支持多种数据源的集成，包括传统数据库、云存储和实时数据流。强大的数据处理引擎可以在短时间内处理TB级别的数据。
              </p>
              <p class="text-base-content/80">
                我们的平台已经通过了严格的安全审计，符合国际数据保护标准，确保您的数据在处理和存储过程中的安全性。
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card bg-base-200 shadow">
          <div class="card-body items-center text-center">
            <div class="bg-primary/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="card-title text-lg">安全可靠</h3>
            <p class="text-base-content/70">企业级安全保护，确保数据隐私</p>
          </div>
        </div>
        
        <div class="card bg-base-200 shadow">
          <div class="card-body items-center text-center">
            <div class="bg-secondary/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="card-title text-lg">高性能</h3>
            <p class="text-base-content/70">快速处理海量数据，实时响应</p>
          </div>
        </div>
        
        <div class="card bg-base-200 shadow">
          <div class="card-body items-center text-center">
            <div class="bg-accent/10 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 class="card-title text-lg">优质支持</h3>
            <p class="text-base-content/70">专业技术团队，7x24小时支持</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref({
  name: '智能数据分析平台',
  description: '实时收集、处理和分析企业数据，提供可视化报表和商业洞察，帮助企业做出更明智的决策。',
  features: [
    '实时数据处理和分析',
    '丰富的可视化图表和报表',
    '多数据源集成支持',
    'AI驱动的智能洞察',
    '灵活的自定义功能',
    '企业级安全保障'
  ],
  specs: {
    '支持数据源': 'SQL数据库、NoSQL、API、文件等',
    '处理能力': '每秒处理10万+数据点',
    '并发用户': '支持1000+并发用户',
    '部署方式': '云端、本地、混合部署',
    '安全认证': 'ISO 27001, GDPR合规',
    '技术支持': '7x24小时专业技术支持'
  }
})

// 实际项目中，这里会根据路由参数从API获取具体产品信息
onMounted(() => {
  // 模拟根据路由参数获取产品详情
  const productId = route.params.id
  // 这里可以发送请求获取具体产品信息
  console.log('Product ID:', productId)
})
</script>

<style scoped>
/* 添加一些样式优化 */
.prose {
  color: inherit;
}

.prose p {
  margin-bottom: 1rem;
}
</style>