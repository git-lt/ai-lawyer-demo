<script setup lang="ts">
definePage({
  style: {
    navigationStyle: 'custom',
  },
})

onMounted(() => {
  setTimeout(() => {
    uni.reLaunch({ url: '/pages/home/index' })
  }, 1000)
})
</script>

<template>
  <view class="h-screen w-full flex flex-col items-center justify-center bg-white">
    <view class="i-carbon-circle-dash animate-spin text-4xl text-primary" />
    <view class="mt-4 text-sm text-gray-500">
      加载中...
    </view>
  </view>
</template>
