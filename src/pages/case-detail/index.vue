<route lang="json5">
{
  style: {
    navigationBarTitleText: '案件详情',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-100 pb-20">
    <!-- Status Card -->
    <view class="bg-blue-600 p-6 text-white">
      <view class="mb-1 text-2xl font-bold">
        进行中
      </view>
      <view class="text-sm text-blue-100">
        等待监管部门受理，预计3个工作日内反馈
      </view>
    </view>

    <!-- Case Info -->
    <view class="mb-4 bg-white p-4">
      <view class="mb-4 text-lg font-bold">
        基本信息
      </view>
      <view class="text-sm space-y-3">
        <view class="flex justify-between">
          <view class="text-gray-500">
            案件标题
          </view>
          <view>XX健身房预付款退款</view>
        </view>
        <view class="flex justify-between">
          <view class="text-gray-500">
            涉及金额
          </view>
          <view>¥ 3000.00</view>
        </view>
        <view class="flex justify-between">
          <view class="text-gray-500">
            投诉对象
          </view>
          <view>XX健身服务有限公司</view>
        </view>
        <view class="flex justify-between">
          <view class="text-gray-500">
            投诉编号
          </view>
          <view>1231520231121001</view>
        </view>
      </view>
    </view>

    <!-- Timeline -->
    <view class="mb-4 bg-white p-4">
      <view class="mb-4 text-lg font-bold">
        处理进度
      </view>
      <view class="relative ml-2 border-l-2 border-gray-200 pl-4 space-y-6">
        <view class="relative">
          <view class="absolute top-0 h-4 w-4 border-4 border-white rounded-full bg-blue-500 -left-[21px]" />
          <view class="mb-1 font-medium">
            提交投诉
          </view>
          <view class="mb-1 text-xs text-gray-400">
            2023-11-21 10:00
          </view>
          <view class="text-sm text-gray-600">
            用户已在12315平台提交投诉。
          </view>
        </view>
        <view class="relative">
          <view class="absolute top-0 h-4 w-4 border-4 border-white rounded-full bg-blue-500 -left-[21px]" />
          <view class="mb-1 font-medium">
            生成文书
          </view>
          <view class="mb-1 text-xs text-gray-400">
            2023-11-21 09:45
          </view>
          <view class="text-sm text-gray-600">
            AI已自动生成《消费者权益争议投诉书》。
          </view>
        </view>
        <view class="relative">
          <view class="absolute top-0 h-4 w-4 border-4 border-white rounded-full bg-blue-500 -left-[21px]" />
          <view class="mb-1 font-medium">
            证据分析完成
          </view>
          <view class="mb-1 text-xs text-gray-400">
            2023-11-21 09:30
          </view>
          <view class="text-sm text-gray-600">
            AI已完成证据识别与分析，证据链完整。
          </view>
        </view>
      </view>
    </view>

    <!-- Next Step Suggestion -->
    <view class="bg-white p-4">
      <view class="mb-2 text-lg font-bold">
        下一步建议
      </view>
      <view class="rounded bg-orange-50 p-3 text-sm text-orange-800">
        请保持电话畅通，监管部门可能会致电核实情况。若7个工作日内未受理，建议拨打12345催办。
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// No logic needed for prototype
</script>
