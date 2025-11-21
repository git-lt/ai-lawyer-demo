<route lang="json5">
{
  style: {
    navigationBarTitleText: '生成文书',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 pb-20">
    <view class="mb-4 bg-white p-4">
      <view class="mb-4 text-lg font-bold">
        选择文书类型
      </view>
      <view class="flex overflow-x-auto pb-2 space-x-3">
        <view
          class="flex-shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white font-medium"
        >
          12315投诉书
        </view>
        <view
          class="flex-shrink-0 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 font-medium"
        >
          律师函模板
        </view>
        <view
          class="flex-shrink-0 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 font-medium"
        >
          民事起诉状
        </view>
      </view>
    </view>

    <view class="flex-1 bg-white p-4">
      <view class="mb-4 flex items-center justify-between">
        <view class="font-bold">
          文书预览
        </view>
        <view class="flex items-center text-sm text-blue-600">
          <view class="i-carbon-edit mr-1" />
          编辑
        </view>
      </view>
      <view class="h-96 overflow-y-auto border border-gray-200 rounded-lg bg-gray-50 p-4 text-sm text-gray-700 leading-relaxed">
        <view class="mb-4 text-center text-base font-bold">
          消费者权益争议投诉书
        </view>
        <view class="mb-2">
          <text class="font-bold">投诉人：</text>
          张三，男，13800000000
        </view>
        <view class="mb-2">
          <text class="font-bold">被投诉人：</text>
          XX健身服务有限公司
        </view>
        <view class="mb-2">
          <text class="font-bold">投诉请求：</text>
          1. 退还预付款人民币3000元；
          <br>
          2. 赔偿损失...
        </view>
        <view class="mb-2">
          <text class="font-bold">事实与理由：</text>
          本人于2023年10月1日在被投诉人处办理了健身年卡...
        </view>
      </view>
    </view>

    <view class="fixed bottom-0 left-0 right-0 flex border-t border-gray-200 bg-white p-4 space-x-4">
      <button
        class="flex-1 border border-gray-300 rounded-full bg-white py-3 text-gray-700 font-medium transition hover:bg-gray-50"
      >
        下载PDF
      </button>
      <button
        class="flex-1 rounded-full bg-blue-600 py-3 text-white font-medium transition hover:bg-blue-700"
        @click="goToComplaintGuide"
      >
        提交投诉
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
function goToComplaintGuide() {
  uni.navigateTo({ url: '/pages/complaint/guide' })
}
</script>
