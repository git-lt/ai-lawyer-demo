<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '投诉指引',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const steps = [
  { title: '第一步：注册/登录', desc: '使用手机号注册并登录12315平台', completed: false },
  { title: '第二步：选择"我要投诉"', desc: '阅读投诉须知，点击同意', completed: false },
  { title: '第三步：填写被投诉企业', desc: '输入企业名称或统一社会信用代码', completed: false },
  { title: '第四步：填写投诉内容', desc: '粘贴生成的投诉文书内容，上传证据图片', completed: false },
  { title: '第五步：提交并获取编号', desc: '提交后保存投诉编号，用于查询进度', completed: false },
]

function openExternalPlatform() {
  uni.showModal({
    title: '即将跳转',
    content: '即将跳转至全国12315平台',
    confirmText: '确定',
    cancelText: '取消',
    success: (res) => {
      if (res.confirm) {
        uni.showToast({ title: '跳转成功', icon: 'success' })
        setTimeout(() => {
          uni.switchTab({ url: '/pages/my-cases/index' })
        }, 1500)
      }
    },
  })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-24">
    <!-- Platform Card -->
    <view class="mb-4 bg-bg-card px-6 py-6">
      <view class="mb-2 text-base text-text-main font-semibold">
        推荐投诉渠道
      </view>
      <view class="mb-5 text-xs text-text-sub">
        根据商家所在地为您匹配
      </view>

      <view class="border-2 border-primary/20 rounded-card from-primary/10 to-success/10 bg-gradient-to-br p-5">
        <view class="mb-4 flex items-center">
          <view class="mr-3 h-12 w-12 flex items-center justify-center rounded-full bg-primary">
            <text class="text-2xl">🏛️</text>
          </view>
          <view class="flex-1">
            <view class="mb-1 text-base text-text-main font-semibold">
              全国12315平台
            </view>
            <view class="text-xs text-text-sub">
              国家市场监督管理总局
            </view>
          </view>
        </view>

        <view class="mb-4 text-sm text-text-main leading-relaxed">
          适用于大多数消费纠纷，处理规范，有明确的时限要求（7个工作日内受理，60日内处理完毕）
        </view>

        <button
          class="w-full rounded-btn bg-primary py-3 text-white font-medium shadow active:bg-primary-hover"
          @click="openExternalPlatform"
        >
          前往投诉 →
        </button>
      </view>
    </view>

    <!-- Steps Guide -->
    <view class="px-6">
      <view class="mb-4 text-base text-text-main font-semibold">
        提交指引
      </view>

      <view class="relative">
        <!-- Timeline Line -->
        <view class="absolute bottom-0 left-3 top-0 w-0.5 bg-border" />

        <view class="space-y-6">
          <view
            v-for="(step, index) in steps"
            :key="index"
            class="relative pl-10"
          >
            <!-- Step Dot -->
            <view
              class="absolute left-0 top-0 h-6 w-6 flex items-center justify-center border-3 rounded-full"
              :class="step.completed
                ? 'bg-success border-success'
                : index === 0
                  ? 'bg-primary border-primary'
                  : 'bg-bg-card border-border'"
            >
              <text
                v-if="step.completed"
                class="text-xs text-white"
              >
                ✓
              </text>
              <text
                v-else-if="index === 0"
                class="text-xs text-white"
              >
                {{ index + 1 }}
              </text>
            </view>

            <!-- Step Content -->
            <view>
              <view class="mb-1 text-sm text-text-main font-medium">
                {{ step.title }}
              </view>
              <view class="text-xs text-text-sub leading-relaxed">
                {{ step.desc }}
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- Tips -->
    <view class="mt-6 px-6">
      <view class="flex items-start rounded-card bg-info/10 px-4 py-3">
        <view class="mr-2 text-lg text-info">
          💡
        </view>
        <view class="flex-1 text-xs text-text-sub leading-relaxed">
          <view class="mb-1 text-text-main font-medium">
            温馨提示
          </view>
          投诉时请保持手机畅通，监管部门可能会致电核实情况。投诉编号请妥善保存，用于后续查询进度。
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped>
button {
  border: none;
  outline: none;
}

.space-y-6 > view + view {
  margin-top: 24px;
}
</style>
