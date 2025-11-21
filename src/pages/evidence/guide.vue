<route lang="json5">
{
  style: {
    navigationBarTitleText: '证据搜集指引',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 pb-20">
    <view class="mb-4 bg-white p-4">
      <view class="mb-2 flex items-center justify-between">
        <view class="text-lg font-bold">
          证据清单
        </view>
        <view class="text-sm text-gray-500">
          已完成 0/4
        </view>
      </view>
      <progress percent="0" activeColor="#2563eb" backgroundColor="#e5e7eb" border-radius="4" />
    </view>

    <view class="p-4 space-y-4">
      <!-- Evidence Item 1 -->
      <view class="rounded-lg bg-white p-4 shadow-sm">
        <view class="mb-2 flex items-start justify-between">
          <view>
            <view class="text-lg font-medium">
              支付凭证
            </view>
            <view class="mt-1 text-sm text-gray-500">
              微信/支付宝账单截图
            </view>
          </view>
          <view class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
            待完成
          </view>
        </view>
        <view class="mb-3 rounded bg-blue-50 p-3 text-sm text-blue-800">
          指引：请导出近期的交易记录，需包含商家名称、金额和时间。
        </view>
        <button
          class="w-full flex items-center justify-center border border-blue-600 rounded-full py-2 text-blue-600 font-medium transition hover:bg-blue-50"
        >
          <view class="i-carbon-upload mr-2" />
          上传凭证
        </button>
      </view>

      <!-- Evidence Item 2 -->
      <view class="rounded-lg bg-white p-4 shadow-sm">
        <view class="mb-2 flex items-start justify-between">
          <view>
            <view class="text-lg font-medium">
              合同/协议
            </view>
            <view class="mt-1 text-sm text-gray-500">
              服务合同或会员卡照片
            </view>
          </view>
          <view class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
            待完成
          </view>
        </view>
        <button
          class="w-full flex items-center justify-center border border-blue-600 rounded-full py-2 text-blue-600 font-medium transition hover:bg-blue-50"
        >
          <view class="i-carbon-upload mr-2" />
          上传照片
        </button>
      </view>
    </view>

    <view class="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
      <button
        class="w-full rounded-full bg-blue-600 py-3 text-white font-medium transition hover:bg-blue-700"
        @click="goToManage"
      >
        前往证据管理
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
function goToManage() {
  uni.navigateTo({ url: '/pages/evidence/manage' })
}
</script>
