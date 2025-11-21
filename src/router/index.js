import { createRouter, createWebHistory } from 'vue-router'
import { fetchSiteConfig } from '@/services/siteConfig'

// 懒加载组件
const Home = () => import('@/views/Home.vue')
const Products = () => import('@/views/Products.vue')
const ProductDetail = () => import('@/views/ProductDetail.vue')
const News = () => import('@/views/News.vue')
const NewsDetail = () => import('@/views/NewsDetail.vue')
const About = () => import('@/views/About.vue')
const Contact = () => import('@/views/Contact.vue')
const NotFound = () => import('@/views/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      title: '产品中心'
    }
  },
  {
    path: '/products/detail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: {
      title: '产品详情'
    },
    props: true
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: '新闻资讯'
    }
  },
  {
    path: '/news/detail/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    meta: {
      title: '新闻详情'
    },
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: '联系我们'
    }
  },
  // 404页面路由
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '页面未找到'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  // 如果还没有获取过网站配置信息，则获取一次
  const siteConfig = await fetchSiteConfig().catch(() => null)
  const companyName = siteConfig?.company_name || 'TechCorp科技有限公司'
  
  // 设置页面标题
  document.title = to.meta.title ? `${to.meta.title} - ${companyName}` : companyName
  
  next()
})

export default router