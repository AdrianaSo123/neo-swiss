# Neo-Brutalism Style Guide
## Raw, Honest, Anti-Corporate Web Design

**For:** Enterprise AI Studio Project  
**Category:** Reactions Against Swiss Design

---

## 📚 What is Neo-Brutalism?

Neo-Brutalism is a digital design movement inspired by Brutalist architecture—raw, honest, stripped-down aesthetics that reject corporate polish. In web design, it manifests as:

- **Unrefined visual elements** (thick borders, raw typography, no shadows)
- **Honest structure** (exposing the grid, showing the "bones" of the design)
- **Anti-corporate rebellion** (deliberately ugly, purposefully rough)
- **Functional minimalism** (only what's needed, nothing decorative)

**Historical Context:**
- **Origins:** Brutalist architecture (1950s-1970s) - raw concrete, exposed structure
- **Digital Revival:** 2010s-present - reaction against sleek, over-polished corporate design
- **Philosophy:** "Truth to materials" - show what things really are, don't hide structure
- **Punk Ethos:** Reject perfectionism, embrace rough edges, anti-establishment

---

## 👥 Key Practitioners & Works

### Designers/Studios

1. **Pascal Deville** - Brutalist Websites curator, Neo-Brutalist web pioneer
2. **Balenciaga** (digital presence) - High fashion brand using Brutalist web aesthetics
3. **Craigslist** - Accidental Brutalism (raw HTML, no styling, pure function)
4. **Bloomberg** - Corporate site with Brutalist influences

### Key Works to Find

**Search these for reference examples:**

1. **Brutalist Websites** (brutalistwebsites.com)
   - Curated collection of Brutalist/Neo-Brutalist sites
   - Archive of the aesthetic in practice
   - Study submissions from 2016-present

2. **Washington Post 2016 election site**
   - Black/white/red palette
   - Raw data presentation
   - Minimal decoration

3. **Bloomberg Businessweek** covers
   - Bold typography
   - Unrefined layouts
   - Anti-design aesthetic

---

## 🎨 Visual Characteristics

### Color Palette

**Primary Colors:**
- Black (`#000000`) - dominant
- White (`#FFFFFF`) - contrast
- Bright primaries (red `#FF0000`, blue `#0000FF`, yellow `#FFFF00`) - used sparingly for impact

**Secondary Colors:**
- Raw grays (`#808080`, `#CCCCCC`)
- No gradients
- No subtle variations
- High contrast always

**Usage Patterns:**
- Stark black/white dominates
- Color as alarm/warning/accent
- No pastel or muted tones
- Unrefined, straight from the color picker

---

### Typography

**Font Families:**
- **System fonts** (Arial, Helvetica, Courier)
- **Monospace** for code aesthetic (`Courier New`, `Consolas`, `Monaco`)
- **Sans-serif only** (serif feels too refined)
- **No custom webfonts** (they're corporate bloat)

**Type Scale:**
- Large, bold headings (48-72px)
- Modest body text (16-18px)
- High contrast between sizes
- Minimal hierarchy (H1 is HUGE, everything else is small)

**Typography Style:**
- All caps for headings (SHOUTING AESTHETIC)
- Tight line-height (1.2-1.4) - packed, not airy
- No letter-spacing adjustments
- Left-aligned (or intentionally misaligned)
- Underlines instead of subtle hover effects

---

### Layout & Grid

**Grid System:**
- **Exposed grid lines** (show the structure, don't hide it)
- **Asymmetric but obvious** (not subtle asymmetry)
- **Boxed sections** (thick borders, compartmentalized)
- **No bleed** (everything contained, nothing flows off edges)

**Layout Patterns:**
- Boxy, compartmentalized sections
- Thick borders (3-5px black)
- No rounded corners (harsh 90° angles)
- Elements slightly misaligned (intentional roughness)
- Overlapping boxes (z-index play)

---

### Spacing

**Spacing Philosophy:**
- **Tight, packed** (not generous Swiss white space)
- **Intentionally cramped** (creates tension)
- **Minimal padding** (content touches edges)
- **Inconsistent on purpose** (breaks rhythm intentionally)

**Spacing Scale:**
- `4px` - minimal gaps
- `8px` - standard between elements
- `16px` - section separators
- `24px` - major breaks

**Avoid:** Generous white space feels too refined

---

### Components

#### Buttons
```css
/* Neo-Brutalist Button */
background: #FFFF00;
color: #000000;
border: 3px solid #000000;
padding: 12px 24px;
font-weight: bold;
text-transform: uppercase;
box-shadow: 4px 4px 0 #000000; /* Offset shadow, not subtle */
transition: none; /* No smooth animations */

/* Hover: shift shadow */
hover {
  box-shadow: 2px 2px 0 #000000;
  transform: translate(2px, 2px);
}
```

#### Cards
```css
/* Neo-Brutalist Card */
background: #FFFFFF;
border: 4px solid #000000;
padding: 16px;
box-shadow: 8px 8px 0 #000000; /* Hard shadow */
/* No border-radius */
/* No subtle shadows */
```

#### Navigation
```css
/* Neo-Brutalist Nav */
background: #000000;
color: #FFFFFF;
border-bottom: 5px solid #FF0000;
/* Raw link styling */
links: uppercase, underline, no hover fade
```

---

## 🔍 Where to Find Examples

### Museums & Institutions

1. **Museum of Modern Art (MoMA)** - https://www.moma.org/
   - Search: "Brutalist architecture"
   - Look for 1960s-70s architectural photography

2. **V&A Museum (London)** - https://www.vam.ac.uk/
   - Search: "Brutalist design"
   - Architecture and Graphic Design collections

3. **Cooper Hewitt** - https://collection.cooperhewitt.org/
   - Search: "Brutalist", "raw design", "anti-design"

### Books & Publications

1. **"Brutalist Websites"** by Pascal Deville
   - Comprehensive collection of Neo-Brutalist web design

2. **"How to Be a Graphic Designer Without Losing Your Soul"** by Adrian Shaughnessy
   - Context on anti-corporate design movements

3. **"Experimental Formats"** series
   - Alternative design approaches
   - Available in design libraries

### Online Archives

1. **Brutalist Websites** - brutalistwebsites.com
   - **THE definitive collection**
   - Submit your own work when done!

2. **Awwwards** - awwwards.com
   - Search: "Brutalist"
   - Filter: Experimental

3. **Typewolf** - typewolf.com
   - Search: "Brutalist typography"

---

## 🛠️ Design Prompt Templates

Use these prompts with AI when building your Neo-Brutalist site.

### Initial Transformation Prompt

```
Transform the Swiss site's homepage to Neo-Brutalism style:

1. **Color Palette:**
   - Replace Swiss red with bright yellow (#FFFF00) for accents
   - Use stark black (#000000) and white (#FFFFFF)
   - Remove all grays and subtle colors
   - Ensure high contrast everywhere

2. **Typography:**
   - Change to system fonts (Arial, Courier for code)
   - Make headings ALL CAPS and very large (60-72px)
   - Tighten line-height to 1.2-1.3
   - Remove all letter-spacing adjustments
   - Add thick underlines to links

3. **Layout:**
   - Add 4-5px black borders around all sections
   - Remove border-radius (make everything 90° angles)
   - Expose the grid (add visible grid lines)
   - Make spacing tighter (reduce padding by 40%)
   - Add hard box-shadows (8px 8px 0 #000) instead of subtle shadows

4. **Components:**
   - Transform buttons to have thick borders, bright backgrounds, hard shadows
   - Make navigation raw (black background, white text, no subtlety)
   - Remove all smooth transitions (instant state changes)

Reference `docs/design-system.md` for specific values. Make it feel raw and unrefined.
```

### Component Refinement Prompt

```
Acting as a Neo-Brutalist design expert, critique this [component] screenshot.

Check for:
1. **Rawness:** Does it feel unrefined enough? Too polished?
2. **Honesty:** Is structure exposed? Can you see the "bones"?
3. **Anti-corporate:** Would a corporate brand reject this (good sign)?
4. **Borders:** Are borders thick enough (3-5px)? Black?
5. **Shadows:** Are shadows hard and offset (not subtle blur)?
6. **Typography:** ALL CAPS for emphasis? System fonts? Tight line-height?

Be brutal (pun intended). If it looks too nice, it's wrong.
```

### Authenticity Check Prompt

```
Compare these screenshots to Neo-Brutalist reference examples from brutalistwebsites.com.

Rate 1-10 for Neo-Brutalist authenticity:
- **Rawness** (1=too polished, 10=perfectly rough)
- **Honesty** (1=hides structure, 10=exposes everything)
- **Anti-design** (1=looks corporate, 10=deliberately ugly)
- **Functional minimalism** (1=decorative, 10=pure function)

For anything below 8, explain what's too refined and how to make it more Brutalist.
```

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Making It Too Pretty

**Wrong:** Subtle shadows, rounded corners, smooth gradients  
**Right:** Hard shadows, 90° angles, flat colors

**Why it's wrong:** Neo-Brutalism rejects refinement. If it looks "nice," you're doing it wrong.

---

### Mistake 2: Using Too Many Colors

**Wrong:** Full rainbow palette, pastels, muted tones  
**Right:** Black, white, one or two bright accent colors

**Why it's wrong:** Neo-Brutalism is stark and high-contrast, not colorful and playful.

---

### Mistake 3: Generous White Space

**Wrong:** Lots of padding, airy layouts, generous margins  
**Right:** Tight, packed, intentionally cramped

**Why it's wrong:** Swiss design is generous with space. Neo-Brutalism reacts against that—pack it in.

---

### Mistake 4: Smooth Animations

**Wrong:** Fade transitions, ease-in-out curves, smooth hovers  
**Right:** Instant state changes, hard snaps, no transitions

**Why it's wrong:** Smoothness = polish = corporate. Neo-Brutalism is abrupt and honest.

---

### Mistake 5: Hiding the Structure

**Wrong:** Seamless sections, invisible grids, flowing layouts  
**Right:** Visible borders, exposed grid, compartmentalized boxes

**Why it's wrong:** Neo-Brutalism shows the structure honestly. If you hide the grid, you're not being Brutalist.

---

## ✅ Checklist: Is It Authentic Neo-Brutalism?

Use this when reviewing your site:

### Visual Style
- [ ] Stark black and white dominate
- [ ] Bright accent colors used sparingly (if at all)
- [ ] No subtle colors, no gradients
- [ ] High contrast everywhere

### Typography
- [ ] System fonts only (Arial, Courier)
- [ ] Headings in ALL CAPS
- [ ] Tight line-height (1.2-1.3)
- [ ] Large size contrast (huge headings, modest body)

### Layout
- [ ] Thick borders (3-5px black) around sections
- [ ] No rounded corners (all 90° angles)
- [ ] Grid visible or obviously structured
- [ ] Boxed, compartmentalized sections

### Spacing
- [ ] Tight and packed (not generous)
- [ ] Minimal padding (content near edges)
- [ ] Intentional crowding creates tension

### Components
- [ ] Buttons have thick borders and hard shadows
- [ ] No smooth transitions (instant state changes)
- [ ] Raw, unrefined appearance
- [ ] Functional, not decorative

### Overall Feel
- [ ] Looks deliberately rough (not accidental amateur)
- [ ] Anti-corporate (a brand would reject this)
- [ ] Honest about structure (doesn't hide anything)
- [ ] Functional and minimal (no unnecessary elements)

**If you check all of these, you're on the right track.**

---

## 🎯 Neo-Brutalism vs. Swiss Design

Understand what you're transforming FROM:

| Aspect | Swiss Design | Neo-Brutalism |
|--------|--------------|---------------|
| **Grid** | Invisible, mathematical | Visible, exposed |
| **Spacing** | Generous white space | Tight, packed |
| **Typography** | Refined hierarchy | Abrupt contrast |
| **Colors** | Minimal, refined palette | Stark black/white + bright accents |
| **Borders** | Thin or absent | Thick, black, dominant |
| **Shadows** | None or subtle | Hard, offset |
| **Corners** | Clean, sometimes subtle radius | Sharp 90° angles |
| **Philosophy** | Perfection, clarity | Honesty, rawness |
| **Feel** | Professional, elegant | Rough, rebellious |

**Your job:** Transform the left column into the right column while maintaining technical quality.

---

## 📖 Recommended Reading

### Essential
1. **Brutalist Websites** (brutalistwebsites.com) - Study everything here
2. **"Brutalism in Digital Design"** article by Pascal Deville
3. **brutalistwebsites Instagram** (@brutalistwebsites) - Visual examples

### Historical Context
1. **"Brutalism: Post-War British Architecture"** by Alexander Clement
2. **"Atlas of Brutalist Architecture"** by Phaidon
3. **"SOS Brutalism"** exhibition archive (Deutsches Architekturmuseum)

### Design Philosophy
1. **"The New Ugly"** article by Khoi Vinh
2. **"Anti-Design"** design movement overview
3. **Punk design history** (context for aesthetic rebellion)

---

## 🚀 Getting Started

1. **Study brutalistwebsites.com for 30 minutes**
   - Look at 20-30 examples
   - Notice common patterns
   - Save 10 favorites as references

2. **Find 3 museum/book examples**
   - Search MoMA for Brutalist architecture
   - Find "Brutalist Websites" book
   - Look up Pascal Deville's work

3. **Generate AI mockup:**
   > "Generate an image of a modern portfolio website in Neo-Brutalist style. Black and white dominant colors, thick black borders around sections, harsh 90° angles, system fonts in ALL CAPS for headings, tight spacing, hard box shadows, raw and unrefined aesthetic."

4. **Use prompt templates above** when working with AI

5. **Check authenticity constantly** against reference examples

---

**Remember:** Neo-Brutalism is deliberately rough, anti-corporate, and honest about structure. If it looks too polished or professional, you're not there yet. Embrace the ugliness. That's the point. 🏗️

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2025  
**Project:** Swiss Design Lineage Vibe Coding  
**Instructor:** Keith Williams, NJIT
