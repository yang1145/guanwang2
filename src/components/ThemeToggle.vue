<template>
  <div class="flex items-center">
    <button 
      @click="toggleTheme" 
      class="btn btn-ghost btn-circle"
      :aria-label="currentTheme === 'dark' ? '切换到明亮模式' : '切换到暗黑模式'"
    >
      <!-- 明亮模式图标 -->
      <svg 
        v-if="currentTheme === 'light'" 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
        />
      </svg>
      
      <!-- 暗黑模式图标 -->
      <svg 
        v-else 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 当前主题状态
const currentTheme = ref('light')

// 切换主题
const toggleTheme = () => {
  if (currentTheme.value === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    currentTheme.value = 'light'
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    currentTheme.value = 'dark'
  }
}

// 检查系统主题偏好
const checkSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

// 初始化主题
onMounted(() => {
  // 检查本地存储的主题设置
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    // 使用本地存储的主题
    currentTheme.value = savedTheme
    document.documentElement.setAttribute('data-theme', savedTheme)
  } else {
    // 使用系统主题偏好
    const systemTheme = checkSystemTheme()
    currentTheme.value = systemTheme
    document.documentElement.setAttribute('data-theme', systemTheme)
  }
  
  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // 只有在用户没有手动设置主题时才跟随系统变化
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light'
      currentTheme.value = newTheme
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  })
})
</script>

<style scoped>
</style>