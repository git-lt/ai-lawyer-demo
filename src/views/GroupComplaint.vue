<template>
  <div>
    <AppHeader title="集体维权" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <!-- 集体维权介绍 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-3">集体维权</div>
        <div class="text-sm text-gray-600 mb-4">
          多人联合投诉同一商家，提高维权效率和成功率。我们将协助您组织维权团队，统一提交投诉材料。
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="bg-blue-50 p-3 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-600">{{ groupStats.totalGroups }}</div>
            <div class="text-sm text-gray-600">维权团队</div>
          </div>
          <div class="bg-green-50 p-3 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-600">{{ groupStats.successRate }}%</div>
            <div class="text-sm text-gray-600">成功率</div>
          </div>
        </div>
      </div>
      
      <!-- 创建或加入团队 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">创建或加入团队</div>
        
        <div class="space-y-3">
          <button 
            class="w-full t-btn-primary"
            @click="showCreateModal = true"
          >
            <i class="fa-solid fa-plus mr-2"></i>创建维权团队
          </button>
          
          <div class="flex gap-2">
            <input 
              v-model="searchCode"
              placeholder="输入团队邀请码"
              class="t-input flex-1"
            >
            <button 
              class="t-btn-secondary px-4"
              @click="joinGroup"
            >
              加入团队
            </button>
          </div>
        </div>
      </div>
      
      <!-- 我的团队 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">我的团队</div>
        
        <div v-if="myGroups.length > 0" class="space-y-3">
          <div 
            v-for="group in myGroups" 
            :key="group.id"
            class="border rounded-lg p-3"
          >
            <div class="flex justify-between items-start mb-2">
              <div>
                <div class="font-medium">{{ group.name }}</div>
                <div class="text-sm text-gray-500">邀请码：{{ group.code }}</div>
              </div>
              <span 
                class="text-xs px-2 py-1 rounded"
                :class="getStatusClass(group.status)"
              >
                {{ getStatusText(group.status) }}
              </span>
            </div>
            
            <div class="grid grid-cols-3 gap-2 text-center mb-3">
              <div class="bg-gray-50 p-2 rounded">
                <div class="text-lg font-bold">{{ group.members }}</div>
                <div class="text-xs text-gray-500">成员</div>
              </div>
              <div class="bg-gray-50 p-2 rounded">
                <div class="text-lg font-bold">{{ group.evidence }}</div>
                <div class="text-xs text-gray-500">证据</div>
              </div>
              <div class="bg-gray-50 p-2 rounded">
                <div class="text-lg font-bold">{{ group.progress }}%</div>
                <div class="text-xs text-gray-500">进度</div>
              </div>
            </div>
            
            <div class="flex gap-2">
              <button 
                class="flex-1 t-btn-primary text-sm"
                @click="viewGroup(group.id)"
              >
                查看详情
              </button>
              <button 
                class="flex-1 t-btn-secondary text-sm"
                @click="shareGroup(group.id)"
              >
                邀请成员
              </button>
            </div>
          </div>
        </div>
        
        <div v-else class="text-center py-4 text-gray-500">
          您还没有加入任何维权团队
        </div>
      </div>
      
      <!-- 推荐团队 -->
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="font-semibold mb-4">推荐团队</div>
        
        <div v-if="recommendedGroups.length > 0" class="space-y-3">
          <div 
            v-for="group in recommendedGroups" 
            :key="group.id"
            class="border rounded-lg p-3"
          >
            <div class="flex justify-between items-start mb-2">
              <div>
                <div class="font-medium">{{ group.name }}</div>
                <div class="text-sm text-gray-500">目标商家：{{ group.target }}</div>
              </div>
              <span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                推荐
              </span>
            </div>
            
            <div class="text-sm text-gray-600 mb-3">
              {{ group.description }}
            </div>
            
            <div class="flex justify-between items-center mb-3">
              <div class="text-sm text-gray-500">
                已有 {{ group.members }} 人参与
              </div>
              <div class="text-sm text-gray-500">
                证据完整度：{{ group.evidenceComplete }}%
              </div>
            </div>
            
            <button 
              class="w-full t-btn-secondary text-sm"
              @click="joinRecommendedGroup(group.id)"
            >
              申请加入
            </button>
          </div>
        </div>
        
        <div v-else class="text-center py-4 text-gray-500">
          暂无推荐团队
        </div>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'

interface Group {
  id: string
  name: string
  code: string
  status: 'active' | 'preparing' | 'submitted' | 'resolved'
  members: number
  evidence: number
  progress: number
}

interface RecommendedGroup {
  id: string
  name: string
  target: string
  description: string
  members: number
  evidenceComplete: number
}

const showCreateModal = ref(false)
const searchCode = ref('')

const groupStats = ref({
  totalGroups: 156,
  successRate: 78
})

const myGroups = ref<Group[]>([
  {
    id: '1',
    name: '某某健身房维权团',
    code: 'GYM2024',
    status: 'active',
    members: 23,
    evidence: 45,
    progress: 65
  },
  {
    id: '2',
    name: '美容店联合维权',
    code: 'BEAUTY24',
    status: 'preparing',
    members: 8,
    evidence: 12,
    progress: 30
  }
])

const recommendedGroups = ref<RecommendedGroup[]>([
  {
    id: '3',
    name: '教育培训机构维权',
    target: '某某教育科技有限公司',
    description: '该机构突然关门，众多学员学费无法退还，现组织集体维权',
    members: 45,
    evidenceComplete: 85
  },
  {
    id: '4',
    name: '游泳馆维权团队',
    target: '某某游泳健身俱乐部',
    description: '游泳馆停业整顿，会员权益受损，需要大家联合维权',
    members: 18,
    evidenceComplete: 72
  }
])

const getStatusClass = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-600'
    case 'preparing':
      return 'bg-blue-100 text-blue-600'
    case 'submitted':
      return 'bg-yellow-100 text-yellow-600'
    case 'resolved':
      return 'bg-gray-100 text-gray-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'active':
      return '进行中'
    case 'preparing':
      return '准备中'
    case 'submitted':
      return '已提交'
    case 'resolved':
      return '已解决'
    default:
      return '未知'
  }
}

const joinGroup = () => {
  if (!searchCode.value.trim()) {
    alert('请输入邀请码')
    return
  }
  console.log('加入团队:', searchCode.value)
  alert(`正在加入团队 ${searchCode.value}...`)
}

const viewGroup = (id: string) => {
  console.log('查看团队:', id)
  alert('团队详情功能开发中...')
}

const shareGroup = (id: string) => {
  console.log('分享团队:', id)
  const group = myGroups.value.find(g => g.id === id)
  if (group) {
    alert(`邀请码：${group.code}\n请将此邀请码分享给其他受害者`)
  }
}

const joinRecommendedGroup = (id: string) => {
  console.log('申请加入推荐团队:', id)
  alert('申请已发送，等待团队管理员审核')
}
</script>