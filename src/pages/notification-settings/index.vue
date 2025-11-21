<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '通知设置',
    navigationBarBackgroundColor: '#FAF9F6',
    navigationBarTextStyle: 'black',
  },
})

const settings = ref([
  {
    id: 'caseProgress',
    title: '案件进度通知',
    desc: '案件状态变更时推送提醒',
    enabled: true,
  },
  {
    id: 'knowledge',
    title: '法律知识推送',
    desc: '定期推送维权相关法律知识',
    enabled: false,
  },
])

function toggleSetting(item: any) {
  item.enabled = !item.enabled
  uni.showToast({
    title: item.enabled ? '已开启' : '已关闭',
    icon: 'success',
  })
}
</script>

<template>
  <view class="min-h-screen bg-bg-page p-4">
    <view class="overflow-hidden rounded-card bg-bg-card shadow-sm">
      <view
        v-for="(item, index) in settings"
        :key="item.id"
        class="px-5 py-4"
        :class="index < settings.length - 1 ? 'border-b border-border' : ''"
      >
        <view class="flex items-center justify-between">
          <view class="mr-4 flex-1">
            <view class="mb-1 text-sm text-text-main font-medium">
              {{ item.title }}
            </view>
            <view class="text-xs text-text-sub">
              {{ item.desc }}
            </view>
          </view>
          <switch
            :checked="item.enabled"
            color="#00B894"
            @change="() => toggleSetting(item)"
          />
        </view>
      </view>
    </view>
  </view>
</template>
