<template>
  <div>
    <AppHeader title="提交指引" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <!-- 渠道选择 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">选择投诉渠道</div>
        
        <div class="space-y-3">
          <label 
            v-for="channel in channels" 
            :key="channel.id"
            class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
            :class="{ 'border-blue-500 bg-blue-50': selectedChannel === channel.id }"
          >
            <input 
              type="radio" 
              v-model="selectedChannel" 
              :value="channel.id"
              class="mr-3"
            >
            <div class="flex-1">
              <div class="font-medium">{{ channel.name }}</div>
              <div class="text-sm text-gray-500">{{ channel.description }}</div>
              <div class="text-xs text-gray-400 mt-1">{{ channel.timeframe }}</div>
            </div>
            <div 
              class="text-xs px-2 py-1 rounded"
              :class="getChannelStatusClass(channel.status)"
            >
              {{ getChannelStatusText(channel.status) }}
            </div>
          </label>
        </div>
      </div>
      
      <!-- 提交步骤 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">提交步骤</div>
        
        <div class="space-y-4">
          <div 
            v-for="(step, index) in currentSteps" 
            :key="step.id"
            class="flex gap-4"
          >
            <!-- 步骤编号 -->
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {{ index + 1 }}
              </div>
            </div>
            
            <!-- 内容 -->
            <div class="flex-1">
              <div class="font-medium mb-1">{{ step.title }}</div>
              <div class="text-sm text-gray-600 mb-2">{{ step.description }}</div>
              <div v-if="step.tips" class="text-xs text-orange-600 bg-orange-50 p-2 rounded">
                <i class="fas fa-lightbulb mr-1"></i>{{ step.tips }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 材料清单 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">所需材料清单</div>
        
        <div class="space-y-2">
          <div 
            v-for="item in materialList" 
            :key="item.id"
            class="flex items-center justify-between p-3 border rounded-lg"
          >
            <div class="flex items-center">
              <i :class="item.icon" class="mr-3" :style="{ color: item.color }"></i>
              <span>{{ item.name }}</span>
            </div>
            <span 
              class="text-xs px-2 py-1 rounded"
              :class="item.required ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'"
            >
              {{ item.required ? '必需' : '可选' }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="grid grid-cols-2 gap-2">
        <button class="t-btn-primary" @click="startSubmission">
          <i class="fa-solid fa-paper-plane mr-2"></i>开始提交
        </button>
        <button class="t-btn-secondary" @click="previewMaterials">
          <i class="fa-solid fa-eye mr-2"></i>预览材料
        </button>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'

interface Channel {
  id: string
  name: string
  description: string
  timeframe: string
  status: 'recommended' | 'available' | 'limited'
  steps: Step[]
}

interface Step {
  id: string
  title: string
  description: string
  tips?: string
}

interface Material {
  id: string
  name: string
  icon: string
  color: string
  required: boolean
}

const selectedChannel = ref('12315')

const channels = ref<Channel[]>([
  {
    id: '12315',
    name: '12315平台',
    description: '国家市场监督管理总局官方投诉平台',
    timeframe: '受理：7工作日，处理：60日',
    status: 'recommended',
    steps: [
      {
        id: '1',
        title: '访问12315平台',
        description: '通过官网或APP访问12315平台，选择"我要投诉"',
        tips: '建议使用电脑操作，功能更完整'
      },
      {
        id: '2',
        title: '填写投诉信息',
        description: '按系统提示填写投诉人和被投诉人信息',
        tips: '信息要真实准确，联系方式保持畅通'
      },
      {
        id: '3',
        title: '上传证据材料',
        description: '上传相关证据材料，支持图片、文档等格式',
        tips: '材料要清晰完整，按类别整理好'
      },
      {
        id: '4',
        title: '提交投诉',
        description: '确认信息无误后提交投诉，获取投诉编号',
        tips: '记住投诉编号，方便后续查询进度'
      }
    ]
  },
  {
    id: 'local-12315',
    name: '地方12315',
    description: '通过地方市场监管部门投诉',
    timeframe: '受理：5工作日，处理：45日',
    status: 'available',
    steps: [
      {
        id: '1',
        title: '确定管辖部门',
        description: '根据商家所在地确定具体的市场监管部门',
        tips: '可在我们的企业查询功能中查看商家注册地'
      },
      {
        id: '2',
        title: '现场投诉或邮寄',
        description: '可现场投诉或邮寄书面材料',
        tips: '邮寄建议使用EMS，保留好邮寄凭证'
      },
      {
        id: '3',
        title: '补充材料',
        description: '根据要求补充相关材料',
        tips: '保持电话畅通，及时响应要求'
      }
    ]
  },
  {
    id: 'court',
    name: '法院起诉',
    description: '直接向人民法院提起诉讼',
    timeframe: '立案：7日，审理：3-6个月',
    status: 'limited',
    steps: [
      {
        id: '1',
        title: '准备起诉材料',
        description: '准备起诉书、证据材料、身份证明等',
        tips: '建议咨询专业律师，确保材料完整'
      },
      {
        id: '2',
        title: '确定管辖法院',
        description: '根据案件性质和金额确定管辖法院',
        tips: '一般向被告所在地或合同履行地法院起诉'
      },
      {
        id: '3',
        title: '提交起诉材料',
        description: '到法院立案庭提交起诉材料',
        tips: '可现场提交或网上立案'
      },
      {
        id: '4',
        title: '缴纳诉讼费',
        description: '按规定缴纳诉讼费用',
        tips: '诉讼费最终由败诉方承担'
      }
    ]
  }
])

const materialList = ref<Material[]>([
  {
    id: '1',
    name: '投诉书',
    icon: 'fas fa-file-alt',
    color: '#2563EB',
    required: true
  },
  {
    id: '2',
    name: '合同协议',
    icon: 'fas fa-file-contract',
    color: '#DC2626',
    required: true
  },
  {
    id: '3',
    name: '付款凭证',
    icon: 'fas fa-receipt',
    color: '#059669',
    required: true
  },
  {
    id: '4',
    name: '身份证明',
    icon: 'fas fa-id-card',
    color: '#7C3AED',
    required: true
  },
  {
    id: '5',
    name: '沟通记录',
    icon: 'fas fa-comments',
    color: '#EA580C',
    required: false
  },
  {
    id: '6',
    name: '其他证据',
    icon: 'fas fa-folder',
    color: '#6B7280',
    required: false
  }
])

const currentSteps = computed(() => {
  const channel = channels.value.find(ch => ch.id === selectedChannel.value)
  return channel?.steps || []
})

const getChannelStatusClass = (status: string) => {
  switch (status) {
    case 'recommended':
      return 'bg-green-100 text-green-600'
    case 'available':
      return 'bg-blue-100 text-blue-600'
    case 'limited':
      return 'bg-orange-100 text-orange-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getChannelStatusText = (status: string) => {
  switch (status) {
    case 'recommended':
      return '推荐'
    case 'available':
      return '可用'
    case 'limited':
      return '复杂'
    default:
      return '未知'
  }
}

const startSubmission = () => {
  console.log('开始提交，渠道：', selectedChannel.value)
  alert('正在跳转到相应投诉平台...')
}

const previewMaterials = () => {
  console.log('预览材料')
  alert('材料预览功能开发中...')
}
</script>