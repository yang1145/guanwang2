<template>
  <footer class="footer footer-center p-10 bg-base-300 text-base-content">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="text-left">
          <div class="text-2xl font-bold mb-4">
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {{ siteConfig?.company_name || 'TechCorp' }}
            </span>
          </div>
          <p class="mb-4">
            {{ siteConfig?.company_description || '引领科技创新，驱动未来变革。我们致力于为企业提供前沿的数字化解决方案。' }}
          </p>
          <div class="flex space-x-4">
            <a class="cursor-pointer hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a class="cursor-pointer hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a class="cursor-pointer hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a class="cursor-pointer hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        
        <div class="text-left">
          <h3 class="text-lg font-bold mb-4">产品服务</h3>
          <ul class="space-y-2">
            <li><a class="link link-hover">数据分析平台</a></li>
            <li><a class="link link-hover">云端协作系统</a></li>
            <li><a class="link link-hover">企业安全解决方案</a></li>
            <li><a class="link link-hover">人工智能服务</a></li>
            <li><a class="link link-hover">物联网平台</a></li>
          </ul>
        </div>
        
        <div class="text-left">
          <h3 class="text-lg font-bold mb-4">关于我们</h3>
          <ul class="space-y-2">
            <li><a class="link link-hover">公司简介</a></li>
            <li><a class="link link-hover">企业文化</a></li>
            <li><a class="link link-hover">发展历程</a></li>
            <li><a class="link link-hover">团队介绍</a></li>
            <li><a class="link link-hover">招聘信息</a></li>
          </ul>
        </div>
        
        <div class="text-left">
          <h3 class="text-lg font-bold mb-4">支持服务</h3>
          <ul class="space-y-2">
            <li><a class="link link-hover">帮助中心</a></li>
            <li><a class="link link-hover">技术支持</a></li>
            <li><a class="link link-hover">在线客服</a></li>
            <li><a class="link link-hover">合作伙伴</a></li>
            <li><a class="link link-hover">联系我们</a></li>
          </ul>
        </div>
      </div>
      
      <div class="divider mt-10 mb-6"></div>
      
      <!-- 版权信息 -->
      <div class="text-center mb-4">
        <p>{{ siteConfig?.copyright_info || `© ${new Date().getFullYear()} ${siteConfig?.company_name || 'TechCorp 科技有限公司'}. 保留所有权利.` }}</p>
      </div>
      
      <!-- 链接信息 -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
        <a class="link link-hover">隐私政策</a>
        <a class="link link-hover">服务条款</a>
        <a class="link link-hover">网站地图</a>
      </div>
      
      <!-- 备案信息 -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-base-content/70">
        <div v-if="siteConfig?.icp_number">
          <a :href="'https://beian.miit.gov.cn/'" target="_blank" class="link link-hover" rel="noopener noreferrer">
            {{ siteConfig.icp_number }}
          </a>
        </div>
        <div v-if="siteConfig?.police_number">
          <a :href="'http://www.beian.gov.cn/portal/registerSystemInfo'" target="_blank" class="link link-hover" rel="noopener noreferrer">
            {{ siteConfig.police_number }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchSiteConfig } from '@/services/siteConfig'

const siteConfig = ref(null)

// 获取网站配置信息
const loadSiteConfig = async () => {
  try {
    siteConfig.value = await fetchSiteConfig()
  } catch (error) {
    console.error('加载网站配置失败:', error)
  }
}

onMounted(() => {
  loadSiteConfig()
})
</script>

<style scoped>
</style>