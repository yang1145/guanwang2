import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'
import ProductDetail from '../views/ProductDetail.vue'
import NewsDetail from '../views/NewsDetail.vue'

// 404页面组件
const NotFound = {
  template: `
    <div class="min-h-screen flex items-center justify-center bg-base-200">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-4">404</h1>
        <p class="text-xl mb-8">页面未找到</p>
        <router-link to="/" class="btn btn-primary">返回首页</router-link>
      </div>
    </div>
  `
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页 - TechCorp科技有限公司'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      title: '产品中心 - TechCorp科技有限公司'
    }
  },
  {
    path: '/products/detail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: {
      title: '产品详情 - TechCorp科技有限公司'
    },
    props: true
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: '新闻资讯 - TechCorp科技有限公司'
    }
  },
  {
    path: '/news/detail/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    meta: {
      title: '新闻详情 - TechCorp科技有限公司'
    },
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: '联系我们 - TechCorp科技有限公司'
    }
  },
  // 404页面路由
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '页面未找到 - TechCorp科技有限公司'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（比如浏览器前进后退），则滚动到保存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 如果路由有hash，滚动到对应元素
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // 默认滚动到顶部
    return { top: 0 }
  }
})

// 全局前置守卫 - 动态修改页面标题
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || 'TechCorp科技有限公司'
  next()
})

export default router