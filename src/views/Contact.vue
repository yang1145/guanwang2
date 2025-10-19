<template>
  <div class="py-16 bg-base-100 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h1 class="text-4xl font-bold mb-4">联系我们</h1>
        <p class="text-base-content/70">
          如果您有任何问题或需要了解我们的产品和服务，请随时与我们联系
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- 联系表单 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-2xl mb-6">发送消息</h2>
            <form class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">姓名</span>
                  </label>
                  <input type="text" placeholder="您的姓名" class="input input-bordered w-full">
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">公司</span>
                  </label>
                  <input type="text" placeholder="您的公司" class="input input-bordered w-full">
                </div>
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text">邮箱</span>
                </label>
                <input type="email" placeholder="您的邮箱" class="input input-bordered w-full">
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text">电话</span>
                </label>
                <input type="tel" placeholder="您的电话" class="input input-bordered w-full">
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text">主题</span>
                </label>
                <select class="select select-bordered w-full">
                  <option disabled selected>选择主题</option>
                  <option>产品咨询</option>
                  <option>技术支持</option>
                  <option>商务合作</option>
                  <option>媒体报道</option>
                  <option>其他</option>
                </select>
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text">消息</span>
                </label>
                <textarea placeholder="请输入您的消息" class="textarea textarea-bordered w-full" rows="4"></textarea>
              </div>
              
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" class="checkbox">
                  <span class="label-text">我同意处理我的个人数据以回复我的请求</span>
                </label>
              </div>
              
              <div class="card-actions justify-end">
                <button class="btn btn-primary text-primary-content rounded-full px-8">发送消息</button>
              </div>
            </form>
          </div>
        </div>

        <!-- 联系信息 -->
        <div>
          <div class="space-y-8">
            <!-- 办公地址 -->
            <div class="card bg-base-200 shadow">
              <div class="card-body">
                <h2 class="card-title mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  办公地址
                </h2>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold">北京总部</h3>
                      <p class="text-base-content/70">北京市朝阳区科技园区创新大厦18层</p>
                      <p class="text-base-content/70">邮编: 100000</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-secondary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold">上海分公司</h3>
                      <p class="text-base-content/70">上海市浦东新区陆家嘴金融中心8层</p>
                      <p class="text-base-content/70">邮编: 200000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 联系方式 -->
            <div class="card bg-base-200 shadow">
              <div class="card-body">
                <h2 class="card-title mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  联系方式
                </h2>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <div class="bg-primary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold">联系电话</h3>
                      <p class="text-base-content/70">+86 400-123-4567 (全国服务热线)</p>
                      <p class="text-base-content/70">+86 010-12345678 (北京总部)</p>
                      <p class="text-base-content/70">+86 021-87654321 (上海分公司)</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <div class="bg-secondary/10 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold">邮箱地址</h3>
                      <p class="text-base-content/70">info@techcorp.com (一般咨询)</p>
                      <p class="text-base-content/70">support@techcorp.com (技术支持)</p>
                      <p class="text-base-content/70">sales@techcorp.com (商务合作)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 工作时间 -->
            <div class="card bg-base-200 shadow">
              <div class="card-body">
                <h2 class="card-title mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  工作时间
                </h2>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>周一至周五</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div class="flex justify-between">
                    <span>周六</span>
                    <span>09:00 - 12:00</span>
                  </div>
                  <div class="flex justify-between">
                    <span>周日及法定节假日</span>
                    <span>休息</span>
                  </div>
                </div>
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