<template>
  <div>
    <AppHeader title="文书生成" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="font-semibold mb-4">文书生成</div>
        <div class="text-gray-600 mb-4">
          根据您的证据和信息，生成专业的法律文书
        </div>
        
        <!-- 文书类型选择 -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">选择文书类型</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                v-model="selectedDocType" 
                value="complaint" 
                class="mr-3"
              >
              <div>
                <div class="font-medium">投诉书</div>
                <div class="text-sm text-gray-500">向12315投诉使用</div>
              </div>
            </label>
            <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                v-model="selectedDocType" 
                value="payment-order" 
                class="mr-3"
              >
              <div>
                <div class="font-medium">支付令申请</div>
                <div class="text-sm text-gray-500">向法院申请支付令</div>
              </div>
            </label>
            <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                v-model="selectedDocType" 
                value="group-complaint" 
                class="mr-3"
              >
              <div>
                <div class="font-medium">集体投诉书</div>
                <div class="text-sm text-gray-500">多人联合投诉使用</div>
              </div>
            </label>
            <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                v-model="selectedDocType" 
                value="court-suit" 
                class="mr-3"
              >
              <div>
                <div class="font-medium">法院起诉书</div>
                <div class="text-sm text-gray-500">正式法院起诉使用</div>
              </div>
            </label>
          </div>
        </div>
        
        <!-- 预览区域 -->
        <div class="border rounded-lg p-4 bg-gray-50 mb-4">
          <div class="flex justify-between items-center mb-3">
            <div class="font-medium">文书预览</div>
            <div class="text-sm text-gray-500">{{ docInfo.title }}</div>
          </div>
          
          <div class="bg-white p-4 rounded border text-sm max-h-64 overflow-y-auto">
            <div class="whitespace-pre-wrap">{{ docContent }}</div>
          </div>
        </div>
        
        <!-- 生成选项 -->
        <div class="mb-4">
          <label class="flex items-center mb-2">
            <input 
              type="checkbox" 
              v-model="includeEvidence" 
              class="mr-2"
            >
            <span class="text-sm">附带证据清单</span>
          </label>
          <label class="flex items-center mb-2">
            <input 
              type="checkbox" 
              v-model="includeLegalBasis" 
              class="mr-2"
            >
            <span class="text-sm">附带法律依据</span>
          </label>
          <label class="flex items-center">
            <input 
              type="checkbox" 
              v-model="includeContactInfo" 
              class="mr-2"
            >
            <span class="text-sm">附带联系方式</span>
          </label>
        </div>
        
        <!-- 操作按钮 -->
        <div class="grid grid-cols-2 gap-2">
          <button class="t-btn-primary" @click="generateDocument">
            <i class="fa-solid fa-file-pdf mr-2"></i>生成文书
          </button>
          <button class="t-btn-secondary" @click="previewDocument">
            <i class="fa-solid fa-eye mr-2"></i>完整预览
          </button>
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

const selectedDocType = ref('complaint')
const includeEvidence = ref(true)
const includeLegalBasis = ref(true)
const includeContactInfo = ref(true)

const docInfo = computed(() => {
  switch (selectedDocType.value) {
    case 'complaint':
      return { title: '12315投诉书', type: '投诉书' }
    case 'payment-order':
      return { title: '支付令申请书', type: '支付令' }
    case 'group-complaint':
      return { title: '集体投诉书', type: '集体投诉' }
    case 'court-suit':
      return { title: '民事起诉书', type: '起诉书' }
    default:
      return { title: '文书', type: '文书' }
  }
})

const docContent = computed(() => {
  const baseContent = `${docInfo.value.title}\n\n`
  + `投诉人：张三\n`
  + `联系方式：13800138000\n`
  + `被投诉人：北京某某健身有限公司\n`
  + `地址：北京市朝阳区xxx街道xxx号\n\n`
  + `投诉请求：\n`
  + `1. 退还剩余会员费用人民币2,400元\n`
  + `2. 赔偿因此造成的相关损失\n\n`
  + `事实与理由：\n`
  + `本人于2024年1月15日与被投诉人签订健身会员合同，\n`
  + `支付年费3,600元。后被投诉人突然关门停业，\n`
  + `导致合同无法继续履行...\n\n`
  + `此致\n`
  + `12315消费者投诉平台\n\n`
  + `投诉人：张三\n`
  + `日期：2024年1月20日`
  
  return baseContent
})

const generateDocument = () => {
  console.log('生成文书:', selectedDocType.value)
  alert('文书生成成功！已保存到本地。')
}

const previewDocument = () => {
  console.log('预览文书')
  const newWindow = window.open('', '_blank')
  if (newWindow) {
    newWindow.document.write(`
      <html>
        <head>
          <title>${docInfo.value.title}预览</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; }
            .section { margin-bottom: 20px; }
            .signature { margin-top: 40px; text-align: right; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>${docInfo.value.title}</h2>
          </div>
          <div class="section">
            <pre>${docContent.value}</pre>
          </div>
          <div class="signature">
            <p>投诉人：张三</p>
            <p>日期：2024年1月20日</p>
          </div>
        </body>
      </html>
    `)
  }
}
</script>