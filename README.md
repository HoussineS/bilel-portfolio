# Chef Bilel Jmal — Portfolio Website

Professional portfolio website for a Pizza Maker & Fast Food Specialist.

## Features

- 🌐 **Bilingual** — Full English & Arabic support with RTL layout
- 📱 **Responsive** — Mobile, tablet, and desktop optimized
- 🎨 **Premium Design** — Warm restaurant color palette with smooth animations
- 📸 **Gallery** — Interactive photo gallery with lightbox viewer (with real images and video)
- 📄 **Download CV** — Prominent CV download button for recruiters
- 💬 **WhatsApp CTA** — Big WhatsApp button for Gulf employer communication
- ⭐ **Testimonials** — Credibility-building quotes from past managers
- ⚡ **Static** — No build tools needed, deploy directly

## Sections

1. **Hero** — Name, title, key info (3 years, Relocation-ready, bilingual), CV download
2. **About** — 6 cards covering experience, passion, pressure, teamwork, relocation, hygiene
3. **Skills** — 8 animated progress bars for culinary skills
4. **Experience** — Timeline with 3 restaurant positions (Restaurant Maryouma, Kalimera, TONTON)
5. **Certifications** — Display of professional training and internship certificates
6. **Testimonials** — 3 manager/colleague quotes
7. **Gallery** — Food photos and a video section (the star section)
8. **Contact** — Phone, WhatsApp, Email, Location + big WhatsApp CTA

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g., `bilel-portfolio`).
2. Open your terminal in this project folder (`c:\Users\Lenovo\Documents\bilal portfilio`).
3. Run the following commands to push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Chef Bilel Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
4. On GitHub, go to your repository's **Settings** → **Pages**.
5. Under **Source**, select **Deploy from a branch**.
6. Select the **main** branch and **/ (root)** folder.
7. Click **Save**.
8. In a few minutes, your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`!

## Customize

- **Translations**: Edit `js/i18n.js` to update any text in English or Arabic.
- **Images**: Additional images can be added to the `images/` directory.

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (Intersection Observer, LocalStorage)
- Google Fonts (Poppins, Inter, Noto Sans Arabic)
