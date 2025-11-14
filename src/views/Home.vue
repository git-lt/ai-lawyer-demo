<template>
  <div>
    <AppHeader title="AI预付消费维权助手" :show-index="true" />
    
    <div class="container pb-20">
      <!-- 主要卡片 -->
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="t-h2 mb-1">
          <i class="fa-solid fa-bolt mr-2"></i>30–45分钟完成维权
        </div>
        <div class="t-muted mb-2">降低维权门槛、标准化证据链、全流程陪伴</div>
        
        <!-- 进度条 -->
        <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            class="h-3 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        
        <!-- 操作按钮 -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
          <router-link to="/consult" class="t-btn-primary">
            <i class="fa-solid fa-comments mr-2"></i>开始咨询
          </router-link>
          <router-link to="/evidence-upload" class="t-btn-primary">
            <i class="fa-solid fa-upload mr-2"></i>上传证据
          </router-link>
          <router-link to="/doc-generator" class="t-btn-secondary">
            <i class="fa-solid fa-file-pdf mr-2"></i>生成文书
          </router-link>
        </div>
      </div>
      
      <!-- 内容网格 -->
      <div class="grid grid-cols-1 gap-3 mt-3">
        <!-- 极简四步 -->
        <div class="bg-white rounded-xl border shadow-sm p-4">
          <div class="font-semibold mb-2">
            <i class="fa-solid fa-route mr-2"></i>极简四步
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between p-3 border rounded-lg">
              <div>发起咨询</div>
              <div class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600">1分钟</div>
            </div>
            <div class="flex items-center justify-between p-3 border rounded-lg">
              <div>搜集证据</div>
              <div class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600">10秒识别</div>
            </div>
            <div class="flex items-center justify-between p-3 border rounded-lg">
              <div>生成文书</div>
              <div class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600">5秒生成</div>
            </div>
            <div class="flex items-center justify-between p-3 border rounded-lg">
              <div>提交投诉</div>
              <div class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600">10分钟</div>
            </div>
          </div>
        </div>
        
        <!-- 最新进度 -->
        <div class="bg-white rounded-xl border shadow-sm p-4">
          <div class="font-semibold mb-2">
            <i class="fa-solid fa-gauge-high mr-2"></i>最新进度
          </div>
          <div class="text-sm">投诉编号：待生成</div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
            <div 
              class="h-2 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const progress = computed(() => userStore.complaintProgress)
</script>