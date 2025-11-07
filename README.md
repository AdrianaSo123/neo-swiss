# Neo Swiss Design Website

A responsive website that explains Neo-Swiss design principles by demonstrating them in practice. Built using the systematic, grid-based approach of Neo-Swiss design itself.

## 🎯 Project Overview

This project creates a living example of Neo-Swiss design - a website that teaches Neo-Swiss principles by using them throughout its implementation. It demonstrates how classic Swiss Design principles adapt beautifully to modern, responsive web environments.

## ✨ Neo-Swiss Implementation

### Core Principles Demonstrated:
- **Responsive 12-Column Grid**: Collapses to 6 on tablet, 4 on mobile
- **Fluid Typography**: Uses CSS `clamp()` functions for scalable hierarchy
- **Minimal Color Palette**: Black, white, grays + single blue accent
- **Systematic Spacing**: 8px base scale throughout (8, 16, 24, 32, 48px)
- **Generous White Space**: Active negative space that guides attention
- **Mobile-First Design**: Progressive enhancement across all screen sizes

### Technical Stack:
- **HTML5**: Semantic structure with accessibility in mind
- **CSS Grid & Flexbox**: Modern layout systems enabling fluid Swiss grids  
- **CSS Custom Properties**: Systematic design token implementation
- **Inter Typeface**: Modern sans-serif perfect for Neo-Swiss aesthetic
- **Responsive Design**: Breakpoints at 480px, 768px, and 1024px

## 🚀 Live Demo

Start local server and view at `http://localhost:8000`:
```bash
python3 -m http.server 8000
```

## 📁 Repository Structure

```
/
├── index.html              # Main Neo-Swiss website
├── styles.css              # Neo-Swiss CSS implementation  
├── content/                 # Educational content about Neo-Swiss
│   ├── about.md            # Style explanation
│   ├── designers.md        # Key practitioners
│   └── timeline.md         # History from Swiss to Neo-Swiss
├── research/               # Design research and analysis
│   ├── project-vision.md   # Project goals and design direction
│   └── references/         # Reference website analysis
├── docs/                   # Original Swiss design documentation
├── style-guides/           # Comprehensive design guides (15 styles)
└── templates/              # Project workflow templates
```

## 🎨 Design Features

### Grid System
- **Desktop**: 12-column grid, 1200px max-width, 24px gutters
- **Tablet**: 6-column grid, 16px gutters  
- **Mobile**: 4-column grid, 8px gutters

### Typography Scale
```css
h1: clamp(48px, 6vw, 64px)
h2: clamp(36px, 5vw, 48px)  
h3: clamp(28px, 4vw, 36px)
body: clamp(16px, 2.2vw, 18px)
```

### Color System
- **Primary**: #000000 (black text)
- **Background**: #FFFFFF (white)
- **Grays**: #757575, #BDBDBD, #F5F5F5
- **Accent**: #2962FF (muted blue)

## 📊 Performance Goals
- Lighthouse scores 90+ in all categories
- Loading speed under 3 seconds
- Mobile-first responsive across all devices
- WCAG AA accessibility compliance

## 📚 Educational Content

The website includes comprehensive content about:
- Evolution from 1950s Swiss Design to modern Neo-Swiss
- Key designers from Josef Müller-Brockmann to today's digital pioneers
- Practical implementation of Neo-Swiss principles
- Real-world examples (Stripe, Linear, Airbnb Design)

## 🔗 Original Source

This project builds upon the excellent [Swiss Design Lineage repository](https://github.com/kaw393939/swiss_design_lineage_vibecoding) by kaw393939, extending it with a practical Neo-Swiss implementation.

## 🛠️ Development Process

Built following the 7-day AI collaboration workflow:
1. **Day 1**: Research and reference analysis  
2. **Day 2**: Content creation and planning
3. **Days 3-4**: Design and development 
4. **Days 5-6**: Refinement and responsive polish
5. **Day 7**: Final QA and deployment

**Current Status**: Day 4 - Core implementation complete ✅