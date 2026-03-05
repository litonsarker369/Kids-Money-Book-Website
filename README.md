# Uncle Money Website - Handover Guide

## Overview
Your Uncle Money website is a fully responsive, kid-friendly site built without any subscription fees. It's a static site that you can host anywhere.

---

## Quick Start

### Viewing Locally
Open `index.html` in any browser, or use a local server:
```bash
npx serve
# or
python -m http.server 8000
```

### Going Live
Upload all files to your web host (Netlify, Vercel, GitHub Pages, or any standard hosting).

---

## Updating Content (No Code Required)

### Method 1: Edit content.json
Open `content.json` in any text editor and modify:
- Book details, pricing, product info
- Author bio
- Sample page text
- Site title, descriptions

### Method 2: Replace Images
Place your images in `assets/images/`:
- `book-cover.png` - Main book cover
- `author.jpg` - Author photo
- `sample-1.png`, `sample-2.png`, `sample-3.png` - Sample page images

---

## Shop/Buy Now Setup

### Option A: PayPal
1. Create a PayPal.me link or PayPal button
2. Replace `#` in `content.json` products with your PayPal link

### Option B: Stripe
1. Create products in Stripe Dashboard
2. Replace `#` with Stripe payment links

### Option C: Gumroad/Etsy
1. Replace `#` with your product URLs

---

## SEO Basics

### Update Meta Tags (in index.html head)
```html
<meta name="description" content="YOUR DESCRIPTION">
<meta property="og:title" content="YOUR TITLE">
<meta property="og:url" content="https://yourdomain.com">
```

### SEO Tips
- Add your domain to Google Search Console
- Create a sitemap.xml
- Use descriptive image alt text
- Get backlinks from book blogs, parenting sites

---

## Backup Instructions

### Manual Backup
1. Download entire folder
2. Save to cloud storage (Google Drive, Dropbox)

### Automated (Git)
```bash
git init
git add .
git commit -m "Initial site"
```

---

## Interactive Features

### Coin Game
- Click "Start Game" to begin
- Click coins before they disappear
- Reach 100 points for celebration

### Savings Calculator
- Enter a savings goal
- Add cost and weekly savings amount
- See how long to reach your goal

---

## Troubleshooting

### Content not loading?
- Make sure `content.json` is valid JSON
- Check browser console (F12) for errors

### Images not showing?
- Check file paths are correct
- Use relative paths: `assets/images/filename.png`

### Form not working?
- Currently shows success message (no backend)
- Connect to Formspree or Netlify Forms for email

---

## Tech Stack
- Pure HTML, CSS, JavaScript (no frameworks)
- Google Fonts: Fredoka One, Nunito
- No subscriptions or ongoing costs

---

## Support
For questions about this site, contact your web developer.

---

© 2026 Uncle Money
