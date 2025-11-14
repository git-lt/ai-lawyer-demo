<template>
  <div>
    <AppHeader title="帮助与术语" :show-back="true" back-to="/" />
    
    <div class="container pb-20">
      <!-- 常见问题 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">常见问题</div>
        
        <div class="space-y-4">
          <div 
            v-for="faq in faqs" 
            :key="faq.id"
            class="border rounded-lg p-3"
          >
            <div 
              class="flex justify-between items-center cursor-pointer"
              @click="toggleFaq(faq.id)"
            >
              <div class="font-medium">{{ faq.question }}</div>
              <i 
                class="fas fa-chevron-down text-gray-400 transition-transform"
                :class="{ 'rotate-180': expandedFaqs.includes(faq.id) }"
              ></i>
            </div>
            <div 
              v-if="expandedFaqs.includes(faq.id)"
              class="mt-3 pt-3 border-t text-sm text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 术语表 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">术语表</div>
        
        <div class="space-y-3">
          <div 
            v-for="term in terms" 
            :key="term.id"
            class="border rounded-lg p-3"
          >
            <div class="font-medium mb-1">{{ term.name }}</div>
            <div class="text-sm text-gray-600">{{ term.definition }}</div>
          </div>
        </div>
      </div>
      
      <!-- 使用指南 -->
      <div class="bg-white rounded-xl border shadow-sm p-4 mb-3">
        <div class="font-semibold mb-4">使用指南</div>
        
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
            <div>
              <div class="font-medium mb-1">发起咨询</div>
              <div class="text-sm text-gray-600">描述您遇到的问题，我们的AI系统将为您提供专业的维权建议</div>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
            <div>
              <div class="font-medium mb-1">收集证据</div>
              <div class="text-sm text-gray-600">根据系统指引，上传相关证据材料，支持图片、文档等多种格式</div>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
            <div>
              <div class="font-medium mb-1">生成文书</div>
              <div class="text-sm text-gray-600">AI自动识别证据信息，生成专业的投诉文书</div>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
            <div>
              <div class="font-medium mb-1">提交投诉</div>
              <div class="text-sm text-gray-600">通过系统提供的渠道提交投诉，实时跟踪处理进度</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 联系我们 -->
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="font-semibold mb-4">联系我们</div>
        
        <div class="space-y-3">
          <div class="flex items-center">
            <i class="fas fa-phone text-blue-500 mr-3"></i>
            <span>客服热线：400-123-4567</span>
          </div>
          
          <div class="flex items-center">
            <i class="fas fa-envelope text-green-500 mr-3"></i>
            <span>邮箱：support@ailawyer.com</span>
          </div>
          
          <div class="flex items-center">
            <i class="fas fa-clock text-orange-500 mr-3"></i>
            <span>服务时间：9:00-18:00（工作日）</span>
          </div>
        </div>
      </div>
    </div>
    
    <FooterTabs />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import FooterTabs from '@/components/FooterTabs.vue'

interface FAQ {
  id: string
  question: string
  answer: string
}

interface Term {
  id: string
  name: string
  definition: string
}

const expandedFaqs = ref<string[]>([])

const faqs: FAQ[] = [
  {
    id: '1',
    question: '什么是预付式消费？',
    answer: '预付式消费是指消费者预先支付费用，商家在未来一段时间内提供商品或服务的消费模式，如健身卡、美容卡、教育培训等。'
  },
  {
    id: '2',
    question: '商家跑路了怎么办？',
    answer: '首先收集相关证据（合同、付款凭证、沟通记录等），然后通过12315平台投诉，必要时可申请支付令或向法院起诉。我们的系统会指导您完成整个流程。'
  },
  {
    id: '3',
    question: '投诉需要多长时间？',
    answer: '一般情况下，12315平台会在7个工作日内受理，60日内处理完毕。具体时间因案件复杂程度而异。'
  },
  {
    id: '4',
    question: '证据上传有什么要求？',
    answer: '支持JPG、PNG、PDF、DOC等常见格式，单个文件不超过10MB。建议上传清晰的原始文件，系统会自动识别关键信息。'
  },
  {
    id: '5',
    question: '生成的文书有法律效力吗？',
    answer: '系统生成的文书基于现行法律法规和专业模板，具有法律效力。但建议您在提交前仔细核对内容，必要时可咨询专业律师。'
  }
]

const terms: Term[] = [
  {
    id: '1',
    name: '12315',
    definition: '全国消费者投诉举报统一电话，由国家市场监督管理总局设立，用于受理消费者投诉举报。'
  },
  {
    id: '2',
    name: '支付令',
    definition: '法院根据债权人申请，向债务人发出的限期履行给付义务的法律文书，适用于债权债务关系明确的案件。'
  },
  {
    id: '3',
    name: '消费者权益保护法',
    definition: '调整消费者与经营者之间消费关系的法律规范，保护消费者合法权益的基本法律。'
  },
  {
    id: '4',
    name: '预付式消费管理办法',
    definition: '规范预付式消费行为的地方性法规，对商家资质、合同内容、退费标准等作出具体规定。'
  }
]

const toggleFaq = (id: string) => {
  const index = expandedFaqs.value.indexOf(id)
  if (index > -1) {
    expandedFaqs.value.splice(index, 1)
  } else {
    expandedFaqs.value.push(id)
  }
}
</script>