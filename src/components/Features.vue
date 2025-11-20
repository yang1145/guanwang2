<template>
  <div class="py-16 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold mb-4">我们的核心产品</h2>
        <p class="text-base-content/70">
          通过创新的技术解决方案，我们帮助企业提升效率、降低成本并加速业务增长
        </p>
      </div>
      
      <!-- 加载状态 -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="loading loading-spinner loading-lg"></div>
      </div>
      
      <!-- 错误状态 -->
      <div v-else-if="error" class="alert alert-error shadow-lg max-w-2xl mx-auto">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>加载产品时出错: {{ error }}</span>
        </div>
      </div>
      
      <!-- 产品列表 -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div class="card-body">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="text-base-content/70">
              {{ product.description }}
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/products" class="btn btn-primary btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import API_BASE_URL from '@/config/api'

const products = ref([])
const loading = ref(false)
const error = ref(null)

// 获取产品列表
const fetchProducts = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/products?limit=3`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    products.value = result.data
  } catch (err) {
    console.error('获取产品列表失败:', err)
    error.value = err.message || '获取产品列表失败'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<style scoped>
</style>