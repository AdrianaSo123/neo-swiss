# Swiss Style Portfolio - Complete Technical Specification

**Version:** 1.0  
**Date:** November 5, 2025  
**Purpose:** Reference specification for students creating design system variations in the Swiss Lineage Gallery project

---

## Overview

This document provides a complete technical specification for a professional portfolio website built using **International Typographic Style (Swiss Design)** principles. Students should use this specification as context when working with AI agents to translate these principles into their assigned design style.

**Key Principle:** This specification describes *what* the system does and *how* it's structured, not specific implementation code. Use this to help AI agents understand the full scope and quality expectations.

---

## Table of Contents

1. [Design System Foundation](#design-system-foundation)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Grid System](#grid-system)
4. [Typography System](#typography-system)
5. [Color System](#color-system)
6. [Spacing & Layout](#spacing--layout)
7. [Component Specifications](#component-specifications)
8. [Page Templates](#page-templates)
9. [Responsive Behavior](#responsive-behavior)
10. [Performance Requirements](#performance-requirements)
11. [Accessibility Standards](#accessibility-standards)
12. [Content Architecture](#content-architecture)

---

## Design System Foundation

### Core Swiss Design Principles

The site implements **International Typographic Style** with these defining characteristics:

#### 1. Mathematical Grid System
- **12-column grid** with precise mathematical proportions
- Grid gutter (space between columns): 1.5rem (24px)
- Grid margins (outer padding): Fluid from 1.5rem to 4rem based on viewport
- Column width calculation: `(100% - (gutter × 11)) / 12`
- Grid provides structural foundation for all layouts

#### 2. Asymmetric Balance
- Content weighted using **golden ratio approximations**
- Common splits: 5:7, 7:5, 1:2 column distributions
- Creates visual tension and interest while maintaining order
- Asymmetry used purposefully, not randomly

#### 3. Typographic Hierarchy
- Typography is the **primary design element**
- Sans-serif typeface exclusively (Inter font family)
- Extreme size contrasts: Display (32-56px) to Caption (12-14px)
- Uppercase text with wide letter-spacing for labels and navigation
- Negative letter-spacing for large headlines (-0.025em to -0.03em)

#### 4. Minimal Color Palette
- **Achromatic base**: Pure black (#000000) and white (#ffffff)
- **Grayscale spectrum**: 9 gray values (100-900) for subtle variations
- **Single accent color**: Red (#e53e3e) used sparingly for emphasis
- Color serves function, not decoration

#### 5. Structural Elements as Design
- Heavy borders (2-3px solid black) create visual structure
- Horizontal rules separate content sections
- Red accent bars (2-4px) emphasize hierarchy
- Lines are compositional elements, not mere dividers

#### 6. Rational Organization
- Information presented in clear, logical hierarchy
- Definition lists (dl/dt/dd) for structured data
- Numbered sections and sequenced content
- Objective, neutral tone

---

## Architecture & Technology Stack

### Static Site Generator: Eleventy (11ty)

**Version:** 3.0+

**Configuration Requirements:**
- Input directory: `src/`
- Output directory: `_site/`
- Template formats: Markdown (.md), Nunjucks (.njk), HTML (.html)
- Markdown engine: markdown-it with HTML enabled
- Server port: 8080 (development)
- Server host: 0.0.0.0 (for Docker compatibility)

**Required Eleventy Plugins:**
1. **@11ty/eleventy-plugin-rss** - RSS feed generation
2. **@11ty/eleventy-img** - Optimized image processing
3. **EleventyHtmlBasePlugin** - Path prefix handling for deployment

### CSS Framework: Tailwind CSS

**Version:** 3.4+

**Configuration Strategy:**
- Utility-first approach as base
- Custom design system layered on top via @layer directives
- PostCSS for processing with autoprefixer
- PurgeCSS for production (removes unused utilities)

**Custom Layers Structure:**
```
@layer base {
  /* CSS custom properties (design tokens) */
  /* Base typography settings */
  /* Accessibility improvements */
}

@layer components {
  /* Swiss grid system */
  /* Button components */
  /* Card components */
  /* Typography components (.prose-swiss) */
}

@layer utilities {
  /* Swiss-specific utilities */
  /* Shadow utilities */
  /* Performance utilities */
}
```

### Templating: Nunjucks

**Template Hierarchy:**
1. **Base Layout** (`base.njk`) - HTML shell, header, footer
2. **Page Layouts** (`post.njk`, `project.njk`) - Content-specific wrappers
3. **Includes/Components** - Reusable UI elements
4. **Content Files** - Markdown with frontmatter

**Frontmatter Standards:**
```yaml
layout: layouts/base.njk
title: Page Title
description: Meta description for SEO
date: YYYY-MM-DD
tags: ["category", "topic"]
```

### JavaScript: Minimal Vanilla JS

**Requirements:**
- Mobile navigation toggle functionality
- No jQuery or heavy frameworks
- CSP-compliant (no inline scripts)
- Bundle with esbuild for production
- AlpineJS for reactive interactions (optional enhancement)

### Build Process

**Development Workflow:**
1. Tailwind CSS watch mode (rebuilds on CSS changes)
2. Eleventy serve mode with live reload (port 8080)
3. JavaScript bundler in watch mode (optional)
4. Parallel processes using npm-run-all

**Production Build:**
1. Tailwind CSS production build (minified, purged)
2. Eleventy production build
3. JavaScript bundle (minified)
4. All output to `_site/` directory

**Deployment:**
- GitHub Actions CI/CD pipeline
- Deploy to GitHub Pages
- Support for custom domain
- Path prefix handling for subpath deployments
- Nginx configuration for Docker deployment

---

## Grid System

### Base Grid Specifications

**Desktop Grid (≥768px):**
- 12 columns of equal width
- Gutter: 1.5rem (24px) between columns
- Outer margins: fluid `clamp(1.5rem, 5vw, 4rem)`
- Max-width: 1440px (centered)
- Column span utilities: `.swiss-col-1` through `.swiss-col-12`

**Tablet Grid (≥640px, <768px):**
- 8 columns
- Gutter: 1.25rem (20px)
- Outer margins: 2rem (32px)

**Mobile Grid (<640px):**
- 4 columns
- Gutter: 1rem (16px)
- Outer margins: 1rem (16px)
- All multi-column layouts stack to full width

### Asymmetric Layout Patterns

**Hero Asymmetric (5:7 ratio):**
- Left column: 5 fractional units
- Right column: 7 fractional units
- Gap between: 3-4rem (48-64px)
- Reverses to single column on mobile

**Content Asymmetric (7:5 ratio):**
- Left column: 7 fractional units
- Right column: 5 fractional units
- Gap between: 2.5-3rem (40-48px)
- Reverses to single column on mobile

**Three-Column Layouts:**
- Common patterns: 3-6-3 (sidebar-content-sidebar)
- Or: 4-4-4 (equal thirds)
- Gap: 1.5rem consistent

### Grid Usage Guidelines

1. **Content should respect the grid** - Align all major elements to column boundaries
2. **Full-bleed sections allowed** - Background colors can extend edge-to-edge
3. **Nested grids** - Grids can be nested within grid columns
4. **White space is structural** - Gaps are part of the design system
5. **Break the grid intentionally** - Overlapping elements allowed when purposeful

---

## Typography System

### Font Family Stack

**Primary Sans-Serif:**
```
Font Family: Inter
Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
Fallback: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

**Loading Strategy:**
- Preconnect to Google Fonts CDN
- Preload font stylesheet
- Load asynchronously with media="print" onload="this.media='all'"
- Noscript fallback for non-JS users
- Font-display: swap (for FOUT prevention)

**OpenType Features:**
- Kerning enabled: `font-feature-settings: "kern" 1`
- Ligatures enabled: `"liga" 1`
- Contextual alternates: `"calt" 1`
- Oldstyle numerals in body text: `font-variant-numeric: oldstyle-nums`
- Lining numerals in headers/code: `font-variant-numeric: lining-nums`

### Type Scale - Fluid Typography

All font sizes use CSS `clamp()` for fluid scaling between breakpoints.

**Display (Hero Headlines):**
- Min: 2rem (32px) at 320px viewport
- Max: 3.5rem (56px) at 1440px viewport
- Formula: `clamp(2rem, 6vw + 1rem, 3.5rem)`
- Line-height: 1.05 (tight)
- Letter-spacing: -0.025em (negative)
- Font-weight: 700 (Bold)
- Use: Homepage hero, major section titles

**Heading 1:**
- Min: 1.75rem (28px)
- Max: 3rem (48px)
- Formula: `clamp(1.75rem, 5vw + 0.5rem, 3rem)`
- Line-height: 1.1
- Letter-spacing: -0.025em
- Font-weight: 700
- Use: Page titles, primary headlines

**Heading 2:**
- Min: 1.5rem (24px)
- Max: 2.25rem (36px)
- Formula: `clamp(1.5rem, 4vw + 0.5rem, 2.25rem)`
- Line-height: 1.2
- Letter-spacing: -0.01em
- Font-weight: 700
- Use: Section headers, article subtitles

**Heading 3:**
- Min: 1.25rem (20px)
- Max: 1.75rem (28px)
- Formula: `clamp(1.25rem, 3vw + 0.5rem, 1.75rem)`
- Line-height: 1.3
- Letter-spacing: -0.01em
- Font-weight: 700
- Use: Subsection headers

**Heading 4:**
- Min: 1.125rem (18px)
- Max: 1.375rem (22px)
- Formula: `clamp(1.125rem, 2vw + 0.25rem, 1.375rem)`
- Line-height: 1.4
- Letter-spacing: 0
- Font-weight: 700
- Use: Tertiary headers

**Body Large:**
- Min: 1.125rem (18px)
- Max: 1.25rem (20px)
- Formula: `clamp(1.125rem, 1vw + 0.5rem, 1.25rem)`
- Line-height: 1.6
- Font-weight: 400
- Use: Lead paragraphs, introductions

**Body (Default):**
- Min: 1rem (16px)
- Max: 1.125rem (18px)
- Formula: `clamp(1rem, 0.5vw + 0.75rem, 1.125rem)`
- Line-height: 1.7
- Font-weight: 400
- Use: Standard paragraph text, lists

**Body Small:**
- Min: 0.875rem (14px)
- Max: 1rem (16px)
- Formula: `clamp(0.875rem, 0.5vw + 0.5rem, 1rem)`
- Line-height: 1.5
- Font-weight: 400
- Use: Captions, footnotes, secondary info

**Caption/Labels:**
- Min: 0.75rem (12px)
- Max: 0.875rem (14px)
- Formula: `clamp(0.75rem, 0.5vw + 0.25rem, 0.875rem)`
- Line-height: 1.4
- Font-weight: 700 (Bold)
- Text-transform: uppercase
- Letter-spacing: 0.15em (very wide)
- Use: Section labels, metadata, navigation

### Advanced Typography Features

**Text Wrapping:**
- Headlines use `text-wrap: balance` to prevent orphans
- Body text uses `text-wrap: pretty` (when supported)

**Hyphenation (Mobile Only):**
- Enable on narrow viewports (<640px)
- `hyphens: auto`
- Min 6 characters before hyphen
- Min 3 characters before break
- Min 2 characters after break

**Prose Styling (Long-Form Content):**
- Max-width: 65 characters (optimal reading length)
- Vertical rhythm: consistent spacing between elements
- Links: underlined with red underline, black text
- Link hover: red background, white text
- Strong text: 700 weight, black color
- Code inline: gray background, monospace font, 1px border
- Blockquotes: 4px red left border, italic, gray text
- Lists: custom bullets (em-dash) in red

---

## Color System

### Primary Colors

**Swiss Black:**
- Hex: `#000000`
- RGB: `0, 0, 0`
- Use: Primary text, borders, structural elements
- Contrast ratio: 21:1 on white (WCAG AAA)

**Swiss White:**
- Hex: `#ffffff`
- RGB: `255, 255, 255`
- Use: Backgrounds, text on dark backgrounds
- Primary background color for most surfaces

**Swiss Red (Accent):**
- Hex: `#e53e3e`
- RGB: `229, 62, 62`
- Use: Sparingly for emphasis, CTAs, accent bars
- Guidelines: Use in small doses, never large backgrounds
- Contrast ratio: 4.5:1 on white (WCAG AA)

**Swiss Red Dark:**
- Hex: `#c53030`
- RGB: `197, 48, 48`
- Use: Hover states, pressed buttons
- Darker variant for interaction feedback

### Grayscale Palette

**Gray 100 (Lightest):**
- Hex: `#f5f5f5`
- Use: Subtle backgrounds, alternating table rows

**Gray 200:**
- Hex: `#e5e5e5`
- Use: Disabled states, dividers

**Gray 300:**
- Hex: `#d4d4d4`
- Use: Borders, input borders, subtle dividers

**Gray 400:**
- Hex: `#a3a3a3`
- Use: Placeholder text, icons

**Gray 500:**
- Hex: `#737373`
- Use: Secondary text (WCAG AA on white)

**Gray 600:**
- Hex: `#525252`
- Use: Body text alternative

**Gray 700:**
- Hex: `#404040`
- Use: Darker text, strong contrast

**Gray 800:**
- Hex: `#262626`
- Use: Near-black for softer contrast

**Gray 900 (Darkest):**
- Hex: `#171717`
- Use: Dark backgrounds, maximum contrast text

### Color Usage Guidelines

**Text Color Rules:**
1. Primary text: Swiss Black on white backgrounds
2. Secondary text: Gray 700 or Gray 600
3. Muted text: Gray 500 (minimum for WCAG AA)
4. Reversed text: Swiss White on black/dark backgrounds
5. Links: Black text with red underline, red background on hover

**Background Color Rules:**
1. Primary surfaces: Swiss White
2. Alternate sections: Gray 100 (very subtle)
3. Dark sections: Swiss Black with white text
4. Cards/elevated surfaces: White with shadows

**Accent Color Rules:**
1. Buttons: Red background for primary actions
2. Hover states: Red background with white text
3. Accent bars: 2-4px red horizontal rules
4. Active states: Red indicators (navigation, tabs)
5. Icons: Red for important/featured items

**Border Color Rules:**
1. Strong borders: Swiss Black (2-3px)
2. Standard borders: Gray 300 (1px)
3. Subtle dividers: Gray 200 (1px)
4. Accent borders: Swiss Red (2-4px)

### Accessibility Requirements

**Contrast Ratios:**
- Body text (16px+): Minimum 4.5:1 (WCAG AA)
- Large text (18px+ or 14px+ bold): Minimum 3:1
- Target: 7:1 for AAA compliance when possible
- UI components: Minimum 3:1 against adjacent colors

**Color Independence:**
- Information never conveyed by color alone
- Always pair color with text, icons, or patterns
- Links distinguishable without color (underlines)

---

## Spacing & Layout

### Spacing Scale (8px Base Unit)

**Extra Small (xs):** 0.25rem (4px)
- Use: Icon padding, fine adjustments

**Small (sm):** 0.5rem (8px)
- Use: Tight spacing, compact components

**Medium (md):** 0.75rem (12px)
- Use: Text spacing, list item gaps

**Large (lg):** 1rem (16px)
- Use: Standard component padding, paragraph spacing

**Extra Large (xl):** 1.5rem (24px)
- Use: Section padding, card padding

**2X Large (2xl):** 2rem (32px)
- Use: Component separation, small sections

**3X Large (3xl):** 2.5rem (40px)
- Use: Medium sections, hero elements

**4X Large (4xl):** 3rem (48px)
- Use: Large section padding

**5X Large (5xl):** 4rem (64px)
- Use: Major section breaks, hero spacing

### Fluid Spacing

**Section Inline (Horizontal):**
- Formula: `clamp(1rem, 3vw, 3rem)`
- Min: 1rem (16px)
- Max: 3rem (48px)
- Use: Container horizontal padding

**Section Block (Vertical):**
- Formula: `clamp(4rem, 8vw, 8rem)`
- Min: 4rem (64px)
- Max: 8rem (128px)
- Use: Major section vertical padding

**Container Padding:**
- Formula: `clamp(1rem, 4vw, 2rem)`
- Min: 1rem (16px)
- Max: 2rem (32px)
- Use: Content container padding

### Layout Patterns

**Container Pattern:**
- Max-width: 1440px or 1200px (configurable)
- Horizontal centering: `margin: 0 auto`
- Responsive padding: Uses fluid container padding
- Example pages: About, Blog, Projects

**Full-Bleed Pattern:**
- Content extends edge-to-edge
- Inner content respects grid margins
- Background colors/images full-width
- Example: Hero sections, dark sections

**Sidebar Pattern:**
- Main content: 8 columns
- Sidebar: 4 columns
- Gap: 2rem (32px)
- Switches to stacked on mobile

**Card Grid Pattern:**
- 3 columns on desktop (≥1024px)
- 2 columns on tablet (≥640px)
- 1 column on mobile (<640px)
- Gap: 1.5rem (24px)
- Equal height cards using CSS Grid

---

## Component Specifications

### Button Components

**Swiss Primary Button:**
- Background: Swiss Black
- Text: Swiss White
- Border: 2px solid black
- Padding: 1rem 2rem (16px 32px)
- Min-height: 56px (Swiss standard touch target)
- Font-size: 0.875rem (14px)
- Font-weight: 700 (Bold)
- Text-transform: Uppercase
- Letter-spacing: 0.1em
- Transition: 200ms all
- Hover: Background Swiss Red, Border Swiss Red
- Focus: 2px outline, 2px offset

**Swiss Secondary Button:**
- Background: Swiss White
- Text: Swiss Black
- Border: 2px solid black
- All other specs same as primary
- Hover: Background Swiss Black, Text Swiss White

**Swiss Accent Button:**
- Background: Swiss Red
- Text: Swiss White
- Border: 2px solid red
- All other specs same as primary
- Hover: Background Swiss Red Dark

**Button States:**
- Default: Base styling
- Hover: Color transition, slight gap increase on icons
- Focus: Visible outline (accessibility)
- Active/Pressed: Darker background
- Disabled: 50% opacity, cursor not-allowed

**Button Sizing:**
- Large: 56px min-height, 2rem padding
- Medium: 44px min-height, 1.5rem padding
- Small: 36px min-height, 1rem padding
- All meet WCAG 44x44px touch target minimum

### Card Components

**Project Card:**
- Border: 2px solid black
- Background: White
- Padding: 3rem (48px)
- Transition: 300ms transform and box-shadow
- Hover: translateY(-4px), 4px black border expansion

**Card Structure:**
1. **Number Badge** (top)
   - Font-size: Display scale
   - Color: Gray 200
   - Position: Absolute or in flow

2. **Title** (heading 3 size)
   - Font-weight: Bold
   - Text-transform: Uppercase
   - Letter-spacing: 0.05em

3. **Accent Bar**
   - Width: 48px
   - Height: 2px
   - Background: Swiss Red
   - Margin: 1rem 0

4. **Description** (body text)
   - Color: Gray 700
   - Max-width: Constrained for readability

5. **Metadata** (tags, date)
   - Font-size: Caption
   - Text-transform: Uppercase
   - Letter-spacing: Wide
   - Border: 1px solid black

6. **CTA Link** (bottom)
   - Inline-flex with arrow icon
   - Font-weight: Bold
   - Uppercase
   - Gap increases on hover

**Blog Card:**
- Simpler than project card
- 12-column grid layout
- Date column (2 cols), Content (7 cols), Action (3 cols)
- Border-top: 2px solid black
- Border-bottom: 1px solid gray 300
- Padding: 2rem 0
- Hover: Background gray 50

### Navigation Components

**Desktop Navigation:**
- Fixed position, sticky top
- Background: White
- Border-bottom: 3px solid black
- Height: 64px
- Z-index: 50

**Navigation Items:**
- Font-size: 0.75rem (12px)
- Font-weight: Bold
- Text-transform: Uppercase
- Letter-spacing: 0.15em
- Gap: 3rem (48px) between items
- Color: Black (default), Red (active)
- Active indicator: 2px red bar below text

**Mobile Navigation:**
- Hamburger icon: 44x44px touch target
- Icon: 3 horizontal lines, 2px thick, 20px wide
- Animated to X on open
- Full-screen overlay menu
- Background: White
- Top offset: 64px (below header)
- Numbered menu items (01-06)
- Large touch targets (48px min)

**Logo/Brand:**
- Font-size: Fluid clamp(1.25rem, 4vw, 1.75rem)
- Font-weight: Black (900)
- Letter-spacing: Tight (-0.02em)
- Color: Black
- Hover: Color transition

### Footer Component

**Footer Structure:**
- Background: Swiss Black
- Text: Swiss White
- Border-top: 3px solid Swiss Red
- Padding: 5rem 0 (top), 4rem 0 (sections)

**Footer Grid:**
- 12-column grid
- Section 1 (5 cols): Brand + description
- Section 2 (4 cols): Navigation links
- Section 3 (3 cols): Social links

**Footer Elements:**
1. **Brand Section:**
   - Logo/site title (h2 size)
   - Site description (gray 400)

2. **Navigation Section:**
   - Definition list structure
   - Label: Gray 500, uppercase, small
   - Links: White, hover underline

3. **Social Section:**
   - Icon links (24x24px)
   - Color: Gray 400
   - Hover: White
   - GitHub, LinkedIn, Twitter

4. **Copyright Bar:**
   - 2-column grid
   - Left: Copyright text (gray 500)
   - Right: Built with credits + links
   - Border-top: 1px solid gray 700
   - Padding: 1rem 0

### Form Components

**Input Fields:**
- Height: 44px minimum (WCAG touch target)
- Padding: 0.75rem 1rem
- Border: 2px solid gray 300
- Font-size: 1rem (16px to prevent zoom on iOS)
- Border-radius: 0 (sharp corners, Swiss style)
- Focus: 2px black border, 2px outline offset

**Textarea:**
- Same styling as input
- Min-height: 120px
- Resize: vertical only

**Labels:**
- Font-size: 0.875rem (14px)
- Font-weight: 700 (Bold)
- Text-transform: Uppercase
- Letter-spacing: 0.1em
- Color: Gray 700
- Margin-bottom: 0.5rem

**Form Layout:**
- Stack vertically with 1.5rem gap
- Full-width inputs by default
- Group related fields
- Clear error messages below inputs

---

## Page Templates

### Homepage Template

**Section 1: Hero**
- Asymmetric 7:5 layout (content left, description right)
- Display-sized headline
- Vertical accent bar on left (3px black)
- Definition list for structured info (Mission, Impact)
- Button group (primary + secondary)
- Swiss divider at bottom (3px black line)

**Section 2: Reading Paths**
- Background: Swiss Black
- Text: Swiss White
- Section number label: "01 — Start Here"
- Heading 1 title
- Red accent bar (60px × 2px)
- Intro paragraph
- 4-card grid (2x2)
- Each card: numbered, titled, description, link list
- Hover effect: Red border

**Section 3: Featured Projects**
- Background: Gray 100
- Section number: "02 — Selected Work"
- Heading 1 title
- 2-column card grid (3 projects max)
- Project cards with full specification
- "View All Projects" button (accent style)

**Section 4: Recent Blog Posts**
- Background: White
- Section number: "03 — Recent Thoughts"
- Asymmetric header (6:6 split)
- List layout (not cards)
- 12-column grid per post
- "View All Posts" button (secondary style)

### Blog Listing Page

**Hero Section:**
- Centered content
- Section number + title
- Intro paragraph
- Max-width: 700px

**Blog List:**
- Border-top: 2px solid black
- Each post: 12-column grid
- Date (2 cols), Title + description (7 cols), Link (3 cols)
- Border-bottom: 1px gray 300
- Pagination controls at bottom

### Blog Post Page

**Article Header:**
- Max-width: 700px, centered
- Section number + category
- H1 title
- Meta information: Date, author, reading time
- Red accent bar (60px)

**Article Body:**
- Prose styling applied
- Max-width: 65 characters
- Standard vertical rhythm
- AI Voice callouts (black boxes with red borders)
- Code blocks with syntax highlighting
- Tables with striped rows
- Images with captions

**Article Footer:**
- Author bio section
- Related posts (3 cards)
- Previous/Next navigation

### Projects Listing Page

**Hero Section:**
- Similar to blog listing
- Section number: "Projects"
- Filter/sort controls (optional)

**Projects Grid:**
- 3-column grid on desktop
- 2-column on tablet
- 1-column on mobile
- Gap: 1.5rem
- Full project cards with hover effects

### Project Detail Page

**Project Header:**
- Full-width or contained
- Large project title (H1)
- Project metadata grid:
  - Status, Date, Technologies
  - GitHub link, Live demo link
- Hero image (optional)

**Project Body:**
- Prose styling
- Problem statement section
- Solution description
- Technical implementation details
- Results/outcome section
- Image gallery
- Code snippets with explanation

### About Page

**Personal Introduction:**
- Asymmetric layout
- Photo + biography
- Definition list for quick facts

**Experience Timeline:**
- Vertical timeline layout
- Numbered entries
- Company, role, dates, description

**Skills Section:**
- Grid of skill categories
- Proficiency indicators

**Call to Action:**
- Contact buttons
- Social links

---

## Responsive Behavior

### Breakpoint System

**Mobile (Portrait):**
- Range: 320px - 639px
- Grid: 4 columns
- Typography: Minimum sizes
- Navigation: Hamburger menu
- Cards: 1 column, stacked
- Images: Full width

**Mobile (Landscape) / Small Tablet:**
- Range: 640px - 767px
- Grid: 6 columns
- Typography: Scaling up
- Navigation: Still hamburger
- Cards: 1-2 columns depending on content

**Tablet:**
- Range: 768px - 1023px
- Grid: 8 columns
- Typography: Medium sizes
- Navigation: Hamburger (optional) or full menu
- Cards: 2 columns
- Asymmetric layouts: Begin to show

**Desktop:**
- Range: 1024px - 1439px
- Grid: 12 columns
- Typography: Full scale range
- Navigation: Full horizontal menu
- Cards: 2-3 columns
- All asymmetric layouts active

**Large Desktop:**
- Range: 1440px+
- Grid: 12 columns, max-width container
- Typography: Maximum sizes
- Cards: 3+ columns
- Generous white space

### Responsive Patterns

**Mobile-First Approach:**
- Base styles for mobile
- Progressive enhancement for larger screens
- Use min-width media queries
- Never hide content on mobile (reflow instead)

**Content Stacking:**
- Asymmetric layouts become single column
- Side-by-side becomes vertical
- Maintain reading order and hierarchy

**Navigation Transformation:**
- Desktop: Horizontal menu in header
- Mobile: Hamburger → Full-screen overlay
- Touch targets: 44x44px minimum always

**Typography Scaling:**
- Fluid typography scales automatically
- No sudden jumps between breakpoints
- Maintains readability at all sizes

**Images:**
- Responsive images with srcset
- Lazy loading for performance
- Aspect ratios maintained
- Captions remain attached

**Tables:**
- Horizontal scroll on small screens
- Or: Card-based layout transformation
- Headers remain visible

---

## Performance Requirements

### Target Metrics

**Lighthouse Scores:**
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- **LCP (Largest Contentful Paint):** < 1.5 seconds
- **FID (First Input Delay):** < 50 milliseconds
- **CLS (Cumulative Layout Shift):** < 0.1
- **FCP (First Contentful Paint):** < 1.5 seconds
- **TTI (Time to Interactive):** < 3 seconds

### Optimization Strategies

**Asset Optimization:**
1. **CSS:**
   - Minified and compressed
   - Critical CSS inlined (optional)
   - Non-critical CSS deferred
   - PurgeCSS removes unused styles
   - Gzip/Brotli compression

2. **JavaScript:**
   - Minimal JS footprint
   - Bundled and minified
   - Deferred loading (defer attribute)
   - Code splitting for large apps
   - No render-blocking scripts

3. **Images:**
   - WebP format with JPEG fallback
   - Responsive images (srcset, sizes)
   - Lazy loading (loading="lazy")
   - Proper width/height to prevent CLS
   - Optimized file sizes (ImageOptim, etc.)

4. **Fonts:**
   - Preconnect to font CDN
   - Preload critical fonts
   - font-display: swap
   - Subset fonts (only needed glyphs)
   - System font fallbacks

**Caching Strategy:**
- Static assets: Long cache (1 year)
- HTML: Short cache or no-cache
- Service worker (optional): Offline support
- CDN for static assets (optional)

**Performance Monitoring:**
- Lighthouse CI in build pipeline
- Real user monitoring (RUM)
- Performance budgets enforced
- Regression testing on PRs

### Progressive Enhancement

**Core Functionality:**
- Site works without JavaScript
- Forms submit normally
- Navigation accessible via HTML
- Content readable without CSS

**Enhanced Experience:**
- JavaScript adds interactivity
- CSS enhances presentation
- Animations for capable devices
- Advanced features for modern browsers

**Graceful Degradation:**
- Fallbacks for unsupported features
- Polyfills only when necessary
- Feature detection over browser detection

---

## Accessibility Standards

### WCAG 2.1 Level AA Compliance

**Required Standards:**
- Color contrast: 4.5:1 for text, 3:1 for large text
- Keyboard navigation: All interactive elements accessible
- Focus indicators: Visible on all focusable elements
- Alt text: All images have descriptive alternatives
- Semantic HTML: Proper heading hierarchy
- ARIA labels: When semantic HTML insufficient
- Form labels: All inputs properly labeled
- Error messages: Clear and associated with fields

### Keyboard Navigation

**Navigation Order:**
- Logical tab order (follows visual flow)
- Skip links to main content
- Escape key closes modals/menus
- Arrow keys navigate within components
- Enter/Space activates buttons
- Tab cycles through interactive elements

**Focus Management:**
- Visible focus indicators (2px outline)
- Focus not trapped unintentionally
- Focus returned after modal close
- Focus moved to new content when page changes

### Screen Reader Support

**Semantic HTML:**
- header, nav, main, article, section, aside, footer
- Heading hierarchy (h1 → h2 → h3, no skipping)
- Lists for navigation and grouped content
- Tables with proper th, caption, scope

**ARIA Landmarks:**
- role="banner" (header)
- role="navigation" (nav)
- role="main" (main content)
- role="complementary" (sidebar)
- role="contentinfo" (footer)

**ARIA Labels:**
- aria-label for icon-only buttons
- aria-labelledby for complex widgets
- aria-describedby for additional context
- aria-expanded for collapsible sections
- aria-current for active navigation

**Live Regions:**
- aria-live for dynamic content
- aria-atomic for complete updates
- Polite announcements for non-urgent updates

### Motion & Animation

**Reduced Motion:**
- Respect prefers-reduced-motion
- Disable animations when requested
- Replace with instant transitions
- Maintain functionality without animation

**Safe Animations:**
- No flashing (threshold: 3 times/second)
- Parallax with caution
- Smooth, gradual movements
- User control over autoplay

---

## Content Architecture

### Site Structure

```
/
├── Home (index)
├── /blog/
│   ├── Blog listing
│   └── /[slug]/ (individual posts)
├── /projects/
│   ├── Projects listing
│   └── /[slug]/ (individual projects)
├── /about/
├── /about-site/ (meta information)
├── /enterprise-ai/ (program page)
├── /work-with-me/ (services)
├── /townhall/ (event series)
└── /404/ (error page)
```

### Content Types

**Blog Post:**
```yaml
layout: layouts/post.njk
title: "Post Title"
description: "SEO description and preview text"
date: 2025-01-01
author: "Author Name"
tags: ["blog", "category", "topic"]
featured: true/false
image: "/images/post-hero.jpg"
```

**Project:**
```yaml
layout: layouts/project.njk
title: "Project Name"
description: "Brief project description"
date: 2024-12-01
status: "Completed" | "In Progress" | "Archived"
technologies: ["React", "Node.js", "PostgreSQL"]
github: "https://github.com/user/repo"
demo: "https://demo-url.com"
featured: true/false
```

### Content Guidelines

**Writing Style:**
- Clear, concise, professional
- Active voice preferred
- Second person for instructional content
- Varied sentence length for rhythm
- Subheadings every 3-4 paragraphs

**SEO Best Practices:**
- Title: 50-60 characters
- Description: 150-160 characters
- H1: One per page, includes target keyword
- H2-H6: Logical hierarchy, descriptive
- Internal linking between related content
- Alt text: Descriptive, includes context

**Accessibility Guidelines:**
- Link text descriptive (not "click here")
- Images have alt text
- Color not sole indicator
- Acronyms defined on first use
- Plain language, avoid jargon

---

## AI Voice Integration (Unique Feature)

### Component Specification

**AI Voice Callout Box:**
- Background: Swiss Black (#000000)
- Text color: Swiss White (#ffffff)
- Border-top: 4px solid Swiss Red
- Border-bottom: 4px solid Swiss Red
- Padding: 1.5rem (24px)
- Margin: 2rem 0 (32px vertical)
- Position: Relative (in content flow)

**Visual Label:**
- Content: "→ AI PERSPECTIVE"
- Font-size: 0.75rem (12px)
- Font-weight: 700 (Bold)
- Letter-spacing: 0.1em
- Text-transform: Uppercase
- Color: Swiss Red
- Display: Block
- Margin-bottom: 0.75rem

**Content Styling:**
- Paragraph text: White
- Links: White with red underline
- Link hover: Red background, black text
- Strong text: Red color (not white)
- Maintains prose rhythm

**Usage Guidelines:**
- Use sparingly (1-2 per long article)
- Provides AI's perspective on content
- Honest about AI limitations
- Demonstrates collaboration, not perfection
- Should add value, not distract

### Implementation Strategy

**Markdown/HTML:**
```html
<div class="ai-voice">
  <p>Content from AI perspective...</p>
</div>
```

**Styling:**
- Class applied through component system
- Nested prose elements inherit white text
- Red accent for strong emphasis
- Maintains accessibility (sufficient contrast)

---

## Deployment Specifications

### GitHub Pages Deployment

**Requirements:**
- GitHub Actions workflow
- Build step: `npm run build`
- Output directory: `_site/`
- Path prefix: Configurable for subpath
- CNAME file for custom domain

**Workflow Steps:**
1. Checkout repository
2. Setup Node.js (version 18+)
3. Install dependencies (`npm ci`)
4. Run build (`npm run build`)
5. Deploy to gh-pages branch
6. Set environment variables (PATH_PREFIX)

### Docker Deployment (Optional)

**Development Container:**
- Base: Node 18 Alpine
- Volume mount: ./src → /app/src
- Live reload enabled
- Port: 3000 (exposed)

**Production Container:**
- Multi-stage build
- Builder: Node 18 (full)
- Runtime: Nginx Alpine
- Serves static files from _site/
- Gzip compression enabled
- Security headers configured
- Port: 80 (internal), 8080 (exposed)

**Nginx Configuration:**
- Gzip: on (text, css, js, json, xml)
- Cache headers: 1 year for assets, no-cache for HTML
- Security headers: X-Frame-Options, CSP, etc.
- Health check endpoint: /health
- Custom 404 page

### CI/CD Requirements

**On Push to Main:**
- Run linters (ESLint, Stylelint, Markdownlint)
- Run Prettier format check
- Build production site
- Run Lighthouse CI
- Deploy if all checks pass
- Update deployment status

**Quality Gates:**
- All linters must pass
- Code formatted correctly
- Lighthouse scores meet thresholds
- Build completes without errors
- No broken links (optional check)

---

## Testing Requirements

### Manual Testing Checklist

**Cross-Browser:**
- Chrome/Edge (Chromium)
- Firefox
- Safari (desktop and iOS)
- Samsung Internet (Android)

**Responsive Testing:**
- iPhone SE (375px)
- iPhone 12/13 Pro (390px)
- iPad (768px)
- Desktop (1920px)
- Test portrait and landscape

**Functionality:**
- Navigation works all devices
- Forms submit correctly
- Links all functional
- Images load properly
- Fonts display correctly

### Automated Testing (Optional)

**Visual Regression:**
- Playwright screenshots
- Compare against baseline
- Detect unintended changes

**Accessibility:**
- axe-core automated tests
- Lighthouse accessibility audit
- Pa11y CI checks

**Performance:**
- Lighthouse CI
- WebPageTest
- Core Web Vitals monitoring

---

## Student Adaptation Guidelines

### Using This Specification

**For Your Assigned Style:**

1. **Read this specification completely** to understand the Swiss system
2. **Identify which principles apply to your style** and which conflict
3. **Research your assigned style** using this as a structural template
4. **Create your own specification** adapting this document
5. **Use your specification as context** when working with AI agents

### What to Keep

**Universal principles:**
- Accessibility standards (WCAG)
- Performance requirements
- Responsive behavior patterns
- Semantic HTML structure
- Content architecture

**Technical stack:**
- Eleventy (11ty) static site generator
- Tailwind CSS framework
- Nunjucks templating
- Build process and deployment

### What to Change

**Design system specifics:**
- Grid system (your style may not use 12-column)
- Typography scale (your style has different hierarchy)
- Color palette (completely different colors)
- Spacing system (different rhythm and scale)
- Component styling (unique visual language)

### Example Adaptations

**Material Design:**
- Keep: Grid system, responsive behavior
- Change: Add elevation (shadows), use 8dp grid, colorful palette, rounded corners

**Brutalist/Neo-Brutalism:**
- Keep: Performance, accessibility
- Change: Chaotic layouts, raw HTML aesthetic, monospace fonts, no grid

**Humanist Modernism:**
- Keep: Structure, semantic HTML
- Change: Softer colors, humanist typefaces, empathetic tone, generous spacing

---

## Appendix: Design Token Reference

### Complete CSS Custom Properties List

**Grid System:**
```
--swiss-grid-columns: 12
--swiss-grid-gutter: 1.5rem
--swiss-grid-margin: clamp(1.5rem, 5vw, 4rem)
```

**Spacing Scale:**
```
--space-xs: 0.25rem
--space-sm: 0.5rem
--space-md: 0.75rem
--space-lg: 1rem
--space-xl: 1.5rem
--space-2xl: 2rem
--space-3xl: 2.5rem
--space-4xl: 3rem
--space-5xl: 4rem
```

**Typography Scale:**
```
--fluid-display: clamp(2rem, 6vw + 1rem, 3.5rem)
--fluid-h1: clamp(1.75rem, 5vw + 0.5rem, 3rem)
--fluid-h2: clamp(1.5rem, 4vw + 0.5rem, 2.25rem)
--fluid-h3: clamp(1.25rem, 3vw + 0.5rem, 1.75rem)
--fluid-h4: clamp(1.125rem, 2vw + 0.25rem, 1.375rem)
--fluid-body-lg: clamp(1.125rem, 1vw + 0.5rem, 1.25rem)
--fluid-body: clamp(1rem, 0.5vw + 0.75rem, 1.125rem)
--fluid-body-sm: clamp(0.875rem, 0.5vw + 0.5rem, 1rem)
--fluid-caption: clamp(0.75rem, 0.5vw + 0.25rem, 0.875rem)
```

**Color System:**
```
--swiss-black: #000000
--swiss-white: #ffffff
--swiss-gray-100: #f5f5f5
--swiss-gray-200: #e5e5e5
--swiss-gray-300: #d4d4d4
--swiss-gray-400: #a3a3a3
--swiss-gray-500: #737373
--swiss-gray-600: #525252
--swiss-gray-700: #404040
--swiss-gray-800: #262626
--swiss-gray-900: #171717
--swiss-red: #e53e3e
--swiss-red-dark: #c53030
```

**Shadows:**
```
--shadow-subtle: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
--shadow-medium: 0 4px 12px rgba(16,21,34,0.08), 0 2px 4px rgba(16,21,34,0.04)
--shadow-strong: 0 24px 48px rgba(16,21,34,0.12), 0 12px 24px rgba(16,21,34,0.08)
```

**Transitions:**
```
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Document Changelog

**Version 1.0** (November 5, 2025)
- Initial specification created
- Complete technical documentation
- Design system fully specified
- Component specifications detailed
- Student adaptation guidelines included

---

**End of Specification**

This document should be provided to AI agents as context when building design system implementations. Students should adapt this specification to match their assigned design style while maintaining the technical standards and accessibility requirements.
