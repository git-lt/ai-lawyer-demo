import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ConsultTag, ConsultPath } from '@/types'

export const useConsultStore = defineStore('consult', () => {
  const tags = ref<ConsultTag[]>([
    { id: '1', name: '跑路' },
    { id: '2', name: '拒退' },
    { id: '3', name: '服务缩水' },
    { id: '4', name: '健身' },
    { id: '5', name: '教培' },
    { id: '6', name: '美容' }
  ])
  
  const selectedTags = ref<string[]>([])
  const consultInput = ref('')
  
  const selectedTagObjects = computed(() => 
    tags.value.filter(tag => selectedTags.value.includes(tag.id))
  )
  
  const toggleTag = (tagId: string) => {
    const index = selectedTags.value.indexOf(tagId)
    if (index > -1) {
      selectedTags.value.splice(index, 1)
    } else {
      selectedTags.value.push(tagId)
    }
  }
  
  const clearSelection = () => {
    selectedTags.value = []
    consultInput.value = ''
  }
  
  return {
    tags,
    selectedTags,
    consultInput,
    selectedTagObjects,
    toggleTag,
    clearSelection
  }
})