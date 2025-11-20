<template>
  <div class="py-16 bg-base-100 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h1 class="text-4xl font-bold mb-4">我们的产品</h1>
        <p class="text-base-content/70">
          探索我们创新的科技解决方案，助力您的业务增长和数字化转型
        </p>
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
          <span>加载产品时出错: {{ error }}</span>
        </div>
      </div>

      <!-- 产品列表 -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <figure class="px-4 pt-4">
            <div 
              class="bg-gradient-to-br from-primary to-secondary rounded-xl w-full h-48 flex items-center justify-center"
            >
              <span class="text-white text-xl font-bold">{{ product.name.charAt(0) }}</span>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ product.name }}</h2>
            <p class="text-base-content/70">
              {{ product.description }}
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link :to="`/products/detail/${product.id}`" class="btn btn-primary btn-sm rounded-full">了解更多</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])
const loading = ref(false)
const error = ref(null)

// 获取产品列表
const fetchProducts = async () => {
  loading.value = true
  error.value = null
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/products`)
    
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