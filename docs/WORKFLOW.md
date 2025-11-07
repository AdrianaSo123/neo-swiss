# Workflow Guide
## Phase-by-Phase Implementation

**Total time:** ~10 hours  
**Structure:** 5 phases over one week

---

## Overview: The 5 Phases

```
Phase 1: Research (1 hour)
    ↓
Phase 2: Context (1 hour)
    ↓
Phase 3: Planning (30 min)
    ↓
Phase 4: Build (6 hours - 3 sprints)
    ↓
Phase 5: Reflection (1.5 hours)
```

---

## Phase 1: Research & Vision (1 hour)

### Goal
Understand your style deeply and collect authentic references.

### Tasks
1. **Read your style guide** (20 min)
   - Note key characteristics
   - Understand what makes it authentic
   - Identify what differentiates it from Swiss design

2. **Find 10-15 reference images** (20 min)
   - Use sources from your style guide
   - Save to `/research/references/`
   - Document sources in `references.md`

3. **Generate AI mockup** (20 min)
   - Describe vision to AI
   - Generate initial HTML mockup
   - Review and iterate once

### Deliverable
`/research/` folder with images, notes, and initial mockup

---

## Phase 2: Context Building (1 hour)

### Goal
Create content that explains your design style.

### Tasks
**AI creates 3 pages:**

1. **Timeline page** (20 min)
   - History of the style
   - Key moments and evolution
   - Relationship to Swiss design

2. **Designer profiles** (20 min)
   - Key practitioners
   - Their contributions
   - Notable works

3. **About/Style explanation** (20 min)
   - What defines the style
   - Core principles
   - How visitors are experiencing it

### Deliverable
3 complete content pages with authentic information

---

## Phase 3: Sprint Planning (30 min)

### Goal
Break work into manageable sprints with clear success criteria.

### Tasks
1. **Define Sprint 1: Foundation** (10 min)
   - Layout structure
   - Typography system
   - Color palette
   - Success criteria

2. **Define Sprint 2: Components** (10 min)
   - Navigation
   - Cards/content blocks
   - Buttons
   - Footer
   - Success criteria

3. **Define Sprint 3: Polish** (10 min)
   - All pages complete
   - Responsive on all devices
   - Lighthouse 90+
   - Success criteria

### Deliverable
`/docs/sprint-plan.md` with goals and success criteria

---

## Phase 4: Build & Iterate (6 hours)

### Structure
3 sprints × 2 hours each

### Sprint Pattern (repeat 3x)

**1. Describe to AI** (15 min)
- What you want to change
- Show reference images
- Be specific with measurements

**2. AI generates code** (5 min)
- Review the code changes
- Let AI implement

**3. Screenshot & Review** (20 min)
- Take screenshots (desktop, tablet, mobile)
- Compare to reference images
- Identify what's wrong

**4. Iterate** (40 min)
- Describe improvements to AI
- AI refines code
- Screenshot again
- Repeat 2-3x until excellent

**5. Quality check** (20 min)
- Run Lighthouse
- Check accessibility
- Test all interactions
- Use [quality review template](../templates/quality-review.md)

**6. Document** (20 min)
- Save screenshots
- Note what worked/didn't
- Track iterations

### Sprint 1: Foundation (2 hours)
**Focus:**
- Page layout structure
- Typography (fonts, sizes, scale)
- Color palette implementation
- Basic spacing system

**Done when:**
- Layout matches style
- Typography feels authentic
- Colors are from style palette
- Desktop view looks professional

### Sprint 2: Components (2 hours)
**Focus:**
- Navigation system
- Content cards/blocks
- Buttons and links
- Footer structure

**Done when:**
- All components match style
- Navigation works smoothly
- Interactive elements feel right
- Components work on mobile

### Sprint 3: Polish (2 hours)
**Focus:**
- Complete all pages
- Responsive refinement
- Final content
- Quality assurance

**Done when:**
- All pages complete
- Works on all screen sizes
- Lighthouse 90+ on all metrics
- Feels polished and professional

---

## Phase 5: Reflection & Deployment (1.5 hours)

### Goal
Complete collaboration story, final QA, and deploy.

### Tasks

1. **Collaboration story** (30 min)
   - Use [collaboration story template](../templates/collaboration-story.md)
   - AI writes reflection on partnership
   - Review and refine
   - Add process screenshots

2. **Final QA** (30 min)
   - Run final Lighthouse
   - Test all links
   - Check all pages responsive
   - Verify accessibility
   - Check console for errors

3. **Deploy & Document** (30 min)
   - Deploy to GitHub Pages or Netlify
   - Update README with:
     - Style chosen
     - Time spent
     - Key decisions
     - Live URL
   - Final commit
   - Submit

### Deliverable
Live website + complete documentation

---

## ⚠️ Key Principles

**Iterate 2-3x per section minimum**
- First version is never good enough
- Each iteration gets closer to authentic
- Don't rush

**Screenshot everything**
- Before changes
- After changes
- Different screen sizes
- For collaboration story

**Compare constantly**
- Your work vs reference images
- Each iteration vs last iteration
- Mobile vs desktop

**Stop AI when it goes wrong**
- Press ESC in VS Code
- Undo with CMD+Z
- Give clearer instructions

**Track your time**
- Document actual time spent
- Note where you struggled
- Portfolio narrative gold

---

## 🆘 When You're Stuck

**Don't know what to do next?**  
→ Check [daily checklist](../templates/daily-checklist.md)

**AI giving bad results?**  
→ See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

**Need better prompts?**  
→ Read [AI-PLAYBOOK.md](AI-PLAYBOOK.md)

**Reviewing quality?**  
→ Use [quality review template](../templates/quality-review.md)

---

## 📊 Progress Tracking

**After each phase, ask:**
- ✅ Did I complete all tasks?
- ✅ Do I have the deliverables?
- ✅ Is quality at the right level?
- ✅ Am I on schedule?

**Don't move forward until current phase is solid.**

---

**Next:** Start Phase 1 or check [daily checklist](../templates/daily-checklist.md)

---

**Project:** Swiss Design Lineage Vibe Coding  
**Version:** 3.0 — November 2025
