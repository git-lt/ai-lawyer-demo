<template>
  <div>
    <AppHeader title="证据库" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="flex justify-between items-center mb-4">
          <div class="font-semibold">证据库</div>
          <router-link to="/evidence-upload" class="t-btn-primary text-sm">
            <i class="fa-solid fa-plus mr-1"></i>添加证据
          </router-link>
        </div>
        
        <!-- 分类标签 -->
        <div class="flex flex-wrap gap-2 mb-4">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="px-3 py-1 rounded-full text-sm transition-colors"
            :class="activeCategory === category.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
            @click="activeCategory = category.id"
          >
            {{ category.name }} ({{ category.count }})
          </button>
        </div>
        
        <!-- 证据列表 -->
        <div v-if="filteredEvidence.length > 0" class="space-y-3">
          <div 
            v-for="item in filteredEvidence" 
            :key="item.id"
            class="border rounded-lg p-3 hover:shadow-sm transition-shadow"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center flex-1 min-w-0">
                <i :class="getFileIcon(item.type)" class="text-2xl mr-3" :style="{ color: getFileColor(item.type) }"></i>
                <div class="flex-1 min-w-0">
                  <div class="font-medium truncate">{{ item.name }}</div>
                  <div class="text-sm text-gray-500">
                    {{ item.category }} • {{ formatDate(item.uploadTime) }} • {{ item.size }}
                  </div>
                </div>
              </div>
              <div class="flex items-center ml-3">
                <button 
                  class="text-blue-500 hover:text-blue-700 mr-2"
                  @click="viewEvidence(item)"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button 
                  class="text-red-500 hover:text-red-700"
                  @click="deleteEvidence(item.id)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 空状态 -->
        <div v-else class="text-center py-8">
          <i class="fas fa-folder-open text-4xl text-gray-300 mb-4"></i>
          <div class="text-gray-500 mb-4">暂无证据文件</div>
          <router-link to="/evidence-upload" class="t-btn-primary">
            上传证据
          </router-link>
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

interface EvidenceItem {
  id: string
  name: string
  category: string
  type: string
  size: string
  uploadTime: Date
}

interface Category {
  id: string
  name: string
  count: number
}

const categories = ref<Category[]>([
  { id: 'all', name: '全部', count: 12 },
  { id: 'contract', name: '合同协议', count: 3 },
  { id: 'payment', name: '付款凭证', count: 4 },
  { id: 'communication', name: '沟通记录', count: 2 },
  { id: 'service', name: '服务证明', count: 2 },
  { id: 'identity', name: '身份证明', count: 1 }
])

const activeCategory = ref('all')

const evidenceList = ref<EvidenceItem[]>([
  {
    id: '1',
    name: '健身会员合同.pdf',
    category: '合同协议',
    type: 'pdf',
    size: '2.3MB',
    uploadTime: new Date('2024-01-15')
  },
  {
    id: '2',
    name: '支付宝转账记录.jpg',
    category: '付款凭证',
    type: 'image',
    size: '856KB',
    uploadTime: new Date('2024-01-16')
  },
  {
    id: '3',
    name: '微信聊天记录.png',
    category: '沟通记录',
    type: 'image',
    size: '1.2MB',
    uploadTime: new Date('2024-01-17')
  }
])

const filteredEvidence = computed(() => {
  if (activeCategory.value === 'all') {
    return evidenceList.value
  }
  return evidenceList.value.filter(item => {
    const categoryMap: Record<string, string> = {
      'contract': '合同协议',
      'payment': '付款凭证',
      'communication': '沟通记录',
      'service': '服务证明',
      'identity': '身份证明'
    }
    return item.category === categoryMap[activeCategory.value]
  })
})

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'fas fa-file-pdf'
    case 'image':
      return 'fas fa-file-image'
    case 'doc':
      return 'fas fa-file-word'
    default:
      return 'fas fa-file'
  }
}

const getFileColor = (type: string) => {
  switch (type) {
    case 'pdf':
      return '#DC2626'
    case 'image':
      return '#059669'
    case 'doc':
      return '#2563EB'
    default:
      return '#6B7280'
  }
}

const viewEvidence = (item: EvidenceItem) => {
  // 模拟查看证据
  console.log('查看证据:', item)
}

const deleteEvidence = (id: string) => {
  const index = evidenceList.value.findIndex(item => item.id === id)
  if (index > -1) {
    evidenceList.value.splice(index, 1)
  }
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('zh-CN')
}
</script>