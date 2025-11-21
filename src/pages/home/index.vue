<route lang="json5">
{
  style: {
    navigationBarTitleText: '退钱吧',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 pb-20">
    <!-- Hero Section -->
    <view class="mb-4 bg-white p-6">
      <view class="mb-2 text-2xl font-bold">
        退钱吧
      </view>
      <view class="mb-6 text-gray-600">
        专注预付款纠纷维权，AI智能指引+证据分析+文书生成一站式服务
      </view>
      <view class="mb-6 rounded-lg bg-blue-50 p-4">
        <view class="mb-2 text-lg font-semibold">
          遇到什么问题了？
        </view>
        <view class="mb-4 text-sm text-gray-500">
          例如：健身房关门不退费
        </view>
        <button
          class="w-full rounded-full bg-blue-600 py-2 text-white font-medium transition hover:bg-blue-700"
          @click="goToConsult"
        >
          立即开始维权
        </button>
      </view>
    </view>

    <!-- Feature Navigation -->
    <view class="bg-white p-4">
      <view class="grid grid-cols-2 gap-4">
        <view
          class="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4"
          @click="goToEvidenceGuide"
        >
          <view class="i-carbon-document-add mb-2 text-3xl text-blue-500" />
          <view class="font-medium">
            证据搜集
          </view>
        </view>
        <view
          class="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4"
          @click="goToMyCases"
        >
          <view class="i-carbon-folder mb-2 text-3xl text-green-500" />
          <view class="font-medium">
            我的案件
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
function goToConsult() {
  uni.navigateTo({ url: '/pages/consult/index' })
}

function goToEvidenceGuide() {
  uni.navigateTo({ url: '/pages/evidence/guide' })
}

function goToMyCases() {
  uni.switchTab({ url: '/pages/my-cases/index' })
}
</script>
