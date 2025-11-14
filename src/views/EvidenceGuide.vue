<template>
  <div>
    <AppHeader title="证据指引" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="font-semibold mb-4">证据指引</div>
        <div class="text-gray-600 mb-4">
          根据您的咨询内容，我们为您推荐需要收集的证据类型
        </div>
        
        <!-- 证据清单 -->
        <div class="space-y-3">
          <div 
            v-for="item in evidenceList" 
            :key="item.id"
            class="border rounded-lg p-3"
          >
            <div class="flex items-center justify-between mb-2">
              <div class="font-medium">{{ item.title }}</div>
              <label class="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="item.checked"
                  class="mr-2"
                  @change="updateProgress"
                >
                <span class="text-sm text-gray-500">已收集</span>
              </label>
            </div>
            <div class="text-sm text-gray-600 mb-2">{{ item.description }}</div>
            <div class="flex flex-wrap gap-1">
              <span 
                v-for="example in item.examples" 
                :key="example"
                class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {{ example }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- 进度条 -->
        <div class="mt-4">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-semibold">收集进度</span>
            <span class="text-sm text-gray-500">{{ collectedCount }}/{{ totalCount }}</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-2 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
        </div>
        
        <!-- 操作按钮 -->
        <div class="grid grid-cols-2 gap-2 mt-4">
          <router-link to="/evidence-upload" class="t-btn-primary">
            <i class="fa-solid fa-upload mr-2"></i>上传证据
          </router-link>
          <router-link to="/consult" class="t-btn-secondary">
            <i class="fa-solid fa-arrow-left mr-2"></i>返回咨询
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
  title: string
  description: string
  examples: string[]
  checked: boolean
}

const evidenceList = ref<EvidenceItem[]>([
  {
    id: '1',
    title: '合同协议',
    description: '与商家签订的正式合同或协议文件',
    examples: ['会员合同', '服务协议', '收据发票'],
    checked: false
  },
  {
    id: '2',
    title: '付款凭证',
    description: '所有付款的相关凭证和记录',
    examples: ['银行转账', '支付宝记录', '微信付款', 'POS小票'],
    checked: false
  },
  {
    id: '3',
    title: '沟通记录',
    description: '与商家的所有沟通记录',
    examples: ['微信聊天', '短信记录', '电话录音', '邮件往来'],
    checked: false
  },
  {
    id: '4',
    title: '服务证明',
    description: '证明服务未按约定提供的证据',
    examples: ['门店照片', '停业公告', '服务对比', '证人证言'],
    checked: false
  },
  {
    id: '5',
    title: '身份证明',
    description: '个人身份相关证明文件',
    examples: ['身份证复印件', '营业执照', '居住证明'],
    checked: false
  }
])

const collectedCount = computed(() => 
  evidenceList.value.filter(item => item.checked).length
)

const totalCount = computed(() => evidenceList.value.length)

const progress = computed(() => 
  totalCount.value > 0 ? Math.round((collectedCount.value / totalCount.value) * 100) : 0
)

const updateProgress = () => {
  // 进度自动更新通过 computed 属性
}
</script>