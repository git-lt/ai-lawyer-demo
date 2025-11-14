<template>
  <div>
    <AppHeader title="原型索引" />
    
    <div class="container pb-20">
      <div class="bg-white rounded-xl border shadow-sm p-4">
        <div class="text-sm font-semibold mb-2">页面入口</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <router-link 
            v-for="page in pages" 
            :key="page.path"
            :to="page.path"
            class="block bg-white rounded-lg border p-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="font-semibold">{{ page.title }}</div>
            <div class="text-xs text-gray-500">{{ page.description }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'

interface Page {
  path: string
  title: string
  description: string
}

const pages: Page[] = [
  { path: '/', title: '首页', description: '价值与四步流程' },
  { path: '/consult', title: '咨询引擎', description: '场景化问答与流程图' },
  { path: '/evidence-guide', title: '证据指引', description: '动态清单与教程' },
  { path: '/evidence-upload', title: '证据上传', description: '批量上传与预检' },
  { path: '/evidence-library', title: '证据库', description: '分类归档' },
  { path: '/ai-extract', title: 'AI识别结果', description: '字段提取与修正' },
  { path: '/doc-generator', title: '文书生成', description: '投诉书与集体模板' },
  { path: '/submit-guide', title: '提交指引', description: '渠道匹配与步骤' },
  { path: '/timeline', title: '跟踪日历', description: '节点提醒' },
  { path: '/group-complaint', title: '集体维权', description: '成员与授权书' },
  { path: '/company-report', title: '企业查询', description: '增值报告' },
  { path: '/profile', title: '个人中心', description: '实名与历史' },
  { path: '/settings', title: '设置与无障碍', description: '字体与朗读' },
  { path: '/auth', title: '登录认证', description: '手机号登录' },
  { path: '/help', title: '帮助与术语', description: 'FAQ与术语表' },
  { path: '/legal', title: '法律与合规', description: '法规与声明' }
]
</script>