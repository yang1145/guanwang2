# 路由系统说明

## 路由配置

本项目使用 Vue Router 4 实现单页面应用路由管理。

### 路由表

| 路径 | 页面组件 | 功能说明 |
|------|----------|----------|
| / | Home.vue | 首页，包含 Hero、Features、About、Contact 组件 |
| /products | Products.vue | 产品列表页面 |
| /products/detail/:id | ProductDetail.vue | 产品详情页面 |
| /news | News.vue | 新闻列表页面 |
| /news/detail/:id | NewsDetail.vue | 新闻详情页面 |
| /contact | Contact.vue | 联系我们页面 |
| /:pathMatch(.*)* | NotFound | 404 页面 |

### 路由特性

1. **页面标题管理**：每个路由都有对应的页面标题，会在页面切换时自动更新
2. **滚动行为**：页面切换时自动滚动到顶部，支持锚点滚动
3. **过渡动画**：页面切换时有淡入淡出过渡效果
4. **404处理**：未匹配的路由会显示404页面

### 使用说明

在模板中添加路由链接：
```vue
<router-link to="/products">产品中心</router-link>
<router-link to="/products/detail/1">产品详情</router-link>
```

在组件中编程式导航：
```javascript
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/products')
router.push({ path: '/products/detail/1' })
```

### 路由元信息

每个路由都包含以下元信息：
- `title`：页面标题

### 路由守卫

全局前置守卫用于：
- 动态设置页面标题

## 文件结构

```
src/
├── router/
│   └── index.js          # 路由配置文件
├── views/
│   ├── Home.vue          # 首页组件
│   ├── Products.vue      # 产品列表页
│   ├── ProductDetail.vue # 产品详情页
│   ├── News.vue          # 新闻列表页
│   ├── NewsDetail.vue    # 新闻详情页
│   └── Contact.vue       # 联系我们页
```