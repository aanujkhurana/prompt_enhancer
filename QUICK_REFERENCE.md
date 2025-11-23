# 🎨 Quick Reference: Design System Usage

## Typography Quick Reference

### Headings
```scss
// Hero Title
font-size: $font-size-4xl; // Mobile: 48px
font-size: $font-size-5xl; // Desktop: 56px
font-weight: $font-weight-extrabold; // 800
line-height: $line-height-tight; // 1.25
letter-spacing: $letter-spacing-tight; // -0.025em

// Section Title (H2)
font-size: $font-size-3xl; // 40px
font-weight: $font-weight-bold; // 700

// Card Title (H3)
font-size: $font-size-xl; // 24px
font-weight: $font-weight-bold; // 700
```

### Body Text
```scss
// Large Body
font-size: $font-size-md; // 18px
line-height: $line-height-relaxed; // 1.625

// Normal Body
font-size: $font-size-base; // 16px
line-height: $line-height-relaxed; // 1.625

// Small Text
font-size: $font-size-sm; // 14px
```

---

## Color Quick Reference

### Most Used Colors
```scss
// Light Mode
Background: $color-bg-light (#ffffff)
Cards: $color-bg-secondary-light (#fafbfc)
Text: $color-text-primary-light (#0d1117)
Subtext: $color-text-secondary-light (#5e6c75)
Border: $color-border-light (#eceef1)

// Dark Mode  
Background: $color-bg-dark (#0a0e14)
Cards: $color-bg-secondary-dark (#151b23)
Text: $color-text-primary-dark (#f9fafb)
Subtext: $color-text-secondary-dark (#d1d5db)
Border: $color-border-dark (#232b35)

// Accent
Primary: $accent-500 (#6366f1)
Hover: $accent-600 (#4f46e5)
Dark Mode: $accent-400 (#818cf8)
```

---

## Spacing Quick Reference

### Common Spacings
```scss
Gap between items: $space-3 (12px)
Button padding: $space-3 $space-6 (12px 24px)
Card padding: $space-8 (32px)
Section spacing: $space-12 (48px)
Hero spacing: $space-20 (80px)
```

---

## Component Patterns

### Button (Primary)
```scss
<button class="btn btn--primary">Click Me</button>
<button class="btn btn--primary btn--lg">Large Button</button>
```

### Button (Secondary)
```scss
<button class="btn btn--secondary">Secondary</button>
```

### Button (Ghost)
```scss
<button class="btn btn--ghost btn--sm">Copy</button>
```

### Card
```scss
.card {
  background: $color-bg-light;
  border: 1px solid $color-border-light;
  border-radius: $radius-2xl; // 24px
  padding: $space-8; // 32px
  box-shadow: $shadow-lg;
}
```

### Input/Textarea
```scss
.input {
  padding: $space-5; // 20px
  border: 2px solid $color-border-light;
  border-radius: $radius-xl; // 16px
  font-size: $font-size-md; // 18px
  
  &:focus {
    @include focus-ring;
  }
}
```

---

## Shadow Reference

```scss
// Subtle
box-shadow: $shadow-sm;

// Cards
box-shadow: $shadow-md;

// Elevated Cards
box-shadow: $shadow-lg;

// Premium/Modal
box-shadow: $shadow-xl;

// Buttons (Accent)
box-shadow: $shadow-accent;
```

---

## Animation Patterns

### Hover Effects
```scss
// Button Hover
&:hover {
  transform: translateY(-1px);
  box-shadow: $shadow-accent-lg;
}

// Card Hover
&:hover {
  transform: translateY(-4px);
  box-shadow: $shadow-lg;
}
```

### Transitions
```scss
transition: all $transition-base; // 200ms
transition: all $transition-smooth; // 400ms (premium)
```

---

## Dark Mode Usage

```scss
.component {
  color: $color-text-primary-light;
  
  @include dark-mode {
    color: $color-text-primary-dark;
  }
}
```

---

## Responsive Breakpoints

```scss
// Mobile first - default styles

@include sm-up { // 640px+
  // Tablet and desktop
}

@include md-up { // 768px+
  // Desktop
}

@include lg-up { // 1024px+
  // Large desktop
}
```

---

## Common Patterns

### Hero Section
```scss
.hero {
  padding: $space-20 0 $space-16; // 80px top, 64px bottom
  text-align: center;
  
  @include sm-up {
    padding: $space-24 0 $space-20; // 96px top, 80px bottom
  }
}
```

### Container
```scss
<div class="container">...</div>           // 1200px max
<div class="container container--narrow">...</div>  // 768px max
```

### Feature Grid
```scss
.grid {
  display: grid;
  grid-template-columns: 1fr; // Mobile
  gap: $space-6;
  
  @include md-up {
    grid-template-columns: repeat(3, 1fr); // Desktop
    gap: $space-8;
  }
}
```

---

## Best Practices

### DO ✅
- Use design tokens (variables) for all values
- Apply consistent spacing (4px increments)
- Use semantic color names
- Add hover states to interactive elements
- Include focus states for accessibility
- Use spring easing for premium feel
- Test in both light and dark modes

### DON'T ❌
- Use hard-coded color values
- Mix spacing units (stick to rem)
- Skip dark mode styles
- Forget hover/focus states
- Use basic linear transitions (use easing)
- Ignore responsive breakpoints
- Overcomplicate animations

---

## File Structure

```
app/
├── assets/scss/
│   ├── main.scss          → Design tokens (variables, mixins)
│   └── global.scss        → Global styles, utilities, button system
├── components/
│   ├── TheHero.vue        → Hero section
│   ├── PromptEnhancer.vue → Main input/output
│   ├── QuickTemplates.vue → Template pills
│   ├── FeatureGrid.vue    → Feature cards
│   └── TheFooter.vue      → Footer
└── app.vue                → Main wrapper
```

---

## Need Help?

Refer to `DESIGN_SYSTEM.md` for complete documentation.

**Remember**: Consistency is key. Use the design tokens, follow the patterns, and your UI will look polished and professional.
