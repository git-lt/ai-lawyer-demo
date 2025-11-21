<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '关于我们',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})
</script>

<template>
  <view class="min-h-screen bg-bg-page">
    <view class="px-6 py-8">
      <!-- Logo & Name -->
      <view class="mb-8 flex flex-col items-center">
        <view class="mb-4 h-24 w-24 flex items-center justify-center rounded-3xl from-primary to-success bg-gradient-to-br shadow-lg">
          <view class="i-carbon-scale text-5xl text-white" />
        </view>
        <view class="mb-2 text-2xl text-text-main font-bold">
          退钱吧
        </view>
        <view class="text-sm text-text-sub">
          让维权变得简单高效
        </view>
      </view>

      <!-- Version -->
      <view class="mb-4 rounded-card bg-bg-card px-5 py-4 shadow-sm">
        <view class="flex items-center justify-between">
          <view class="text-sm text-text-sub">
            当前版本
          </view>
          <view class="text-sm text-text-main font-medium">
            v1.0.0
          </view>
        </view>
      </view>

      <!-- Introduction -->
      <view class="mb-4 rounded-card bg-bg-card px-5 py-5 shadow-sm">
        <view class="mb-3 text-base text-text-main font-semibold">
          产品介绍
        </view>
        <view class="text-sm text-text-sub leading-relaxed">
          退钱吧是一款专注于预付款纠纷维权的智能小程序。我们通过AI技术，为用户提供从咨询、证据分析、文书生成到投诉指引的一站式维权服务，让复杂的法律流程变得简单易懂。
        </view>
      </view>

      <!-- Features -->
      <view class="mb-4 rounded-card bg-bg-card px-5 py-5 shadow-sm">
        <view class="mb-4 text-base text-text-main font-semibold">
          核心功能
        </view>
        <view class="space-y-3">
          <view class="flex items-start">
            <view class="mr-3 mt-0.5 h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
              <text class="text-xs text-primary">✓</text>
            </view>
            <view class="flex-1">
              <view class="mb-1 text-sm text-text-main font-medium">
                AI智能咨询
              </view>
              <view class="text-xs text-text-sub">
                24小时在线，即时解答维权疑问
              </view>
            </view>
          </view>

          <view class="flex items-start">
            <view class="mr-3 mt-0.5 h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
              <text class="text-xs text-primary">✓</text>
            </view>
            <view class="flex-1">
              <view class="mb-1 text-sm text-text-main font-medium">
                证据智能分析
              </view>
              <view class="text-xs text-text-sub">
                自动识别关键信息，评估证据效力
              </view>
            </view>
          </view>

          <view class="flex items-start">
            <view class="mr-3 mt-0.5 h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
              <text class="text-xs text-primary">✓</text>
            </view>
            <view class="flex-1">
              <view class="mb-1 text-sm text-text-main font-medium">
                文书一键生成
              </view>
              <view class="text-xs text-text-sub">
                根据案情自动生成专业法律文书
              </view>
            </view>
          </view>

          <view class="flex items-start">
            <view class="mr-3 mt-0.5 h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
              <text class="text-xs text-primary">✓</text>
            </view>
            <view class="flex-1">
              <view class="mb-1 text-sm text-text-main font-medium">
                投诉渠道匹配
              </view>
              <view class="text-xs text-text-sub">
                智能推荐最合适的投诉平台
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- Contact -->
      <view class="rounded-card bg-bg-card px-5 py-5 shadow-sm">
        <view class="mb-4 text-base text-text-main font-semibold">
          联系我们
        </view>
        <view class="text-sm text-text-sub space-y-2">
          <view>客服邮箱：support@tuiqianba.com</view>
          <view>商务合作：business@tuiqianba.com</view>
          <view>意见反馈：feedback@tuiqianba.com</view>
        </view>
      </view>

      <!-- Copyright -->
      <view class="mt-8 text-center text-xs text-text-sub">
        © 2023 退钱吧 All Rights Reserved
      </view>
    </view>
  </view>
</template>

<style scoped>
.space-y-3 > view + view {
  margin-top: 12px;
}

.space-y-2 > view + view {
  margin-top: 8px;
}
</style>
