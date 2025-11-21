<route lang="json5">
{
  style: {
    navigationBarTitleText: '关于我们',
  },
}
</route>

<template>
  <view class="min-h-screen flex flex-col items-center bg-gray-100 p-4 pt-20">
    <view class="mb-4 h-20 w-20 flex items-center justify-center rounded-xl bg-blue-600 shadow-lg">
      <view class="i-carbon-scale text-4xl text-white" />
    </view>
    <view class="mb-2 text-xl font-bold">
      退钱吧
    </view>
    <view class="mb-10 text-sm text-gray-500">
      Version 1.0.0
    </view>

    <view class="mb-6 w-full rounded-lg bg-white p-6 shadow-sm">
      <view class="mb-4 text-sm text-gray-700 leading-relaxed">
        “退钱吧”是一款专注于解决消费者预付款纠纷的移动端法律科技工具。我们致力于通过AI技术，降低维权门槛，提升维权效率，让每一位消费者都能轻松维护自己的合法权益。
      </view>
    </view>

    <view class="w-full">
      <view class="overflow-hidden rounded-lg bg-white">
        <view class="flex items-center justify-between border-b border-gray-100 p-4">
          <view class="text-gray-800">
            客服电话
          </view>
          <view class="text-blue-600">
            400-123-4567
          </view>
        </view>
        <view class="flex items-center justify-between p-4">
          <view class="text-gray-800">
            联系邮箱
          </view>
          <view class="text-blue-600">
            support@tuiqianba.com
          </view>
        </view>
      </view>
    </view>

    <view class="mb-8 mt-auto text-xs text-gray-400">
      Copyright © 2023 退钱吧 All Rights Reserved.
    </view>
  </view>
</template>

<script setup lang="ts">
// No logic needed for prototype
</script>
