<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '填写纠纷信息',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const formData = ref({
  consumeDate: '',
  shopName: '',
  shopLocation: '',
  amount: '',
  reason: '',
  shopStatus: '',
})

const shopStatusOptions = [
  { label: '正常营业', value: 'normal' },
  { label: '已停业', value: 'closed' },
  { label: '失联', value: 'lost_contact' },
  { label: '其他', value: 'other' },
]

const errors = ref({
  consumeDate: '',
  shopName: '',
  shopLocation: '',
  amount: '',
  reason: '',
  shopStatus: '',
})

function validateForm() {
  let isValid = true
  errors.value = {
    consumeDate: '',
    shopName: '',
    shopLocation: '',
    amount: '',
    reason: '',
    shopStatus: '',
  }

  if (!formData.value.consumeDate) {
    errors.value.consumeDate = '请选择消费时间'
    isValid = false
  }

  if (!formData.value.shopName.trim()) {
    errors.value.shopName = '请输入店铺名称'
    isValid = false
  }

  if (!formData.value.shopLocation.trim()) {
    errors.value.shopLocation = '请输入店铺所在地'
    isValid = false
  }

  if (!formData.value.amount) {
    errors.value.amount = '请输入消费金额'
    isValid = false
  }
  else if (Number.isNaN(Number(formData.value.amount)) || Number(formData.value.amount) <= 0) {
    errors.value.amount = '请输入有效的金额'
    isValid = false
  }

  if (!formData.value.reason.trim()) {
    errors.value.reason = '请填写维权原因'
    isValid = false
  }

  if (!formData.value.shopStatus) {
    errors.value.shopStatus = '请选择店铺状态'
    isValid = false
  }

  return isValid
}

function onDateChange(e: any) {
  formData.value.consumeDate = e.detail.value
  errors.value.consumeDate = ''
}

function onShopStatusChange(e: any) {
  formData.value.shopStatus = e.detail.value
  errors.value.shopStatus = ''
}

function handleSubmit() {
  if (!validateForm()) {
    uni.showToast({
      title: '请完善必填信息',
      icon: 'none',
    })
    return
  }

  // 保存表单数据
  uni.setStorageSync('caseInfo', formData.value)

  // 跳转到证据搜集页面
  uni.navigateTo({
    url: '/pages/evidence/guide',
  })
}

function clearError(field: string) {
  errors.value[field as keyof typeof errors.value] = ''
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-6">
    <!-- Header Info -->
    <view class="mb-4 from-primary to-success bg-gradient-to-br px-6 py-6 text-white">
      <view class="mb-2 flex items-center">
        <view class="i-carbon-document mr-2 text-2xl" />
        <view class="text-lg font-semibold">
          填写纠纷基本信息
        </view>
      </view>
      <view class="text-xs opacity-90">
        请如实填写以下信息，这将帮助我们更好地评估您的案件
      </view>
    </view>

    <!-- Form -->
    <view class="px-4">
      <!-- 消费时间 -->
      <view class="mb-4">
        <view class="mb-2 flex items-center text-sm text-text-main font-medium">
          <text class="mr-1 text-error">*</text>
          消费时间
        </view>
        <picker
          mode="date"
          :value="formData.consumeDate"
          @change="onDateChange"
        >
          <view
            class="flex items-center justify-between border rounded-input bg-bg-card px-4 py-3"
            :class="errors.consumeDate ? 'border-error' : 'border-border'"
          >
            <text :class="formData.consumeDate ? 'text-text-main' : 'text-text-placeholder'">
              {{ formData.consumeDate || '请选择消费时间' }}
            </text>
            <view class="i-carbon-calendar text-xl text-text-sub" />
          </view>
        </picker>
        <view
          v-if="errors.consumeDate"
          class="mt-1 text-xs text-error"
        >
          {{ errors.consumeDate }}
        </view>
      </view>

      <!-- 店铺名称 -->
      <view class="mb-4">
        <view class="mb-2 flex items-center text-sm text-text-main font-medium">
          <text class="mr-1 text-error">*</text>
          店铺名称
        </view>
        <input
          v-model="formData.shopName"
          type="text"
          placeholder="请输入完整的店铺名称"
          placeholder-class="text-text-placeholder"
          class="w-full border rounded-input bg-bg-card px-4 py-3 text-sm text-text-main"
          :class="errors.shopName ? 'border-error' : 'border-border'"
          @input="clearError('shopName')"
        >
        <view
          v-if="errors.shopName"
          class="mt-1 text-xs text-error"
        >
          {{ errors.shopName }}
        </view>
      </view>

      <!-- 店铺所在地 -->
      <view class="mb-4">
        <view class="mb-2 flex items-center text-sm text-text-main font-medium">
          <text class="mr-1 text-error">*</text>
          店铺所在地
        </view>
        <input
          v-model="formData.shopLocation"
          type="text"
          placeholder="请输入详细地址（省/市/区/街道）"
          placeholder-class="text-text-placeholder"
          class="w-full border rounded-input bg-bg-card px-4 py-3 text-sm text-text-main"
          :class="errors.shopLocation ? 'border-error' : 'border-border'"
          @input="clearError('shopLocation')"
        >
        <view
          v-if="errors.shopLocation"
          class="mt-1 text-xs text-error"
        >
          {{ errors.shopLocation }}
        </view>
      </view>

      <!-- 消费金额 -->
      <view class="mb-4">
        <view class="mb-2 flex items-center text-sm text-text-main font-medium">
          <text class="mr-1 text-error">*</text>
          消费金额
        </view>
        <view class="flex items-center">
          <view class="mr-2 text-text-sub">
            ¥
          </view>
          <input
            v-model="formData.amount"
            type="digit"
            placeholder="请输入消费金额"
            placeholder-class="text-text-placeholder"
            class="flex-1 border rounded-input bg-bg-card px-4 py-3 text-sm text-text-main"
            :class="errors.amount ? 'border-error' : 'border-border'"
            @input="clearError('amount')"
          >
        </view>
        <view
          v-if="errors.amount"
          class="mt-1 text-xs text-error"
        >
          {{ errors.amount }}
        </view>
      </view>

      <!-- 维权原因 -->
      <view class="mb-4">
        <view class="mb-2 flex items-center text-sm text-text-main font-medium">
          <text class="mr-1 text-error">*</text>
          维权原因
        </view>
        <textarea
          v-model="formData.reason"
          placeholder="请详细描述您遇到的问题，例如：办理年卡后商家突然停业，无法正常使用服务"
          placeholder-class="text-text-placeholder"
          class="w-full border rounded-input bg-bg-card px-4 py-3 text-sm text-text-main leading-relaxed"
          :class="errors.reason ? 'border-error' : 'border-border'"
          :maxlength="500"
          :auto-height="true"
          @input="clearError('reason')"
        />
        <view class="mt-1 flex items-center justify-between">
          <view
            v-if="errors.reason"
            class="text-xs text-error"
          >
            {{ errors.reason }}
          </view>
          <view class="flex-1" />
          <view class="text-xs text-text-sub">
            {{ formData.reason.length }}/500
          </view>
        </view>
      </view>

      <!-- 店铺目前状态 -->
      <view class="mb-6">
        <view class="mb-2 flex items-center text-sm text-text-main font-medium">
          <text class="mr-1 text-error">*</text>
          店铺目前状态
        </view>
        <picker
          mode="selector"
          :range="shopStatusOptions"
          range-key="label"
          @change="onShopStatusChange"
        >
          <view
            class="flex items-center justify-between border rounded-input bg-bg-card px-4 py-3"
            :class="errors.shopStatus ? 'border-error' : 'border-border'"
          >
            <text :class="formData.shopStatus ? 'text-text-main' : 'text-text-placeholder'">
              {{ shopStatusOptions.find(opt => opt.value === formData.shopStatus)?.label || '请选择店铺状态' }}
            </text>
            <view class="i-carbon-chevron-down text-xl text-text-sub" />
          </view>
        </picker>
        <view
          v-if="errors.shopStatus"
          class="mt-1 text-xs text-error"
        >
          {{ errors.shopStatus }}
        </view>
      </view>

      <!-- Tips -->
      <view class="mb-6 rounded-card bg-info/10 p-4">
        <view class="mb-2 flex items-center text-sm text-info font-medium">
          <view class="i-carbon-information mr-2" />
          温馨提示
        </view>
        <view class="text-xs text-text-sub leading-relaxed space-y-1">
          <view>• 请确保填写的信息真实准确，这将影响维权成功率</view>
          <view>• 所有标注 * 的信息为必填项</view>
          <view>• 维权原因请尽量详细描述，有助于AI更好地分析</view>
        </view>
      </view>

      <!-- Submit Button -->
      <button
        class="w-full rounded-btn bg-primary py-4 text-base text-white font-medium shadow active:bg-primary-hover"
        @click="handleSubmit"
      >
        确认并继续
      </button>
    </view>
  </view>
</template>

<style scoped>
button {
  border: none;
  outline: none;
}

input,
textarea {
  border: none;
  outline: none;
}

.space-y-1 > view + view {
  margin-top: 4px;
}
</style>
