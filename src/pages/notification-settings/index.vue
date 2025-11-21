<route lang="json5">
{
  style: {
    navigationBarTitleText: '通知设置',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 p-4">
    <view class="overflow-hidden rounded-lg bg-white">
      <view class="flex items-center justify-between border-b border-gray-100 p-4">
        <view>
          <view class="mb-1 text-gray-800">
            案件进度提醒
          </view>
          <view class="text-xs text-gray-500">
            当案件状态发生变更时通知我
          </view>
        </view>
        <switch checked color="#2563eb" />
      </view>
      <view class="flex items-center justify-between p-4">
        <view>
          <view class="mb-1 text-gray-800">
            维权知识推送
          </view>
          <view class="text-xs text-gray-500">
            不定期推送维权技巧和案例
          </view>
        </view>
        <switch color="#2563eb" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// No logic needed for prototype
</script>
