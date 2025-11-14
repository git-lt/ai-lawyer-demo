<template>
  <div>
    <AppHeader title="跟踪日历" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <!-- 进度概览 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">投诉进度</div>
        
        <div class="mb-4">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium">当前进度</span>
            <span class="text-sm text-gray-500">{{ currentProgress }}%</span>
          </div>
          <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-3 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300"
              :style="{ width: currentProgress + '%' }"
            ></div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4 text-center">
          <div class="bg-blue-50 p-3 rounded-lg">
            <div class="text-2xl font-bold text-blue-600">{{ activeComplaints }}</div>
            <div class="text-sm text-gray-600">进行中</div>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <div class="text-2xl font-bold text-green-600">{{ resolvedComplaints }}</div>
            <div class="text-sm text-gray-600">已解决</div>
          </div>
        </div>
      </div>
      
      <!-- 时间线 -->
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="font-semibold mb-4">投诉时间线</div>
        
        <div class="space-y-4">
          <div 
            v-for="(item, index) in timelineItems" 
            :key="item.id"
            class="flex gap-4"
          >
            <!-- 时间线节点 -->
            <div class="flex flex-col items-center">
              <div 
                class="w-4 h-4 rounded-full border-2"
                :class="getStatusColor(item.status)"
              ></div>
              <div 
                v-if="index < timelineItems.length - 1"
                class="w-0.5 h-16 bg-gray-200 mt-1"
              ></div>
            </div>
            
            <!-- 内容 -->
            <div class="flex-1 pb-4">
              <div class="flex justify-between items-start mb-2">
                <div class="font-medium">{{ item.title }}</div>
                <div class="text-sm text-gray-500">{{ formatDate(item.date) }}</div>
              </div>
              <div class="text-sm text-gray-600 mb-2">{{ item.description }}</div>
              <div class="flex items-center gap-2">
                <span 
                  class="text-xs px-2 py-1 rounded"
                  :class="getStatusBgColor(item.status)"
                >
                  {{ getStatusText(item.status) }}
                </span>
                <span class="text-xs text-gray-500">{{ item.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 下一步操作 -->
      <div class="grid grid-cols-2 gap-2 mt-3">
        <router-link to="/doc-generator" class="t-btn-primary">
          <i class="fa-solid fa-file-pdf mr-2"></i>生成文书
        </router-link>
        <router-link to="/submit-guide" class="t-btn-secondary">
          <i class="fa-solid fa-paper-plane mr-2"></i>提交投诉
        </router-link>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'

interface TimelineItem {
  id: string
  title: string
  description: string
  date: Date
  status: 'completed' | 'current' | 'pending'
  duration: string
}

const timelineItems = ref<TimelineItem[]>([
  {
    id: '1',
    title: '投诉提交',
    description: '已向12315平台提交投诉申请',
    date: new Date('2024-01-20'),
    status: 'completed',
    duration: '1天'
  },
  {
    id: '2',
    title: '材料审核',
    description: '平台正在审核提交的材料',
    date: new Date('2024-01-22'),
    status: 'completed',
    duration: '2天'
  },
  {
    id: '3',
    title: '受理通知',
    description: '投诉已正式受理，进入处理流程',
    date: new Date('2024-01-25'),
    status: 'current',
    duration: '进行中'
  },
  {
    id: '4',
    title: '调解处理',
    description: '平台组织双方进行调解',
    date: new Date('2024-02-01'),
    status: 'pending',
    duration: '预计7天'
  },
  {
    id: '5',
    title: '结果反馈',
    description: '处理结果通知',
    date: new Date('2024-02-15'),
    status: 'pending',
    duration: '预计14天'
  }
])

const currentProgress = computed(() => {
  const completed = timelineItems.value.filter(item => item.status === 'completed').length
  return Math.round((completed / timelineItems.value.length) * 100)
})

const activeComplaints = ref(1)
const resolvedComplaints = ref(3)

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500 border-green-500'
    case 'current':
      return 'bg-blue-500 border-blue-500'
    case 'pending':
      return 'bg-gray-200 border-gray-300'
    default:
      return 'bg-gray-200 border-gray-300'
  }
}

const getStatusBgColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-600'
    case 'current':
      return 'bg-blue-100 text-blue-600'
    case 'pending':
      return 'bg-gray-100 text-gray-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed':
      return '已完成'
    case 'current':
      return '进行中'
    case 'pending':
      return '待处理'
    default:
      return '未知'
  }
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('zh-CN')
}
</script>