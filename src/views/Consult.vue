<template>
  <div>
    <AppHeader title="咨询引擎" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <!-- 咨询输入区域 -->
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <!-- 标签选择器 -->
        <div class="flex flex-wrap gap-2 mb-2">
          <span 
            v-for="tag in consultStore.tags" 
            :key="tag.id"
            class="tag-selector px-3 py-2 rounded-full text-sm"
            :class="{ selected: consultStore.selectedTags.includes(tag.id) }"
            @click="consultStore.toggleTag(tag.id)"
          >
            {{ tag.name }}
          </span>
        </div>
        
        <!-- 输入框 -->
        <input 
          v-model="consultStore.consultInput"
          class="t-input" 
          placeholder="例：健身房关门了钱能要回吗"
        >
        
        <!-- 操作按钮 -->
        <div class="grid grid-cols-2 gap-2 mt-2">
          <router-link to="/evidence-guide" class="t-btn-primary">
            <i class="fa-solid fa-lightbulb mr-2"></i>智能咨询
          </router-link>
          <router-link to="/help" class="t-btn-secondary">
            <i class="fa-solid fa-circle-question mr-2"></i>查看FAQ
          </router-link>
        </div>
      </div>
      
      <!-- 推荐维权路径 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mt-3">
        <div class="text-sm font-semibold mb-2">
          <i class="fa-solid fa-sitemap mr-2"></i>推荐维权路径
        </div>
        
        <!-- Mermaid 流程图 -->
        <div class="mermaid-container">
          <div class="mermaid" ref="mermaidRef">
graph TD
    A[咨询] --> B[12315投诉]
    B --> C[申请支付令]
    C --> D[法院起诉]
          </div>
        </div>
        
        <!-- 法律依据 -->
        <div class="space-y-2 mt-2">
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <div>法律依据：《消费者权益保护法》第53条</div>
            <a 
              class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200"
              href="https://www.gov.cn/"
              target="_blank"
            >
              查看原文
            </a>
          </div>
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <div>地方政策：《预付式消费管理办法》</div>
            <a 
              class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200"
              href="https://www.gov.cn/"
              target="_blank"
            >
              查看原文
            </a>
          </div>
        </div>
      </div>
      
      <!-- 内容网格 -->
      <div class="grid grid-cols-1 gap-3 mt-3">
        <!-- 案例参考 -->
        <div class="bg-white rounded-xl border shadow-sm p-4">
          <div class="font-semibold mb-2">
            <i class="fa-solid fa-file-circle-check mr-2"></i>案例参考
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between p-3 border rounded-lg">
              <div>2024案例：健身年卡退款获受理</div>
              <div class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600">耗时：21天</div>
            </div>
          </div>
        </div>
        
        <!-- 耗时与节点 -->
        <div class="bg-white rounded-xl border shadow-sm p-4">
          <div class="font-semibold mb-2">
            <i class="fa-solid fa-hourglass-half mr-2"></i>耗时与节点
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between p-3 border rounded-lg">
              <div>受理</div>
              <div class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600">7工作日</div>
            </div>
            <div class="flex items-center justify-between p-3 border rounded-lg">
              <div>处理</div>
              <div class="text-xs rounded-md px-2 py-1 bg-gray-100 text-gray-600">60日</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'
import { useConsultStore } from '@/stores/consult'
import { nextTick } from 'vue'

const consultStore = useConsultStore()
const mermaidRef = ref<HTMLElement>()

onMounted(async () => {
  try {
    // 动态导入 mermaid
    const mermaid = await import('mermaid')
    console.log('Mermaid loaded:', mermaid)
    
    // 获取 mermaid 容器的文本内容
    const mermaidText = mermaidRef.value?.textContent?.trim() || ''
    console.log('Mermaid diagram text:', mermaidText)
    
    // 初始化 mermaid
    mermaid.default.initialize({ 
      startOnLoad: false, // 手动控制渲染
      theme: 'default',
      securityLevel: 'loose'
    })
    
    // 等待 DOM 更新
    await nextTick()
    
    // 清空容器并重新渲染
    if (mermaidRef.value && mermaidText) {
      mermaidRef.value.textContent = mermaidText
      await mermaid.default.run({
        nodes: [mermaidRef.value]
      })
      console.log('Mermaid flowchart rendered successfully')
    }
  } catch (error) {
    console.error('Failed to load or initialize mermaid:', error)
  }
})
</script>

<style scoped>
.mermaid-container {
  display: flex;
  justify-content: center;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
}

.mermaid {
  text-align: center;
}
</style>