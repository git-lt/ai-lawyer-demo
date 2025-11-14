<template>
  <div>
    <AppHeader title="登录认证" />
    
    <div class="container pb-20">
      <div class="bg-white rounded-xl border shadow-sm p-6">
        <div class="text-center mb-6">
          <div class="t-h2 mb-2">AI预付消费维权助手</div>
          <div class="t-muted">手机号登录，保护您的权益</div>
        </div>
        
        <!-- 登录表单 -->
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">手机号码</label>
            <input 
              v-model="phone"
              type="tel" 
              placeholder="请输入手机号码"
              class="t-input"
              maxlength="11"
              pattern="[0-9]{11}"
              required
            >
          </div>
          
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2">验证码</label>
            <div class="flex gap-2">
              <input 
                v-model="code"
                type="text" 
                placeholder="请输入验证码"
                class="t-input flex-1"
                maxlength="6"
                pattern="[0-9]{6}"
                required
              >
              <button 
                type="button"
                class="t-btn-secondary px-4 text-sm whitespace-nowrap"
                :disabled="countdown > 0"
                @click="sendCode"
              >
                {{ countdown > 0 ? `${countdown}s` : '发送验证码' }}
              </button>
            </div>
          </div>
          
          <button type="submit" class="t-btn-primary w-full mb-4">
            登录
          </button>
        </form>
        
        <!-- 协议声明 -->
        <div class="text-xs text-gray-500 text-center">
          登录即表示您同意我们的
          <a href="/legal" class="text-blue-500 hover:underline">服务条款</a>
          和
          <a href="/legal" class="text-blue-500 hover:underline">隐私政策</a>
        </div>
        
        <!-- 快速体验 -->
        <div class="mt-6 pt-6 border-t">
          <div class="text-center">
            <div class="text-sm text-gray-600 mb-3">或者</div>
            <button 
              class="t-btn-secondary w-full"
              @click="guestLogin"
            >
              <i class="fa-solid fa-user mr-2"></i>游客模式体验
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const phone = ref('')
const code = ref('')
const countdown = ref(0)

const sendCode = () => {
  if (!/^1[3-9]\d{9}$/.test(phone.value)) {
    alert('请输入正确的手机号码')
    return
  }
  
  // 模拟发送验证码
  countdown.value = 60
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
  
  alert('验证码已发送到您的手机')
}

const handleLogin = async () => {
  if (!/^1[3-9]\d{9}$/.test(phone.value)) {
    alert('请输入正确的手机号码')
    return
  }
  
  if (!/^\d{6}$/.test(code.value)) {
    alert('请输入6位数字验证码')
    return
  }
  
  try {
    await userStore.login(phone.value, code.value)
    router.push('/')
  } catch (error) {
    alert('登录失败，请检查验证码')
  }
}

const guestLogin = () => {
  userStore.login('13800138000', '123456')
  router.push('/')
}
</script>