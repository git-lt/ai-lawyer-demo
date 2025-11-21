<route lang="json5">
{
  style: {
    navigationBarTitleText: '设置',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 p-4">
    <view class="mb-4 overflow-hidden rounded-lg bg-white">
      <view
        class="flex items-center justify-between border-b border-gray-100 p-4 transition active:bg-gray-50"
        @click="goToProfile"
      >
        <view class="text-gray-800">
          个人资料
        </view>
        <view class="i-carbon-chevron-right text-gray-400" />
      </view>
      <view
        class="flex items-center justify-between border-b border-gray-100 p-4 transition active:bg-gray-50"
        @click="goToNotificationSettings"
      >
        <view class="text-gray-800">
          通知设置
        </view>
        <view class="i-carbon-chevron-right text-gray-400" />
      </view>
    </view>

    <view class="mb-4 overflow-hidden rounded-lg bg-white">
      <view
        class="flex items-center justify-between border-b border-gray-100 p-4 transition active:bg-gray-50"
        @click="goToPrivacyPolicy"
      >
        <view class="text-gray-800">
          隐私政策
        </view>
        <view class="i-carbon-chevron-right text-gray-400" />
      </view>
      <view
        class="flex items-center justify-between p-4 transition active:bg-gray-50"
        @click="goToAboutUs"
      >
        <view class="text-gray-800">
          关于我们
        </view>
        <view class="i-carbon-chevron-right text-gray-400" />
      </view>
    </view>

    <button class="rounded-lg bg-white py-3 text-red-500 font-medium transition hover:bg-gray-50">
      退出登录
    </button>
  </view>
</template>

<script setup lang="ts">
function goToProfile() {
  uni.navigateTo({ url: '/pages/user-profile/index' })
}

function goToNotificationSettings() {
  uni.navigateTo({ url: '/pages/notification-settings/index' })
}

function goToPrivacyPolicy() {
  uni.navigateTo({ url: '/pages/privacy-policy/index' })
}

function goToAboutUs() {
  uni.navigateTo({ url: '/pages/about-us/index' })
}
</script>
