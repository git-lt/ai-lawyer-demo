# Design System - 退钱吧 (Warm Guardian Style)

## 1. Design Philosophy
**"温暖守护" (Empathetic & Healing)**
A design style that reduces the coldness of legal processes, acting as a supportive companion to alleviate user anxiety.
- **Keywords**: Friendly, Healing, Lightweight, Companion
- **Target Audience**: Users facing disputes and anxiety, needing reassurance and guidance.

## 2. Color Palette

### Primary Colors
Used for main actions, active states, and brand identity.
- **Primary**: `#00B894` (Mint Green) - Represents hope, resolution, and calm.
- **Primary Hover**: `#00A383`
- **Primary Light**: `#E0F7F3` (Backgrounds, active states)

### Secondary Colors
Used for accents, highlights, and call-to-actions.
- **Secondary**: `#FF7675` (Vitality Orange) - Encourages action (e.g., "Start Rights Protection").
- **Secondary Hover**: `#E66A69`

### Neutral Colors
Used for text, backgrounds, and borders.
- **Text Primary**: `#2D3436` (Dark Grey) - Main content, headings.
- **Text Secondary**: `#636E72` (Medium Grey) - Subtitles, descriptions.
- **Text Placeholder**: `#B2BEC3` (Light Grey) - Input placeholders, disabled text.
- **Background Page**: `#FAF9F6` (Off-White) - Softer than pure white, easier on the eyes.
- **Background Card**: `#FFFFFF` (Pure White) - Content cards, inputs.
- **Border**: `#DFE6E9`

### Functional Colors
Used for status feedback.
- **Success**: `#00B894` (Same as Primary)
- **Warning**: `#FDCB6E` (Mustard Yellow)
- **Error**: `#FF7675` (Same as Secondary)
- **Info**: `#74B9FF` (Soft Blue)

## 3. Typography
Clean, modern sans-serif fonts for readability.

### Font Family
- **iOS**: "PingFang SC", "Helvetica Neue", sans-serif
- **Android**: "Roboto", "Noto Sans SC", sans-serif

### Font Sizes
- **Heading 1 (Page Title)**: `24px` (Line height: 1.4, Weight: 600)
- **Heading 2 (Section Title)**: `20px` (Line height: 1.4, Weight: 600)
- **Heading 3 (Card Title)**: `18px` (Line height: 1.4, Weight: 500)
- **Body Large**: `16px` (Line height: 1.5, Weight: 400)
- **Body Regular**: `14px` (Line height: 1.5, Weight: 400)
- **Caption/Small**: `12px` (Line height: 1.5, Weight: 400)

## 4. Spacing & Layout
Based on an 4px grid system.

### Spacing Tokens
- **xs**: `4px`
- **sm**: `8px`
- **md**: `16px`
- **lg**: `24px`
- **xl**: `32px`
- **xxl**: `48px`

### Border Radius
Soft, rounded corners to convey friendliness.
- **sm**: `8px` (Small buttons, tags)
- **md**: `16px` (Cards, inputs)
- **lg**: `24px` (Modals, large containers)
- **full**: `9999px` (Pill buttons, avatars)

## 5. Shadows
Soft, diffused shadows to create depth without harshness.
- **sm**: `0 2px 4px rgba(0, 0, 0, 0.05)`
- **md**: `0 4px 12px rgba(0, 0, 0, 0.08)`
- **lg**: `0 8px 24px rgba(0, 0, 0, 0.12)`

## 6. Iconography
- **Style**: Rounded, Line or Filled (Soft edges).
- **Size**: `24px` (Standard), `16px` (Small), `32px` (Large).

## 7. Components

### Buttons
- **Primary Button**:
    - Bg: `#00B894`
    - Text: `#FFFFFF`
    - Radius: `9999px` (Full)
    - Shadow: `md`
- **Secondary Button**:
    - Bg: `#FFFFFF`
    - Border: `1px solid #00B894`
    - Text: `#00B894`
    - Radius: `9999px` (Full)

### Cards
- Bg: `#FFFFFF`
- Radius: `16px`
- Shadow: `sm`
- Padding: `16px`

### Inputs
- Bg: `#F5F7FA` (or `#FFFFFF` with Border)
- Radius: `12px`
- Padding: `12px 16px`
- Text: `#2D3436`
- Placeholder: `#B2BEC3`

## 8. UnoCSS Configuration (Preview)
```ts
// unocss.config.ts
export default defineConfig({
  theme: {
    colors: {
      primary: '#00B894',
      primaryHover: '#00A383',
      primaryLight: '#E0F7F3',
      secondary: '#FF7675',
      bgPage: '#FAF9F6',
      textMain: '#2D3436',
      textSub: '#636E72',
    },
    borderRadius: {
      'card': '16px',
      'btn': '9999px',
    }
  }
})
```
