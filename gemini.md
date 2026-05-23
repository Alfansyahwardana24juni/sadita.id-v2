# 🚀 Project Instruction: Refactor Landing Page @sadita.id-v2

## 🎯 Objective
Refactor existing HTML + Tailwind CDN landing page into a **clean, scalable, and maintainable architecture** using the latest Tailwind CSS version.

The new structure must:
- Preserve existing UI/UX identity
- Improve consistency
- Enhance animations where necessary
- Follow modern frontend best practices

---

## 📌 Initial Task (MANDATORY)

Before making any changes:

1. Analyze the entire project structure
2. Identify:
   - Layout patterns
   - Repeated components
   - Styling inconsistencies
   - Inline styles or hardcoded values
   - JavaScript usage (if any)
3. Map current sections:
   - Navbar
   - Hero
   - About
   - Services / Features
   - Products / Showcase
   - CTA
   - Footer

⚠️ DO NOT start coding before completing analysis.

---

## 🧱 Target Architecture

Refactor into a **component-based structure**.

### Folder Structure (Recommended)

/src
/components
navbar.html
footer.html
button.html
card.html
/sections
hero.html
about.html
services.html
products.html
cta.html
/layouts
main.html
/styles
tailwind.css
custom.css
/scripts
main.js
/index.html




---

## 🎨 Tailwind Requirements

### Upgrade Rules
- Remove Tailwind CDN
- Use latest Tailwind via build (CLI or PostCSS)
- Enable:
  - JIT mode
  - Custom theme
  - Responsive breakpoints
  - Dark mode (optional but recommended)

---

## 🎯 Design System

Create a consistent design system:

### Colors
- Extract all colors used
- Define in `tailwind.config.js`
- Avoid inline HEX usage

### Typography
- Standardize:
  - Heading sizes
  - Paragraph spacing
  - Font weights

### Spacing
- Use consistent spacing scale (4, 6, 8, 12, 16)

---

## 🧩 Component Rules

Break UI into reusable components:

### Example Components
- Button
- Card Product
- Section Header
- Badge
- Navbar Item

### Rules
- No duplicated HTML blocks
- Use semantic naming
- Keep components reusable

---

## 🧼 Clean Code Rules

- Remove inline styles
- Avoid unnecessary div nesting
- Use semantic HTML (`section`, `header`, `main`, `footer`)
- Keep class names readable
- Group Tailwind classes logically:
  - layout → spacing → typography → color → effects

---

## 📱 Responsive Design

Ensure:
- Mobile-first approach
- Smooth scaling for:
  - Mobile
  - Tablet
  - Desktop
  - Large screens

---

## ✨ Animation Improvements

Enhance UI using subtle animations:

### Allowed Techniques
- Tailwind transitions
- CSS animation
- Intersection Observer (for scroll reveal)

### Suggested Improvements
- Fade-in on scroll
- Hover effects on cards
- Button micro-interactions
- Smooth navbar behavior

⚠️ Avoid excessive animation (keep it professional)

---

## ⚙️ JavaScript Rules

If JS exists:
- Refactor into modular structure
- Remove unused scripts
- Use:
  - Vanilla JS OR Alpine.js (preferred for simplicity)

---

## 🔁 Reusability & Scalability

- Every section must be reusable
- Avoid hardcoded content
- Prepare structure for:
  - Future CMS integration
  - Laravel Blade / React migration

---

## 📦 Output Expectations

Gemini must produce:

1. Refactored full project structure
2. Clean `index.html`
3. Extracted components
4. Tailwind config file
5. Optimized CSS file
6. Improved animations
7. Documentation of changes

---

## 🧪 Validation Checklist

Before finishing, ensure:

- [ ] No duplicated UI blocks
- [ ] No inline styles
- [ ] All colors centralized
- [ ] Responsive works properly
- [ ] Animations smooth & minimal
- [ ] Code easy to read
- [ ] Structure scalable

---

## 🚫 Strict Prohibitions

- Do NOT redesign UI completely
- Do NOT change branding
- Do NOT overuse animation
- Do NOT leave unused code

---

## 💡 Bonus Improvements (Optional)

If possible:
- Add dark mode support
- Improve accessibility (ARIA, alt text)
- Optimize images
- Add loading states

---

## 🧠 Final Instruction

Think like a **senior frontend engineer**.

Do NOT rush to code.

1. Analyze deeply
2. Plan structure
3. Then execute cleanly

The final result should look:
- Cleaner
- More modern
- Easier to scale
- Production-ready