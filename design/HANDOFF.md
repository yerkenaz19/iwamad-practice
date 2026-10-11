# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype): post-desktop,posts-desktop,404-desktop,posts-phone
Components → React files: PostCard → src/components/PostCard.tsx Button → src/components/ui/Button.tsx Tag → src/components/ui/Tag.tsx
Button variants → prop: variant = "primary"
PostCard layout: direction Vertical, gap 12px, padding 16px, radius 8px
Breakpoint change: phone 1 column(s), desktop 3 columns; header header — horizontal (row) on desktop and vertical (column) on phone
Tokens (all ten): color/primary = color/primary = #1D4ED8 color/on-primary = #FFFFFF
color/text = #1F2937
color/text-muted = #9CA3AF
color/surface = #FFFFFF
color/border = #D1D5DB
Space:
space/2 = 8px
space/4 = 16px
space/6 = 24px
Radius: radius/md = 8px
## Contrast fix
- `color/text-muted`: `#9CA3AF` → `#6B7280`
- Reason: The original muted text color did not provide sufficient contrast on a white background. The darker color improves readability and meets the 4.5:1 contrast target for normal text.