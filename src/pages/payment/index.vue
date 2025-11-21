<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '委托维权支付',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const selectedPayment = ref('wechat')

const serviceDetails = [
  { label: 'AI智能咨询', value: '无限次' },
  { label: '证据智能分析', value: '✓' },
  { label: '法律文书生成', value: '3份' },
  { label: '投诉渠道匹配', value: '✓' },
  { label: '进度跟踪提醒', value: '✓' },
]

const priceInfo = {
  original: 29.90,
  current: 9.90,
  discount: '限时特惠',
}

function handlePay() {
  uni.showModal({
    title: '确认支付',
    content: `使用${selectedPayment.value === 'wechat' ? '微信支付' : '支付宝'}支付 ¥${priceInfo.current}`,
    confirmText: '确认',
    cancelText: '取消',
    success: (res) => {
      if (res.confirm) {
        uni.showLoading({ title: '支付中...' })

        setTimeout(() => {
          uni.hideLoading()
          uni.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 2000,
          })

          setTimeout(() => {
            uni.navigateTo({ url: '/pages/case-info/index' })
          }, 2000)
        }, 1500)
      }
    },
  })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-32">
    <!-- Price Header -->
    <view class="from-primary to-success bg-gradient-to-br px-6 py-8 text-white">
      <view class="mb-2 text-center text-sm opacity-90">
        {{ priceInfo.discount }}
      </view>
      <view class="mb-1 flex items-end justify-center">
        <view class="text-4xl font-bold">
          ¥{{ priceInfo.current }}
        </view>
        <view class="ml-2 pb-1 text-sm line-through opacity-70">
          ¥{{ priceInfo.original }}
        </view>
      </view>
      <view class="text-center text-xs opacity-90">
        一次付费，全程服务
      </view>
    </view>

    <!-- Service Details -->
    <view class="mb-4 bg-bg-card px-6 py-6">
      <view class="mb-5 text-lg text-text-main font-semibold">
        服务内容
      </view>

      <view class="space-y-3">
        <view
          v-for="item in serviceDetails"
          :key="item.label"
          class="flex items-center justify-between"
        >
          <view class="flex items-center text-sm text-text-sub">
            <view class="i-carbon-checkmark-filled mr-2 text-success" />
            {{ item.label }}
          </view>
          <view class="text-sm text-text-main font-medium">
            {{ item.value }}
          </view>
        </view>
      </view>

      <view class="mt-4 rounded-xl bg-warning/10 px-4 py-3">
        <view class="mb-1 text-xs text-warning font-medium">
          💰 退款保障
        </view>
        <view class="text-xs text-text-sub leading-relaxed">
          如因平台原因导致维权失败，将全额退还服务费用
        </view>
      </view>
    </view>

    <!-- Payment Methods -->
    <view class="mb-4 bg-bg-card px-6 py-6">
      <view class="mb-5 text-lg text-text-main font-semibold">
        支付方式
      </view>

      <radio-group @change="(e: any) => selectedPayment = e.detail.value">
        <label class="flex items-center justify-between border-b border-border py-4">
          <view class="flex items-center">
            <view class="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-success/10">
              <text class="text-xl">💚</text>
            </view>
            <view>
              <view class="mb-0.5 text-sm text-text-main font-medium">
                微信支付
              </view>
              <view class="text-xs text-text-sub">
                推荐使用
              </view>
            </view>
          </view>
          <radio
            value="wechat"
            :checked="selectedPayment === 'wechat'"
            color="#00B894"
          />
        </label>

        <label class="flex items-center justify-between py-4">
          <view class="flex items-center">
            <view class="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-info/10">
              <text class="text-xl">💙</text>
            </view>
            <view>
              <view class="mb-0.5 text-sm text-text-main font-medium">
                支付宝
              </view>
              <view class="text-xs text-text-sub">
                安全便捷
              </view>
            </view>
          </view>
          <radio
            value="alipay"
            :checked="selectedPayment === 'alipay'"
            color="#00B894"
          />
        </label>
      </radio-group>
    </view>

    <!-- Security Notice -->
    <view class="px-6">
      <view class="flex items-start rounded-card bg-info/10 px-4 py-3">
        <view class="mr-2 text-lg text-info">
          🔒
        </view>
        <view class="flex-1 text-xs text-text-sub leading-relaxed">
          <view class="mb-1 text-text-main font-medium">
            安全保障
          </view>
          支付信息已加密，您的资金安全有保障。本平台不会保存您的支付密码等敏感信息。
        </view>
      </view>
    </view>

    <!-- User Reviews -->
    <view class="mt-4 px-6">
      <view class="rounded-card bg-bg-card p-4 shadow-sm">
        <view class="mb-3 flex items-center">
          <view class="mr-2 text-base">
            ⭐⭐⭐⭐⭐
          </view>
          <view class="text-xs text-text-sub">
            已有 1,234 人成功维权
          </view>
        </view>
        <view class="text-xs text-text-sub leading-relaxed">
          "非常专业的服务，AI分析很准确，帮我成功追回了健身卡余额。" - 张女士
        </view>
      </view>
    </view>

    <!-- Fixed Bottom Button -->
    <view class="safe-area-inset-bottom fixed bottom-0 left-0 right-0 border-t border-border bg-bg-card px-6 py-4">
      <view class="mb-3 flex items-center justify-between">
        <view class="text-sm text-text-sub">
          应付金额
        </view>
        <view class="text-2xl text-secondary font-bold">
          ¥ {{ priceInfo.current }}
        </view>
      </view>
      <button
        class="w-full rounded-btn from-primary to-success bg-gradient-to-r py-3.5 text-white font-medium shadow-lg active:opacity-90"
        @click="handlePay"
      >
        确认支付
      </button>
    </view>
  </view>
</template>

<style scoped>
button {
  border: none;
  outline: none;
}

.space-y-3 > view + view {
  margin-top: 12px;
}
</style>
