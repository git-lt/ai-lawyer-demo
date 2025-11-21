<route lang="json5">
{
  style: {
    navigationBarTitleText: '用户注册',
  },
}
</route>

<template>
  <view class="min-h-screen bg-white p-6">
    <view class="mb-8 mt-10 text-2xl font-bold">
      欢迎来到退钱吧
    </view>

    <view class="mb-6">
      <view class="mb-2 text-sm text-gray-500">
        手机号
      </view>
      <input
        type="number"
        placeholder="请输入手机号"
        class="w-full border-b border-gray-200 py-2 transition focus:border-blue-500"
      >
    </view>

    <view class="mb-8">
      <view class="mb-2 text-sm text-gray-500">
        验证码
      </view>
      <view class="flex items-center border-b border-gray-200 py-2">
        <input
          type="number"
          placeholder="请输入验证码"
          class="flex-1 transition focus:border-blue-500"
        >
        <view class="text-sm text-blue-600 font-medium">
          获取验证码
        </view>
      </view>
    </view>

    <button
      class="mb-4 w-full rounded-full bg-blue-600 py-3 text-white font-medium transition hover:bg-blue-700"
      @click="handleRegister"
    >
      注册并登录
    </button>

    <view class="flex items-center justify-center text-xs text-gray-400">
      <view class="mr-1">
        登录即代表同意
      </view>
      <view class="text-blue-600">
        《用户协议》
      </view>
      <view class="mx-1">
        和
      </view>
      <view class="text-blue-600">
        《隐私政策》
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
function handleRegister() {
  // TODO: Implement registration logic
  uni.navigateTo({ url: '/pages/payment/index' })
}
</script>
