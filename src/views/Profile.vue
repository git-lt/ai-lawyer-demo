<template>
  <div>
    <AppHeader title="个人中心" />
    
    <div class="container pb-20">
      <!-- 用户信息卡片 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="flex items-center mb-4">
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
            <i class="fas fa-user"></i>
          </div>
          <div>
            <div class="font-semibold text-lg">{{ userStore.userProfile?.name || '用户' }}</div>
            <div class="text-gray-500 text-sm">{{ userStore.userProfile?.phone || '13800138000' }}</div>
          </div>
        </div>
        
        <!-- 进度统计 -->
        <div class="grid grid-cols-3 gap-4 text-center">
          <div>
            <div class="text-2xl font-bold text-blue-600">{{ complaintStats.total }}</div>
            <div class="text-sm text-gray-500">总投诉</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-green-600">{{ complaintStats.resolved }}</div>
            <div class="text-sm text-gray-500">已解决</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-orange-600">{{ complaintStats.processing }}</div>
            <div class="text-sm text-gray-500">处理中</div>
          </div>
        </div>
      </div>
      
      <!-- 功能菜单 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="space-y-3">
          <router-link to="/timeline" class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <div class="flex items-center">
              <i class="fas fa-calendar-alt text-blue-500 mr-3"></i>
              <span>我的投诉</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </router-link>
          
          <router-link to="/evidence-library" class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <div class="flex items-center">
              <i class="fas fa-folder-open text-green-500 mr-3"></i>
              <span>我的证据</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </router-link>
          
          <router-link to="/settings" class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <div class="flex items-center">
              <i class="fas fa-cog text-gray-500 mr-3"></i>
              <span>设置</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </router-link>
          
          <router-link to="/help" class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <div class="flex items-center">
              <i class="fas fa-question-circle text-orange-500 mr-3"></i>
              <span>帮助中心</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </router-link>
        </div>
      </div>
      
      <!-- 最近投诉 -->
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="flex justify-between items-center mb-3">
          <div class="font-semibold">最近投诉</div>
          <router-link to="/timeline" class="text-blue-500 text-sm">查看全部</router-link>
        </div>
        
        <div v-if="recentComplaints.length > 0" class="space-y-3">
          <div 
            v-for="complaint in recentComplaints" 
            :key="complaint.id"
            class="border rounded-lg p-3"
          >
            <div class="flex justify-between items-start mb-2">
              <div class="font-medium">{{ complaint.title }}</div>
              <span 
                class="text-xs px-2 py-1 rounded"
                :class="getStatusClass(complaint.status)"
              >
                {{ getStatusText(complaint.status) }}
              </span>
            </div>
            <div class="text-sm text-gray-500 mb-2">投诉编号：{{ complaint.id }}</div>
            <div class="text-sm text-gray-400">{{ formatDate(complaint.createdAt) }}</div>
          </div>
        </div>
        
        <div v-else class="text-center py-4 text-gray-500">
          暂无投诉记录
        </div>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'
import { useUserStore } from '@/stores/user'
import type { ComplaintRecord } from '@/types'

const userStore = useUserStore()

const complaintStats = computed(() => {
  const history = userStore.userProfile?.complaintHistory || []
  return {
    total: history.length,
    resolved: history.filter(item => item.status === 'resolved').length,
    processing: history.filter(item => item.status === 'processing').length
  }
})

const recentComplaints = computed<ComplaintRecord[]>(() => {
  const history = userStore.userProfile?.complaintHistory || []
  return history.slice(0, 3)
})

const getStatusClass = (status: string) => {
  switch (status) {
    case 'draft':
      return 'bg-gray-100 text-gray-600'
    case 'submitted':
      return 'bg-blue-100 text-blue-600'
    case 'processing':
      return 'bg-yellow-100 text-yellow-600'
    case 'resolved':
      return 'bg-green-100 text-green-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'draft':
      return '草稿'
    case 'submitted':
      return '已提交'
    case 'processing':
      return '处理中'
    case 'resolved':
      return '已解决'
    default:
      return '未知'
  }
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('zh-CN')
}
</script>