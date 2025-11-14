import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { EvidenceItem } from '@/types'

export const useEvidenceStore = defineStore('evidence', () => {
  const evidenceItems = ref<EvidenceItem[]>([])
  const uploadProgress = ref(0)
  
  const addEvidence = (files: FileList) => {
    Array.from(files).slice(0, 50).forEach((file, index) => {
      const item: EvidenceItem = {
        id: `evidence-${Date.now()}-${index}`,
        name: file.name,
        status: 'pending',
        uploadTime: new Date()
      }
      evidenceItems.value.push(item)
    })
  }
  
  const updateEvidenceStatus = (id: string, status: EvidenceItem['status']) => {
    const item = evidenceItems.value.find(item => item.id === id)
    if (item) {
      item.status = status
    }
  }
  
  const removeEvidence = (id: string) => {
    const index = evidenceItems.value.findIndex(item => item.id === id)
    if (index > -1) {
      evidenceItems.value.splice(index, 1)
    }
  }
  
  const clearAllEvidence = () => {
    evidenceItems.value = []
    uploadProgress.value = 0
  }
  
  return {
    evidenceItems,
    uploadProgress,
    addEvidence,
    updateEvidenceStatus,
    removeEvidence,
    clearAllEvidence
  }
})