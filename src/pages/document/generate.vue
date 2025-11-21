<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '生成文书',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const docTypes = [
  {
    id: '12315',
    name: '12315投诉书',
    desc: '适用于消费纠纷投诉',
    active: true,
    successRate: '85%',
  },
  {
    id: 'lawyer',
    name: '律师函模板',
    desc: '警告性法律文书',
    active: false,
    successRate: '70%',
  },
  {
    id: 'lawsuit',
    name: '民事起诉状',
    desc: '法院诉讼文书',
    active: false,
    successRate: '60%',
  },
]

const activeType = ref('12315')

const documentData = {
  plaintiff: '张三',
  phone: '13800000000',
  defendant: 'XX健身服务有限公司',
  amount: 3000,
  date: '2023-11-21',
}

function downloadPDF() {
  uni.showLoading({ title: '生成中...' })
  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({ title: '已保存到相册', icon: 'success' })
  }, 1500)
}

function editDocument() {
  uni.showToast({ title: '编辑功能开发中', icon: 'none' })
}

function goToComplaintGuide() {
  uni.navigateTo({ url: '/pages/complaint/guide' })
}

function shareDocument() {
  uni.showActionSheet({
    itemList: ['分享给微信好友', '保存到相册', '发送到邮箱'],
    success: (res) => {
      uni.showToast({
        title: `选择了第${res.tapIndex + 1}项`,
        icon: 'none',
      })
    },
  })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-32">
    <!-- Document Type Selector -->
    <view class="mb-4 bg-bg-card px-4 py-4">
      <view class="mb-3 text-base text-text-main font-semibold">
        选择文书类型
      </view>
      <scroll-view
        scroll-x
        class="whitespace-nowrap"
      >
        <view class="flex gap-3">
          <view
            v-for="type in docTypes"
            :key="type.id"
            class="flex-shrink-0 whitespace-nowrap border-2 rounded-card px-4 py-3 transition-colors"
            :class="activeType === type.id
              ? 'border-primary bg-primary-light/30'
              : 'border-border bg-bg-page'"
            @click="activeType = type.id"
          >
            <view
              class="mb-1 text-sm font-medium"
              :class="activeType === type.id ? 'text-primary' : 'text-text-main'"
            >
              {{ type.name }}
            </view>
            <view class="mb-1 text-xs text-text-sub">
              {{ type.desc }}
            </view>
            <view class="text-xs text-success">
              成功率 {{ type.successRate }}
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- AI Generation Status -->
    <view class="mx-4 mb-4 rounded-card bg-success/10 p-4">
      <view class="mb-2 flex items-center">
        <view class="i-carbon-checkmark-filled mr-2 text-lg text-success" />
        <view class="text-sm text-success font-medium">
          AI生成完成
        </view>
      </view>
      <view class="text-xs text-text-sub leading-relaxed">
        已根据您的证据自动生成文书，包含法律依据和诉求内容。生成时间：2分钟前
      </view>
    </view>

    <!-- Document Preview -->
    <view class="mx-4 mb-4 rounded-card bg-bg-card p-4 shadow-sm">
      <view class="mb-4 flex items-center justify-between">
        <view class="text-base text-text-main font-semibold">
          文书预览
        </view>
        <view
          class="flex items-center text-sm text-primary"
          @click="editDocument"
        >
          <view class="i-carbon-edit mr-1" />
          编辑
        </view>
      </view>

      <!-- Document Content -->
      <scroll-view
        scroll-y
        class="max-h-96 overflow-y-auto rounded-xl bg-bg-page px-4 py-4"
      >
        <view class="mb-4 text-center text-base text-text-main font-bold">
          消费者权益争议投诉书
        </view>

        <view class="text-sm text-text-main leading-relaxed space-y-3">
          <view>
            <text class="font-medium">投诉人：</text>
            {{ documentData.plaintiff }}，{{ documentData.phone }}
          </view>

          <view>
            <text class="font-medium">被投诉人：</text>
            {{ documentData.defendant }}
          </view>

          <view>
            <text class="font-medium">投诉请求：</text>
            <view class="mt-1 pl-4">
              1. 退还预付款人民币{{ documentData.amount }}元；
              <br>
              2. 赔偿相应损失；
              <br>
              3. 依法处理被投诉人违法行为。
            </view>
          </view>

          <view>
            <text class="font-medium">事实与理由：</text>
            <view class="mt-1 pl-4">
              本人于2023年10月1日在被投诉人处办理了健身年卡，支付费用{{ documentData.amount }}元。现商家突然停业，拒不退还剩余款项，严重侵害消费者合法权益。
              <br><br>
              根据双方签订的服务合同，商家应当提供一年期健身服务。然而，商家在未履行完毕服务义务的情况下擅自停业，构成违约。
            </view>
          </view>

          <view>
            <text class="font-medium">法律依据：</text>
            <view class="mt-1 pl-4">
              1. 《中华人民共和国消费者权益保护法》第五十三条：经营者以预收款方式提供商品或者服务的，应当按照约定提供。未按照约定提供的，应当按照消费者的要求履行约定或者退回预付款。
              <br><br>
              2. 《中华人民共和国民法典》第五百七十七条：当事人一方不履行合同义务或者履行合同义务不符合约定的，应当承担继续履行、采取补救措施或者赔偿损失等违约责任。
            </view>
          </view>

          <view>
            <text class="font-medium">证据材料：</text>
            <view class="mt-1 pl-4">
              1. 支付凭证（微信支付截图）
              <br>
              2. 服务合同（健身会员协议）
              <br>
              3. 沟通记录（与商家的聊天记录）
            </view>
          </view>

          <view class="mt-6 text-right">
            <view>投诉人：{{ documentData.plaintiff }}</view>
            <view class="mt-1 text-xs text-text-sub">
              {{ documentData.date }}
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- Document Stats -->
    <view class="grid grid-cols-3 mx-4 mb-4 gap-3">
      <view class="rounded-card bg-bg-card p-3 text-center shadow-sm">
        <view class="mb-1 text-xs text-text-sub">
          字数统计
        </view>
        <view class="text-lg text-primary font-bold">
          856
        </view>
      </view>
      <view class="rounded-card bg-bg-card p-3 text-center shadow-sm">
        <view class="mb-1 text-xs text-text-sub">
          法律依据
        </view>
        <view class="text-lg text-success font-bold">
          2条
        </view>
      </view>
      <view class="rounded-card bg-bg-card p-3 text-center shadow-sm">
        <view class="mb-1 text-xs text-text-sub">
          证据材料
        </view>
        <view class="text-lg text-info font-bold">
          3份
        </view>
      </view>
    </view>

    <!-- Tips -->
    <view class="px-4">
      <view class="flex items-start rounded-card bg-warning/10 px-4 py-3">
        <view class="mr-2 text-lg text-warning">
          💡
        </view>
        <view class="flex-1 text-xs text-text-sub leading-relaxed">
          <view class="mb-1 text-text-main font-medium">
            温馨提示
          </view>
          文书已根据您的证据自动生成，请仔细核对信息是否准确。如需修改，请点击右上角"编辑"按钮。
        </view>
      </view>
    </view>

    <!-- Fixed Bottom Buttons -->
    <view class="safe-area-inset-bottom fixed bottom-0 left-0 right-0 border-t border-border bg-bg-card px-6 py-4">
      <view class="mb-3 flex gap-2">
        <button
          class="flex-1 border-2 border-primary rounded-btn bg-white py-2.5 text-sm text-primary font-medium active:bg-primary-light/30"
          @click="downloadPDF"
        >
          <view class="i-carbon-download mr-1 inline-block" />
          下载PDF
        </button>
        <button
          class="flex-1 border-2 border-info rounded-btn bg-white py-2.5 text-sm text-info font-medium active:bg-info/10"
          @click="shareDocument"
        >
          <view class="i-carbon-share mr-1 inline-block" />
          分享
        </button>
      </view>
      <button
        class="w-full rounded-btn bg-primary py-3.5 text-white font-medium shadow-lg active:bg-primary-hover"
        @click="goToComplaintGuide"
      >
        提交投诉
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

.grid {
  display: grid;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
</style>
