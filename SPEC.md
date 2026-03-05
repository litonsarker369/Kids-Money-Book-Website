# Uncle Money Website Specification

## Project Overview
- **Project Name**: Uncle Money Children's Book Website
- **Type**: Static website with content management via JSON
- **Core Functionality**: Showcase children's book, enable purchases, engage young readers
- **Target Users**: Children 8-10 years (primary) and parents (purchasers)

---

## UI/UX Specification

### Layout Structure

**Pages/Sections (Single Page Application)**
1. **Header**: Fixed navigation with logo and menu links
2. **Hero**: Large book showcase with animated elements
3. **About the Story**: Why earning money matters
4. **Sample Pages**: Flip-through preview of book pages
5. **About the Author**: Author bio section
6. **Shop**: Product cards with buy buttons
7. **Contact**: Simple contact form
8. **Footer**: Links, social, copyright

**Responsive Breakpoints**
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (full layout, max-width 1200px)

### Visual Design

**Color Palette**
- Primary: `#FF6B35` (Energetic Orange)
- Secondary: `#2EC4B6` (Playful Teal)
- Accent: `#FFBE0B` (Sunny Yellow)
- Background: `#FFF8F0` (Warm Cream)
- Text Dark: `#1A1A2E` (Deep Navy)
- Text Light: `#FFFFFF`
- Success: `#4CAF50`
- Card BG: `#FFFFFF`

**Typography**
- Headings: "Fredoka One" (Google Fonts) - playful, rounded
- Body: "Nunito" (Google Fonts) - friendly, readable
- Sizes:
  - H1: 3.5rem (mobile: 2.5rem)
  - H2: 2.5rem (mobile: 1.8rem)
  - H3: 1.5rem
  - Body: 1.1rem
  - Small: 0.9rem

**Spacing System**
- Section padding: 80px vertical (mobile: 50px)
- Container max-width: 1200px
- Card padding: 30px
- Gap between elements: 20px

**Visual Effects**
- Card shadows: `0 10px 30px rgba(0,0,0,0.1)`
- Hover lift: translateY(-8px) with shadow increase
- Border radius: 20px (cards), 50px (buttons), 15px (small elements)
- Gradient accents on buttons
- Floating animations on decorative elements
- Confetti burst on shop interaction

### Components

**Navigation**
- Logo (text-based with coin icon)
- Menu items: Home, About, Sample Pages, Shop, Contact
- Mobile: Hamburger menu with slide-in drawer
- States: Active (underline), Hover (color change)

**Hero Section**
- Large 3D book mockup (CSS-generated)
- Animated coins flying
- Tagline + CTA button
- Floating decorative shapes

**Book Preview (Sample Pages)**
- 3D flip book effect
- Page navigation arrows
- Page indicator dots
- "Read Together" prompt

**Product Cards**
- Book cover image
- Title, price
- "Buy Now" button
- Hover: scale up, shadow increase
- Badge for "Pre-order" or "New"

**Contact Form**
- Name, Email, Message fields
- Submit button with loading state
- Success message animation

**Interactive Elements**
- Coin click game (collect coins, see message)
- Savings goal calculator (fun, kid-friendly)
- Animated character reactions

---

## Functionality Specification

### Core Features

1. **Content Management**
   - All text content stored in `content.json`
   - Easy updates without code knowledge
   - Images referenced by path

2. **Book Preview**
   - CSS 3D page flip animation
   - 3 sample pages displayed
   - Keyboard navigation support

3. **Shop Section**
   - Product cards for book and merchandise
   - External purchase links (PayPal/Stripe ready)
   - Quantity display (static, no cart needed)

4. **Interactive Elements**
   - Coin clicker game: Click floating coins, track score
   - "My Savings Goal" calculator: Fun animated calculator

5. **Contact Form**
   - Form validation (client-side)
   - Mailto link or form endpoint placeholder
   - Success animation

6. **SEO**
   - Meta tags (title, description, keywords)
   - Open Graph tags
   - Semantic HTML
   - Alt text on images

### User Interactions
- Smooth scroll to sections
- Button hover/click animations
- Mobile menu toggle
- Form validation feedback

### Data Handling
- Content loaded from `content.json`
- No backend required
- Form submits via mailto or placeholder endpoint

---

## Acceptance Criteria

1. ✅ Site loads without errors on mobile and desktop
2. ✅ All 5 sections visible and properly styled
3. ✅ Navigation works on mobile (hamburger menu)
4. ✅ Book preview flips through pages
5. ✅ Shop cards display with working buy buttons
6. ✅ Interactive coin game is playable
7. ✅ Contact form validates and shows success
8. ✅ Colors, fonts, and spacing match spec
9. ✅ Content is editable via content.json
10. ✅ SEO meta tags present

---

## File Structure

```
/uncle-money-website
  /assets
    /images
      book-cover.png (placeholder)
      sample-1.png (placeholder)
      sample-2.png (placeholder)
      sample-3.png (placeholder)
  /css
    styles.css
  /js
    main.js
  content.json
  index.html
  README.md
```
