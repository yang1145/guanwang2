import API_BASE_URL from '@/config/api'

// 获取网站配置信息
export const fetchSiteConfig = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/site-config`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    return result.data
  } catch (error) {
    console.error('获取网站配置信息失败:', error)
    throw error
  }
}