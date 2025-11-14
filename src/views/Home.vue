<template>
  <div class="home-container">
    <AppHeader title="AI预付消费维权助手" :show-index="true" />
    
    <div class="container pb-40">
      <!-- Hero区域 -->
      <div class="hero-card">
        <div class="hero-title">
          <i class="fa-solid fa-shield-halved icon-bounce mr-3"></i>
          30-45分钟完成维权
        </div>
        <div class="hero-subtitle">
          降低维权门槛 · 标准化证据链 · 全流程陪伴
        </div>
        
        <!-- 现代进度条 -->
        <div class="progress-modern mb-4">
          <div 
            class="progress-modern-fill"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        
        <!-- 现代操作按钮 -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <router-link to="/consult" class="btn-modern-primary">
            <i class="fa-solid fa-comments"></i>
            <span>开始咨询</span>
          </router-link>
          <router-link to="/evidence-upload" class="btn-modern-primary">
            <i class="fa-solid fa-upload"></i>
            <span>上传证据</span>
          </router-link>
          <router-link to="/doc-generator" class="btn-modern-secondary">
            <i class="fa-solid fa-file-pdf"></i>
            <span>生成文书</span>
          </router-link>
        </div>
      </div>
      
      <!-- 内容网格 -->
      <div class="grid grid-cols-1 gap-4 mt-6">
        <!-- 极简四步 -->
        <div class="modern-card">
          <div class="title-modern">
            <i class="fa-solid fa-route icon-pulse"></i>
            极简四步
          </div>
          <div class="space-y-3">
            <div class="step-card">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <div class="font-semibold text-gray-800">发起咨询</div>
                  <div class="text-sm text-gray-500">描述您的问题，AI智能分析</div>
                </div>
              </div>
              <div class="step-time">
                <i class="fa-solid fa-clock mr-1"></i>1分钟
              </div>
            </div>
            
            <div class="step-card">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <div class="font-semibold text-gray-800">搜集证据</div>
                  <div class="text-sm text-gray-500">智能识别和整理证据材料</div>
                </div>
              </div>
              <div class="step-time">
                <i class="fa-solid fa-bolt mr-1"></i>10秒识别
              </div>
            </div>
            
            <div class="step-card">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <div class="font-semibold text-gray-800">生成文书</div>
                  <div class="text-sm text-gray-500">自动生成专业维权文书</div>
                </div>
              </div>
              <div class="step-time">
                <i class="fa-solid fa-rocket mr-1"></i>5秒生成
              </div>
            </div>
            
            <div class="step-card">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">4</div>
                <div>
                  <div class="font-semibold text-gray-800">提交投诉</div>
                  <div class="text-sm text-gray-500">一键提交到相关部门</div>
                </div>
              </div>
              <div class="step-time">
                <i class="fa-solid fa-paper-plane mr-1"></i>10分钟
              </div>
            </div>
          </div>
        </div>
        
        <!-- 最新进度 -->
        <div class="modern-card">
          <div class="title-modern">
            <i class="fa-solid fa-gauge-high"></i>
            维权进度
          </div>
          
          <div class="flex items-center justify-between mb-3">
            <div class="text-sm text-gray-600">投诉编号</div>
            <div class="status-badge status-badge-info">
              <i class="fa-solid fa-barcode"></i>
              待生成
            </div>
          </div>
          
          <div class="mb-3">
            <div class="flex justify-between text-sm mb-2">
              <span class="text-gray-600">整体进度</span>
              <span class="text-gradient font-bold">{{ progress }}%</span>
            </div>
            <div class="progress-modern">
              <div 
                class="progress-modern-fill"
                :style="{ width: progress + '%' }"
              ></div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-2 text-xs text-gray-500">
            <div class="flex items-center gap-1">
              <i class="fa-solid fa-check-circle text-green-500"></i>
              咨询完成
            </div>
            <div class="flex items-center gap-1">
              <i class="fa-solid fa-clock text-gray-400"></i>
              证据待上传
            </div>
          </div>
        </div>
        
        <!-- 快速统计 -->
        <div class="modern-card">
          <div class="title-modern">
            <i class="fa-solid fa-chart-line"></i>
            维权统计
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
              <div class="text-2xl font-bold text-gradient mb-1">98%</div>
              <div class="text-xs text-gray-600">成功率</div>
            </div>
            <div class="text-center p-3 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl">
              <div class="text-2xl font-bold text-gradient mb-1">3天</div>
              <div class="text-xs text-gray-600">平均处理时间</div>
            </div>
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

<style scoped>
.home-container {
  min-height: 100vh;
  background: var(--bg-gradient);
  padding-bottom: 80px;
}

/* 额外的动画效果 */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.icon-bounce {
  animation: bounce 2s infinite;
}

.icon-pulse {
  animation: pulse 2s infinite;
}

/* 响应式间距调整 */
@media (max-width: 640px) {
  .container {
    padding: 12px;
  }

  .hero-card {
    padding: 24px 16px;
  }

  .modern-card {
    padding: 20px;
  }

  .home-container {
    padding-bottom: 100px;
  }
}

@media (max-width: 375px) {
  .hero-title {
    font-size: 24px;
  }

  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .home-container {
    padding-bottom: 120px;
  }
}
</style>