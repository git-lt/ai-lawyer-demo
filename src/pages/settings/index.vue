<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '设置',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const menuGroups = [
  {
    title: '账号设置',
    items: [
      { id: 'notification', title: '通知设置', url: '/pages/notification-settings/index' },
    ],
  },
  {
    title: '关于',
    items: [
      { id: 'privacy', title: '隐私政策', url: '/pages/privacy-policy/index' },
      { id: 'about', title: '关于我们', url: '/pages/about-us/index' },
    ],
  },
]

function goToPage(url: string) {
  uni.navigateTo({ url })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page p-4">
    <view
      v-for="(group, groupIndex) in menuGroups"
      :key="groupIndex"
      class="mb-4"
    >
      <view class="mb-2 px-2 text-sm text-text-sub">
        {{ group.title }}
      </view>
      <view class="overflow-hidden rounded-card bg-bg-card shadow-sm">
        <view
          v-for="(item, index) in group.items"
          :key="item.id"
          class="flex items-center justify-between px-5 py-4 active:bg-gray-50"
          :class="index < group.items.length - 1 ? 'border-b border-border' : ''"
          @click="goToPage(item.url)"
        >
          <view class="text-sm text-text-main">
            {{ item.title }}
          </view>
          <view class="i-carbon-chevron-right text-text-sub" />
        </view>
      </view>
    </view>
  </view>
</template>
