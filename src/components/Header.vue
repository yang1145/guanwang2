<template>
  <header class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl font-bold">
          <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TechCorp
          </span>
        </a>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal px-1">
          <li><a class="rounded-lg hover:bg-base-200">首页</a></li>
          <li><a class="rounded-lg hover:bg-base-200">产品</a></li>
          <li><a class="rounded-lg hover:bg-base-200">解决方案</a></li>
          <li><a class="rounded-lg hover:bg-base-200">关于我们</a></li>
          <li><a class="rounded-lg hover:bg-base-200">新闻资讯</a></li>
          <li><a class="rounded-lg hover:bg-base-200">联系我们</a></li>
        </ul>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end lg:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <svg xmlns="http://www.w.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>首页</a></li>
            <li><a>产品</a></li>
            <li><a>解决方案</a></li>
            <li><a>关于我们</a></li>
            <li><a>新闻资讯</a></li>
            <li><a>联系我们</a></li>
          </ul>
        </div>
        <div class="hidden lg:block ml-2">
          <button class="btn btn-sm btn-outline">中文</button>
          <button class="btn btn-sm btn-outline ml-2">EN</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
</style>