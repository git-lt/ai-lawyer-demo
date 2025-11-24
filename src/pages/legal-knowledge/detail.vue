<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '法律知识详情',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const articleId = ref('1')
const isCollected = ref(false)

// 获取路由参数
onLoad((options: any) => {
  if (options.id) {
    articleId.value = options.id
  }
})

// 法律知识文章数据
const articles = ref({
  1: {
    title: '《消费者权益保护法》第五十三条',
    category: '消费者权益',
    publishDate: '2024-01-15',
    readCount: 1234,
    collectCount: 567,
    content: `经营者以预收款方式提供商品或者服务的，应当按照约定提供。未按照约定提供的，应当按照消费者的要求履行约定或者退回预付款；并应当承担预付款的利息、消费者必须支付的合理费用。

【法条解读】

本条是关于预付款消费的规定，主要保护消费者在预付费消费中的合法权益。

一、适用范围

本条适用于以下情形：
1. 健身房、美容院等预付卡消费
2. 教育培训机构的课程费用
3. 会员制服务的预付费用
4. 其他预收款方式的商品或服务

二、经营者的义务

1. 按约定提供商品或服务
经营者收取预付款后，必须严格按照合同约定提供相应的商品或服务，不得擅自改变服务内容、降低服务质量。

2. 未履约的法律后果
如果经营者未能按约定提供服务，消费者有权选择：
- 要求继续履行合同
- 要求退回预付款

3. 承担额外费用
经营者还需承担：
- 预付款的利息（从支付之日起计算）
- 消费者为维权支付的合理费用（如交通费、律师费等）

三、典型案例

【案例1】健身房关门跑路
张女士在某健身房办理了3年会员卡，支付12000元。使用半年后健身房突然关门。根据本条规定，张女士有权要求：
- 退回剩余预付款10000元
- 支付该款项的利息
- 赔偿其为维权支付的合理费用

【案例2】培训机构倒闭
李先生为孩子报名英语培训班，预付学费20000元。上了10节课后机构倒闭。李先生可以要求：
- 按比例退还剩余学费
- 支付预付款利息
- 赔偿转学产生的额外费用

四、维权建议

1. 保留证据
- 付款凭证（转账记录、发票等）
- 合同或协议
- 消费记录
- 沟通记录

2. 及时维权
- 先与经营者协商
- 向消费者协会投诉
- 向市场监管部门举报
- 必要时提起诉讼

3. 预防措施
- 选择信誉良好的商家
- 不要一次性支付过大金额
- 仔细阅读合同条款
- 保留所有消费凭证

五、相关法律规定

本条与以下法律规定配合使用：
- 《民法典》合同编相关规定
- 《单用途商业预付卡管理办法》
- 各地方性预付卡管理条例

六、注意事项

1. 举证责任
消费者需要证明：
- 支付了预付款
- 经营者未按约定提供服务
- 造成的实际损失

2. 诉讼时效
一般为3年，从知道或应当知道权利被侵害之日起计算。

3. 管辖法院
可以选择：
- 被告住所地法院
- 合同履行地法院
- 消费者住所地法院（更有利于消费者）`,
  },
  2: {
    title: '预付卡消费纠纷处理指南',
    category: '维权指南',
    publishDate: '2024-02-20',
    readCount: 892,
    collectCount: 423,
    content: `预付卡消费已成为现代消费的重要方式，但也是消费纠纷的高发领域。本文详细介绍预付卡消费纠纷的处理方法。

【常见纠纷类型】

1. 商家跑路
这是最严重的情况，商家突然关门，消费者无法联系，预付款无法追回。

2. 服务缩水
商家降低服务质量，或减少服务项目，与办卡时承诺不符。

3. 转让受限
消费者因搬家等原因需要转让会员卡，但商家设置不合理限制。

4. 退卡困难
消费者因各种原因需要退卡，但商家拒绝或设置苛刻条件。

【维权步骤】

第一步：收集证据
- 办卡合同或协议
- 付款凭证
- 消费记录
- 商家宣传材料
- 与商家的沟通记录

第二步：协商解决
先尝试与商家协商，提出合理诉求，保留协商记录。

第三步：投诉举报
如协商不成，可向以下部门投诉：
- 12315消费者投诉热线
- 市场监督管理局
- 商务主管部门
- 消费者协会

第四步：法律途径
- 申请仲裁
- 提起民事诉讼
- 如涉及诈骗，向公安机关报案

【法律依据】

1. 《消费者权益保护法》第五十三条
2. 《单用途商业预付卡管理办法》
3. 《民法典》合同编相关规定

【预防建议】

1. 选择正规商家
- 查看营业执照
- 了解经营时间
- 查询信用记录

2. 理性消费
- 不要被优惠迷惑
- 不要一次性充值过多
- 根据实际需求办卡

3. 签订书面合同
- 明确服务内容
- 约定退卡条件
- 保留合同原件

4. 及时消费
- 尽快使用预付款
- 定期查询余额
- 关注商家经营状况`,
  },
})

const currentArticle = computed(() => articles.value[articleId.value as string])

// 检查是否已收藏
onMounted(() => {
  const collected = uni.getStorageSync(`collected_${articleId.value}`)
  isCollected.value = !!collected
})

// 切换收藏状态
function toggleCollect() {
  isCollected.value = !isCollected.value

  if (isCollected.value) {
    uni.setStorageSync(`collected_${articleId.value}`, {
      id: articleId.value,
      title: currentArticle.value.title,
      collectTime: Date.now(),
    })
    uni.showToast({
      title: '收藏成功',
      icon: 'success',
    })
  }
  else {
    uni.removeStorageSync(`collected_${articleId.value}`)
    uni.showToast({
      title: '已取消收藏',
      icon: 'none',
    })
  }
}

// 分享功能
function handleShare() {
  uni.showToast({
    title: '分享功能开发中',
    icon: 'none',
  })
}

// 跳转到咨询页面
function goToConsult() {
  uni.navigateTo({ url: '/pages/consult/index' })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page pb-20">
    <!-- Article Header -->
    <view class="bg-bg-card px-6 py-5 shadow-sm">
      <view class="mb-3 text-xl text-text-main font-bold leading-relaxed">
        {{ currentArticle.title }}
      </view>

      <view class="flex items-center justify-between">
        <view class="flex items-center space-x-4">
          <view class="flex items-center">
            <view class="i-carbon-tag mr-1 text-sm text-text-sub" />
            <text class="text-xs text-text-sub">{{ currentArticle.category }}</text>
          </view>
          <view class="flex items-center">
            <view class="i-carbon-calendar mr-1 text-sm text-text-sub" />
            <text class="text-xs text-text-sub">{{ currentArticle.publishDate }}</text>
          </view>
        </view>
      </view>

      <view class="mt-3 flex items-center space-x-4">
        <view class="flex items-center">
          <view class="i-carbon-view mr-1 text-sm text-text-sub" />
          <text class="text-xs text-text-sub">{{ currentArticle.readCount }} 阅读</text>
        </view>
        <view class="flex items-center">
          <view class="i-carbon-favorite mr-1 text-sm text-text-sub" />
          <text class="text-xs text-text-sub">{{ currentArticle.collectCount }} 收藏</text>
        </view>
      </view>
    </view>

    <!-- Article Content -->
    <view class="mx-4 my-4 rounded-card bg-bg-card px-5 py-6 shadow-sm">
      <view class="whitespace-pre-line text-sm text-text-main leading-loose">
        {{ currentArticle.content }}
      </view>
    </view>

    <!-- Related Articles -->
    <view class="mx-4 mb-4">
      <view class="mb-3 px-2 text-base text-text-main font-semibold">
        相关推荐
      </view>
      <view
        class="mb-3 flex items-start rounded-card bg-bg-card p-4 shadow-sm active:shadow-md"
        @click="articleId = '2'"
      >
        <view class="mr-3 text-2xl">
          📚
        </view>
        <view class="flex-1">
          <view class="mb-1 text-sm text-text-main font-medium">
            预付卡消费纠纷处理指南
          </view>
          <view class="text-xs text-text-sub">
            详细介绍预付卡消费纠纷的处理方法和预防措施
          </view>
        </view>
        <view class="i-carbon-chevron-right text-text-sub" />
      </view>
    </view>

    <!-- Fixed Bottom Actions -->
    <view class="fixed bottom-0 left-0 right-0 border-t border-border bg-bg-card px-6 py-3 shadow-lg">
      <view class="flex items-center justify-between">
        <view class="flex items-center space-x-6">
          <view
            class="flex flex-col items-center"
            @click="toggleCollect"
          >
            <view
              class="mb-1 text-2xl transition-all"
              :class="isCollected ? 'i-carbon-favorite-filled text-error' : 'i-carbon-favorite text-text-sub'"
            />
            <text class="text-xs" :class="isCollected ? 'text-error' : 'text-text-sub'">
              {{ isCollected ? '已收藏' : '收藏' }}
            </text>
          </view>

          <view
            class="flex flex-col items-center"
            @click="handleShare"
          >
            <view class="i-carbon-share mb-1 text-2xl text-text-sub" />
            <text class="text-xs text-text-sub">分享</text>
          </view>
        </view>

        <button
          class="ml-6 flex flex-1 items-center justify-center rounded-btn from-primary to-success bg-gradient-to-r py-3 text-sm text-white font-semibold active:opacity-90"
          @click="goToConsult"
        >
          <view class="i-carbon-bot mr-2" />
          咨询相关问题
        </button>
      </view>
    </view>
  </view>
</template>

<style scoped>
button {
  border: none;
  outline: none;
}

.space-x-4 > view:not(:last-child) {
  margin-right: 1rem;
}

.space-x-6 > view:not(:last-child) {
  margin-right: 1.5rem;
}

.whitespace-pre-line {
  white-space: pre-line;
}

.transition-all {
  transition: all 0.3s ease;
}
</style>
