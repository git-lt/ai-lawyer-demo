<template>
  <div>
    <AppHeader title="企业查询" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <!-- 搜索区域 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">企业信息查询</div>
        <div class="text-sm text-gray-600 mb-4">
          查询企业注册信息、经营状况、风险记录等
        </div>
        
        <div class="flex gap-2 mb-4">
          <input 
            v-model="searchKeyword"
            placeholder="请输入企业名称或统一社会信用代码"
            class="t-input flex-1"
          >
          <button 
            class="t-btn-primary px-4"
            @click="searchCompany"
          >
            查询
          </button>
        </div>
        
        <!-- 热门搜索 -->
        <div>
          <div class="text-sm text-gray-500 mb-2">热门搜索：</div>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="company in hotCompanies" 
              :key="company"
              class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded cursor-pointer hover:bg-gray-200"
              @click="searchKeyword = company"
            >
              {{ company }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- 查询结果 -->
      <div v-if="searchResult" class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="flex justify-between items-start mb-4">
          <div>
            <div class="font-semibold text-lg">{{ searchResult.name }}</div>
            <div class="text-sm text-gray-500">统一社会信用代码：{{ searchResult.creditCode }}</div>
          </div>
          <div 
            class="text-xs px-2 py-1 rounded"
            :class="getRiskClass(searchResult.riskLevel)"
          >
            {{ getRiskText(searchResult.riskLevel) }}
          </div>
        </div>
        
        <!-- 基本信息 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div class="border rounded-lg p-3">
            <div class="text-sm text-gray-500 mb-1">法定代表人</div>
            <div class="font-medium">{{ searchResult.legalRep }}</div>
          </div>
          <div class="border rounded-lg p-3">
            <div class="text-sm text-gray-500 mb-1">注册资本</div>
            <div class="font-medium">{{ searchResult.registeredCapital }}</div>
          </div>
          <div class="border rounded-lg p-3">
            <div class="text-sm text-gray-500 mb-1">成立日期</div>
            <div class="font-medium">{{ searchResult.establishDate }}</div>
          </div>
          <div class="border rounded-lg p-3">
            <div class="text-sm text-gray-500 mb-1">企业状态</div>
            <div class="font-medium">{{ searchResult.status }}</div>
          </div>
        </div>
        
        <!-- 详细信息 -->
        <div class="border rounded-lg p-3 mb-4">
          <div class="font-medium mb-2">注册地址</div>
          <div class="text-sm text-gray-600">{{ searchResult.address }}</div>
        </div>
        
        <!-- 经营范围 -->
        <div class="border rounded-lg p-3 mb-4">
          <div class="font-medium mb-2">经营范围</div>
          <div class="text-sm text-gray-600">{{ searchResult.businessScope }}</div>
        </div>
        
        <!-- 风险信息 -->
        <div class="border rounded-lg p-3">
          <div class="font-medium mb-3">风险信息</div>
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-sm">行政处罚</span>
              <span class="text-sm font-medium">{{ searchResult.penalties }} 次</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">经营异常</span>
              <span class="text-sm font-medium">{{ searchResult.abnormalOperations }} 次</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">司法风险</span>
              <span class="text-sm font-medium">{{ searchResult.judicialRisks }} 次</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">投诉记录</span>
              <span class="text-sm font-medium">{{ searchResult.complaints }} 次</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 增值服务 -->
      <div v-if="searchResult" class="bg-white rounded-xl border shadow-sm p-4">
        <div class="font-semibold mb-4">增值服务</div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button 
            class="t-btn-primary"
            @click="generateReport"
          >
            <i class="fa-solid fa-file-pdf mr-2"></i>生成风险报告
          </button>
          <button 
            class="t-btn-secondary"
            @click="viewSimilarCases"
          >
            <i class="fa-solid fa-search mr-2"></i>查看相似案例
          </button>
        </div>
        
        <div class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div class="flex items-center mb-2">
            <i class="fas fa-exclamation-triangle text-yellow-600 mr-2"></i>
            <div class="font-medium text-yellow-800">风险提示</div>
          </div>
          <div class="text-sm text-yellow-700">
            该企业存在{{ searchResult.riskLevel === 'high' ? '较高' : searchResult.riskLevel === 'medium' ? '中等' : '较低' }}风险，
            建议谨慎消费，保留好相关凭证。
          </div>
        </div>
      </div>
      
      <!-- 空状态 -->
      <div v-if="!searchResult && !searching" class="bg-white rounded-xl border shadow-sm p-8 text-center">
        <i class="fas fa-building text-4xl text-gray-300 mb-4"></i>
        <div class="text-gray-500 mb-2">请输入企业名称进行查询</div>
        <div class="text-sm text-gray-400">查询企业注册信息、风险记录等</div>
      </div>
      
      <!-- 搜索中状态 -->
      <div v-if="searching" class="bg-white rounded-xl border shadow-sm p-8 text-center">
        <i class="fas fa-spinner fa-spin text-2xl text-blue-500 mb-4"></i>
        <div class="text-gray-500">正在查询中...</div>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'

interface CompanyInfo {
  name: string
  creditCode: string
  legalRep: string
  registeredCapital: string
  establishDate: string
  status: string
  address: string
  businessScope: string
  riskLevel: 'low' | 'medium' | 'high'
  penalties: number
  abnormalOperations: number
  judicialRisks: number
  complaints: number
}

const searchKeyword = ref('')
const searching = ref(false)
const searchResult = ref<CompanyInfo | null>(null)

const hotCompanies = ref([
  '某某健身有限公司',
  '某某教育科技有限公司',
  '某某美容美发有限公司',
  '某某游泳俱乐部'
])

const searchCompany = async () => {
  if (!searchKeyword.value.trim()) {
    alert('请输入企业名称或统一社会信用代码')
    return
  }
  
  searching.value = true
  
  // 模拟搜索延迟
  setTimeout(() => {
    searchResult.value = {
      name: searchKeyword.value,
      creditCode: '91110000MA01XXXXXX',
      legalRep: '张某某',
      registeredCapital: '100万元',
      establishDate: '2020-05-15',
      status: '存续',
      address: '北京市朝阳区建国路88号SOHO现代城A座1205室',
      businessScope: '健身服务；体育运动项目经营（高危险性体育项目除外）；销售体育用品、服装、鞋帽；健康咨询（不含诊疗服务）；企业管理咨询。',
      riskLevel: 'medium',
      penalties: 2,
      abnormalOperations: 1,
      judicialRisks: 3,
      complaints: 15
    }
    searching.value = false
  }, 1500)
}

const getRiskClass = (level: string) => {
  switch (level) {
    case 'low':
      return 'bg-green-100 text-green-600'
    case 'medium':
      return 'bg-yellow-100 text-yellow-600'
    case 'high':
      return 'bg-red-100 text-red-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getRiskText = (level: string) => {
  switch (level) {
    case 'low':
      return '低风险'
    case 'medium':
      return '中等风险'
    case 'high':
      return '高风险'
    default:
      return '未知'
  }
}

const generateReport = () => {
  console.log('生成风险报告')
  alert('风险报告生成中，请稍候...')
}

const viewSimilarCases = () => {
  console.log('查看相似案例')
  alert('正在查找相似案例...')
}
</script>