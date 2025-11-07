# Universal Design System Specification
## Foundation for All Style Implementations

**Version:** 1.0  
**Date:** November 5, 2025  
**Purpose:** Base specification that ALL students must implement regardless of their assigned design style

---

## Introduction

This document defines the **universal requirements** that apply to every student project in the Swiss Lineage Gallery, regardless of which design style you've been assigned. These are non-negotiable technical standards, accessibility requirements, and architectural patterns.

**Your design style specification should extend this document, not replace it.**

---

## Table of Contents

1. [Architecture Requirements](#architecture-requirements)
2. [Technical Stack](#technical-stack)
3. [Performance Standards](#performance-standards)
4. [Accessibility Requirements](#accessibility-requirements)
5. [Responsive Design Requirements](#responsive-design-requirements)
6. [Content Requirements](#content-requirements)
7. [SEO Requirements](#seo-requirements)
8. [Code Quality Standards](#code-quality-standards)
9. [Deployment Requirements](#deployment-requirements)
10. [Testing Requirements](#testing-requirements)

---

## Architecture Requirements

### Static Site Generator: Eleventy (11ty)

**Mandatory Configuration:**

```yaml
Generator: Eleventy 3.0+
Input Directory: src/
Output Directory: _site/
Template Formats: .md, .njk, .html
Markdown Engine: markdown-it (HTML enabled)
Templating Engine: Nunjucks
```

**Required Plugins:**
1. `@11ty/eleventy-plugin-rss` - For RSS feed generation
2. `@11ty/eleventy-img` - For optimized image processing
3. `EleventyHtmlBasePlugin` - For path prefix handling

**Directory Structure (Mandatory):**

```
project-root/
├── src/                          # Source files
│   ├── _data/                   # Global data files
│   │   └── site.json           # Site metadata (required)
│   ├── _includes/              # Reusable components
│   │   └── components/         # UI components
│   ├── _layouts/               # Page layouts
│   │   ├── base.njk           # Base HTML template (required)
│   │   ├── post.njk           # Blog post layout (required)
│   │   └── project.njk        # Project layout (optional)
│   ├── blog/                   # Blog posts
│   │   ├── index.njk          # Blog listing page
│   │   └── *.md               # Individual posts
│   ├── css/                    # Stylesheets
│   │   └── main.css           # Main stylesheet
│   ├── js/                     # JavaScript files
│   │   └── main.js            # Main JS bundle
│   ├── images/                 # Image assets
│   └── index.njk              # Homepage (required)
├── _site/                       # Build output (git ignored)
├── .eleventy.js                # Eleventy config (required)
├── package.json                # Dependencies
└── README.md                   # Project documentation
```

### Collections (Required)

**Blog Collection:**
- All Markdown files in `src/blog/`
- Sorted by date (newest first)
- Minimum 3 posts required

**Projects Collection (Optional):**
- All Markdown files in `src/projects/`
- Sorted by date (newest first)

### Filters (Required)

Must implement these Eleventy filters:

1. **dateFormat** - Format dates for display
2. **readableDate** - Human-readable date format
3. **dateToISO** - ISO 8601 format for datetime attributes
4. **excerpt** - Generate post excerpts (200 characters)
5. **limit** - Limit array length
6. **currentYear** - Current year for copyright
7. **baseUrl** - Handle path prefixes for deployment

---

## Technical Stack

### CSS Framework: Tailwind CSS

**Required Version:** 3.4+

**Configuration Requirements:**

```javascript
// tailwind.config.js must include:
- Content paths: All .njk, .md, .html files
- Custom theme extensions for your design style
- Required plugins:
  - @tailwindcss/typography
  - @tailwindcss/container-queries (optional but recommended)
```

**Build Process:**
- Development: Watch mode with live reload
- Production: Minified and purged of unused styles
- PostCSS with Autoprefixer required

**Custom CSS Structure:**

```css
/* Your main.css must follow this pattern */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Your design system tokens (CSS custom properties) */
  /* Base typography and element styles */
}

@layer components {
  /* Your reusable component classes */
}

@layer utilities {
  /* Your custom utility classes */
}
```

### JavaScript Requirements

**Constraints:**
- Vanilla JavaScript preferred (no jQuery)
- Bundle size: < 50KB (uncompressed)
- No render-blocking scripts
- CSP-compliant (no inline scripts in production)
- Use `defer` or `async` attributes

**Required Functionality:**
- Mobile navigation toggle
- Smooth scroll behavior (optional)
- Form validation (if forms present)

**Optional Enhancements:**
- AlpineJS for reactive components (< 15KB)
- Lightweight animation libraries
- Lazy loading utilities

### Build System

**Required npm Scripts:**

```json
{
  "scripts": {
    "dev": "Start development server",
    "build": "Build production site",
    "serve": "Serve built site locally",
    "clean": "Remove build directory"
  }
}
```

**Build Process Must:**
1. Process CSS (Tailwind + PostCSS)
2. Build Eleventy site
3. Bundle JavaScript (if needed)
4. Optimize images
5. Generate sitemap
6. Create RSS feed

---

## Performance Standards

### Lighthouse Score Requirements

**Minimum Scores (Non-Negotiable):**
- Performance: 90+
- Accessibility: 100
- Best Practices: 95+
- SEO: 95+

**Target Scores (Goal):**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Core Web Vitals

**Required Thresholds:**

| Metric | Threshold | Description |
|--------|-----------|-------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Main content loads quickly |
| **FID** (First Input Delay) | < 100ms | Page responds to interactions |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Visual stability maintained |
| **FCP** (First Contentful Paint) | < 1.8s | Content appears quickly |
| **TTI** (Time to Interactive) | < 3.5s | Page becomes interactive |

### Asset Optimization Requirements

**Images:**
- Modern formats: WebP with JPEG/PNG fallback
- Responsive images: Use `srcset` and `sizes`
- Lazy loading: `loading="lazy"` on non-critical images
- Width/height attributes: Prevent layout shift
- Alt text: Required on all images
- File size: < 200KB per image (preferably < 100KB)

**CSS:**
- Minified in production
- Critical CSS inlined (optional)
- Unused styles purged (Tailwind's built-in)
- Gzip/Brotli compression enabled

**JavaScript:**
- Minified and bundled
- Code splitting for large apps
- Deferred or async loading
- No render-blocking scripts

**Fonts:**
- System fonts preferred, or:
- Web fonts with `font-display: swap`
- Preconnect to font CDN
- Subset fonts when possible
- Maximum 2 font families

### Caching Strategy

**Required Headers:**
- Static assets (images, CSS, JS): 1 year cache
- HTML pages: No-cache or short cache
- Proper ETags for validation

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance (Mandatory)

#### Color Contrast

**Minimum Ratios:**
- Normal text (< 18px): 4.5:1
- Large text (≥ 18px or ≥ 14px bold): 3:1
- UI components and graphics: 3:1

**Testing:**
- Use WebAIM Contrast Checker
- Test all color combinations
- Verify in both light and dark modes (if applicable)

#### Keyboard Navigation

**Requirements:**
1. All interactive elements keyboard accessible
2. Logical tab order (follows visual flow)
3. Visible focus indicators on all focusable elements
4. No keyboard traps
5. Skip links to main content
6. Escape key closes modals/menus

**Focus Indicators:**
- Minimum 2px outline
- High contrast color
- 2px offset from element
- Never remove without replacement

#### Screen Reader Support

**Semantic HTML:**
- Use proper landmark elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- Heading hierarchy: Start with `<h1>`, no skipped levels
- Lists for navigation and grouped items
- Tables with `<th>`, `<caption>`, proper `scope`

**ARIA Attributes (When Needed):**
- `aria-label` for icon-only buttons
- `aria-labelledby` for complex widgets
- `aria-describedby` for additional context
- `aria-expanded` for collapsible sections
- `aria-current="page"` for active navigation
- `aria-hidden="true"` for decorative elements

**Required ARIA Landmarks:**
```html
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">
```

#### Forms

**Requirements:**
1. All inputs have associated `<label>` elements
2. Required fields marked with `aria-required="true"`
3. Error messages associated with inputs
4. Clear validation feedback
5. Fieldsets group related inputs
6. Help text linked with `aria-describedby`

#### Alternative Text

**Image Alt Text:**
- Descriptive for content images
- Empty `alt=""` for decorative images
- Context explains image purpose
- No "image of" or "picture of" prefix

**Icon Alternative Text:**
- Visible label preferred
- `aria-label` if icon-only
- Supplementary text for clarity

#### Motion and Animation

**Reduced Motion:**
- Respect `prefers-reduced-motion` media query
- Disable animations when requested
- Maintain functionality without animation
- No flashing content (< 3 times/second)

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### Interactive Element Requirements

**Touch Targets:**
- Minimum size: 44x44px (WCAG 2.1)
- Adequate spacing between targets
- Accessible by touch, mouse, keyboard

**Links:**
- Descriptive text (not "click here")
- Distinguishable from regular text
- Underlined or another non-color indicator
- Visited state styling

---

## Responsive Design Requirements

### Breakpoint System

**Minimum Required Breakpoints:**

| Name | Range | Columns | Purpose |
|------|-------|---------|---------|
| Mobile | 320px - 639px | 4 | Phone portrait |
| Tablet | 640px - 1023px | 8 | Tablet, phone landscape |
| Desktop | 1024px+ | 12 | Desktop, laptop |

**Optional Additional Breakpoints:**
- Large Desktop: 1440px+
- Mobile Landscape: 480px - 639px

### Mobile-First Approach (Mandatory)

**Requirements:**
1. Base styles for mobile (320px)
2. Progressive enhancement for larger screens
3. Use `min-width` media queries
4. No content hidden on mobile (reflow instead)
5. Touch-friendly interface on small screens

### Responsive Patterns

**Content Stacking:**
- Multi-column layouts become single column on mobile
- Maintain reading order and hierarchy
- Side-by-side becomes vertical stack
- Navigation collapses to menu

**Typography:**
- Fluid typography using `clamp()` preferred
- Minimum 16px body text on mobile
- Scale up for larger screens
- Maintain readability at all sizes

**Images:**
- Scale to container width
- Maintain aspect ratios
- Lazy load below the fold
- Art direction with `<picture>` element (optional)

**Navigation:**
- Desktop: Horizontal menu in header
- Mobile: Hamburger → Overlay/drawer menu
- Consistent positioning across breakpoints

**Tables:**
- Horizontal scroll on mobile, or
- Transform to card-based layout
- Headers remain visible

### Viewport Configuration

**Required Meta Tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**No Horizontal Scroll:**
- Content must fit viewport at all breakpoints
- Test on 320px wide screens
- Use `overflow-x: hidden` sparingly

---

## Content Requirements

### Required Pages

**Minimum Pages (Non-Negotiable):**

1. **Homepage** (`/`)
   - Introduction to the site
   - Overview of your design style
   - Navigation to blog and projects
   - Clear value proposition

2. **Blog Listing** (`/blog/`)
   - List of all blog posts
   - Date, title, excerpt for each
   - Pagination (if > 10 posts)

3. **Blog Posts** (`/blog/[slug]/`)
   - Minimum 3 posts required
   - Each explains aspect of your design style
   - Proper frontmatter
   - Reading time estimate (optional)

4. **About Page** (`/about/`)
   - Brief personal bio
   - Explanation of project purpose
   - Connection to design history

**Optional Pages:**
- Projects listing and detail pages
- Contact page
- 404 error page (recommended)

### Frontmatter Standards

**Blog Post Frontmatter (Required Fields):**

```yaml
---
layout: layouts/post.njk
title: "Post Title (50-60 characters)"
description: "Meta description (150-160 characters)"
date: YYYY-MM-DD
tags: ["blog", "category", "topic"]
---
```

**Optional Fields:**
```yaml
author: "Author Name"
image: "/images/post-hero.jpg"
featured: true
readingTime: "5 min"
```

### Content Guidelines

**Writing Style:**
- Clear, concise, professional
- Active voice preferred
- Grade level: 8-10 (accessible to wide audience)
- Proofread and spell-checked
- Consistent tone throughout site

**Required Blog Topics:**

Each site must have at least 3 blog posts covering:

1. **Historical Context**
   - Origin and evolution of your design style
   - Key figures and movements
   - Cultural and historical context

2. **Design Principles**
   - Core principles of your style
   - Visual characteristics
   - How to recognize the style

3. **Modern Application**
   - How the style applies today
   - Examples in contemporary design
   - Relevance to digital media

**Content Structure:**
- Use headings hierarchy (H2, H3, H4)
- Short paragraphs (3-5 sentences)
- Bulleted/numbered lists for scannability
- Bold for emphasis (not italics for accessibility)

---

## SEO Requirements

### Meta Tags (Required)

**On Every Page:**

```html
<title>Page Title | Site Name</title>
<meta name="description" content="Page description 150-160 characters">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="https://yourdomain.com/page/">
```

**Open Graph (Recommended):**

```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://yourdomain.com/image.jpg">
<meta property="og:url" content="https://yourdomain.com/page/">
<meta property="og:type" content="website">
```

**Twitter Card (Optional):**

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://yourdomain.com/image.jpg">
```

### Sitemap and Robots.txt

**Sitemap (Required):**
- Generate XML sitemap at `/sitemap.xml`
- Include all public pages
- Update automatically on build
- Submit to Google Search Console

**Robots.txt (Required):**
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Structured Data (Optional but Recommended)

**JSON-LD for Articles:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title",
  "datePublished": "2025-01-01",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
}
```

### URL Structure

**Best Practices:**
- Lowercase only
- Hyphens for word separation (not underscores)
- No special characters
- Semantic and descriptive
- Consistent structure

**Examples:**
- Good: `/blog/swiss-design-principles/`
- Bad: `/blog/Post_1/` or `/p?id=123`

---

## Code Quality Standards

### HTML Standards

**Requirements:**
1. Valid HTML5 (W3C validator)
2. Semantic elements used appropriately
3. No inline styles in production
4. Proper indentation (2 spaces)
5. Lowercase tag and attribute names
6. Quoted attribute values
7. Self-closing tags closed properly

**Forbidden:**
- Deprecated elements (`<center>`, `<font>`)
- Tables for layout
- Inline event handlers
- Non-semantic divs when semantic tags exist

### CSS Standards

**Requirements:**
1. Consistent naming convention (BEM, utility classes, etc.)
2. No `!important` unless absolutely necessary
3. Mobile-first media queries
4. Comments for complex selectors
5. Organized by component or section
6. No unused styles in production

**Utility-First with Tailwind:**
- Use Tailwind utilities primarily
- Custom components for repeated patterns
- Document custom CSS classes
- Extract components when pattern repeats 3+ times

### JavaScript Standards

**Requirements:**
1. ES6+ syntax
2. No global variables
3. Event delegation where appropriate
4. Remove event listeners when elements destroyed
5. Error handling for async operations
6. Comments for complex logic

**Forbidden:**
- `var` declarations (use `const` or `let`)
- Inline JavaScript
- `eval()` or similar dangerous functions
- Blocking synchronous operations

### File Organization

**Requirements:**
1. Related files grouped logically
2. Clear naming conventions
3. Maximum file size: 500 lines
4. One component per file (when applicable)
5. Index files for directory exports

---

## Deployment Requirements

### GitHub Pages Deployment

**Required Setup:**

1. **Repository Structure:**
   - Public GitHub repository
   - Main branch for source code
   - GitHub Actions workflow

2. **Build Workflow:**
   - Automatic build on push to main
   - Deploy to GitHub Pages
   - Environment variables configured

3. **Custom Domain (Optional):**
   - CNAME file in source
   - DNS configured correctly
   - HTTPS enabled

**GitHub Actions Workflow Must Include:**
- Checkout repository
- Setup Node.js (v18+)
- Install dependencies (`npm ci`)
- Run build (`npm run build`)
- Deploy to gh-pages branch

### Environment Variables

**Required Configuration:**
- `PATH_PREFIX`: For subpath deployments
- `SITE_URL`: Full site URL for canonical links

### Error Handling

**Custom Error Pages:**
- 404 page (`404.html` or `404.njk`)
- Helpful, on-brand error message
- Navigation back to main site

---

## Testing Requirements

### Manual Testing Checklist

**Browser Testing (Required):**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Device Testing (Required):**
- iPhone SE (375px)
- iPad (768px)
- Desktop (1920px)
- Test portrait and landscape

**Functionality Testing:**
- [ ] All links work
- [ ] Navigation functions on all pages
- [ ] Forms submit correctly (if present)
- [ ] Images load with proper alt text
- [ ] No console errors
- [ ] Mobile menu opens/closes

**Accessibility Testing:**
- [ ] Keyboard navigation works
- [ ] Screen reader test (basic)
- [ ] Color contrast passes
- [ ] Focus indicators visible
- [ ] Skip links functional

### Automated Testing

**Required:**
1. **Lighthouse CI**
   - Run on every build
   - Enforce minimum scores
   - Budget for asset sizes

2. **HTML Validation**
   - W3C validator or equivalent
   - No errors in production

**Recommended:**
3. Broken link checker
4. Lighthouse desktop and mobile
5. axe-core accessibility tests

---

## Project Documentation

### README.md Requirements

**Must Include:**

1. **Project Title and Description**
   - What design style implemented
   - Purpose of the project

2. **Design Style Information**
   - Brief history
   - Key characteristics
   - Relationship to Swiss design

3. **Technologies Used**
   - List of frameworks and tools
   - Version numbers

4. **Getting Started**
   - Prerequisites
   - Installation steps
   - Development server command
   - Build command

5. **Project Structure**
   - Directory layout
   - Key files explanation

6. **Design System Documentation**
   - Color palette
   - Typography scale
   - Component library
   - Grid system

7. **Deployment**
   - Deployment instructions
   - Live site URL

8. **Credits**
   - Resources used
   - Design inspiration
   - Image credits

### Code Comments

**Requirements:**
1. Complex logic explained
2. Component purpose documented
3. TODO items for future work
4. External dependencies noted
5. Accessibility considerations explained

---

## Submission Requirements

### Deliverables Checklist

**Required Files:**
- [ ] Complete Eleventy site (src/ directory)
- [ ] Built site (_site/ directory)
- [ ] README.md with all sections
- [ ] Design system documentation
- [ ] Decision log (optional but recommended)
- [ ] Screenshots (homepage, blog, responsive views)

**Live Site:**
- [ ] Deployed to GitHub Pages or equivalent
- [ ] Accessible via public URL
- [ ] All functionality working
- [ ] No broken links
- [ ] Passes all performance/accessibility checks

**Documentation:**
- [ ] Historical research document for your style
- [ ] Technical specification for your style
- [ ] Gallery submission paragraph (100-150 words)

### Quality Checklist

**Before Submission:**
- [ ] All content proofread
- [ ] All images optimized
- [ ] Lighthouse scores meet minimums
- [ ] Accessibility tested
- [ ] Cross-browser tested
- [ ] Mobile tested
- [ ] Code commented
- [ ] Repository organized
- [ ] README complete

---

## Support Resources

### Documentation Links

**Eleventy:**
- Official Docs: https://www.11ty.dev/docs/
- Starter Templates: https://www.11ty.dev/docs/starter/

**Tailwind CSS:**
- Official Docs: https://tailwindcss.com/docs
- Component Examples: https://tailwindui.com/

**Accessibility:**
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- A11y Style Guide: https://a11y-style-guide.com/

**Performance:**
- Web.dev: https://web.dev/
- Lighthouse: https://developer.chrome.com/docs/lighthouse/

### Tools

**Required:**
- Node.js 18+ and npm
- Git for version control
- Code editor (VS Code recommended)
- Modern web browsers

**Recommended:**
- Lighthouse (Chrome DevTools)
- axe DevTools (browser extension)
- Wave (accessibility checker)
- Responsive design mode (browser DevTools)

---

## Grading Criteria

Your project will be evaluated on:

### Technical Implementation (40%)
- Eleventy configuration correct
- Build process works
- Code quality and organization
- Performance metrics met
- No console errors

### Accessibility (20%)
- WCAG AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast
- Semantic HTML

### Design Quality (20%)
- Authentic to assigned style
- Visual consistency
- Typography system
- Color palette
- Component design

### Content Quality (10%)
- Writing clarity
- Historical accuracy
- Proper documentation
- SEO optimization

### Innovation/Execution (10%)
- Creative interpretation
- Polish and refinement
- Attention to detail
- Going beyond requirements

---

## Final Notes

### What This Spec Provides

✅ **Technical standards** - Every project must meet these  
✅ **Quality baseline** - Professional-level expectations  
✅ **Accessibility foundation** - Inclusive design requirements  
✅ **Performance targets** - Fast, efficient sites  

### What Your Style Spec Provides

🎨 **Design system** - Colors, typography, spacing  
🎨 **Visual language** - Components and patterns  
🎨 **Style guidelines** - Historical accuracy  
🎨 **Creative interpretation** - Your unique implementation  

### Remember

- **This spec is universal** - Applies to all design styles
- **Style spec extends this** - Adds style-specific requirements
- **Both are required** - Universal + Style-specific
- **Quality matters** - Meet all minimum requirements

---

**Version History:**
- 1.0 (November 5, 2025) - Initial universal specification

---

**This specification is mandatory for all Swiss Lineage Gallery projects.**
