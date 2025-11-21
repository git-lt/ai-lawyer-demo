<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '证据搜集指引',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const evidenceList = ref([
  {
    id: 1,
    title: '支付凭证',
    desc: '微信/支付宝账单截图、银行转账记录',
    guide: '请导出近期的交易记录，需包含商家名称、金额和时间。建议截图完整的支付页面，包含订单号。',
    completed: false,
    required: true,
    examples: ['微信支付截图', '支付宝账单', '银行流水'],
  },
  {
    id: 2,
    title: '合同/协议',
    desc: '服务合同、会员卡、协议书照片',
    guide: '重点拍摄甲方信息、服务期限、退款条款。确保文字清晰可见，建议多角度拍摄。',
    completed: false,
    required: true,
    examples: ['会员卡正反面', '合同首页', '退款条款页'],
  },
  {
    id: 3,
    title: '沟通记录',
    desc: '与商家的聊天记录、通话录音',
    guide: '保留商家昵称/头像、聊天时间，圈出关键内容（如商家承诺、拒绝退款等）。',
    completed: false,
    required: false,
    examples: ['微信聊天记录', '短信截图', '电话录音'],
  },
  {
    id: 4,
    title: '现场证据',
    desc: '商家关门照片/视频、公告',
    guide: '拍摄商家招牌、店内设施、关门公告等。建议拍摄周边环境以证明地点。',
    completed: false,
    required: false,
    examples: ['店铺外观', '关门公告', '现场视频'],
  },
])

const completedCount = computed(() =>
  evidenceList.value.filter(item => item.completed).length,
)

const progress = computed(() =>
  Math.round((completedCount.value / evidenceList.value.length) * 100),
)

const requiredCount = computed(() =>
  evidenceList.value.filter(item => item.required).length,
)

const requiredCompleted = computed(() =>
  evidenceList.value.filter(item => item.required && item.completed).length,
)

function uploadEvidence(item: any) {
  uni.chooseImage({
    count: 9,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: () => {
      item.completed = true
      uni.showToast({ title: '上传成功', icon: 'success' })
    },
  })
}

function goToManage() {
  if (requiredCompleted.value < requiredCount.value) {
    uni.showModal({
      title: '提示',
      content: `还有 ${requiredCount.value - requiredCompleted.value} 项必需证据未上传，是否继续？`,
      confirmText: '继续',
      cancelText: '返回',
      success: (res) => {
        if (res.confirm) {
          uni.navigateTo({ url: '/pages/evidence/manage' })
        }
      },
    })
  }
  else {
    uni.navigateTo({ url: '/pages/evidence/manage' })
  }
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-24">
    <!-- Progress Card -->
    <view class="mb-4 bg-bg-card px-6 py-5">
      <view class="mb-3 flex items-center justify-between">
        <view class="text-base text-text-main font-semibold">
          证据清单
        </view>
        <view class="text-sm text-text-sub">
          已完成 {{ completedCount }}/{{ evidenceList.length }}
        </view>
      </view>

      <view class="relative mb-3 h-2 overflow-hidden rounded-full bg-gray-100">
        <view
          class="absolute left-0 top-0 h-full rounded-full from-primary to-success bg-gradient-to-r transition-all"
          :style="{ width: `${progress}%` }"
        />
      </view>

      <view class="flex items-start gap-2">
        <view
          class="text-xs"
          :class="progress === 100 ? 'text-success' : 'text-text-sub'"
        >
          {{ progress === 100 ? '✨ 证据已完备，可以生成文书了' : `💡 必需证据 ${requiredCompleted}/${requiredCount}，建议全部上传以提高成功率` }}
        </view>
      </view>
    </view>

    <!-- Tips Card -->
    <view class="mx-4 mb-4 rounded-card bg-primary-light/30 p-4">
      <view class="mb-2 flex items-center">
        <view class="i-carbon-idea mr-2 text-lg text-primary" />
        <view class="text-sm text-text-main font-medium">
          证据搜集小贴士
        </view>
      </view>
      <view class="text-xs text-text-sub leading-relaxed space-y-1">
        <view>• 照片要清晰，文字可辨认</view>
        <view>• 保留原始文件，不要过度编辑</view>
        <view>• 多角度拍摄，确保信息完整</view>
        <view>• 及时保存，避免证据灭失</view>
      </view>
    </view>

    <!-- Evidence List -->
    <view class="px-4 space-y-3">
      <view
        v-for="item in evidenceList"
        :key="item.id"
        class="rounded-card bg-bg-card p-4 shadow-sm"
      >
        <view class="mb-3 flex items-start justify-between">
          <view class="flex-1">
            <view class="mb-1 flex items-center">
              <view class="text-base text-text-main font-medium">
                {{ item.title }}
              </view>
              <view
                v-if="item.required"
                class="ml-2 rounded-full bg-secondary/10 px-2 py-0.5 text-xs text-secondary"
              >
                必需
              </view>
              <view
                v-else
                class="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-text-sub"
              >
                建议
              </view>
            </view>
            <view class="text-xs text-text-sub">
              {{ item.desc }}
            </view>
          </view>

          <view
            v-if="item.completed"
            class="ml-3 h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-success"
          >
            <text class="text-xs text-white">✓</text>
          </view>
          <view
            v-else
            class="ml-3 h-6 w-6 flex-shrink-0 rounded-full bg-gray-100"
          />
        </view>

        <!-- Guide -->
        <view class="mb-3 rounded-xl bg-primary-light/50 px-3 py-2.5">
          <view class="mb-1 text-xs text-text-main font-medium">
            💡 搜集指引
          </view>
          <view class="text-xs text-text-main leading-relaxed">
            {{ item.guide }}
          </view>
        </view>

        <!-- Examples -->
        <view class="mb-3">
          <view class="mb-2 text-xs text-text-sub font-medium">
            示例类型：
          </view>
          <view class="flex flex-wrap gap-2">
            <view
              v-for="example in item.examples"
              :key="example"
              class="rounded-full bg-bg-page px-3 py-1 text-xs text-text-sub"
            >
              {{ example }}
            </view>
          </view>
        </view>

        <!-- Upload Button -->
        <button
          v-if="!item.completed"
          class="w-full flex items-center justify-center border-2 border-primary rounded-btn py-2.5 text-sm text-primary font-medium active:bg-primary-light/30"
          @click="uploadEvidence(item)"
        >
          <view class="i-carbon-upload mr-2" />
          上传{{ item.title }}
        </button>
        <view
          v-else
          class="flex items-center justify-center py-2 text-sm text-success"
        >
          <view class="i-carbon-checkmark-filled mr-1" />
          已上传
        </view>
      </view>
    </view>

    <!-- Fixed Bottom Button -->
    <view class="safe-area-inset-bottom fixed bottom-0 left-0 right-0 border-t border-border bg-bg-card px-6 py-4">
      <button
        class="w-full rounded-btn bg-primary py-3.5 text-white font-medium shadow-lg active:bg-primary-hover"
        @click="goToManage"
      >
        前往证据管理
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

.space-y-1 > view + view {
  margin-top: 4px;
}
</style>
