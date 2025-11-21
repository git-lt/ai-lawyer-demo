<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '案件详情',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const caseDetail = ref({
  id: 1,
  title: 'XX健身房预付款退款',
  caseNo: 'TQB20231121001',
  status: 'ongoing',
  statusText: '投诉已受理',
  statusColor: 'info',
  amount: 3000,
  merchant: 'XX健身服务有限公司',
  merchantContact: '400-123-4567',
  createTime: '2023-11-21 10:00',
  updateTime: '2023-11-21 14:30',
  progress: 60,
  daysElapsed: 1,
  estimatedDays: 7,
  description: '本人于2023年10月1日在该健身房办理年卡，支付3000元。现商家突然停业，拒不退还剩余款项。',
  evidence: [
    { type: '支付凭证', count: 1 },
    { type: '服务合同', count: 1 },
    { type: '沟通记录', count: 1 },
  ],
  documents: [
    { name: '12315投诉书', status: '已提交' },
  ],
})

const timeline = ref([
  {
    id: 1,
    title: '投诉已受理',
    desc: '12315平台已受理您的投诉，案件编号：TQB20231121001',
    time: '2023-11-21 14:30',
    status: 'completed',
  },
  {
    id: 2,
    title: '文书已生成',
    desc: 'AI已生成投诉书，并自动提交至12315平台',
    time: '2023-11-21 12:00',
    status: 'completed',
  },
  {
    id: 3,
    title: '证据已上传',
    desc: '已上传3份证据材料，AI分析完成',
    time: '2023-11-21 10:30',
    status: 'completed',
  },
  {
    id: 4,
    title: '案件已创建',
    desc: '开始维权流程',
    time: '2023-11-21 10:00',
    status: 'completed',
  },
])

const suggestions = [
  {
    icon: '📞',
    title: '保持电话畅通',
    desc: '12315平台可能会电话联系您核实情况',
  },
  {
    icon: '📱',
    title: '关注进度更新',
    desc: '我们会及时推送案件进度通知',
  },
  {
    icon: '💼',
    title: '准备补充材料',
    desc: '如需补充证据，请及时上传',
  },
]

function viewEvidence() {
  uni.navigateTo({ url: '/pages/evidence/manage' })
}

function viewDocument() {
  uni.navigateTo({ url: '/pages/document/generate' })
}

function contactSupport() {
  uni.showModal({
    title: '联系客服',
    content: '客服电话：400-888-8888\n工作时间：9:00-18:00',
    showCancel: false,
  })
}

function shareCase() {
  uni.showToast({ title: '分享功能开发中', icon: 'none' })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-6">
    <!-- Status Header -->
    <view class="mb-4 from-info to-primary bg-gradient-to-br px-6 py-8 text-white">
      <view class="mb-2 flex items-center justify-between">
        <view
          class="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur"
        >
          {{ caseDetail.statusText }}
        </view>
        <view class="text-xs opacity-90">
          案件编号：{{ caseDetail.caseNo }}
        </view>
      </view>

      <view class="mb-4 text-xl font-bold">
        {{ caseDetail.title }}
      </view>

      <view class="grid grid-cols-3 gap-3">
        <view class="text-center">
          <view class="mb-1 text-2xl font-bold">
            ¥{{ caseDetail.amount }}
          </view>
          <view class="text-xs opacity-90">
            涉及金额
          </view>
        </view>
        <view class="text-center">
          <view class="mb-1 text-2xl font-bold">
            {{ caseDetail.daysElapsed }}
          </view>
          <view class="text-xs opacity-90">
            已用时(天)
          </view>
        </view>
        <view class="text-center">
          <view class="mb-1 text-2xl font-bold">
            {{ caseDetail.progress }}%
          </view>
          <view class="text-xs opacity-90">
            完成度
          </view>
        </view>
      </view>
    </view>

    <!-- Basic Info -->
    <view class="mx-4 mb-4 rounded-card bg-bg-card p-4 shadow-sm">
      <view class="mb-4 text-base text-text-main font-semibold">
        基本信息
      </view>

      <view class="space-y-3">
        <view class="flex items-start">
          <view class="w-20 flex-shrink-0 text-sm text-text-sub">
            被投诉方
          </view>
          <view class="flex-1 text-sm text-text-main">
            {{ caseDetail.merchant }}
          </view>
        </view>

        <view class="flex items-start">
          <view class="w-20 flex-shrink-0 text-sm text-text-sub">
            联系方式
          </view>
          <view class="flex-1 text-sm text-primary">
            {{ caseDetail.merchantContact }}
          </view>
        </view>

        <view class="flex items-start">
          <view class="w-20 flex-shrink-0 text-sm text-text-sub">
            创建时间
          </view>
          <view class="flex-1 text-sm text-text-main">
            {{ caseDetail.createTime }}
          </view>
        </view>

        <view class="flex items-start">
          <view class="w-20 flex-shrink-0 text-sm text-text-sub">
            案情描述
          </view>
          <view class="flex-1 text-sm text-text-main leading-relaxed">
            {{ caseDetail.description }}
          </view>
        </view>
      </view>
    </view>

    <!-- Evidence & Documents -->
    <view class="grid grid-cols-2 mx-4 mb-4 gap-3">
      <view
        class="rounded-card bg-bg-card p-4 shadow-sm active:shadow"
        @click="viewEvidence"
      >
        <view class="mb-3 flex items-center justify-between">
          <view class="text-sm text-text-main font-medium">
            证据材料
          </view>
          <view class="i-carbon-chevron-right text-text-sub" />
        </view>
        <view
          v-for="item in caseDetail.evidence"
          :key="item.type"
          class="mb-1 text-xs text-text-sub last:mb-0"
        >
          {{ item.type }} × {{ item.count }}
        </view>
      </view>

      <view
        class="rounded-card bg-bg-card p-4 shadow-sm active:shadow"
        @click="viewDocument"
      >
        <view class="mb-3 flex items-center justify-between">
          <view class="text-sm text-text-main font-medium">
            法律文书
          </view>
          <view class="i-carbon-chevron-right text-text-sub" />
        </view>
        <view
          v-for="item in caseDetail.documents"
          :key="item.name"
          class="mb-1 text-xs text-text-sub last:mb-0"
        >
          {{ item.name }}
        </view>
      </view>
    </view>

    <!-- Timeline -->
    <view class="mx-4 mb-4 rounded-card bg-bg-card p-4 shadow-sm">
      <view class="mb-4 text-base text-text-main font-semibold">
        处理进度
      </view>

      <view class="relative">
        <view
          v-for="(item, index) in timeline"
          :key="item.id"
          class="relative flex pb-6 last:pb-0"
        >
          <!-- Timeline Line -->
          <view
            v-if="index < timeline.length - 1"
            class="absolute left-3 top-8 h-full w-0.5 bg-gray-200"
          />

          <!-- Timeline Dot -->
          <view
            class="relative z-10 mr-4 h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full"
            :class="item.status === 'completed' ? 'bg-success' : 'bg-gray-200'"
          >
            <view
              v-if="item.status === 'completed'"
              class="i-carbon-checkmark text-xs text-white"
            />
          </view>

          <!-- Timeline Content -->
          <view class="flex-1">
            <view class="mb-1 text-sm text-text-main font-medium">
              {{ item.title }}
            </view>
            <view class="mb-1 text-xs text-text-sub leading-relaxed">
              {{ item.desc }}
            </view>
            <view class="text-xs text-text-placeholder">
              {{ item.time }}
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- Suggestions -->
    <view class="mx-4 mb-4 rounded-card bg-primary-light/30 p-4">
      <view class="mb-3 text-sm text-text-main font-semibold">
        温馨提示
      </view>

      <view class="space-y-2">
        <view
          v-for="item in suggestions"
          :key="item.title"
          class="flex items-start"
        >
          <view class="mr-2 text-base">
            {{ item.icon }}
          </view>
          <view class="flex-1">
            <view class="mb-0.5 text-xs text-text-main font-medium">
              {{ item.title }}
            </view>
            <view class="text-xs text-text-sub">
              {{ item.desc }}
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- Actions -->
    <view class="grid grid-cols-2 mx-4 gap-3">
      <button
        class="border-2 border-primary rounded-btn bg-white py-3 text-sm text-primary font-medium active:bg-primary-light/30"
        @click="contactSupport"
      >
        <view class="i-carbon-chat mr-1 inline-block" />
        联系客服
      </button>
      <button
        class="border-2 border-info rounded-btn bg-white py-3 text-sm text-info font-medium active:bg-info/10"
        @click="shareCase"
      >
        <view class="i-carbon-share mr-1 inline-block" />
        分享案件
      </button>
    </view>
  </view>
</template>

<style scoped>
button {
  border: none;
  outline: none;
}

.space-y-3 > view + view {
  margin-top: 12px;
}

.space-y-2 > view + view {
  margin-top: 8px;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
</style>
