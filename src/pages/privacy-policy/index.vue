<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '隐私政策',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})
</script>

<template>
  <view class="min-h-screen bg-bg-page">
    <scroll-view scroll-y class="h-screen">
      <view class="px-6 py-6">
        <view class="mb-4 text-xl text-text-main font-bold">
          退钱吧隐私政策
        </view>

        <view class="mb-6 text-xs text-text-sub">
          更新日期：2023年11月21日
          <br>
          生效日期：2023年11月21日
        </view>

        <view class="text-sm text-text-main leading-relaxed space-y-6">
          <view>
            <view class="mb-2 font-semibold">
              1. 信息收集
            </view>
            <view class="text-text-sub">
              我们收集您主动提供的信息，包括但不限于：手机号码、案件相关证据材料、投诉内容等。这些信息仅用于提供维权服务。
            </view>
          </view>

          <view>
            <view class="mb-2 font-semibold">
              2. 信息使用
            </view>
            <view class="text-text-sub">
              您的信息将用于：AI智能分析、生成法律文书、案件进度跟踪。我们承诺不会将您的个人信息用于其他商业目的。
            </view>
          </view>

          <view>
            <view class="mb-2 font-semibold">
              3. 信息保护
            </view>
            <view class="text-text-sub">
              我们采用行业标准的安全措施保护您的数据，包括加密存储、访问控制等技术手段。
            </view>
          </view>

          <view>
            <view class="mb-2 font-semibold">
              4. 信息共享
            </view>
            <view class="text-text-sub">
              除法律要求或经您明确授权外，我们不会与第三方共享您的个人信息。
            </view>
          </view>

          <view>
            <view class="mb-2 font-semibold">
              5. 您的权利
            </view>
            <view class="text-text-sub">
              您有权访问、更正、删除您的个人信息。如需行使这些权利，请联系我们的客服。
            </view>
          </view>
        </view>

        <view class="mt-8 rounded-card bg-primary-light/30 p-4">
          <view class="text-sm text-text-main">
            如有任何疑问，请联系我们：
            <br>
            邮箱：privacy@tuiqianba.com
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style scoped>
.space-y-6 > view + view {
  margin-top: 24px;
}
</style>
