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
            <!-- 新闻卡片1 -->
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <figure class="px-4 pt-4">
                <div class="bg-gradient-to-r from-primary to-secondary rounded-xl w-full h-64"></div>
              </figure>
              <div class="card-body">
                <div class="flex flex-wrap gap-2 mb-3">
                  <div class="badge badge-primary">产品发布</div>
                  <div class="badge badge-outline">2025-10-15</div>
                </div>
                <h2 class="card-title">全新智能数据分析平台V3.0正式发布</h2>
                <p class="text-base-content/70">
                  我们很高兴地宣布，全新智能数据分析平台V3.0正式发布。新版本引入了增强的AI分析功能、
                  更直观的可视化界面以及与主流云平台的深度集成，帮助企业更高效地挖掘数据价值。
                </p>
                <div class="card-actions justify-end mt-4">
                  <router-link to="/news/detail/1" class="btn btn-primary btn-sm rounded-full">阅读更多</router-link>
                </div>
              </div>
            </div>

            <!-- 新闻卡片2 -->
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <figure class="px-4 pt-4">
                <div class="bg-gradient-to-r from-secondary to-accent rounded-xl w-full h-64"></div>
              </figure>
              <div class="card-body">
                <div class="flex flex-wrap gap-2 mb-3">
                  <div class="badge badge-secondary">行业动态</div>
                  <div class="badge badge-outline">2025-10-01</div>
                </div>
                <h2 class="card-title">TechCorp荣获2025年度科技创新企业奖</h2>
                <p class="text-base-content/70">
                  在刚刚结束的2025年度科技创新大会上，TechCorp凭借在企业数字化转型领域的卓越贡献，
                  荣获"年度科技创新企业奖"。这一荣誉是对我们持续创新和客户价值创造的高度认可。
                </p>
                <div class="card-actions justify-end mt-4">
                  <router-link to="/news/detail/2" class="btn btn-secondary btn-sm rounded-full">阅读更多</router-link>
                </div>
              </div>
            </div>

            <!-- 新闻卡片3 -->
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <figure class="px-4 pt-4">
                <div class="bg-gradient-to-r from-accent to-neutral rounded-xl w-full h-64"></div>
              </figure>
              <div class="card-body">
                <div class="flex flex-wrap gap-2 mb-3">
                  <div class="badge badge-accent">技术分享</div>
                  <div class="badge badge-outline">2025-09-20</div>
                </div>
                <h2 class="card-title">构建安全可靠的云端协作系统：我们的实践与思考</h2>
                <p class="text-base-content/70">
                  在数字化办公日益普及的今天，如何确保云端协作系统的安全性和可靠性成为关键挑战。
                  本文分享了我们在设计和实现企业级云端协作系统过程中的经验与思考。
                </p>
                <div class="card-actions justify-end mt-4">
                  <router-link to="/news/detail/3" class="btn btn-accent btn-sm rounded-full">阅读更多</router-link>
                </div>
              </div>
            </div>

            <!-- 分页 -->
            <div class="flex justify-center mt-8">
              <div class="join">
                <button class="join-item btn btn-outline">1</button>
                <button class="join-item btn btn-outline">2</button>
                <button class="join-item btn btn-outline">3</button>
                <button class="join-item btn btn-outline">»</button>
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
                <ul class="space-y-4">
                  <li>
                    <router-link to="/news/detail/4" class="link link-hover">
                      <div class="font-semibold">如何利用数据分析提升企业决策效率</div>
                      <div class="text-sm text-base-content/70">2025-10-10</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/news/detail/3" class="link link-hover">
                      <div class="font-semibold">云端协作系统的安全架构设计</div>
                      <div class="text-sm text-base-content/70">2025-09-28</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/news/detail/5" class="link link-hover">
                      <div class="font-semibold">区块链技术在供应链管理中的应用</div>
                      <div class="text-sm text-base-content/70">2025-09-15</div>
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
</script>

<style scoped>
</style>