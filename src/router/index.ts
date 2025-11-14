import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/consult',
    name: 'Consult',
    component: () => import('@/views/Consult.vue')
  },
  {
    path: '/evidence-guide',
    name: 'EvidenceGuide',
    component: () => import('@/views/EvidenceGuide.vue')
  },
  {
    path: '/evidence-upload',
    name: 'EvidenceUpload',
    component: () => import('@/views/EvidenceUpload.vue')
  },
  {
    path: '/evidence-library',
    name: 'EvidenceLibrary',
    component: () => import('@/views/EvidenceLibrary.vue')
  },
  {
    path: '/ai-extract',
    name: 'AIExtract',
    component: () => import('@/views/AIExtract.vue')
  },
  {
    path: '/doc-generator',
    name: 'DocGenerator',
    component: () => import('@/views/DocGenerator.vue')
  },
  {
    path: '/submit-guide',
    name: 'SubmitGuide',
    component: () => import('@/views/SubmitGuide.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/Timeline.vue')
  },
  {
    path: '/group-complaint',
    name: 'GroupComplaint',
    component: () => import('@/views/GroupComplaint.vue')
  },
  {
    path: '/company-report',
    name: 'CompanyReport',
    component: () => import('@/views/CompanyReport.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue')
  },
  {
    path: '/legal',
    name: 'Legal',
    component: () => import('@/views/Legal.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router