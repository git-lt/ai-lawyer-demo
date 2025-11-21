<route lang="json5">
{
  style: {
    navigationBarTitleText: '投诉指引',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 pb-20">
    <view class="mb-4 bg-white p-6">
      <view class="mb-2 text-lg font-bold">
        推荐投诉渠道
      </view>
      <view class="mb-4 text-sm text-gray-500">
        根据商家所在地为您匹配
      </view>

      <view class="border border-blue-100 rounded-lg bg-blue-50 p-4">
        <view class="mb-3 flex items-center">
          <view class="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100">
            <view class="i-carbon-government text-xl text-blue-600" />
          </view>
          <view>
            <view class="text-lg font-bold">
              全国12315平台
            </view>
            <view class="text-xs text-gray-500">
              国家市场监督管理总局
            </view>
          </view>
        </view>
        <view class="mb-4 text-sm text-gray-600">
          适用于大多数消费纠纷，处理规范，有明确的时限要求。
        </view>
        <button
          class="w-full rounded-lg bg-blue-600 py-2 text-white font-medium transition hover:bg-blue-700"
          @click="openExternalPlatform"
        >
          前往投诉
        </button>
      </view>
    </view>

    <view class="bg-white p-6">
      <view class="mb-4 text-lg font-bold">
        提交指引
      </view>
      <view class="relative ml-2 border-l-2 border-gray-200 pl-4 space-y-6">
        <view class="relative">
          <view class="absolute top-0 h-4 w-4 border-4 border-white rounded-full bg-blue-500 -left-[21px]" />
          <view class="mb-1 font-medium">
            第一步：注册/登录
          </view>
          <view class="text-sm text-gray-500">
            使用手机号注册并登录12315平台。
          </view>
        </view>
        <view class="relative">
          <view class="absolute top-0 h-4 w-4 border-4 border-white rounded-full bg-gray-300 -left-[21px]" />
          <view class="mb-1 font-medium">
            第二步：选择“我要投诉”
          </view>
          <view class="text-sm text-gray-500">
            阅读投诉须知，点击同意。
          </view>
        </view>
        <view class="relative">
          <view class="absolute top-0 h-4 w-4 border-4 border-white rounded-full bg-gray-300 -left-[21px]" />
          <view class="mb-1 font-medium">
            第三步：填写被投诉企业
          </view>
          <view class="text-sm text-gray-500">
            输入企业名称或统一社会信用代码（已为您复制）。
          </view>
        </view>
        <view class="relative">
          <view class="absolute top-0 h-4 w-4 border-4 border-white rounded-full bg-gray-300 -left-[21px]" />
          <view class="mb-1 font-medium">
            第四步：填写投诉内容
          </view>
          <view class="text-sm text-gray-500">
            粘贴生成的投诉文书内容，上传证据图片。
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
function openExternalPlatform() {
  // In a real app, this would open a webview or external browser
  uni.showModal({
    title: '即将跳转',
    content: '即将跳转至全国12315平台小程序或网页',
    showCancel: false,
    success: () => {
      uni.switchTab({ url: '/pages/my-cases/index' })
    },
  })
}
</script>
