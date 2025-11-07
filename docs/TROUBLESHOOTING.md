# Troubleshooting Guide
## Common Issues & Solutions

Quick fixes for when things go wrong.

---

## 🤖 AI Problems

### AI going in the wrong direction

**Symptoms:**
- Code doesn't match your description
- AI keeps changing wrong things
- Results getting worse with each iteration

**Solutions:**

1. **Stop immediately**
   - Press ESC in VS Code
   - Or click "Stop" button
   - Don't let it finish bad code

2. **Undo changes**
   - CMD+Z (Mac) or CTRL+Z (Windows)
   - Go back to last good version

3. **Give clearer instructions**
   ```
   BAD: "Make it look better"
   GOOD: "Increase line-height to 1.6, change font to Helvetica, 
         reduce heading size to 32px"
   ```

4. **Show reference images**
   - Upload screenshot of what you want
   - Compare: "Make it look like THIS, not THAT"

### AI generating too much code at once

**Symptoms:**
- Changes break everything
- Hard to debug what went wrong
- Lost track of changes

**Solutions:**

1. **Request smaller changes**
   ```
   BAD: "Complete the entire homepage"
   GOOD: "Just add the navigation bar, nothing else"
   ```

2. **One section at a time**
   - Do header, then body, then footer
   - Test after each section

3. **Save good versions**
   - Commit to git after each working iteration
   - Easy to roll back if needed

### AI not understanding your style

**Symptoms:**
- Results look generic/modern
- Doesn't match reference images
- Missing key style characteristics

**Solutions:**

1. **Reference your style guide**
   ```
   "I'm building in Neo-Brutalism style. Read style-guides/beginner/NEO-BRUTALISM-GUIDE.md 
   and follow the principles there."
   ```

2. **Be ultra-specific**
   ```
   "This is Neo-Brutalism, NOT modern design. Use:
   - Thick black borders (3-5px)
   - Brutalist fonts like Space Mono
   - Intentionally raw, unpolished look
   - Bright neon accent colors
   - No subtle shadows or gradients"
   ```

3. **Show don't tell**
   - Upload reference images
   - Screenshot examples from your research

---

## 🎨 Design Problems

### Not matching the style

**Symptoms:**
- Looks close but not authentic
- Missing that "vibe"
- Could be any style

**Solutions:**

1. **Screenshot comparison**
   - Your work next to reference image
   - Identify specific differences
   - List them for AI: "Reference has X, mine has Y"

2. **Check the fundamentals**
   - Typography: Right fonts? Right sizes? Right spacing?
   - Colors: Exact palette? Or similar/generic?
   - Layout: Characteristic spacing/grid?
   - Details: Missing signature elements?

3. **Read your style guide again**
   - Find section on "What to avoid"
   - Find section on "Authentication"
   - Compare your work to those guidelines

### Looks good on desktop, broken on mobile

**Symptoms:**
- Text overlaps on small screens
- Images too large
- Layout squished or scrolling horizontally

**Solutions:**

1. **Test in browser dev tools**
   - Right-click → Inspect
   - Click device toolbar icon
   - Test iPhone, iPad, desktop sizes

2. **Ask AI to fix responsive**
   ```
   "The layout breaks on mobile (375px width). 
   Screenshot attached. Make it responsive:
   - Stack cards vertically on mobile
   - Reduce heading size to 24px on mobile
   - Add padding to prevent text touching edges"
   ```

3. **Check common culprits**
   - Fixed widths (use `max-width` instead)
   - Too-large font sizes
   - Images without `max-width: 100%`
   - Horizontal padding missing

### Colors look wrong

**Symptoms:**
- Palette doesn't match style
- Contrast too low/high
- Feels off-brand

**Solutions:**

1. **Use exact hex codes from style guide**
   ```
   "Use ONLY these colors:
   Primary: #FF6B35
   Secondary: #004E89
   Background: #F7F7FF
   Text: #1A1A1A"
   ```

2. **Check in different lighting**
   - Your screen brightness
   - Night Shift / f.lux effects
   - Compare on phone screen

3. **Test accessibility**
   - Run Lighthouse
   - Check contrast ratio
   - Text should be easily readable

---

## 📱 Technical Problems

### Lighthouse scores are low

**Performance < 90:**
- Images too large → Optimize/compress images
- Too many resources → Remove unused fonts/scripts
- Render blocking → Check for inline critical CSS

**Accessibility < 90:**
- Missing alt text → Add to all images
- Low contrast → Check color combinations
- Missing ARIA labels → Add to interactive elements

**Best Practices < 90:**
- Mixed content → Use HTTPS for all resources
- Console errors → Fix JavaScript errors
- Image aspect ratio → Set width/height attributes

**SEO < 90:**
- Missing meta description → Add to `<head>`
- Missing title → Add descriptive `<title>`
- Text too small → Increase mobile font sizes

### Pages won't deploy

**GitHub Pages:**
1. Settings → Pages → Source = main branch
2. Wait 2-3 minutes for deployment
3. Check Actions tab for build errors

**Netlify:**
1. Drag and drop entire project folder
2. Check deploy log for errors
3. Verify index.html in root folder

**Common deployment issues:**
- File names case-sensitive on servers
- Paths must be relative (`./style.css` not `/style.css`)
- Missing index.html in root

### Console showing errors

**How to check:**
- Right-click → Inspect → Console tab
- Look for red error messages

**Common errors:**

`404 Not Found` → File path wrong
```
Fix: Check spelling, check file location
```

`Uncaught TypeError` → JavaScript error
```
Fix: Check script for typos, ask AI to debug
```

`CORS error` → Loading external resource wrong
```
Fix: Use CDN links, or download and host locally
```

---

## 🎯 Workflow Problems

### Don't know what to do next

**Solutions:**

1. **Check daily checklist**
   - Open [templates/daily-checklist.md](../templates/daily-checklist.md)
   - Find today's tasks
   - Do them in order

2. **Check current phase**
   - Where are you in [WORKFLOW.md](WORKFLOW.md)?
   - What's the next task in that phase?

3. **Just pick something**
   - Improve one section
   - Fix one issue
   - Better than being stuck

### Running out of time

**Solutions:**

1. **Focus on quality over quantity**
   - Better to have 3 excellent pages than 10 mediocre
   - Depth > breadth

2. **Cut scope strategically**
   - Keep: Homepage, one content page, about page
   - Skip: Extra pages, fancy animations, complex features

3. **Use AI efficiently**
   - Be specific in first request (saves iterations)
   - Work on one section until excellent
   - Don't context-switch

4. **Track where time goes**
   - Spinning on one issue? Ask for help
   - Too much research? Start building
   - Too many iterations? Good enough is okay

### Stuck on a decision

**Which style to choose?**
→ Read [START-HERE.md](START-HERE.md) decision tree

**Which layout to use?**
→ Look at reference images, pick most common pattern

**Which colors to use?**
→ Use exact palette from style guide, don't invent

**Good enough or keep iterating?**
→ Run [quality review](../templates/quality-review.md), if 80%+ checks pass, move on

**General rule:** 5-minute decision limit. Pick, commit, iterate later if needed.

---

## 🆘 Getting Unstuck

### Try these in order:

1. **Take a break** (5 minutes)
   - Stand up, walk around
   - Often solution becomes obvious

2. **Restart with fresh instructions**
   - Clear, specific description
   - Reference images
   - One task at a time

3. **Check the relevant guide**
   - Style issues → Your style guide
   - Workflow issues → [WORKFLOW.md](WORKFLOW.md)
   - AI issues → [AI-PLAYBOOK.md](AI-PLAYBOOK.md)
   - Quality issues → [Quality review template](../templates/quality-review.md)

4. **Compare to references**
   - Screenshot yours vs professional example
   - List specific differences
   - Fix differences one by one

5. **Ask for help**
   - Instructor
   - Classmates
   - Include: what you tried, what happened, screenshot

---

## 💡 Prevention

**Avoid problems before they start:**

✅ **Commit often**
- After each working iteration
- Easy to roll back mistakes

✅ **Test early**
- Check mobile after each section
- Run Lighthouse frequently

✅ **Be specific with AI**
- Exact measurements
- Exact colors (hex codes)
- Reference to style guide

✅ **Screenshot everything**
- Before changes
- After changes
- For debugging later

✅ **Read before asking**
- Most answers in style guide
- Check WORKFLOW for next steps
- Check this guide for common issues

---

## 📊 Still Stuck?

**If problem isn't listed here:**

1. Describe the problem specifically
2. What you've already tried
3. Screenshot of the issue
4. Ask instructor

**Include in your help request:**
- "I'm trying to [goal]"
- "I did [actions]"
- "Expected [X] but got [Y]"
- Screenshot or error message

---

**Quick Links:**
- [START-HERE.md](START-HERE.md) — Decision tree
- [WORKFLOW.md](WORKFLOW.md) — What to do when
- [AI-PLAYBOOK.md](AI-PLAYBOOK.md) — Working with AI
- [Quality review](../templates/quality-review.md) — Check your work

---

**Project:** Swiss Design Lineage Vibe Coding  
**Version:** 3.0 — November 2025
