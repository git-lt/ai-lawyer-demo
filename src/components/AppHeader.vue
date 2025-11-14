<template>
  <header class="app-header">
    <div class="inner">
      <slot name="left">
        <router-link v-if="showBack" :to="backTo" class="icon-with-text">
          <i class="fas fa-arrow-left"></i>
        </router-link>
      </slot>
      
      <div class="t-h1">{{ title }}</div>
      
      <div class="nav-links">
        <slot name="right">
          <router-link v-if="showIndex" to="/index" class="icon-with-text">
            页面索引
          </router-link>
        </slot>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title: string
  showBack?: boolean
  backTo?: string
  showIndex?: boolean
}

withDefaults(defineProps<Props>(), {
  showBack: false,
  backTo: '/',
  showIndex: false
})
</script>