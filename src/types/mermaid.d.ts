// Type declarations for mermaid
declare global {
  interface Window {
    mermaid: {
      initialize: (config: any) => void
      init: (config?: any, element?: HTMLElement | null) => void
    }
  }
}

export {}