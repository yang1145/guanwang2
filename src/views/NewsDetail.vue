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
      
      <div class="card bg-base-200 shadow-xl">
        <figure class="px-4 pt-4">
          <div class="bg-gradient-to-r from-primary to-secondary rounded-xl w-full h-96"></div>
        </figure>
        <div class="card-body">
          <div class="flex flex-wrap gap-2 mb-4">
            <div class="badge badge-primary">{{ news.category }}</div>
            <div class="badge badge-outline">{{ news.date }}</div>
          </div>
          
          <h1 class="text-3xl font-bold mb-4">{{ news.title }}</h1>
          
          <div class="flex items-center text-base-content/70 mb-6">
            <div class="avatar mr-3">
              <div class="w-10 rounded-full">
                <img src="https://api.dicebear.com/6.x/initials/svg?seed=Admin" alt="Author" />
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
            
            <p class="text-base-content/80 mb-4">
              在数字化转型的浪潮中，数据分析已成为企业决策的重要支撑。TechCorp 全新发布的智能数据分析平台 V3.0，
              引入了多项创新功能，旨在帮助企业更高效地挖掘数据价值，提升业务决策的准确性和时效性。
            </p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">新功能亮点</h2>
            
            <h3 class="text-xl font-bold mt-6 mb-3">增强的AI分析能力</h3>
            <p class="text-base-content/80 mb-4">
              V3.0 版本集成了最新的机器学习算法，能够自动识别数据中的异常模式和潜在趋势，
              为用户提供更深入的业务洞察。通过自然语言查询功能，用户可以直接用日常语言提问，
              系统会自动转化为数据分析指令并返回可视化结果。
            </p>
            
            <h3 class="text-xl font-bold mt-6 mb-3">更直观的可视化界面</h3>
            <p class="text-base-content/80 mb-4">
              我们重新设计了用户界面，采用更现代化的设计语言和交互方式。新的拖拽式仪表板编辑器
              让用户可以轻松创建个性化的数据展示页面，无需任何编程知识。同时，增加了多种新的图表类型，
              满足不同场景下的数据展示需求。
            </p>
            
            <h3 class="text-xl font-bold mt-6 mb-3">云平台深度集成</h3>
            <p class="text-base-content/80 mb-4">
              新版本支持与主流云平台（包括 AWS、Azure、阿里云等）的无缝集成，用户可以直接连接云端数据源，
              实现跨平台的数据分析。通过优化的数据传输协议，大大提升了云端数据处理的效率和安全性。
            </p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">客户案例</h2>
            <p class="text-base-content/80 mb-4">
              某知名零售企业通过部署我们的智能数据分析平台，成功实现了销售预测准确率提升 30%，
              库存周转率提高 25%，为公司年节省成本超过千万元。该企业IT总监表示：
              "TechCorp的数据分析平台不仅功能强大，而且易于使用，为我们数字化转型提供了强有力的支撑。"
            </p>
            
            <div class="alert shadow-lg mt-8 mb-8">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                  <h3 class="font-bold">产品试用</h3>
                  <div class="text-xs">立即注册即可获得30天免费试用，体验完整的功能特性。</div>
                </div>
              </div>
              <button class="btn btn-sm btn-primary">立即试用</button>
            </div>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">未来发展</h2>
            <p class="text-base-content/80 mb-4">
              TechCorp 将持续投入研发资源，不断提升数据分析平台的智能化水平。未来版本将重点加强
              实时分析能力、增强移动端体验，并进一步拓展行业解决方案，为更多企业客户提供价值。
            </p>
          </div>
          
          <div class="mt-8 pt-8 border-t border-base-300">
            <div class="flex flex-wrap gap-2 mb-6">
              <div class="badge badge-outline">数据分析</div>
              <div class="badge badge-outline">AI技术</div>
              <div class="badge badge-outline">产品发布</div>
              <div class="badge badge-outline">数字化转型</div>
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
                  1.2k
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="article in relatedArticles" :key="article.id" class="card bg-base-200 shadow">
            <figure class="px-4 pt-4">
              <div class="bg-gradient-to-br from-secondary to-accent rounded-xl w-full h-32"></div>
            </figure>
            <div class="card-body">
              <h3 class="card-title text-lg">{{ article.title }}</h3>
              <div class="flex justify-between text-sm text-base-content/70">
                <span>{{ article.date }}</span>
                <span>{{ article.views }} 阅读</span>
              </div>
              <div class="card-actions justify-end">
                <router-link :to="'/news/detail/' + article.id" class="btn btn-sm btn-outline">阅读更多</router-link>
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
const news = ref({
  id: 1,
  title: '全新智能数据分析平台V3.0正式发布',
  category: '产品发布',
  date: '2025-10-15',
  author: '张伟',
  content: '我们很高兴地宣布，全新智能数据分析平台V3.0正式发布。新版本引入了增强的AI分析功能、更直观的可视化界面以及与主流云平台的深度集成，帮助企业更高效地挖掘数据价值。'
})

const relatedArticles = ref([
  {
    id: 2,
    title: 'TechCorp荣获2025年度科技创新企业奖',
    date: '2025-10-01',
    views: '1.5k'
  },
  {
    id: 3,
    title: '构建安全可靠的云端协作系统：我们的实践与思考',
    date: '2025-09-20',
    views: '2.1k'
  },
  {
    id: 4,
    title: '如何利用数据分析提升企业决策效率',
    date: '2025-09-10',
    views: '3.2k'
  }
])

// 实际项目中，这里会根据路由参数从API获取具体新闻信息
onMounted(() => {
  // 模拟根据路由参数获取新闻详情
  const newsId = route.params.id
  // 这里可以发送请求获取具体新闻信息
  console.log('News ID:', newsId)
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