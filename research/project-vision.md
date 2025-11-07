# Neo-Swiss Website Vision

## Project Goal
Create a responsive website that explains Neo-Swiss design principles using Neo-Swiss design itself - a living example of the style we're teaching.

## Site Structure
1. **Homepage** - Introduction to Neo-Swiss style
2. **History** - Evolution from Swiss Design to Neo-Swiss  
3. **Principles** - Core design principles with visual examples
4. **Examples** - Gallery of Neo-Swiss websites and designs
5. **About** - About this project and methodology

## Content Strategy
- **Educational content** about Neo-Swiss design
- **Visual examples** showing principles in action
- **Interactive elements** demonstrating responsive grid
- **Clean, professional tone** matching the aesthetic

## Design Direction

### Typography
- **Font:** Inter (modern, highly legible Neo-Swiss choice)
- **Scale:** Fluid typography using clamp() functions
  - h1: `clamp(36px, 5vw, 64px)`
  - h2: `clamp(28px, 4vw, 48px)` 
  - h3: `clamp(24px, 3vw, 36px)`
  - body: `clamp(16px, 2vw, 18px)`

### Color Palette
- **Primary:** #000000 (black text)
- **Background:** #FFFFFF (white)
- **Gray:** #757575 (secondary text)  
- **Light Gray:** #F5F5F5 (section backgrounds)
- **Accent:** #2962FF (muted blue for links/CTAs)

### Grid System
- **Desktop:** 12-column grid, 1200px max-width
- **Tablet:** 6-column grid
- **Mobile:** 4-column grid
- **Gutters:** 24px desktop, 16px tablet/mobile
- **Spacing:** 8px base scale (8, 16, 24, 32, 48px)

### Layout Patterns
1. **Hero Section:** Full-width, centered text, large typography
2. **Content Sections:** Alternating layouts using 8-4, 6-6 column splits
3. **Grid Gallery:** Even 3-3-3-3 or 4-4-4 layouts for examples
4. **Navigation:** Minimal, clean horizontal nav
5. **Footer:** Multi-column link organization

## Responsive Breakpoints
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px  
- **Mobile:** 320px - 767px

## Success Criteria
- [ ] Demonstrates all Neo-Swiss principles visually
- [ ] Responsive across all devices
- [ ] Lighthouse scores 90+ in all categories
- [ ] Loading speed under 3 seconds
- [ ] Clear educational value about Neo-Swiss design
- [ ] Professional, portfolio-worthy result