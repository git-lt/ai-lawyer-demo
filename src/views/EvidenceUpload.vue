<template>
  <div>
    <AppHeader title="证据上传" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <!-- 上传区域 -->
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="upload border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
          <div class="text-lg font-semibold mb-2">拖拽文件到此处或点击选择</div>
          <div class="text-sm text-gray-500 mb-4">支持 JPG、PNG、PDF、DOC 等格式，最多50个文件</div>
          <input 
            ref="fileInput"
            type="file" 
            multiple 
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            class="hidden"
            @change="handleFileSelect"
          >
          <button 
            class="t-btn-primary"
            @click="triggerFileInput"
          >
            选择文件
          </button>
        </div>
        
        <!-- 上传进度 -->
        <div v-if="evidenceStore.evidenceItems.length > 0" class="mt-4">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-semibold">上传进度</span>
            <span class="text-sm text-gray-500">{{ evidenceStore.evidenceItems.length }} 个文件</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-2 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300"
              :style="{ width: evidenceStore.uploadProgress + '%' }"
            ></div>
          </div>
        </div>
      </div>
      
      <!-- 文件列表 -->
      <div v-if="evidenceStore.evidenceItems.length > 0" class="bg-white rounded-xl border shadow-sm p-4 mt-3">
        <div class="flex justify-between items-center mb-3">
          <div class="font-semibold">文件列表</div>
          <button 
            class="text-sm text-red-500 hover:text-red-700"
            @click="clearAllFiles"
          >
            清空全部
          </button>
        </div>
        <div class="space-y-2">
          <div 
            v-for="item in evidenceStore.evidenceItems" 
            :key="item.id"
            class="flex items-center justify-between p-3 border rounded-lg"
          >
            <div class="flex items-center flex-1 min-w-0">
              <i class="fas fa-file text-blue-500 mr-3"></i>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium truncate">{{ item.name }}</div>
                <div class="text-xs text-gray-500">
                  {{ formatFileSize(item.name) }} • {{ formatDate(item.uploadTime) }}
                </div>
              </div>
            </div>
            <div class="flex items-center ml-3">
              <span 
                class="text-xs rounded-md px-2 py-1"
                :class="getStatusClass(item.status)"
              >
                {{ getStatusText(item.status) }}
              </span>
              <button 
                class="ml-2 text-gray-400 hover:text-red-500"
                @click="removeFile(item.id)"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 下一步操作 -->
      <div v-if="evidenceStore.evidenceItems.length > 0" class="grid grid-cols-2 gap-2 mt-3">
        <router-link to="/evidence-library" class="t-btn-primary">
          <i class="fa-solid fa-folder-open mr-2"></i>查看证据库
        </router-link>
        <router-link to="/ai-extract" class="t-btn-secondary">
          <i class="fa-solid fa-robot mr-2"></i>AI识别
        </router-link>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'
import { useEvidenceStore } from '@/stores/evidence'

const evidenceStore = useEvidenceStore()
const fileInput = ref<HTMLInputElement>()

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    evidenceStore.addEvidence(target.files)
    // 模拟上传进度
    simulateUploadProgress()
  }
}

const simulateUploadProgress = () => {
  let progress = 0
  const interval = setInterval(() => {
    progress += Math.random() * 20
    if (progress >= 100) {
      progress = 100
      clearInterval(interval)
      // 更新所有文件状态为已完成
      evidenceStore.evidenceItems.forEach(item => {
        evidenceStore.updateEvidenceStatus(item.id, 'completed')
      })
    }
    evidenceStore.uploadProgress = progress
  }, 500)
}

const removeFile = (id: string) => {
  evidenceStore.removeEvidence(id)
}

const clearAllFiles = () => {
  evidenceStore.clearAllEvidence()
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-gray-100 text-gray-600'
    case 'processing':
      return 'bg-blue-100 text-blue-600'
    case 'completed':
      return 'bg-green-100 text-green-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'pending':
      return '待预检'
    case 'processing':
      return '处理中'
    case 'completed':
      return '已完成'
    default:
      return '待预检'
  }
}

const formatFileSize = (filename: string) => {
  // 模拟文件大小
  return `${Math.floor(Math.random() * 500 + 100)}KB`
}

const formatDate = (date?: Date) => {
  if (!date) return '刚刚'
  return date.toLocaleString('zh-CN')
}
</script>

<style scoped>
.upload {
  transition: all 0.3s ease;
}

.upload:hover {
  border-color: var(--t-primary);
  background: rgba(37, 99, 235, 0.02);
}
</style>