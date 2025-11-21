<route lang="json5">
{
  style: {
    navigationBarTitleText: '委托维权支付',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 pb-20">
    <view class="mb-4 bg-white p-6">
      <view class="mb-4 text-lg font-bold">
        订单详情
      </view>
      <view class="mb-2 flex items-center justify-between">
        <view class="text-gray-600">
          服务名称
        </view>
        <view class="font-medium">
          退钱吧维权服务
        </view>
      </view>
      <view class="flex items-center justify-between">
        <view class="text-gray-600">
          支付金额
        </view>
        <view class="text-lg text-red-500 font-bold">
          ¥ 9.90
        </view>
      </view>
    </view>

    <view class="bg-white p-6">
      <view class="mb-4 text-lg font-bold">
        支付方式
      </view>
      <view class="flex items-center justify-between border-b border-gray-100 py-3">
        <view class="flex items-center">
          <view class="i-carbon-logo-wechat mr-3 text-2xl text-green-500" />
          <view>微信支付</view>
        </view>
        <view class="i-carbon-checkmark-filled text-xl text-blue-600" />
      </view>
      <view class="flex items-center justify-between py-3">
        <view class="flex items-center">
          <view class="i-carbon-logo-alipay mr-3 text-2xl text-blue-500" />
          <view>支付宝</view>
        </view>
        <view class="h-5 w-5 border border-gray-300 rounded-full" />
      </view>
    </view>

    <view class="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
      <button
        class="w-full rounded-full bg-blue-600 py-3 text-white font-medium transition hover:bg-blue-700"
        @click="handlePay"
      >
        确认支付 ¥ 9.90
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
function handlePay() {
  // TODO: Implement payment logic
  uni.showToast({
    title: '支付成功',
    icon: 'success',
  })
  setTimeout(() => {
    uni.navigateTo({ url: '/pages/evidence/guide' })
  }, 1500)
}
</script>
