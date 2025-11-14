import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserProfile } from '@/types'

export const useUserStore = defineStore('user', () => {
  const isAuthenticated = ref(false)
  const userProfile = ref<UserProfile | null>(null)
  const complaintProgress = ref(20) // 默认进度20%
  
  const login = async (phone: string, code: string) => {
    // 模拟登录
    isAuthenticated.value = true
    userProfile.value = {
      id: 'user-1',
      name: '用户',
      phone: phone,
      complaintHistory: []
    }
  }
  
  const logout = () => {
    isAuthenticated.value = false
    userProfile.value = null
    complaintProgress.value = 0
  }
  
  const updateProgress = (progress: number) => {
    complaintProgress.value = Math.min(100, Math.max(0, progress))
  }
  
  return {
    isAuthenticated,
    userProfile,
    complaintProgress,
    login,
    logout,
    updateProgress
  }
})