<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '用户注册',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const phone = ref('')
const code = ref('')
const agreed = ref(false)
const countdown = ref(0)

const benefits = [
  { icon: '🎯', title: '精准分析', desc: 'AI智能评估案情' },
  { icon: '⚡', title: '快速响应', desc: '30分钟完成维权' },
  { icon: '🔒', title: '隐私保护', desc: '数据加密存储' },
]

function getCode() {
  if (!phone.value) {
    uni.showToast({ title: '请输入手机号', icon: 'none' })
    return
  }

  // 简单的手机号验证
  if (!/^1[3-9]\d{9}$/.test(phone.value)) {
    uni.showToast({ title: '请输入正确的手机号', icon: 'none' })
    return
  }

  countdown.value = 60
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0)
      clearInterval(timer)
  }, 1000)

  uni.showToast({ title: '验证码已发送', icon: 'success' })
}

function handleRegister() {
  if (!phone.value || !code.value) {
    uni.showToast({ title: '请填写完整信息', icon: 'none' })
    return
  }

  if (!agreed.value) {
    uni.showToast({ title: '请同意用户协议', icon: 'none' })
    return
  }

  // 模拟注册成功
  uni.showLoading({ title: '注册中...' })
  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({ title: '注册成功', icon: 'success' })
    setTimeout(() => {
      uni.navigateTo({ url: '/pages/payment/index' })
    }, 1500)
  }, 1000)
}

function viewAgreement(type: string) {
  const url = type === 'user' ? '/pages/privacy-policy/index' : '/pages/privacy-policy/index'
  uni.navigateTo({ url })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page p-6">
    <!-- Welcome Section -->
    <view class="mb-8 mt-8">
      <view class="mb-2 text-2xl text-text-main font-semibold">
        欢迎来到退钱吧
      </view>
      <view class="text-sm text-text-sub">
        让维权变得简单高效 ✨
      </view>
    </view>

    <!-- Benefits -->
    <view class="grid grid-cols-3 mb-6 gap-3">
      <view
        v-for="benefit in benefits"
        :key="benefit.title"
        class="flex flex-col items-center rounded-card bg-primary-light/30 p-3"
      >
        <view class="mb-1 text-2xl">
          {{ benefit.icon }}
        </view>
        <view class="mb-0.5 text-xs text-text-main font-medium">
          {{ benefit.title }}
        </view>
        <view class="text-center text-2xs text-text-sub">
          {{ benefit.desc }}
        </view>
      </view>
    </view>

    <!-- Form -->
    <view class="space-y-6">
      <!-- Phone Input -->
      <view>
        <view class="mb-2 px-1 text-sm text-text-sub">
          手机号
        </view>
        <view class="rounded-input bg-bg-card px-4 py-3 shadow-sm">
          <input
            v-model="phone"
            type="number"
            placeholder="请输入手机号"
            placeholder-class="text-text-placeholder"
            class="w-full text-text-main"
            maxlength="11"
          >
        </view>
      </view>

      <!-- Code Input -->
      <view>
        <view class="mb-2 px-1 text-sm text-text-sub">
          验证码
        </view>
        <view class="flex items-center gap-3">
          <view class="flex-1 rounded-input bg-bg-card px-4 py-3 shadow-sm">
            <input
              v-model="code"
              type="number"
              placeholder="请输入验证码"
              placeholder-class="text-text-placeholder"
              class="w-full text-text-main"
              maxlength="6"
            >
          </view>
          <button
            class="whitespace-nowrap rounded-btn px-5 py-3 text-sm font-medium"
            :class="countdown > 0
              ? 'bg-gray-100 text-text-placeholder'
              : 'bg-primary-light text-primary'"
            :disabled="countdown > 0"
            @click="getCode"
          >
            {{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
          </button>
        </view>
      </view>
    </view>

    <!-- Agreement -->
    <view class="mt-6 flex items-start px-1">
      <checkbox-group @change="(e: any) => agreed = e.detail.value.length > 0">
        <label class="flex items-start">
          <checkbox
            value="agreed"
            color="#00B894"
            class="mr-2 mt-0.5"
          />
          <view class="text-xs text-text-sub leading-relaxed">
            登录即代表同意
            <text
              class="text-primary"
              @click.stop="viewAgreement('user')"
            >《用户协议》</text>
            和
            <text
              class="text-primary"
              @click.stop="viewAgreement('privacy')"
            >《隐私政策》</text>
          </view>
        </label>
      </checkbox-group>
    </view>

    <!-- Submit Button -->
    <button
      class="mt-8 w-full rounded-btn bg-primary py-3.5 text-white font-medium shadow-lg active:bg-primary-hover"
      @click="handleRegister"
    >
      注册并登录
    </button>

    <!-- Security Notice -->
    <view class="mt-6 flex items-center justify-center gap-2 text-xs text-text-sub">
      <view class="i-carbon-locked text-base" />
      <text>您的信息将被加密保护</text>
    </view>

    <!-- Decoration -->
    <view class="mt-12 flex justify-center opacity-30">
      <view class="h-32 w-32 flex items-center justify-center rounded-full bg-primary-light">
        <view class="i-carbon-user text-6xl text-primary" />
      </view>
    </view>
  </view>
</template>

<style scoped>
button {
  border: none;
  outline: none;
}

input {
  border: none;
  outline: none;
}

.space-y-6 > view + view {
  margin-top: 24px;
}

.grid {
  display: grid;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
</style>
