<template>
  <div class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold mb-4">新闻动态</h2>
        <p class="text-base-content/70">
          了解我们的最新动态、行业洞察和技术趋势
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 新闻卡片1 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-r from-primary to-secondary rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <div class="flex flex-wrap gap-2 mb-3">
              <div class="badge badge-primary">产品发布</div>
              <div class="badge badge-outline">2025-10-15</div>
            </div>
            <h3 class="card-title">全新智能数据分析平台V3.0正式发布</h3>
            <p class="text-base-content/70">
              我们很高兴地宣布，全新智能数据分析平台V3.0正式发布。新版本引入了增强的AI分析功能...
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/news/detail/1" class="btn btn-primary btn-sm rounded-full">阅读更多</router-link>
            </div>
          </div>
        </div>

        <!-- 新闻卡片2 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-r from-secondary to-accent rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <div class="flex flex-wrap gap-2 mb-3">
              <div class="badge badge-secondary">行业动态</div>
              <div class="badge badge-outline">2025-10-01</div>
            </div>
            <h3 class="card-title">TechCorp荣获2025年度科技创新企业奖</h3>
            <p class="text-base-content/70">
              在刚刚结束的2025年度科技创新大会上，TechCorp凭借在企业数字化转型领域的卓越贡献...
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/news/detail/2" class="btn btn-secondary btn-sm rounded-full">阅读更多</router-link>
            </div>
          </div>
        </div>

        <!-- 新闻卡片3 -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
          <figure class="px-4 pt-4">
            <div class="bg-gradient-to-r from-accent to-neutral rounded-xl w-full h-48"></div>
          </figure>
          <div class="card-body">
            <div class="flex flex-wrap gap-2 mb-3">
              <div class="badge badge-accent">技术分享</div>
              <div class="badge badge-outline">2025-09-20</div>
            </div>
            <h3 class="card-title">构建安全可靠的云端协作系统：我们的实践与思考</h3>
            <p class="text-base-content/70">
              在数字化办公日益普及的今天，如何确保云端协作系统的安全性和可靠性成为关键挑战...
            </p>
            <div class="card-actions justify-end mt-4">
              <router-link to="/news/detail/3" class="btn btn-accent btn-sm rounded-full">阅读更多</router-link>
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
</script>

<style scoped>
</style>