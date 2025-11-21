<route lang="json5">
{
  style: {
    navigationBarTitleText: '智能咨询',
  },
}
</route>

<template>
  <view class="h-screen flex flex-col bg-gray-100">
    <!-- Chat Area -->
    <scroll-view scroll-y class="flex-1 p-4">
      <!-- AI Welcome Message -->
      <view class="mb-4 flex">
        <view class="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100">
          <view class="i-carbon-bot text-xl text-blue-600" />
        </view>
        <view class="max-w-[80%] rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
          <view>您好！我是您的维权助手。请告诉我您遇到了什么问题？</view>
          <view class="mt-1 text-xs text-gray-400">
            例如：健身房跑路了，怎么退钱？
          </view>
        </view>
      </view>

      <!-- User Message Example -->
      <view class="mb-4 flex flex-row-reverse">
        <view class="ml-3 h-10 w-10 flex items-center justify-center rounded-full bg-gray-200">
          <view class="i-carbon-user text-xl text-gray-600" />
        </view>
        <view class="max-w-[80%] rounded-lg rounded-tr-none bg-blue-600 p-3 text-white shadow-sm">
          <view>健身房关门了，我交的年卡钱能要回来吗？</view>
        </view>
      </view>

      <!-- AI Response Example -->
      <view class="mb-4 flex">
        <view class="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100">
          <view class="i-carbon-bot text-xl text-blue-600" />
        </view>
        <view class="max-w-[80%] rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
          <view class="mb-2">
            根据《消费者权益保护法》第五十三条，经营者以预收款方式提供商品或者服务的，应当按照约定提供。未按照约定提供的，应当按照消费者的要求履行约定或者退回预付款。
          </view>
          <view class="mb-2">
            建议您的维权路径如下：
          </view>
          <view class="mb-2 rounded bg-gray-50 p-2 text-sm">
            1. 搜集证据（合同、支付记录）
            <br>
            2. 向12315投诉
            <br>
            3. 申请支付令或起诉
          </view>
          <button
            class="mt-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            @click="startRightsProtection"
          >
            开始维权
          </button>
        </view>
      </view>
    </scroll-view>

    <!-- Input Area -->
    <view class="flex items-center border-t border-gray-200 bg-white p-4">
      <view class="i-carbon-microphone mr-3 text-2xl text-gray-500" />
      <input
        type="text"
        placeholder="请输入您的问题..."
        class="mr-3 flex-1 rounded-full bg-gray-100 px-4 py-2"
      >
      <button class="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
        <view class="i-carbon-send text-xl" />
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
function startRightsProtection() {
  uni.navigateTo({ url: '/pages/register/index' })
}
</script>
