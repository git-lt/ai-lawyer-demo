export interface ConsultTag {
  id: string
  name: string
  selected?: boolean
}

export interface EvidenceItem {
  id: string
  name: string
  status: 'pending' | 'processing' | 'completed'
  uploadTime?: Date
}

export interface ConsultPath {
  title: string
  description: string
  steps: string[]
  legalBasis: {
    title: string
    url: string
  }[]
  timeline: {
    stage: string
    duration: string
  }[]
}

export interface UserProfile {
  id: string
  name: string
  phone: string
  avatar?: string
  complaintHistory: ComplaintRecord[]
}

export interface ComplaintRecord {
  id: string
  title: string
  status: 'draft' | 'submitted' | 'processing' | 'resolved'
  createdAt: Date
  updatedAt: Date
}