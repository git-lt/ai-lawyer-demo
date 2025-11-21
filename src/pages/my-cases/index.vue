<route lang="json5">
{
  style: {
    navigationBarTitleText: '我的案件',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 p-4">
    <view class="space-y-4">
      <!-- Case Item 1 -->
      <view
        class="rounded-lg bg-white p-4 shadow-sm"
        @click="goToCaseDetail"
      >
        <view class="mb-2 flex items-start justify-between">
          <view class="text-lg font-bold">
            XX健身房预付款退款
          </view>
          <view class="rounded bg-blue-50 px-2 py-1 text-sm text-blue-600 font-medium">
            进行中
          </view>
        </view>
        <view class="mb-3 text-sm text-gray-500">
          案件编号：202311210001
        </view>
        <view class="flex items-center justify-between text-sm">
          <view class="text-gray-600">
            <view class="mb-1">
              投诉对象：XX健身服务有限公司
            </view>
            <view>更新时间：2023-11-21</view>
          </view>
          <view class="i-carbon-chevron-right text-gray-400" />
        </view>
      </view>

      <!-- Empty State (Hidden for now) -->
      <!--
      <view class="flex flex-col items-center justify-center pt-20">
        <view class="i-carbon-folder-open text-6xl text-gray-300 mb-4" />
        <view class="text-gray-500">暂无案件</view>
      </view>
      -->
    </view>
  </view>
</template>

<script setup lang="ts">
function goToCaseDetail() {
  uni.navigateTo({ url: '/pages/case-detail/index' })
}
</script>
