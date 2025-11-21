<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '个人中心',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const userInfo = ref({
  avatar: '',
  nickname: '张三',
  phone: '138****0000',
  vipLevel: '普通会员',
  joinDays: 15,
})

const stats = ref([
  { label: '进行中', value: 2, color: 'info', icon: 'i-carbon-in-progress' },
  { label: '已完成', value: 1, color: 'success', icon: 'i-carbon-checkmark-filled' },
  { label: '成功率', value: '100%', color: 'warning', icon: 'i-carbon-trophy' },
])

const services = [
  {
    icon: 'i-carbon-document',
    title: '我的文书',
    desc: '查看生成的法律文书',
    badge: 3,
    url: '/pages/document/generate',
  },
  {
    icon: 'i-carbon-folder',
    title: '我的证据',
    desc: '管理上传的证据材料',
    badge: 0,
    url: '/pages/evidence/manage',
  },
  {
    icon: 'i-carbon-chat',
    title: '咨询记录',
    desc: '查看AI咨询历史',
    badge: 0,
    url: '/pages/consult/index',
  },
  {
    icon: 'i-carbon-star',
    title: '我的收藏',
    desc: '收藏的法律知识',
    badge: 0,
    url: '',
  },
]

const menuGroups = [
  {
    title: '账户管理',
    items: [
      { icon: 'i-carbon-user', title: '个人信息', url: '' },
      { icon: 'i-carbon-notification', title: '通知设置', url: '/pages/notification-settings/index' },
      { icon: 'i-carbon-security', title: '账号安全', url: '' },
    ],
  },
  {
    title: '帮助与反馈',
    items: [
      { icon: 'i-carbon-help', title: '使用帮助', url: '' },
      { icon: 'i-carbon-chat-bot', title: '在线客服', url: '' },
      { icon: 'i-carbon-email', title: '意见反馈', url: '' },
    ],
  },
  {
    title: '关于',
    items: [
      { icon: 'i-carbon-document-blank', title: '隐私政策', url: '/pages/privacy-policy/index' },
      { icon: 'i-carbon-information', title: '关于我们', url: '/pages/about-us/index' },
      { icon: 'i-carbon-settings', title: '设置', url: '/pages/settings/index' },
    ],
  },
]

function goToSettings() {
  uni.navigateTo({ url: '/pages/settings/index' })
}

function handleMenuItem(url: string) {
  if (!url) {
    uni.showToast({ title: '功能开发中', icon: 'none' })
    return
  }
  uni.navigateTo({ url })
}

function editProfile() {
  uni.showToast({ title: '编辑功能开发中', icon: 'none' })
}

function upgradeMember() {
  uni.showModal({
    title: '升级会员',
    content: '升级为VIP会员可享受更多特权服务',
    confirmText: '立即升级',
    cancelText: '暂不升级',
  })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-20">
    <!-- User Header -->
    <view class="mb-4 from-primary to-success bg-gradient-to-br px-6 py-8 text-white">
      <view class="mb-6 flex items-center justify-between">
        <view class="flex items-center">
          <view class="mr-4 h-16 w-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <view class="i-carbon-user text-3xl" />
          </view>
          <view>
            <view class="mb-1 text-lg font-bold">
              {{ userInfo.nickname }}
            </view>
            <view class="mb-1 text-xs opacity-90">
              {{ userInfo.phone }}
            </view>
            <view class="flex items-center">
              <view class="rounded-full bg-warning/20 px-2 py-0.5 text-xs backdrop-blur">
                {{ userInfo.vipLevel }}
              </view>
              <view
                class="ml-2 text-xs opacity-90"
                @click="upgradeMember"
              >
                升级 →
              </view>
            </view>
          </view>
        </view>
        <view
          class="i-carbon-settings text-2xl"
          @click="goToSettings"
        />
      </view>

      <!-- Stats -->
      <view class="grid grid-cols-3 gap-3">
        <view
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-card bg-white/20 p-3 text-center backdrop-blur"
        >
          <view class="mb-1 text-xl font-bold">
            {{ stat.value }}
          </view>
          <view class="text-xs opacity-90">
            {{ stat.label }}
          </view>
        </view>
      </view>
    </view>

    <!-- Quick Services -->
    <view class="mx-4 mb-4">
      <view class="mb-3 px-2 text-base text-text-main font-semibold">
        快捷服务
      </view>
      <view class="grid grid-cols-2 gap-3">
        <view
          v-for="service in services"
          :key="service.title"
          class="relative rounded-card bg-bg-card p-4 shadow-sm active:shadow"
          @click="handleMenuItem(service.url)"
        >
          <view
            v-if="service.badge > 0"
            class="absolute right-2 top-2 h-5 w-5 flex items-center justify-center rounded-full bg-secondary text-xs text-white"
          >
            {{ service.badge }}
          </view>
          <view
            class="mb-3 h-12 w-12 flex items-center justify-center rounded-full bg-primary-light"
          >
            <view
              class="text-2xl text-primary"
              :class="service.icon"
            />
          </view>
          <view class="mb-1 text-sm text-text-main font-medium">
            {{ service.title }}
          </view>
          <view class="text-xs text-text-sub">
            {{ service.desc }}
          </view>
        </view>
      </view>
    </view>

    <!-- Member Benefits -->
    <view class="mx-4 mb-4 rounded-card from-warning/10 to-secondary/10 bg-gradient-to-r p-4">
      <view class="mb-3 flex items-center">
        <view class="mr-2 text-xl">
          👑
        </view>
        <view class="text-sm text-text-main font-semibold">
          会员特权
        </view>
      </view>
      <view class="grid grid-cols-3 mb-3 gap-2 text-center text-xs text-text-sub">
        <view>
          <view class="mb-1">
            ✓
          </view>
          无限次咨询
        </view>
        <view>
          <view class="mb-1">
            ✓
          </view>
          优先处理
        </view>
        <view>
          <view class="mb-1">
            ✓
          </view>
          专属客服
        </view>
      </view>
      <button
        class="w-full rounded-btn from-warning to-secondary bg-gradient-to-r py-2 text-sm text-white font-medium active:opacity-90"
        @click="upgradeMember"
      >
        立即升级VIP
      </button>
    </view>

    <!-- Menu Groups -->
    <view class="px-4 space-y-4">
      <view
        v-for="group in menuGroups"
        :key="group.title"
        class="rounded-card bg-bg-card shadow-sm"
      >
        <view class="border-b border-border px-4 py-3 text-sm text-text-sub font-medium">
          {{ group.title }}
        </view>
        <view
          v-for="(item, index) in group.items"
          :key="item.title"
          class="flex items-center justify-between px-4 py-3 active:bg-gray-50"
          :class="{ 'border-b border-border': index < group.items.length - 1 }"
          @click="handleMenuItem(item.url)"
        >
          <view class="flex items-center">
            <view
              class="mr-3 text-xl text-text-sub"
              :class="item.icon"
            />
            <view class="text-sm text-text-main">
              {{ item.title }}
            </view>
          </view>
          <view class="i-carbon-chevron-right text-text-sub" />
        </view>
      </view>
    </view>

    <!-- Version Info -->
    <view class="mt-6 text-center text-xs text-text-placeholder">
      退钱吧 v1.0.0
      <br>
      已陪伴您 {{ userInfo.joinDays }} 天
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
