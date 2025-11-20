<template>
  <div class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold mb-4">新闻动态</h2>
        <p class="text-base-content/70">
          了解我们的最新动态、行业洞察和技术趋势
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
          <span>加载新闻时出错: {{ error }}</span>
        </div>
      </div>

      <!-- 新闻列表 -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="news in newsList" 
          :key="news.id" 
          class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-r from-primary to-secondary rounded-xl w-full h-48 flex items-center justify-center">
              <span class="text-white text-4xl font-bold">{{ news.title.charAt(0) }}</span>
            </div>
          </figure>
          <div class="card-body">
            <div class="flex flex-wrap gap-2 mb-3">
              <div class="badge badge-primary">新闻</div>
              <div class="badge badge-outline">{{ formatDate(news.created_at) }}</div>
            </div>
            <h3 class="card-title">{{ news.title }}</h3>
            <p class="text-base-content/70">
              {{ news.content.substring(0, 80) }}{{ news.content.length > 80 ? '...' : '' }}
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link :to="`/news/detail/${news.id}`" class="btn btn-primary btn-sm rounded-full">阅读更多</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link to="/news" class="btn btn-outline btn-primary rounded-full px-8">
          查看所有新闻
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const newsList = ref([])
const loading = ref(false)
const error = ref(null)

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '未知日期'
  const date = new Date(dateString)
  return isNaN(date.getTime()) ? '未知日期' : date.toLocaleDateString('zh-CN')
}

// 获取新闻列表
const fetchNews = async () => {
  loading.value = true
  error.value = null
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/news?limit=3`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    newsList.value = result.data
  } catch (err) {
    console.error('获取新闻列表失败:', err)
    error.value = err.message || '获取新闻列表失败'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchNews()
})
</script>

<style scoped>
</style>