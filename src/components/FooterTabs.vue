<template>
  <nav class="footer-tabs">
    <router-link 
      v-for="tab in tabs" 
      :key="tab.path"
      :to="tab.path"
      :class="{ active: $route.path === tab.path }"
    >
      <i :class="tab.icon" class="text-lg"></i>
      <span class="text-xs font-medium mt-1">{{ tab.label }}</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
interface Tab {
  path: string
  icon: string
  label: string
}

const tabs: Tab[] = [
  { path: '/', icon: 'fas fa-house', label: '首页' },
  { path: '/consult', icon: 'fas fa-comments', label: '咨询' },
  { path: '/evidence-library', icon: 'fas fa-folder-open', label: '证据' },
  { path: '/profile', icon: 'fas fa-user', label: '我的' }
]
</script>