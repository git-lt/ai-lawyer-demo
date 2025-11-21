<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '我的案件',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const activeFilter = ref('all')

const filters = [
  { id: 'all', name: '全部', count: 3 },
  { id: 'ongoing', name: '进行中', count: 2 },
  { id: 'completed', name: '已完成', count: 1 },
]

const cases = ref([
  {
    id: 1,
    title: 'XX健身房预付款退款',
    caseNo: 'TQB20231121001',
    status: 'ongoing',
    statusText: '投诉已受理',
    statusColor: 'info',
    amount: 3000,
    merchant: 'XX健身服务有限公司',
    createTime: '2023-11-21 10:00',
    updateTime: '2023-11-21 14:30',
    progress: 60,
    nextStep: '等待12315平台调解',
    daysElapsed: 1,
    estimatedDays: 7,
  },
  {
    id: 2,
    title: '美容院会员卡退费',
    caseNo: 'TQB20231120002',
    status: 'ongoing',
    statusText: '证据审核中',
    statusColor: 'warning',
    amount: 5000,
    merchant: 'XX美容美发店',
    createTime: '2023-11-20 15:30',
    updateTime: '2023-11-21 09:00',
    progress: 40,
    nextStep: '补充沟通记录证据',
    daysElapsed: 2,
    estimatedDays: 10,
  },
  {
    id: 3,
    title: '教育培训机构退款',
    caseNo: 'TQB20231115003',
    status: 'completed',
    statusText: '维权成功',
    statusColor: 'success',
    amount: 8000,
    merchant: 'XX教育科技有限公司',
    createTime: '2023-11-15 10:00',
    updateTime: '2023-11-20 16:00',
    progress: 100,
    result: '已退款 ¥8000',
    daysElapsed: 6,
    estimatedDays: 14,
  },
])

const filteredCases = computed(() => {
  if (activeFilter.value === 'all')
    return cases.value
  return cases.value.filter(c => c.status === activeFilter.value)
})

const stats = computed(() => {
  return {
    total: cases.value.length,
    ongoing: cases.value.filter(c => c.status === 'ongoing').length,
    completed: cases.value.filter(c => c.status === 'completed').length,
    totalAmount: cases.value.reduce((sum, c) => sum + c.amount, 0),
    successRate: cases.value.length > 0
      ? Math.round((cases.value.filter(c => c.status === 'completed').length / cases.value.length) * 100)
      : 0,
  }
})

function viewCaseDetail(caseItem: any) {
  uni.navigateTo({
    url: `/pages/case-detail/index?id=${caseItem.id}`,
  })
}

function createNewCase() {
  uni.navigateTo({ url: '/pages/consult/index' })
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'ongoing':
      return 'i-carbon-in-progress'
    case 'completed':
      return 'i-carbon-checkmark-filled'
    default:
      return 'i-carbon-document'
  }
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-20">
    <!-- Stats Cards -->
    <view class="mb-4 from-primary to-success bg-gradient-to-br px-6 py-6 text-white">
      <view class="mb-4 text-lg font-semibold">
        案件统计
      </view>
      <view class="grid grid-cols-3 gap-3">
        <view class="rounded-card bg-white/20 p-3 text-center backdrop-blur">
          <view class="mb-1 text-2xl font-bold">
            {{ stats.total }}
          </view>
          <view class="text-xs opacity-90">
            总案件数
          </view>
        </view>
        <view class="rounded-card bg-white/20 p-3 text-center backdrop-blur">
          <view class="mb-1 text-2xl font-bold">
            {{ stats.ongoing }}
          </view>
          <view class="text-xs opacity-90">
            进行中
          </view>
        </view>
        <view class="rounded-card bg-white/20 p-3 text-center backdrop-blur">
          <view class="mb-1 text-2xl font-bold">
            {{ stats.successRate }}%
          </view>
          <view class="text-xs opacity-90">
            成功率
          </view>
        </view>
      </view>
    </view>

    <!-- Filters -->
    <view class="sticky top-0 z-10 border-b border-border bg-bg-card px-4 py-3">
      <view class="flex gap-2">
        <view
          v-for="filter in filters"
          :key="filter.id"
          class="whitespace-nowrap rounded-btn px-4 py-2 text-sm font-medium transition-colors"
          :class="activeFilter === filter.id
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-text-sub'"
          @click="activeFilter = filter.id"
        >
          {{ filter.name }}
          <text
            v-if="filter.count > 0"
            class="ml-1"
          >
            ({{ filter.count }})
          </text>
        </view>
      </view>
    </view>

    <!-- Cases List -->
    <view
      v-if="filteredCases.length > 0"
      class="px-4 py-4 space-y-3"
    >
      <view
        v-for="caseItem in filteredCases"
        :key="caseItem.id"
        class="rounded-card bg-bg-card p-4 shadow-sm active:shadow"
        @click="viewCaseDetail(caseItem)"
      >
        <!-- Header -->
        <view class="mb-3 flex items-start justify-between">
          <view class="flex-1">
            <view class="mb-1 text-base text-text-main font-medium">
              {{ caseItem.title }}
            </view>
            <view class="text-xs text-text-sub">
              案件编号：{{ caseItem.caseNo }}
            </view>
          </view>
          <view
            class="ml-3 flex-shrink-0 rounded-full px-3 py-1 text-xs"
            :class="{
              'bg-info/10 text-info': caseItem.statusColor === 'info',
              'bg-warning/10 text-warning': caseItem.statusColor === 'warning',
              'bg-success/10 text-success': caseItem.statusColor === 'success',
            }"
          >
            {{ caseItem.statusText }}
          </view>
        </view>

        <!-- Info Grid -->
        <view class="grid grid-cols-2 mb-3 gap-2">
          <view class="rounded-xl bg-bg-page px-3 py-2">
            <view class="mb-1 text-xs text-text-sub">
              涉及金额
            </view>
            <view class="text-sm text-secondary font-bold">
              ¥ {{ caseItem.amount }}
            </view>
          </view>
          <view class="rounded-xl bg-bg-page px-3 py-2">
            <view class="mb-1 text-xs text-text-sub">
              已用时/预计
            </view>
            <view class="text-sm text-text-main font-bold">
              {{ caseItem.daysElapsed }}/{{ caseItem.estimatedDays }}天
            </view>
          </view>
        </view>

        <!-- Progress -->
        <view
          v-if="caseItem.status === 'ongoing'"
          class="mb-3"
        >
          <view class="mb-2 flex items-center justify-between">
            <view class="text-xs text-text-sub">
              进度
            </view>
            <view class="text-xs text-primary">
              {{ caseItem.progress }}%
            </view>
          </view>
          <view class="relative h-2 overflow-hidden rounded-full bg-gray-100">
            <view
              class="absolute left-0 top-0 h-full rounded-full from-primary to-success bg-gradient-to-r transition-all"
              :style="{ width: `${caseItem.progress}%` }"
            />
          </view>
        </view>

        <!-- Next Step / Result -->
        <view class="flex items-start rounded-xl bg-primary-light/30 px-3 py-2">
          <view
            class="mr-2 text-base"
            :class="[
              caseItem.status === 'completed' ? 'text-success' : 'text-primary',
              getStatusIcon(caseItem.status),
            ]"
          />
          <view class="flex-1">
            <view class="mb-1 text-xs text-text-main font-medium">
              {{ caseItem.status === 'completed' ? '维权结果' : '下一步' }}
            </view>
            <view class="text-xs text-text-sub">
              {{ caseItem.status === 'completed' ? caseItem.result : caseItem.nextStep }}
            </view>
          </view>
          <view class="i-carbon-chevron-right ml-2 text-text-sub" />
        </view>

        <!-- Footer -->
        <view class="mt-3 flex items-center justify-between border-t border-border pt-3">
          <view class="text-xs text-text-sub">
            更新于 {{ caseItem.updateTime }}
          </view>
        </view>
      </view>
    </view>

    <!-- Empty State -->
    <view
      v-else
      class="flex flex-col items-center justify-center py-20"
    >
      <view class="mb-4 h-32 w-32 flex items-center justify-center rounded-full bg-primary-light/30">
        <view class="i-carbon-folder-off text-6xl text-primary" />
      </view>
      <view class="mb-2 text-base text-text-main font-medium">
        暂无案件
      </view>
      <view class="mb-6 text-sm text-text-sub">
        开始您的第一个维权案件吧
      </view>
      <button
        class="rounded-btn bg-primary px-8 py-3 text-sm text-white font-medium shadow active:bg-primary-hover"
        @click="createNewCase"
      >
        创建新案件
      </button>
    </view>

    <!-- FAB -->
    <view
      v-if="filteredCases.length > 0"
      class="safe-area-inset-bottom fixed bottom-24 right-6"
    >
      <view
        class="h-14 w-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg active:bg-primary-hover"
        @click="createNewCase"
      >
        <view class="i-carbon-add text-2xl" />
      </view>
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
