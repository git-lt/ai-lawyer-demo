<route lang="json5">
{
  style: {
    navigationBarTitleText: '个人资料',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 p-4">
    <view class="mb-4 overflow-hidden rounded-lg bg-white">
      <view class="flex items-center justify-between border-b border-gray-100 p-4">
        <view class="text-gray-800">
          头像
        </view>
        <view class="h-12 w-12 flex items-center justify-center overflow-hidden rounded-full bg-gray-200">
          <view class="i-carbon-user text-2xl text-gray-400" />
        </view>
      </view>
      <view class="flex items-center justify-between border-b border-gray-100 p-4">
        <view class="text-gray-800">
          昵称
        </view>
        <view class="text-gray-500">
          微信用户
        </view>
      </view>
      <view class="flex items-center justify-between p-4">
        <view class="text-gray-800">
          手机号
        </view>
        <view class="text-gray-500">
          138****0000
        </view>
      </view>
    </view>

    <!-- Settings Entry for TabBar Page -->
    <view class="mt-8">
      <button
        class="w-full border border-gray-200 rounded-lg bg-white py-3 text-gray-800 font-medium transition hover:bg-gray-50"
        @click="goToSettings"
      >
        设置
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
function goToSettings() {
  uni.navigateTo({ url: '/pages/settings/index' })
}
</script>
