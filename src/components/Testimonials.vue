<template>
  <div class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold mb-4">客户评价</h2>
        <p class="text-base-content/70">
          听听我们的客户怎么说
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
          <span>加载评价时出错: {{ error }}</span>
        </div>
      </div>

      <!-- 评价列表 -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id" 
          class="card bg-base-200 shadow-xl"
        >
          <div class="card-body">
            <div class="flex items-center mb-4">
              <div class="avatar mr-4">
                <div class="w-12 rounded-full">
                  <img :src="`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.name}&backgroundColor=ffdfbf`" :alt="testimonial.name" />
                </div>
              </div>
              <div>
                <h3 class="font-bold">{{ testimonial.name }}</h3>
                <div class="text-sm text-base-content/70">{{ testimonial.position }}</div>
              </div>
            </div>
            <div class="flex mb-4">
              <svg 
                v-for="star in 5" 
                :key="star"
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 text-yellow-400" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-base-content/80">
              {{ testimonial.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 在实际项目中，这些评价数据应该从后端获取
// 目前我们使用模拟数据，因为API文档中没有提供评价相关的接口
const testimonials = ref([
  {
    id: 1,
    name: "张明",
    position: "ABC科技有限公司 CEO",
    content: "TechCorp的智能数据分析平台极大地提升了我们的业务决策效率。通过实时数据洞察，我们能够更快地响应市场变化，业务增长了30%。"
  },
  {
    id: 2,
    name: "李华",
    position: "XYZ制造集团 CTO",
    content: "企业安全解决方案为我们的数据提供了强有力的保护。部署简单，性能稳定，TechCorp的技术支持团队也非常专业和及时。"
  },
  {
    id: 3,
    name: "王丽",
    position: "DEF零售连锁 数据分析总监",
    content: "云端协作系统彻底改变了我们团队的工作方式。即使在全球不同地区办公，我们也能高效协同，项目交付时间缩短了40%。"
  }
])

const loading = ref(false)
const error = ref(null)

// 在实际项目中，这里应该从后端获取数据
// 由于API文档中没有提供评价相关的接口，我们使用模拟数据
onMounted(() => {
  // 模拟API调用延迟
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style scoped>
</style>