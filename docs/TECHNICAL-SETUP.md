# Quality Gates Setup Guide
## Let AI Configure Your Professional Dev Environment

**Project:** Swiss Design Lineage Vibe Coding  
**Instructor:** Keith Williams  
**Purpose:** Automated quality assurance using industry-standard tools

---

## 🎯 What Are Quality Gates?

Quality gates are **automated checks** that run to ensure your site meets professional standards.

**Think of them as:**
- Spell-check for code
- Style guide enforcement
- Accessibility validation
- Performance monitoring
- Build verification

**They catch problems automatically** so you don't ship broken code.

---

## 🛠️ The Tools We Use

### 1. **Prettier** - Code Formatting
**What it does:** Automatically formats your code to look clean and consistent

**Checks:**
- Indentation (tabs vs spaces)
- Quote style (single vs double)
- Semicolons
- Line length
- Trailing commas

**Why it matters:** Consistent formatting makes code readable and professional

---

### 2. **ESLint** - JavaScript Quality
**What it does:** Catches JavaScript errors and enforces best practices

**Checks:**
- Syntax errors
- Unused variables
- Missing semicolons
- Potential bugs
- Code style violations

**Why it matters:** Prevents JavaScript errors that break your site

---

### 3. **Stylelint** - CSS Quality
**What it does:** Catches CSS errors and enforces consistent styling

**Checks:**
- Invalid CSS syntax
- Duplicate selectors
- Inconsistent naming
- Missing vendor prefixes
- Color format consistency

**Why it matters:** Ensures CSS is valid and maintainable

---

### 4. **Husky** - Pre-Commit Hooks
**What it does:** Runs checks BEFORE you commit code to Git

**Prevents:**
- Committing code that doesn't pass linting
- Committing unformatted code
- Breaking the build

**Why it matters:** Catches issues locally before they hit GitHub

---

### 5. **GitHub Actions** - CI/CD Pipeline
**What it does:** Runs checks automatically when you push to GitHub

**Checks:**
- All linting passes
- Site builds successfully
- Lighthouse scores meet thresholds
- No broken links
- Deploys to GitHub Pages if all pass

**Why it matters:** Automates deployment and prevents broken code from going live

---

## 🤖 Let AI Set Everything Up

**You don't configure these tools manually.** Let AI do it.

### The Setup Prompt

**Use this prompt in Phase 2 (Context Building):**

```
Set up all quality gates for this project by copying configurations from `/references/swiss_site/`:

1. **Copy Prettier configuration**
   - Copy `.prettierrc` file
   - Copy `.prettierignore` file
   - Add Prettier scripts to package.json

2. **Copy ESLint configuration**
   - Copy `.eslintrc.js` or `.eslintrc.json` file
   - Copy `.eslintignore` file
   - Add ESLint scripts to package.json

3. **Copy Stylelint configuration**
   - Copy `.stylelintrc.json` file
   - Add Stylelint scripts to package.json

4. **Set up Husky pre-commit hooks**
   - Install Husky
   - Configure pre-commit hook to run Prettier + ESLint + Stylelint
   - Ensure commits are blocked if checks fail

5. **Create GitHub Actions workflow**
   - Create `.github/workflows/ci-cd.yml` file
   - Configure to run on push to main branch
   - Include checks for:
     * Prettier formatting
     * ESLint
     * Stylelint
     * Build validation (npm run build)
     * Lighthouse CI (Performance, Accessibility, Best Practices, SEO)
   - Configure automatic deployment to GitHub Pages if all checks pass

6. **Update package.json scripts**
   - Add: `npm run lint` (runs all linters)
   - Add: `npm run format` (runs Prettier)
   - Add: `npm run format:check` (checks formatting without changing)
   - Add: `npm run build` (builds site)

7. **Explain what each gate checks and why it matters**
   - Provide overview of each tool
   - List common issues each catches
   - Explain the pre-commit and CI/CD flow

Do this setup now. Show me the files you create/modify and explain what each configuration does.
```

**AI will:**
- Copy all config files from Keith's Swiss site
- Set up Husky hooks
- Create GitHub Actions workflow
- Update package.json with scripts
- Explain everything it did

**You verify:** Run `npm install` to install dependencies, then test.

---

## ✅ Verifying Setup Works

### Test Local Quality Gates

**1. Test Prettier:**
```bash
npm run format
```

**Expected:** All code files are formatted consistently  
**If it fails:** AI made a configuration error. Ask AI to fix.

---

**2. Test ESLint:**
```bash
npm run lint
```

**Expected:** Either "0 errors" or a list of issues to fix  
**If errors appear:** Fix them (or ask AI to fix)

---

**3. Test Pre-Commit Hook:**
```bash
# Try to commit some code
git add .
git commit -m "test commit"
```

**Expected:** Husky runs linting before commit completes  
**If linting fails:** Commit is blocked (this is good!)  
**If Husky doesn't run:** Ask AI to fix Husky setup

---

**4. Test Build:**
```bash
npm run build
```

**Expected:** Site builds successfully in `_site/` folder  
**If build fails:** Fix errors (or ask AI to fix)

---

### Test CI/CD Pipeline

**1. Push to GitHub:**
```bash
git push origin main
```

**2. Check GitHub Actions:**
- Go to your repository on GitHub
- Click "Actions" tab
- See your workflow running

**Expected:** All checks pass (green checkmarks)  
**If checks fail:** Click into the failed job, see what failed, fix it

---

**3. Verify Deployment:**
- Go to Settings → Pages
- See your live site URL
- Click the URL to verify site is live

**Expected:** Site loads correctly at your GitHub Pages URL

---

## 📊 Quality Gate Standards

### What Must Pass (Mandatory)

#### **Linting: Zero Errors**
- ESLint: 0 errors
- Stylelint: 0 errors
- Prettier: Code properly formatted

**Warnings are OK** (don't block), but should be addressed.

**If you have errors:** Fix them before committing.

---

#### **Build: Must Succeed**
- `npm run build` completes without errors
- Site generates in `_site/` folder
- No broken links or missing files

**If build fails:** Site won't deploy. Fix immediately.

---

#### **Lighthouse Scores: 90+ Required**

**Performance: 90+**
- Load time under 2.5 seconds
- Images optimized
- No render-blocking resources

**Accessibility: 90+**
- Color contrast 4.5:1+
- Keyboard navigation works
- Semantic HTML
- Alt text on images

**Best Practices: 90+**
- HTTPS enabled
- No console errors
- Proper image aspect ratios
- No deprecated APIs

**SEO: 90+**
- Meta descriptions present
- Titles unique per page
- Valid HTML
- Mobile-friendly

**If scores below 90:** You fail quality gates. Must improve.

---

## 🔧 Common Issues & Fixes

### Issue 1: Pre-Commit Hook Not Running

**Symptom:** You commit code, but Husky doesn't run

**Fix prompt:**
```
Husky pre-commit hook isn't running when I commit. Diagnose and fix:
1. Check if Husky is installed in node_modules
2. Check if .husky/pre-commit file exists and is executable
3. Check if Git hooks are enabled
4. Reinstall Husky if necessary

Fix this and verify the hook runs.
```

---

### Issue 2: ESLint Errors You Don't Understand

**Symptom:** ESLint reports errors you don't know how to fix

**Fix prompt:**
```
ESLint is reporting these errors:
[paste error messages]

For each error:
1. Explain what the error means
2. Why it's a problem
3. How to fix it
4. Apply the fix

Then verify ESLint passes with zero errors.
```

---

### Issue 3: Lighthouse Score Too Low

**Symptom:** Lighthouse Performance below 90

**Fix prompt:**
```
Lighthouse Performance score is [X]/100, needs to be 90+. 

Run a detailed performance audit:
1. What's causing the low score?
2. Which specific files/resources are slow?
3. What optimizations are needed?
4. Apply fixes

Then re-run Lighthouse and show the improved score.
```

**Common fixes:**
- Optimize images (resize, compress, use WebP)
- Minify CSS/JS
- Remove unused code
- Add caching headers
- Lazy-load images

---

### Issue 4: GitHub Actions Failing

**Symptom:** CI/CD pipeline shows red X (failed)

**Fix prompt:**
```
GitHub Actions workflow is failing. Here's the error log:
[paste error from GitHub Actions]

Diagnose:
1. What step failed?
2. Why did it fail?
3. How to fix it?

Apply the fix and verify the workflow passes.
```

---

### Issue 5: Accessibility Score Below 90

**Symptom:** Lighthouse Accessibility below 90

**Fix prompt:**
```
Lighthouse Accessibility score is [X]/100, needs to be 90+.

Run WCAG 2.1 AA audit:
1. What accessibility violations exist?
2. Which specific elements are non-compliant?
3. How to fix each issue?

Common checks:
- Color contrast 4.5:1+ for text
- Alt text on all images
- Keyboard navigation (tab through site)
- Semantic HTML (proper heading hierarchy)
- Form labels
- ARIA labels where needed

Fix all violations and verify 90+ score.
```

---

## 📋 Quality Gates Checklist

Use this before submitting your project.

### Local Checks

- [ ] `npm run format` - Code is formatted
- [ ] `npm run lint` - Zero ESLint errors
- [ ] Zero Stylelint errors
- [ ] `npm run build` - Build succeeds
- [ ] No console errors when running site locally
- [ ] Site loads correctly at localhost

### Git Checks

- [ ] Pre-commit hook runs and passes
- [ ] All code committed to Git
- [ ] Pushed to GitHub successfully

### GitHub Actions Checks

- [ ] Go to repository Actions tab
- [ ] Latest workflow run shows all green checkmarks
- [ ] Lighthouse Performance 90+
- [ ] Lighthouse Accessibility 90+
- [ ] Lighthouse Best Practices 90+
- [ ] Lighthouse SEO 90+
- [ ] Build completed successfully
- [ ] Deployed to GitHub Pages

### Live Site Checks

- [ ] Site is live at GitHub Pages URL
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display
- [ ] No broken links
- [ ] Mobile responsive (test at 375px, 768px, 1920px)

---

## 🎯 Understanding the CI/CD Flow

**Here's what happens when you push code:**

### 1. Local Development
```
You write code
      ↓
VS Code + Copilot suggests
      ↓
You review and accept
      ↓
Save file
```

### 2. Pre-Commit (Husky)
```
git add .
      ↓
git commit -m "message"
      ↓
Husky runs pre-commit hook
      ↓
Runs: Prettier + ESLint + Stylelint
      ↓
If PASS → Commit succeeds
If FAIL → Commit blocked, fix errors
```

### 3. Push to GitHub
```
git push origin main
      ↓
Code uploads to GitHub
      ↓
GitHub Actions triggered automatically
```

### 4. CI/CD Pipeline (GitHub Actions)
```
Checkout code
      ↓
Install dependencies (npm install)
      ↓
Run Prettier check
      ↓
Run ESLint
      ↓
Run Stylelint
      ↓
Run Build (npm run build)
      ↓
Run Lighthouse CI
      ↓
If ALL PASS → Deploy to GitHub Pages
If ANY FAIL → Workflow fails, no deployment
```

### 5. Deployment
```
Build files copied to gh-pages branch
      ↓
GitHub Pages serves your site
      ↓
Site live at https://[username].github.io/[repo]
```

**This entire flow is automated.** You just push code. The gates handle quality.

---

## 🚀 Best Practices

### Run Quality Gates Often

**Don't wait until submission to check quality.**

**Daily routine:**
1. Morning: Run `npm run lint` to check for errors
2. After each sprint: Run full quality check
3. Before committing: Let Husky catch issues
4. After pushing: Check GitHub Actions passed

**Why:** Catch issues early when they're easy to fix.

---

### Fix Issues Immediately

**When a quality gate fails:**
1. Read the error message carefully
2. Ask AI to explain and fix if unclear
3. Fix the issue
4. Re-run the check to verify
5. Don't move forward with broken gates

**Why:** Technical debt compounds. Fix it now.

---

### Understand What Tools Check

**Don't just run commands blindly.**

**Ask AI to explain:**
- "What does this ESLint error mean?"
- "Why does Prettier want to change this?"
- "What is Lighthouse checking for?"

**Why:** You learn to write better code, not just pass arbitrary checks.

---

### Use Quality Gates as Learning Tools

**Quality gates teach you professional standards:**

- **Prettier** → Consistent formatting conventions
- **ESLint** → JavaScript best practices
- **Stylelint** → CSS patterns that scale
- **Lighthouse** → Performance and accessibility standards

**These are industry standards.** Learning them makes you a better developer.

---

## 📚 Resources

### Documentation

**Prettier:**
- https://prettier.io/docs/en/

**ESLint:**
- https://eslint.org/docs/latest/

**Stylelint:**
- https://stylelint.io/

**Husky:**
- https://typicode.github.io/husky/

**GitHub Actions:**
- https://docs.github.com/en/actions

**Lighthouse CI:**
- https://github.com/GoogleChrome/lighthouse-ci

### Keith's Reference Site

**Everything is already configured in `/references/swiss_site/`:**

```
swiss_site/
├── .prettierrc
├── .prettierignore
├── .eslintrc.json
├── .eslintignore
├── .stylelintrc.json
├── .husky/
│   └── pre-commit
├── .github/
│   └── workflows/
│       └── ci-cd.yml
└── package.json (scripts configured)
```

**AI copies these files for you.** Don't configure manually.

---

## ✅ Final Verification

Before you submit, verify ALL quality gates pass:

### Checklist

- [ ] Local linting: `npm run lint` shows 0 errors
- [ ] Local formatting: `npm run format` completes
- [ ] Local build: `npm run build` succeeds
- [ ] Pre-commit hook: Husky runs on commit
- [ ] GitHub Actions: All checks green
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 90+
- [ ] Lighthouse Best Practices: 90+
- [ ] Lighthouse SEO: 90+
- [ ] Live site: Loads correctly at GitHub Pages URL

**If even ONE fails:** Fix it before submitting.

---

## 🎉 Why Quality Gates Matter

**Professional developers don't ship broken code.**

Quality gates ensure:
- ✅ Code is readable and maintainable
- ✅ No obvious bugs or errors
- ✅ Site is accessible to all users
- ✅ Performance is fast
- ✅ Best practices followed
- ✅ Automated deployment works

**This is how real software teams work.**

By using quality gates, you're learning professional development workflows, not just student project workflows.

**That's valuable.** It's what employers look for.

---

## 🤖 Let AI Handle the Setup

**Remember:** You don't configure these tools manually.

**Prompt AI, verify it works, move on.**

Your job is **design judgment and strategic direction**, not configuring linters.

AI handles the tedious setup. You handle the creative work.

**That's vibe coding.** 🚀

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2025  
**Project:** Swiss Design Lineage Vibe Coding  
**Instructor:** Keith Williams, NJIT
