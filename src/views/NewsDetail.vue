<template>
  <div class="py-16 bg-base-100 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <router-link to="/news" class="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回新闻列表
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
          <span>加载新闻详情时出错: {{ error }}</span>
        </div>
      </div>
      
      <!-- 新闻详情 -->
      <div v-else-if="news" class="card bg-base-200 shadow-xl">
        <figure class="px-4 pt-4">
          <div class="bg-gradient-to-r from-primary to-secondary rounded-xl w-full h-96 flex items-center justify-center">
            <span class="text-white text-6xl font-bold">{{ news.title.charAt(0) }}</span>
          </div>
        </figure>
        <div class="card-body">
          <div class="flex flex-wrap gap-2 mb-4">
            <div class="badge badge-primary">新闻</div>
            <div class="badge badge-outline">{{ formatDate(news.created_at) }}</div>
          </div>
          
          <h1 class="text-3xl font-bold mb-4">{{ news.title }}</h1>
          
          <div class="flex items-center text-base-content/70 mb-6">
            <div class="avatar mr-3">
              <div class="w-10 rounded-full">
                <img src="https://api.dicebear.com/6.x/initials/svg?seed={{ news.author }}" alt="Author" />
              </div>
            </div>
            <div>
              <div class="font-medium">{{ news.author }}</div>
              <div class="text-sm">TechCorp 编辑部</div>
            </div>
          </div>
          
          <div class="prose max-w-none">
            <p class="text-base-content/80 mb-4">
              {{ news.content }}
            </p>
          </div>
          
          <div class="mt-8 pt-8 border-t border-base-300">
            <div class="flex flex-wrap gap-2 mb-6">
              <div class="badge badge-outline">新闻</div>
              <div class="badge badge-outline">TechCorp</div>
            </div>
            
            <div class="flex justify-between items-center">
              <div class="text-base-content/70">
                作者：{{ news.author }}
              </div>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {{ news.views }} 阅读
                </button>
                <button class="btn btn-sm btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  分享
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">相关文章</h2>
        <!-- 加载状态 -->
        <div v-if="relatedLoading" class="flex justify-center items-center h-32">
          <div class="loading loading-spinner loading-lg"></div>
        </div>
        
        <!-- 错误状态 -->
        <div v-else-if="relatedError" class="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>加载相关文章时出错: {{ relatedError }}</span>
          </div>
        </div>
        
        <!-- 相关文章列表 -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="article in relatedArticles" 
            :key="article.id" 
            class="card bg-base-200 shadow"
          >
            <figure class="px-4 pt-4">
              <div class="bg-gradient-to-br from-secondary to-accent rounded-xl w-full h-32 flex items-center justify-center">
                <span class="text-white text-2xl font-bold">{{ article.title.charAt(0) }}</span>
              </div>
            </figure>
            <div class="card-body">
              <h3 class="card-title text-lg">{{ article.title }}</h3>
              <div class="flex justify-between text-sm text-base-content/70">
                <span>{{ formatDate(article.created_at) }}</span>
                <span>{{ article.views }} 阅读</span>
              </div>
              <div class="card-actions justify-end">
                <router-link :to="`/news/detail/${article.id}`" class="btn btn-sm btn-outline">阅读更多</router-link>
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
import { useRoute } from 'vue-router'

const route = useRoute()
const news = ref(null)
const relatedArticles = ref([])
const loading = ref(false)
const relatedLoading = ref(false)
const error = ref(null)
const relatedError = ref(null)

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '未知日期'
  const date = new Date(dateString)
  return isNaN(date.getTime()) ? '未知日期' : date.toLocaleDateString('zh-CN')
}

// 获取新闻详情
const fetchNewsDetail = async (id) => {
  loading.value = true
  error.value = null
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/news/${id}`)
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('新闻不存在')
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    }
    
    const result = await response.json()
    news.value = result.data
  } catch (err) {
    console.error('获取新闻详情失败:', err)
    error.value = err.message || '获取新闻详情失败'
  } finally {
    loading.value = false
  }
}

// 获取相关文章（获取其他新闻作为相关文章）
const fetchRelatedArticles = async () => {
  relatedLoading.value = true
  relatedError.value = null
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/news?limit=3`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    relatedArticles.value = result.data
  } catch (err) {
    console.error('获取相关文章失败:', err)
    relatedError.value = err.message || '获取相关文章失败'
  } finally {
    relatedLoading.value = false
  }
}

// 实际项目中，这里会根据路由参数从API获取具体新闻信息
onMounted(() => {
  // 根据路由参数获取新闻详情
  const newsId = route.params.id
  if (newsId) {
    fetchNewsDetail(newsId)
    fetchRelatedArticles()
  } else {
    error.value = '无效的新闻ID'
  }
})
</script>

<style scoped>
.prose {
  color: inherit;
}

.prose p {
  margin-bottom: 1rem;
}

.prose h2 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.prose h3 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>