<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '退钱吧',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const successCases = ref([
  { title: '健身房预付款成功退款', amount: 3000, days: 7 },
  { title: '美容院会员卡退费', amount: 5000, days: 10 },
  { title: '教育培训机构退款', amount: 8000, days: 14 },
])

const currentCaseIndex = ref(0)

const commonIssues = [
  { icon: '🏋️', title: '健身房跑路', desc: '年卡退费、私教课退款', count: '1234' },
  { icon: '💇', title: '美容美发', desc: '充值卡退费、服务纠纷', count: '856' },
  { icon: '📚', title: '教育培训', desc: '课程退费、机构倒闭', count: '672' },
  { icon: '🏊', title: '游泳馆', desc: '次卡退费、会员权益', count: '423' },
]

const processSteps = [
  { icon: 'i-carbon-bot', title: 'AI咨询', desc: '描述问题' },
  { icon: 'i-carbon-upload', title: '上传证据', desc: '拍照上传' },
  { icon: 'i-carbon-document-add', title: '生成文书', desc: 'AI生成' },
  { icon: 'i-carbon-send', title: '提交投诉', desc: '一键提交' },
]

function goToConsult() {
  uni.navigateTo({ url: '/pages/consult/index' })
}

function goToMyCases() {
  uni.switchTab({ url: '/pages/my-cases/index' })
}

function goToEvidenceGuide() {
  uni.navigateTo({ url: '/pages/evidence/guide' })
}

function handleCommonIssue(issue: any) {
  uni.navigateTo({
    url: `/pages/consult/index?question=${encodeURIComponent(`${issue.title}不退费怎么办？`)}`,
  })
}

// Auto rotate success cases
onMounted(() => {
  setInterval(() => {
    currentCaseIndex.value = (currentCaseIndex.value + 1) % successCases.value.length
  }, 3000)
})
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-20">
    <!-- Hero Section -->
    <view class="mb-4 from-primary to-success bg-gradient-to-br px-6 py-8 text-white">
      <view class="mb-2 text-2xl font-bold">
        退钱吧
      </view>
      <view class="mb-6 text-sm leading-relaxed opacity-90">
        专注预付款纠纷维权
        <br>
        AI智能指引 · 30分钟完成维权
      </view>

      <!-- Quick Consult Input -->
      <view
        class="rounded-btn bg-white/95 p-4 shadow-lg backdrop-blur active:bg-white"
        @click="goToConsult"
      >
        <view class="flex items-center">
          <view class="i-carbon-bot mr-3 text-2xl text-primary" />
          <view class="flex-1 text-sm text-text-sub">
            遇到什么问题了？例如：健身房关门不退费
          </view>
          <view class="i-carbon-chevron-right text-text-sub" />
        </view>
      </view>
    </view>

    <!-- Success Case Carousel -->
    <view class="mb-4 px-4">
      <view class="border-2 border-success/20 rounded-card bg-success/10 p-4">
        <view class="mb-2 flex items-center">
          <view class="mr-2 text-lg">
            ✨
          </view>
          <view class="text-sm text-success font-semibold">
            最新成功案例
          </view>
        </view>
        <view class="mb-1 text-sm text-text-main font-medium">
          {{ successCases[currentCaseIndex].title }}
        </view>
        <view class="text-xs text-text-sub">
          成功追回 ¥{{ successCases[currentCaseIndex].amount }} · 用时{{ successCases[currentCaseIndex].days }}天
        </view>
      </view>
    </view>

    <!-- Process Steps -->
    <view class="mb-4 px-4">
      <view class="mb-3 px-2 text-base text-text-main font-semibold">
        维权流程
      </view>
      <view class="rounded-card bg-bg-card p-5 shadow-sm">
        <view class="relative flex items-start justify-between">
          <view
            v-for="(step, index) in processSteps"
            :key="index"
            class="flex flex-1 flex-col items-center"
          >
            <view class="mb-2 h-12 w-12 flex items-center justify-center rounded-full bg-primary-light">
              <view
                class="text-xl text-primary"
                :class="step.icon"
              />
            </view>
            <view class="mb-1 text-center text-xs text-text-main font-medium">
              {{ step.title }}
            </view>
            <view class="text-center text-2xs text-text-sub">
              {{ step.desc }}
            </view>
            <view
              v-if="index < processSteps.length - 1"
              class="absolute top-6 h-0.5 w-8 bg-primary-light"
              :style="{ left: `${(index + 0.5) * 100 / processSteps.length}%` }"
            />
          </view>
        </view>
      </view>
    </view>

    <!-- Common Issues -->
    <view class="mb-4 px-4">
      <view class="mb-3 px-2 text-base text-text-main font-semibold">
        常见纠纷类型
      </view>
      <view class="space-y-3">
        <view
          v-for="issue in commonIssues"
          :key="issue.title"
          class="flex items-center rounded-card bg-bg-card p-4 shadow-sm active:shadow-md"
          @click="handleCommonIssue(issue)"
        >
          <view class="mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-bg-page text-xl">
            {{ issue.icon }}
          </view>
          <view class="flex-1">
            <view class="mb-1 text-sm text-text-main font-medium">
              {{ issue.title }}
            </view>
            <view class="text-xs text-text-sub">
              {{ issue.desc }}
            </view>
          </view>
          <view class="flex items-center">
            <view class="mr-2 text-xs text-text-sub">
              {{ issue.count }}人已维权
            </view>
            <view class="i-carbon-chevron-right text-text-sub" />
          </view>
        </view>
      </view>
    </view>

    <!-- Quick Actions -->
    <view class="mb-4 px-4">
      <view class="mb-3 px-2 text-base text-text-main font-semibold">
        快速入口
      </view>
      <view class="grid grid-cols-2 gap-3">
        <view
          class="flex flex-col items-center justify-center rounded-card bg-bg-card p-5 shadow-sm active:shadow"
          @click="goToMyCases"
        >
          <view class="mb-3 h-12 w-12 flex items-center justify-center rounded-full bg-primary-light">
            <view class="i-carbon-folder text-2xl text-primary" />
          </view>
          <view class="text-text-main font-medium">
            我的案件
          </view>
          <view class="mt-1 text-xs text-text-sub">
            查看进度
          </view>
        </view>

        <view
          class="flex flex-col items-center justify-center rounded-card bg-bg-card p-5 shadow-sm active:shadow"
          @click="goToEvidenceGuide"
        >
          <view class="mb-3 h-12 w-12 flex items-center justify-center rounded-full from-secondary to-warning bg-gradient-to-br">
            <view class="i-carbon-upload text-2xl text-white" />
          </view>
          <view class="text-text-main font-medium">
            证据搜集
          </view>
          <view class="mt-1 text-xs text-text-sub">
            准备材料
          </view>
        </view>
      </view>
    </view>

    <!-- Legal Knowledge -->
    <view class="mb-4 px-4">
      <view class="mb-3 px-2 text-base text-text-main font-semibold">
        法律知识
      </view>
      <view class="rounded-card bg-bg-card p-4 shadow-sm">
        <view class="flex items-start">
          <view class="mr-3 text-2xl">
            📖
          </view>
          <view class="flex-1">
            <view class="mb-2 text-sm text-text-main font-medium">
              《消费者权益保护法》第五十三条
            </view>
            <view class="text-xs text-text-sub leading-relaxed">
              经营者以预收款方式提供商品或者服务的，应当按照约定提供。未按照约定提供的，应当按照消费者的要求履行约定或者退回预付款...
            </view>
            <view class="mt-2 text-xs text-primary">
              查看更多 →
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- CTA Button -->
    <view class="fixed bottom-20 left-0 right-0 px-6 pb-4">
      <button
        class="w-full flex items-center justify-center rounded-btn from-primary to-success bg-gradient-to-r py-4 text-base text-white font-bold shadow-lg active:opacity-90"
        @click="goToConsult"
      >
        <view class="i-carbon-bot mr-2 text-xl" />
        立即开始维权
      </button>
    </view>
  </view>
</template>

<style scoped>
button {
  border: none;
  outline: none;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
</style>
