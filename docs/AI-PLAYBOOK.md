# AI Collaboration Playbook
## How to Vibe Code Like a Pro

**Purpose:** Work effectively with AI to build professional design projects

---

## 🎯 Core Truth: AI Is Blind

AI can't see your website. You provide screenshots, AI writes code.

**Your job:** Visual judgment, design decisions, screenshots  
**AI's job:** Code execution, technical analysis, rapid iteration

**Bad:** "Make it look better"  
**Good:** "Screenshot shows hero spacing too tight. Add 3rem padding."

---

## 📸 Screenshot Workflow

**Take screenshots:**
- After every change
- Before design reviews
- Mobile + desktop views
- To compare with reference images

**Expect 50-100 screenshots per project.**

### Effective Screenshot Prompts

**Bad:** "What do you think?"  
**Good:** "Screenshot shows my hero vs reference. My typography lacks weight. Heading should be 4rem, bold 800. Match the reference."

**Template:**
1. What you're showing
2. The problem you see
3. Specific changes needed

---

## 🎭 Use AI as Different Experts

Ask AI to wear different hats:

**As UX Designer:**
"Review this navigation. Is it accessible? Clear hierarchy?"

**As Typography Specialist:**
"Analyze this type scale. Does it match [style] conventions?"

**As Accessibility Auditor:**
"Check color contrast. Any WCAG failures?"

**As Code Reviewer:**
"Is this component structure clean? Any anti-patterns?"

---

## ⚡ Essential Prompts

### Initial Setup
```
"I'm transforming this Swiss-style site to [STYLE]. Read the style guide at 
[path]. Review the reference site. What's our design system? Give me:
- Color palette (hex codes)
- Typography (fonts, scale)  
- Spacing system
- Layout patterns"
```

### Starting Work
```
"Let's transform [SECTION]. Here's a reference image showing authentic [STYLE].
Here's current screenshot. Create [SECTION] matching the style:
- [Specific characteristic 1]
- [Specific characteristic 2]
- [Specific characteristic 3]"
```

### Reviewing Work
```
"Screenshot shows [SECTION]. Compare to reference. Issues I see:
1. [Problem 1 with specific metrics]
2. [Problem 2 with specific metrics]
Fix these and maintain [STYLE] authenticity."
```

### Quality Check
```
"Run Lighthouse audit. Fix any issues below 90. Explain each change."
```

### Accessibility Check
```
"Review this page for WCAG 2.1 AA compliance. Check:
- Color contrast ratios
- Keyboard navigation  
- Screen reader support
- Focus indicators"
```

---

## 🔄 Iteration Strategy

**Every section needs 2-3 iterations minimum.**

**Round 1:** Get it working  
**Round 2:** Match style authentically  
**Round 3:** Polish and perfect

### Red Flags to Catch

Stop AI immediately if:
- ❌ Suggests rebuilding from scratch
- ❌ Ignores your specific instructions
- ❌ Makes accessibility worse
- ❌ Adds unnecessary complexity
- ❌ Generic design that doesn't match your style

**How to stop it:**
"Stop. That's not what I asked for. Let me clarify..."

---

## � Bad vs Good Collaboration

**BAD:**
```
Student: "Make the hero look more Flat Design"
AI: [generic output]
Student: "Looks good!" ❌
```

**GOOD:**
```
Student: "Screenshot shows hero. Reference shows:
- Heading: 4rem, bold 800
- Background: #3498DB, white text
- Button: 2rem padding, no border-radius
Match these exactly."

AI: [specific output]

Student: [screenshots, compares] 
"Button needs 2rem padding not 1rem. 
Logo 3rem not 4rem." ✅
```

---

## �💡 Pro Tips

**1. Be Hyper-Specific**
- Not: "bigger font"
- Yes: "4rem, font-weight 800"

**2. Reference Real Examples**
- "Like Stripe hero"
- "Match this [screenshot]"

**3. Compare Constantly**
- Your work vs references
- Before vs after

**4. Iterate Ruthlessly**
- First draft = never good enough
- 2-3 rounds minimum

**5. Use Metrics**
- #3498DB not "blue"
- 4rem not "bigger"
- 90+ not "fast enough"

**6. Split Complex Tasks**
- Not: "Build homepage"
- Yes: "Build hero first"

**7. Document Everything**
- Save screenshots
- Track iterations
- Note failures

---

## ⚠️ Common Mistakes

**Don't:**
- Accept first output
- Skip screenshot reviews
- Use vague descriptions
- Let AI make design decisions
- Forget mobile testing

**Do:**
- Iterate 2-3x on everything
- Provide visual proof
- Give exact measurements
- Make all design calls yourself
- Test responsive constantly

---

## 🎯 Success Pattern

1. **Research:** Understand style deeply
2. **Reference:** Find authentic examples
3. **Screenshot:** Capture everything
4. **Prompt:** Be specific with AI
5. **Review:** Check against references
6. **Iterate:** Refine 2-3 rounds
7. **Verify:** Lighthouse + accessibility
8. **Document:** Save screenshots + notes

---

## Quick Reference

**When stuck:** Compare your screenshot to reference images  
**When iterating:** Be more specific each round  
**When reviewing:** Use metrics, not feelings  
**When done:** Lighthouse 90+, authentic to style, responsive

---

**Remember:** AI is fast, but you're the art director. Your taste and judgment make the project excellent.
