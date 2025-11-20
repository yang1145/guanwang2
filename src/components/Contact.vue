<template>
  <div class="py-16 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold mb-4">联系我们</h2>
        <p class="text-base-content/70">
          如果您有任何问题或需要了解我们的产品和服务，请随时与我们联系
        </p>
      </div>
      
      <div class="flex flex-col lg:flex-row gap-12">
        <div class="lg:w-1/2">
          <div class="bg-base-100 rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold mb-6">发送消息</h3>
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block mb-2">姓名</label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    placeholder="您的姓名" 
                    class="input input-bordered w-full"
                    :class="{ 'input-error': errors.name }"
                    required
                  >
                  <label class="label" v-if="errors.name">
                    <span class="label-text-alt text-error">{{ errors.name }}</span>
                  </label>
                </div>
                <div>
                  <label class="block mb-2">邮箱</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    placeholder="您的邮箱" 
                    class="input input-bordered w-full"
                    :class="{ 'input-error': errors.email }"
                    required
                  >
                  <label class="label" v-if="errors.email">
                    <span class="label-text-alt text-error">{{ errors.email }}</span>
                  </label>
                </div>
              </div>
              <div class="mb-6">
                <label class="block mb-2">主题</label>
                <input 
                  v-model="form.subject" 
                  type="text" 
                  placeholder="消息主题" 
                  class="input input-bordered w-full"
                >
              </div>
              <div class="mb-6">
                <label class="block mb-2">消息</label>
                <textarea 
                  v-model="form.message" 
                  placeholder="请输入您的消息" 
                  class="textarea textarea-bordered w-full" 
                  rows="4"
                  :class="{ 'textarea-error': errors.message }"
                  required
                ></textarea>
                <label class="label" v-if="errors.message">
                  <span class="label-text-alt text-error">{{ errors.message }}</span>
                </label>
              </div>
              <button 
                type="submit" 
                class="btn btn-primary text-primary-content rounded-full w-full"
                :class="{ 'loading': isSubmitting }"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? '发送中...' : '发送消息' }}
              </button>
              
              <!-- 成功提示 -->
              <div v-if="submitStatus === 'success'" class="alert alert-success shadow-lg mt-6">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>消息已成功发送！我们会尽快与您联系。</span>
                </div>
              </div>
              
              <!-- 错误提示 -->
              <div v-if="submitStatus === 'error'" class="alert alert-error shadow-lg mt-6">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>发送消息时出错，请稍后再试。</span>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div class="lg:w-1/2">
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">联系电话</h4>
                <p class="text-base-content/70">+86 400-123-4567</p>
                <p class="text-base-content/70">+86 010-12345678</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-secondary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">邮箱地址</h4>
                <p class="text-base-content/70">info@techcorp.com</p>
                <p class="text-base-content/70">support@techcorp.com</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-accent/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">公司地址</h4>
                <p class="text-base-content/70">北京市朝阳区科技园区创新大厦18层</p>
                <p class="text-base-content/70">上海市浦东新区陆家嘴金融中心8层</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitStatus = ref('')

// 表单验证函数
const validateForm = () => {
  // 清除之前的错误
  Object.keys(errors).forEach(key => {
    delete errors[key]
  })
  
  // 验证必填字段
  if (!form.name.trim()) {
    errors.name = '请输入您的姓名'
  }
  
  if (!form.email.trim()) {
    errors.email = '请输入您的邮箱'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = '请输入有效的邮箱地址'
  }
  
  if (!form.message.trim()) {
    errors.message = '请输入您的消息'
  }
  
  // 返回是否有错误
  return Object.keys(errors).length === 0
}

// 提交表单
const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  submitStatus.value = ''
  
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: undefined, // 主页联系表单没有电话字段
        message: form.message
      })
    })
    
    if (response.ok) {
      // 成功提交
      submitStatus.value = 'success'
      // 重置表单
      Object.assign(form, {
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } else {
      // 处理错误响应
      submitStatus.value = 'error'
    }
  } catch (error) {
    console.error('提交表单时出错:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
</style>