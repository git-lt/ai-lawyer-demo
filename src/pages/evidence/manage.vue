<route lang="json5">
{
  style: {
    navigationBarTitleText: '证据管理',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 pb-20">
    <view class="sticky top-0 z-10 mb-4 border-b border-gray-200 bg-white p-4">
      <scroll-view scroll-x class="whitespace-nowrap">
        <view class="mr-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm text-blue-700 font-medium">
          全部
        </view>
        <view class="mr-2 inline-block rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
          主体信息
        </view>
        <view class="mr-2 inline-block rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
          交易凭证
        </view>
        <view class="mr-2 inline-block rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
          违约证据
        </view>
      </scroll-view>
    </view>

    <view class="p-4 space-y-4">
      <!-- Processed Evidence Item -->
      <view class="flex rounded-lg bg-white p-4 shadow-sm">
        <view class="mr-4 h-20 w-20 flex flex-shrink-0 items-center justify-center rounded bg-gray-200">
          <view class="i-carbon-image text-2xl text-gray-400" />
        </view>
        <view class="flex-1">
          <view class="mb-1 flex items-start justify-between">
            <view class="line-clamp-1 font-medium">
              微信支付账单.jpg
            </view>
            <view class="rounded bg-green-50 px-2 py-0.5 text-xs text-green-600">
              有效
            </view>
          </view>
          <view class="mb-2 text-xs text-gray-500">
            交易凭证
          </view>
          <view class="rounded bg-gray-50 p-2 text-xs text-gray-600">
            <view>金额：¥ 3000.00</view>
            <view>时间：2023-10-01</view>
            <view>商户：XX健身服务有限公司</view>
          </view>
        </view>
      </view>
    </view>

    <view class="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
      <button
        class="w-full rounded-full bg-blue-600 py-3 text-white font-medium transition hover:bg-blue-700"
        @click="goToGenerateDoc"
      >
        生成文书
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
function goToGenerateDoc() {
  uni.navigateTo({ url: '/pages/document/generate' })
}
</script>
