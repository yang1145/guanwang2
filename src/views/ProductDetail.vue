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
      
      <!-- 加载状态 -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="loading loading-spinner loading-lg"></div>
      </div>
      
      <!-- 错误状态 -->
      <div v-else-if="error" class="alert alert-error shadow-lg mb-8">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>加载产品详情时出错: {{ error }}</span>
        </div>
      </div>
      
      <!-- 产品详情 -->
      <div v-else-if="product" class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
              <div class="bg-gradient-to-br from-primary to-secondary rounded-xl w-full h-96 flex items-center justify-center">
                <span class="text-white text-4xl font-bold">{{ product.name.charAt(0) }}</span>
              </div>
            </div>
            <div class="md:w-1/2">
              <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
              <p class="text-base-content/70 mb-6">{{ product.description }}</p>
              
              <div class="mb-6" v-if="product.category">
                <h2 class="text-xl font-bold mb-3">产品类别</h2>
                <div class="badge badge-primary badge-outline">{{ product.category }}</div>
              </div>
              
              <div class="mb-6">
                <h2 class="text-xl font-bold mb-3">创建时间</h2>
                <p>{{ formatDate(product.created_at) }}</p>
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
                {{ product.description || '暂无详细描述' }}
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
const product = ref(null)
const loading = ref(false)
const error = ref(null)

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '未知'
  const date = new Date(dateString)
  return isNaN(date.getTime()) ? '未知' : date.toLocaleDateString('zh-CN')
}

// 获取产品详情
const fetchProduct = async (id) => {
  loading.value = true
  error.value = null
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/products/${id})
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('产品不存在')
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    }
    
    const result = await response.json()
    product.value = result.data
  } catch (err) {
    console.error('获取产品详情失败:', err)
    error.value = err.message || '获取产品详情失败'
  } finally {
    loading.value = false
  }
}

// 实际项目中，这里会根据路由参数从API获取具体产品信息
onMounted(() => {
  // 根据路由参数获取产品详情
  const productId = route.params.id
  if (productId) {
    fetchProduct(productId)
  } else {
    error.value = '无效的产品ID'
  }
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