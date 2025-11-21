<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '证据管理',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const activeTab = ref('all')

const tabs = [
  { id: 'all', name: '全部', count: 3 },
  { id: 'payment', name: '交易凭证', count: 1 },
  { id: 'contract', name: '合同协议', count: 1 },
  { id: 'communication', name: '沟通记录', count: 1 },
]

const evidenceItems = ref([
  {
    id: 1,
    type: 'payment',
    name: '微信支付账单.jpg',
    status: 'valid',
    uploadTime: '2023-11-21 10:30',
    size: '2.3 MB',
    info: {
      amount: '¥ 3000.00',
      date: '2023-10-01',
      merchant: 'XX健身服务有限公司',
      orderNo: '202310010001',
    },
    aiAnalysis: {
      confidence: 95,
      issues: [],
      suggestions: ['证据清晰有效，建议保留原始文件'],
    },
  },
  {
    id: 2,
    type: 'contract',
    name: '健身服务合同.pdf',
    status: 'valid',
    uploadTime: '2023-11-21 10:35',
    size: '1.8 MB',
    info: {
      period: '2023-10-01 至 2024-10-01',
      service: '年度健身会员',
      partyA: 'XX健身服务有限公司',
      partyB: '张三',
    },
    aiAnalysis: {
      confidence: 90,
      issues: [],
      suggestions: ['合同包含退款条款，对维权有利'],
    },
  },
  {
    id: 3,
    type: 'communication',
    name: '微信聊天记录.jpg',
    status: 'warning',
    uploadTime: '2023-11-21 10:40',
    size: '1.2 MB',
    info: {
      date: '2023-11-15',
      content: '商家拒绝退款',
    },
    aiAnalysis: {
      confidence: 75,
      issues: ['时间信息不够清晰'],
      suggestions: ['建议补充完整的聊天记录截图，包含时间戳'],
    },
  },
])

const filteredItems = computed(() => {
  if (activeTab.value === 'all')
    return evidenceItems.value
  return evidenceItems.value.filter(item => item.type === activeTab.value)
})

const analysisResult = computed(() => {
  const validCount = evidenceItems.value.filter(item => item.status === 'valid').length
  const totalCount = evidenceItems.value.length
  const avgConfidence = Math.round(
    evidenceItems.value.reduce((sum, item) => sum + item.aiAnalysis.confidence, 0) / totalCount,
  )

  return {
    validCount,
    totalCount,
    avgConfidence,
    isComplete: validCount >= 2, // 至少需要支付凭证和合同
  }
})

function previewEvidence(item: any) {
  uni.showModal({
    title: item.name,
    content: `上传时间：${item.uploadTime}\n文件大小：${item.size}\nAI置信度：${item.aiAnalysis.confidence}%`,
    showCancel: false,
  })
}

function deleteEvidence(item: any) {
  uni.showModal({
    title: '删除证据',
    content: '确定要删除这份证据吗？',
    confirmText: '删除',
    confirmColor: '#FF7675',
    success: (res) => {
      if (res.confirm) {
        const index = evidenceItems.value.findIndex(e => e.id === item.id)
        if (index > -1) {
          evidenceItems.value.splice(index, 1)
          uni.showToast({ title: '已删除', icon: 'success' })
        }
      }
    },
  })
}

function goToGenerateDoc() {
  if (!analysisResult.value.isComplete) {
    uni.showModal({
      title: '提示',
      content: '建议至少上传支付凭证和合同协议后再生成文书，是否继续？',
      confirmText: '继续',
      cancelText: '返回',
      success: (res) => {
        if (res.confirm) {
          uni.navigateTo({ url: '/pages/document/generate' })
        }
      },
    })
  }
  else {
    uni.navigateTo({ url: '/pages/document/generate' })
  }
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-28">
    <!-- Tabs -->
    <view class="sticky top-0 z-10 bg-bg-page/95 px-4 py-2 backdrop-blur-sm">
      <scroll-view
        scroll-x
        class="whitespace-nowrap"
        :show-scrollbar="false"
      >
        <view class="flex items-center gap-4 py-2">
          <view
            v-for="tab in tabs"
            :key="tab.id"
            class="relative flex flex-col items-center px-2 transition-all"
            @click="activeTab = tab.id"
          >
            <view
              class="mb-1 text-sm font-medium transition-colors"
              :class="activeTab === tab.id ? 'text-text-main scale-105' : 'text-text-sub'"
            >
              {{ tab.name }}
              <text
                v-if="tab.count > 0"
                class="ml-0.5 text-xs"
                :class="activeTab === tab.id ? 'text-primary' : 'text-text-sub'"
              >
                {{ tab.count }}
              </text>
            </view>
            <!-- Active Indicator -->
            <view
              class="h-1 w-6 rounded-full transition-all"
              :class="activeTab === tab.id ? 'bg-primary' : 'bg-transparent'"
            />
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- AI Analysis Summary -->
    <view class="mx-4 mb-6 mt-2">
      <view class="relative overflow-hidden rounded-2xl from-primary/5 to-success/5 bg-gradient-to-br p-5 shadow-sm">
        <!-- Decorative Background -->
        <view class="absolute h-24 w-24 rounded-full bg-primary/5 blur-2xl -right-4 -top-4" />
        <view class="absolute h-20 w-20 rounded-full bg-success/5 blur-xl -bottom-4 -left-4" />

        <view class="relative flex items-start">
          <view class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-sm">
            <view class="text-2xl">
              🤖
            </view>
          </view>
          <view class="flex-1">
            <view class="mb-1 flex items-center justify-between">
              <view class="text-base text-text-main font-bold">
                AI分析结果
              </view>
              <view class="rounded-full bg-white px-2 py-0.5 text-xs text-primary font-medium shadow-sm">
                置信度 {{ analysisResult.avgConfidence }}%
              </view>
            </view>
            <view class="mb-3 text-xs text-text-sub leading-relaxed">
              证据链{{ analysisResult.isComplete ? '完整' : '不完整' }}，
              有效证据 <text class="text-text-main font-medium">{{ analysisResult.validCount }}</text>/{{ analysisResult.totalCount }}
            </view>

            <view
              v-if="analysisResult.isComplete"
              class="flex items-center text-sm text-success font-medium"
            >
              <view class="i-carbon-checkmark-filled mr-1.5" />
              可以生成投诉文书
            </view>
            <view
              v-else
              class="flex items-center text-sm text-warning font-medium"
            >
              <view class="i-carbon-warning-filled mr-1.5" />
              建议补充更多证据
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- Evidence List -->
    <view class="px-4 space-y-4">
      <view
        v-for="item in filteredItems"
        :key="item.id"
        class="overflow-hidden rounded-2xl bg-bg-card shadow-sm transition-shadow active:shadow-md"
      >
        <!-- Card Header -->
        <view class="flex items-start p-4 pb-3">
          <!-- File Icon -->
          <view class="mr-4 h-12 w-12 flex flex-shrink-0 items-center justify-center rounded-xl bg-bg-page">
            <view
              class="text-2xl"
              :class="item.type === 'payment' ? 'i-carbon-receipt text-warning'
                : item.type === 'contract' ? 'i-carbon-document-signed text-primary'
                  : 'i-carbon-chat text-info'"
            />
          </view>

          <view class="min-w-0 flex-1">
            <view class="mb-1 flex items-start justify-between">
              <view class="mr-2 truncate text-base text-text-main font-medium">
                {{ item.name }}
              </view>
              <view
                class="flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                :class="item.status === 'valid'
                  ? 'bg-success/10 text-success'
                  : 'bg-warning/10 text-warning'"
              >
                {{ item.status === 'valid' ? '有效' : '待补充' }}
              </view>
            </view>
            <view class="flex items-center text-xs text-text-sub">
              <text class="mr-2">{{ tabs.find(t => t.id === item.type)?.name }}</text>
              <text class="mr-2">·</text>
              <text>{{ item.uploadTime }}</text>
            </view>
          </view>
        </view>

        <!-- AI Info Card -->
        <view class="mx-4 mb-4 rounded-xl bg-bg-page p-3">
          <view class="mb-2 flex items-center justify-between border-b border-border/50 pb-2">
            <view class="flex items-center text-xs text-text-main font-medium">
              <view class="i-carbon-magic-wand-filled mr-1 text-primary" />
              AI识别信息
            </view>
            <view class="text-xs text-text-sub">
              置信度 {{ item.aiAnalysis.confidence }}%
            </view>
          </view>

          <view class="grid grid-cols-1 gap-1.5">
            <view
              v-for="(value, key) in item.info"
              :key="key"
              class="flex items-start text-xs"
            >
              <text class="w-14 flex-shrink-0 text-text-sub">
                {{ key === 'amount' ? '金额' : key === 'date' ? '时间' : key === 'merchant' ? '商户' : key === 'period' ? '期限' : key === 'service' ? '服务' : key === 'orderNo' ? '订单号' : key === 'partyA' ? '甲方' : key === 'partyB' ? '乙方' : key === 'content' ? '内容' : key }}
              </text>
              <text class="flex-1 text-text-main">{{ value }}</text>
            </view>
          </view>
        </view>

        <!-- Suggestions -->
        <view
          v-if="item.aiAnalysis.suggestions.length > 0"
          class="mx-4 mb-4 flex items-start rounded-lg bg-warning/5 p-2.5"
        >
          <view class="mr-2 mt-0.5 text-sm">
            💡
          </view>
          <view class="text-xs text-text-sub leading-relaxed">
            {{ item.aiAnalysis.suggestions[0] }}
          </view>
        </view>

        <!-- Actions Footer -->
        <view class="flex border-t border-border">
          <view
            class="flex flex-1 items-center justify-center py-3 text-sm text-text-sub font-medium active:bg-gray-50"
            @click="previewEvidence(item)"
          >
            <view class="i-carbon-view mr-1.5 text-lg" />
            查看
          </view>
          <view class="h-full w-px bg-border" />
          <view
            class="flex flex-1 items-center justify-center py-3 text-sm text-error font-medium active:bg-error/5"
            @click="deleteEvidence(item)"
          >
            <view class="i-carbon-trash-can mr-1.5 text-lg" />
            删除
          </view>
        </view>
      </view>

      <!-- Empty State -->
      <view
        v-if="filteredItems.length === 0"
        class="flex flex-col items-center justify-center py-20"
      >
        <view class="mb-4 h-24 w-24 flex items-center justify-center rounded-full bg-bg-card shadow-sm">
          <view class="i-carbon-document-add text-4xl text-primary/40" />
        </view>
        <view class="text-sm text-text-sub">
          暂无证据，请先上传
        </view>
      </view>
    </view>

    <!-- Fixed Bottom Button -->
    <view class="safe-area-inset-bottom fixed bottom-0 left-0 right-0 border-t border-border bg-white/90 px-6 py-4 backdrop-blur-md">
      <button
        class="w-full rounded-xl bg-primary py-3.5 text-base text-white font-medium shadow-lg shadow-primary/30 transition-all active:scale-[0.98] active:shadow-none"
        @click="goToGenerateDoc"
      >
        生成文书
      </button>
    </view>
  </view>
</template>

<style scoped>
button {
  border: none;
  outline: none;
}

.space-y-4 > view + view {
  margin-top: 16px;
}

/* Hide scrollbar for Chrome/Safari/Webkit */
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
</style>
