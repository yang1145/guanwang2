<template>
  <header class="navbar sticky top-0 z-50 backdrop-blur-md bg-opacity-30 bg-base-100/50 border-b border-base-200/30" :class="{ 'shadow-md bg-base-100/80': isScrolled }">
    <div class="container mx-auto px-4">
      <div class="flex-1">
        <router-link to="/" class="btn btn-ghost text-xl font-bold">
          <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TechCorp
          </span>
        </router-link>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal px-1">
          <li><router-link to="/" class="rounded-lg text-base-content hover:bg-base-200/30 backdrop-blur-sm transition-all duration-300 px-4 py-2 font-medium relative nav-link">首页</router-link></li>
          <li><router-link to="/products" class="rounded-lg text-base-content hover:bg-base-200/30 backdrop-blur-sm transition-all duration-300 px-4 py-2 font-medium relative nav-link">产品</router-link></li>
          <li><router-link to="/news" class="rounded-lg text-base-content hover:bg-base-200/30 backdrop-blur-sm transition-all duration-300 px-4 py-2 font-medium relative nav-link">新闻资讯</router-link></li>
          <li><router-link to="/about" class="rounded-lg text-base-content hover:bg-base-200/30 backdrop-blur-sm transition-all duration-300 px-4 py-2 font-medium relative nav-link">关于我们</router-link></li>
          <li><router-link to="/contact" class="rounded-lg text-base-content hover:bg-base-200/30 backdrop-blur-sm transition-all duration-300 px-4 py-2 font-medium relative nav-link">联系我们</router-link></li>
        </ul>
      </div>
      <div class="flex-none flex items-center">
        <div class="hidden lg:flex items-center">
          <button class="btn btn-sm btn-ghost backdrop-blur-sm bg-base-100/30 hover:bg-base-200/50 border-none text-base-content transition-all duration-300 font-medium px-4 relative overflow-hidden lang-btn">
            <span class="relative z-10">中文</span>
          </button>
          <button class="btn btn-sm btn-ghost ml-2 backdrop-blur-sm bg-base-100/30 hover:bg-base-200/50 border-none text-base-content transition-all duration-300 font-medium px-4 relative overflow-hidden lang-btn">
            <span class="relative z-10">EN</span>
          </button>
          <div class="ml-2">
            <ThemeToggle />
          </div>
        </div>
        <div class="lg:hidden flex items-center">
          <ThemeToggle />
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle ml-2 hover:bg-base-200/30 transition-all duration-300">
              <svg xmlns="http://www.w.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow backdrop-blur-lg bg-base-100/80 rounded-box w-52 border border-base-200/30">
              <li><router-link to="/" class="rounded-lg text-base-content hover:bg-base-200/30 transition-all duration-300 px-4 py-2">首页</router-link></li>
              <li><router-link to="/products" class="rounded-lg text-base-content hover:bg-base-200/30 transition-all duration-300 px-4 py-2">产品</router-link></li>
              <li><router-link to="/news" class="rounded-lg text-base-content hover:bg-base-200/30 transition-all duration-300 px-4 py-2">新闻资讯</router-link></li>
              <li><router-link to="/about" class="rounded-lg text-base-content hover:bg-base-200/30 transition-all duration-300 px-4 py-2">关于我们</router-link></li>
              <li><router-link to="/contact" class="rounded-lg text-base-content hover:bg-base-200/30 transition-all duration-300 px-4 py-2">联系我们</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 为毛玻璃效果添加额外的样式支持 */
.navbar {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

/* 为下拉菜单添加动画效果 */
.dropdown-content {
  transform-origin: top right;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 为下拉菜单添加毛玻璃效果 */
.dropdown-content {
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

/* 导航链接样式 */
.nav-link {
  position: relative;
  overflow: hidden;
}

/* 激活状态的导航链接 */
.router-link-exact-active {
  background-color: hsl(var(--p)/0.1);
  color: hsl(var(--p)) !important;
  font-weight: 600;
}

/* 激活状态的导航链接添加底部指示器 */
.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 3px;
  background-color: hsl(var(--p));
  border-radius: 3px 3px 0 0;
}

/* 导航链接悬停效果 */
.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, hsl(var(--bc)/0.05), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.nav-link:hover::before {
  transform: translateX(100%);
}

/* 语言按钮样式 */
.lang-btn {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
}

/* 语言按钮悬停效果 */
.lang-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

/* 语言按钮光晕效果 */
.lang-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, hsl(var(--bc)/0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.lang-btn:hover::before {
  opacity: 1;
}
</style>