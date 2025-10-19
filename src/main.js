import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 初始化主题
const initTheme = () => {
  // 检查本地存储的主题设置
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    // 使用本地存储的主题
    document.documentElement.setAttribute('data-theme', savedTheme)
  } else {
    // 检查系统主题偏好
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }
}

// 在应用启动前初始化主题
initTheme()

createApp(App).use(router).mount('#app')