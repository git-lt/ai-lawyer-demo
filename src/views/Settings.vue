<template>
  <div>
    <AppHeader title="设置与无障碍" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <!-- 无障碍设置 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">无障碍设置</div>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium">字体大小</div>
              <div class="text-sm text-gray-500">调整应用内文字大小</div>
            </div>
            <div class="flex items-center gap-2">
              <button 
                class="px-2 py-1 border rounded text-sm hover:bg-gray-50"
                @click="decreaseFontSize"
              >
                A-
              </button>
              <span class="text-sm px-2">{{ fontSize }}px</span>
              <button 
                class="px-2 py-1 border rounded text-sm hover:bg-gray-50"
                @click="increaseFontSize"
              >
                A+
              </button>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium">语音朗读</div>
              <div class="text-sm text-gray-500">自动朗读页面内容</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                v-model="voiceReading" 
                class="sr-only peer"
              >
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium">高对比度</div>
              <div class="text-sm text-gray-500">增强文字与背景对比度</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                v-model="highContrast" 
                class="sr-only peer"
              >
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
      
      <!-- 通知设置 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">通知设置</div>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium">投诉进度通知</div>
              <div class="text-sm text-gray-500">投诉状态更新时推送通知</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                v-model="progressNotification" 
                class="sr-only peer"
              >
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium">法律更新提醒</div>
              <div class="text-sm text-gray-500">相关法律法规更新时通知</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                v-model="legalUpdateNotification" 
                class="sr-only peer"
              >
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
      
      <!-- 账户设置 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">账户设置</div>
        
        <div class="space-y-3">
          <router-link to="/profile" class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <div class="flex items-center">
              <i class="fas fa-user text-blue-500 mr-3"></i>
              <span>个人信息</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </router-link>
          
          <div class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <div class="flex items-center">
              <i class="fas fa-lock text-green-500 mr-3"></i>
              <span>修改密码</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </div>
          
          <div class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer" @click="logout">
            <div class="flex items-center">
              <i class="fas fa-sign-out-alt text-red-500 mr-3"></i>
              <span class="text-red-500">退出登录</span>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </div>
        </div>
      </div>
      
      <!-- 关于 -->
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="font-semibold mb-4">关于</div>
        
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <span>版本信息</span>
            <span class="text-sm text-gray-500">v1.0.0</span>
          </div>
          
          <router-link to="/help" class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <span>使用帮助</span>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </router-link>
          
          <router-link to="/legal" class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <span>法律声明</span>
            <i class="fas fa-chevron-right text-gray-400"></i>
          </router-link>
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

const fontSize = ref(16)
const voiceReading = ref(false)
const highContrast = ref(false)
const progressNotification = ref(true)
const legalUpdateNotification = ref(true)

const increaseFontSize = () => {
  if (fontSize.value < 24) {
    fontSize.value += 2
    updateFontSize()
  }
}

const decreaseFontSize = () => {
  if (fontSize.value > 12) {
    fontSize.value -= 2
    updateFontSize()
  }
}

const updateFontSize = () => {
  document.documentElement.style.setProperty('font-size', `${fontSize.value}px`)
}

const logout = () => {
  if (confirm('确定要退出登录吗？')) {
    userStore.logout()
    router.push('/auth')
  }
}
</script>