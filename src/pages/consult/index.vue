<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '智能咨询',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const messages = ref([
  {
    id: 1,
    type: 'ai',
    content: '您好！我是您的AI维权助手 🤖\n\n我可以帮您：\n• 分析纠纷类型和维权可行性\n• 提供法律依据和维权建议\n• 指导证据搜集和文书准备\n\n请告诉我您遇到了什么问题？',
    tip: '例如：健身房跑路了，预付的年卡费用不退',
  },
])

const inputText = ref('')
const isTyping = ref(false)

const quickQuestions = [
  '健身房关门不退费',
  '美容院会员卡退款',
  '教育培训机构退费',
]

function startRightsProtection() {
  uni.navigateTo({ url: '/pages/register/index' })
}

function sendMessage(text?: string) {
  const messageText = text || inputText.value.trim()
  if (!messageText)
    return

  // Add user message
  messages.value.push({
    id: messages.value.length + 1,
    type: 'user',
    content: messageText,
  })

  inputText.value = ''
  isTyping.value = true

  // Simulate AI response
  setTimeout(() => {
    isTyping.value = false
    messages.value.push({
      id: messages.value.length + 1,
      type: 'ai',
      content: '我理解您的情况。根据《消费者权益保护法》第五十三条：\n\n"经营者以预收款方式提供商品或者服务的，应当按照约定提供。未按照约定提供的，应当按照消费者的要求履行约定或者退回预付款。"\n\n您的情况属于典型的预付款纠纷，有法律保护。',
      steps: [
        '搜集证据（支付凭证、合同、沟通记录）',
        '向12315平台投诉',
        '必要时申请支付令或提起诉讼',
      ],
      action: true,
      successRate: '85%',
      avgDays: '7-15',
    })
  }, 1500)
}

function handleQuickQuestion(question: string) {
  sendMessage(question)
}
</script>

<template>
  <view class="consult-page">
    <!-- Chat Area -->
    <scroll-view
      scroll-y
      class="chat-scroll"
      scroll-into-view="latest-message"
    >
      <view
        v-for="msg in messages"
        :key="msg.id"
        class="mb-4 flex"
        :class="msg.type === 'user' ? 'flex-row-reverse' : ''"
      >
        <!-- Avatar -->
        <view
          class="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full"
          :class="msg.type === 'ai' ? 'bg-primary-light mr-3' : 'bg-secondary/20 ml-3'"
        >
          <view
            class="text-xl"
            :class="msg.type === 'ai' ? 'i-carbon-bot text-primary' : 'i-carbon-user text-secondary'"
          />
        </view>

        <!-- Message Bubble -->
        <view
          class="message-bubble"
        >
          <view
            class="rounded-2xl px-4 py-3 shadow-sm"
            :class="msg.type === 'ai'
              ? 'bg-bg-card rounded-tl-sm'
              : 'bg-primary rounded-tr-sm text-white'"
          >
            <view
              class="whitespace-pre-wrap text-sm leading-relaxed"
              :class="msg.type === 'ai' ? 'text-text-main' : 'text-white'"
            >
              {{ msg.content }}
            </view>

            <!-- Tip -->
            <view
              v-if="msg.tip"
              class="mt-2 text-xs text-text-sub opacity-70"
            >
              {{ msg.tip }}
            </view>

            <!-- Success Rate & Days -->
            <view
              v-if="msg.successRate"
              class="mt-3 flex gap-2"
            >
              <view class="flex-1 rounded-xl bg-success/10 px-3 py-2">
                <view class="mb-1 text-2xs text-text-sub">
                  成功率
                </view>
                <view class="text-sm text-success font-bold">
                  {{ msg.successRate }}
                </view>
              </view>
              <view class="flex-1 rounded-xl bg-info/10 px-3 py-2">
                <view class="mb-1 text-2xs text-text-sub">
                  平均用时
                </view>
                <view class="text-sm text-info font-bold">
                  {{ msg.avgDays }}天
                </view>
              </view>
            </view>

            <!-- Steps -->
            <view
              v-if="msg.steps"
              class="mt-3 rounded-xl bg-bg-page p-3"
            >
              <view class="mb-2 text-xs text-text-main font-medium">
                建议维权路径：
              </view>
              <view
                v-for="(step, index) in msg.steps"
                :key="index"
                class="mb-1.5 flex items-start text-xs text-text-main last:mb-0"
              >
                <text class="mr-2 text-primary">{{ index + 1 }}.</text>
                <text class="flex-1">{{ step }}</text>
              </view>
            </view>

            <!-- Action Button -->
            <button
              v-if="msg.action"
              class="mt-3 w-full rounded-btn bg-primary-light px-4 py-2 text-sm text-primary font-medium active:bg-primary-light/80"
              @click="startRightsProtection"
            >
              开始维权 →
            </button>
          </view>
        </view>
      </view>

      <!-- Typing Indicator -->
      <view
        v-if="isTyping"
        class="mb-4 flex"
      >
        <view class="mr-3 h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
          <view class="i-carbon-bot text-xl text-primary" />
        </view>
        <view class="rounded-2xl rounded-tl-sm bg-bg-card px-4 py-3 shadow-sm">
          <view class="flex gap-1">
            <view class="h-2 w-2 animate-bounce rounded-full bg-text-sub" />
            <view class="animation-delay-200 h-2 w-2 animate-bounce rounded-full bg-text-sub" />
            <view class="animation-delay-400 h-2 w-2 animate-bounce rounded-full bg-text-sub" />
          </view>
        </view>
      </view>

      <!-- Quick Questions (show only at start) -->
      <view
        v-if="messages.length === 1"
        class="mt-4"
      >
        <view class="mb-3 px-2 text-xs text-text-sub">
          快速提问
        </view>
        <view class="flex flex-wrap gap-2">
          <view
            v-for="question in quickQuestions"
            :key="question"
            class="border-2 border-primary/20 rounded-btn bg-primary-light/30 px-4 py-2 text-xs text-primary active:bg-primary-light"
            @click="handleQuickQuestion(question)"
          >
            {{ question }}
          </view>
        </view>
      </view>

      <view id="latest-message" />
    </scroll-view>

    <!-- Input Area - Fixed at bottom -->
    <view class="input-area">
      <view class="flex items-center">
        <view class="i-carbon-microphone mr-3 text-2xl text-text-sub" />
        <input
          v-model="inputText"
          type="text"
          placeholder="请输入您的问题..."
          placeholder-class="text-text-placeholder"
          class="mr-3 flex-1 rounded-btn bg-bg-page px-4 py-2.5 text-sm text-text-main"
          @confirm="sendMessage()"
        >
        <button
          class="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white shadow active:bg-primary-hover"
          @click="sendMessage()"
        >
          <view class="i-carbon-send text-lg" />
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

input {
  border: none;
  outline: none;
}

.consult-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #faf9f6;
  position: relative;
  padding-bottom: 70px; /* 为固定底部输入框留出空间 */
}

.chat-scroll {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

.message-bubble {
  max-width: calc(100% - 52px); /* 100% - 头像宽度(40px) - 间距(12px) */
  flex-shrink: 0;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
}

.input-area {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid #e5e5e5;
  padding: 12px 16px;
  padding-bottom: calc(12px + env(safe-area-inset-bottom));
  z-index: 100;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}
</style>
