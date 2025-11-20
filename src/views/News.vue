<template>
  <div class="py-16 bg-base-100 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h1 class="text-4xl font-bold mb-4">新闻资讯</h1>
        <p class="text-base-content/70">
          了解我们的最新动态、行业洞察和技术趋势
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="space-y-8">
            <!-- 加载状态 -->
            <div v-if="loading" class="flex justify-center items-center h-32">
              <div class="loading loading-spinner loading-lg"></div>
            </div>

            <!-- 错误状态 -->
            <div v-else-if="error" class="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>加载新闻时出错: {{ error }}</span>
              </div>
            </div>

            <!-- 新闻列表 -->
            <div v-else>
              <div 
                v-for="news in newsList" 
                :key="news.id" 
                class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <figure class="px-4 pt-4">
                  <div class="bg-gradient-to-r from-primary to-secondary rounded-xl w-full h-64 flex items-center justify-center">
                    <span class="text-white text-4xl font-bold">{{ news.title.charAt(0) }}</span>
                  </div>
                </figure>
                <div class="card-body">
                  <div class="flex flex-wrap gap-2 mb-3">
                    <div class="badge badge-primary">新闻</div>
                    <div class="badge badge-outline">{{ formatDate(news.created_at) }}</div>
                  </div>
                  <h2 class="card-title">{{ news.title }}</h2>
                  <p class="text-base-content/70">
                    {{ news.content.substring(0, 100) }}{{ news.content.length > 100 ? '...' : '' }}
                  </p>
                  <div class="card-actions justify-end mt-4">
                    <router-link :to="`/news/detail/${news.id}`" class="btn btn-primary btn-sm rounded-full">阅读更多</router-link>
                  </div>
                </div>
              </div>

              <!-- 分页 -->
              <div class="flex justify-center mt-8" v-if="pagination.totalPages > 1">
                <div class="join">
                  <button 
                    class="join-item btn btn-outline"
                    :class="{ 'btn-active': page === pagination.page }"
                    v-for="page in pagination.totalPages" 
                    :key="page"
                    @click="fetchNews(page)"
                  >
                    {{ page }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="space-y-8">
            <!-- 分类 -->
            <div class="card bg-base-200 shadow">
              <div class="card-body">
                <h2 class="card-title mb-4">分类</h2>
                <ul class="space-y-2">
                  <li><a class="link link-hover flex justify-between"><span>产品发布</span> <span class="badge badge-sm">12</span></a></li>
                  <li><a class="link link-hover flex justify-between"><span>行业动态</span> <span class="badge badge-sm">8</span></a></li>
                  <li><a class="link link-hover flex justify-between"><span>技术分享</span> <span class="badge badge-sm">15</span></a></li>
                  <li><a class="link link-hover flex justify-between"><span>企业新闻</span> <span class="badge badge-sm">5</span></a></li>
                  <li><a class="link link-hover flex justify-between"><span>案例研究</span> <span class="badge badge-sm">7</span></a></li>
                </ul>
              </div>
            </div>

            <!-- 标签 -->
            <div class="card bg-base-200 shadow">
              <div class="card-body">
                <h2 class="card-title mb-4">标签</h2>
                <div class="flex flex-wrap gap-2">
                  <div class="badge badge-outline">AI</div>
                  <div class="badge badge-outline">云计算</div>
                  <div class="badge badge-outline">大数据</div>
                  <div class="badge badge-outline">安全</div>
                  <div class="badge badge-outline">物联网</div>
                  <div class="badge badge-outline">区块链</div>
                  <div class="badge badge-outline">数字化转型</div>
                  <div class="badge badge-outline">创新</div>
                </div>
              </div>
            </div>

            <!-- 热门文章 -->
            <div class="card bg-base-200 shadow">
              <div class="card-body">
                <h2 class="card-title mb-4">热门文章</h2>
                <!-- 加载状态 -->
                <div v-if="popularLoading" class="flex justify-center items-center h-20">
                  <div class="loading loading-spinner loading-sm"></div>
                </div>
                
                <!-- 错误状态 -->
                <div v-else-if="popularError" class="text-error text-sm">
                  加载热门文章失败
                </div>
                
                <!-- 热门文章列表 -->
                <ul v-else class="space-y-4">
                  <li v-for="news in popularNews" :key="news.id">
                    <router-link :to="`/news/detail/${news.id}`" class="link link-hover">
                      <div class="font-semibold">{{ news.title }}</div>
                      <div class="text-sm text-base-content/70">{{ formatDate(news.created_at) }}</div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const newsList = ref([])
const popularNews = ref([])
const loading = ref(false)
const popularLoading = ref(false)
const error = ref(null)
const popularError = ref(null)
const pagination = ref({
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0
})

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '未知日期'
  const date = new Date(dateString)
  return isNaN(date.getTime()) ? '未知日期' : date.toLocaleDateString('zh-CN')
}

// 获取新闻列表
const fetchNews = async (page = 1) => {
  loading.value = true
  error.value = null
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/news?page=${page}&limit=10`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    newsList.value = result.data
    pagination.value = result.pagination
  } catch (err) {
    console.error('获取新闻列表失败:', err)
    error.value = err.message || '获取新闻列表失败'
  } finally {
    loading.value = false
  }
}

// 获取热门新闻
const fetchPopularNews = async () => {
  popularLoading.value = true
  popularError.value = null
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/news/popular`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    popularNews.value = result.data.slice(0, 3) // 只取前3条
  } catch (err) {
    console.error('获取热门新闻失败:', err)
    popularError.value = err.message || '获取热门新闻失败'
  } finally {
    popularLoading.value = false
  }
}

onMounted(() => {
  fetchNews()
  fetchPopularNews()
})
</script>

<style scoped>
</style>