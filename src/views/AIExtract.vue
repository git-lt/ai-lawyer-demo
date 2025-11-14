<template>
  <div>
    <AppHeader title="AI识别结果" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="font-semibold mb-4">AI识别结果</div>
        <div class="text-gray-600 mb-4">
          已自动提取以下关键信息，请检查并修正
        </div>
        
        <!-- 识别结果 -->
        <div class="space-y-4">
          <div class="border rounded-lg p-3">
            <div class="flex justify-between items-center mb-2">
              <div class="font-medium">商家信息</div>
              <div class="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                置信度: 95%
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-sm text-gray-600 mb-1">商家名称</label>
                <input v-model="extractedData.merchant.name" class="t-input text-sm" />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">联系电话</label>
                <input v-model="extractedData.merchant.phone" class="t-input text-sm" />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">地址</label>
                <input v-model="extractedData.merchant.address" class="t-input text-sm" />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">营业执照</label>
                <input v-model="extractedData.merchant.license" class="t-input text-sm" />
              </div>
            </div>
          </div>
          
          <div class="border rounded-lg p-3">
            <div class="flex justify-between items-center mb-2">
              <div class="font-medium">合同信息</div>
              <div class="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                置信度: 78%
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-sm text-gray-600 mb-1">合同金额</label>
                <input v-model="extractedData.contract.amount" class="t-input text-sm" />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">签约日期</label>
                <input v-model="extractedData.contract.date" class="t-input text-sm" />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">服务期限</label>
                <input v-model="extractedData.contract.duration" class="t-input text-sm" />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">服务内容</label>
                <input v-model="extractedData.contract.service" class="t-input text-sm" />
              </div>
            </div>
          </div>
          
          <div class="border rounded-lg p-3">
            <div class="flex justify-between items-center mb-2">
              <div class="font-medium">违约信息</div>
              <div class="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                置信度: 92%
              </div>
            </div>
            <div class="grid grid-cols-1 gap-3">
              <div>
                <label class="block text-sm text-gray-600 mb-1">违约类型</label>
                <select v-model="extractedData.breach.type" class="t-input text-sm">
                  <option value="跑路">跑路</option>
                  <option value="拒退">拒退</option>
                  <option value="服务缩水">服务缩水</option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">违约描述</label>
                <textarea 
                  v-model="extractedData.breach.description" 
                  class="t-input text-sm" 
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 操作按钮 -->
        <div class="flex gap-2 mt-6">
          <button class="t-btn-primary flex-1" @click="saveExtractedData">
            <i class="fa-solid fa-save mr-2"></i>保存信息
          </button>
          <button class="t-btn-secondary flex-1" @click="reExtract">
            <i class="fa-solid fa-redo mr-2"></i>重新识别
          </button>
        </div>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'

const router = useRouter()

interface ExtractedData {
  merchant: {
    name: string
    phone: string
    address: string
    license: string
  }
  contract: {
    amount: string
    date: string
    duration: string
    service: string
  }
  breach: {
    type: string
    description: string
  }
}

const extractedData = ref<ExtractedData>({
  merchant: {
    name: '北京某某健身有限公司',
    phone: '010-12345678',
    address: '北京市朝阳区xxx街道xxx号',
    license: '91110000MA01XXXXXX'
  },
  contract: {
    amount: '￥3,600元',
    date: '2024-01-15',
    duration: '12个月',
    service: '健身年卡服务'
  },
  breach: {
    type: '跑路',
    description: '健身房突然关门，负责人失联，会员无法继续享受服务'
  }
})

const saveExtractedData = () => {
  // 保存提取的数据
  console.log('保存提取的数据:', extractedData.value)
  router.push('/doc-generator')
}

const reExtract = () => {
  // 重新识别
  console.log('重新识别')
}
</script>