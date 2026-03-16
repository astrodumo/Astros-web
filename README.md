# Frontend Developer Portfolio

A clean, production-ready personal portfolio site — pure HTML, CSS, and vanilla JS.
No build tools required. Open `index.html` in a browser and it works.

---

## Folder Structure

```
portfolio/
├── index.html          ← All page sections & markup
├── css/
│   └── styles.css      ← All styles (tokens → components → sections)
├── js/
│   └── main.js         ← Cursor glow, mobile nav, scroll reveal, back-to-top
├── assets/             ← Create this folder for images & favicon
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   └── og-image.png    ← 1200×630 screenshot for social sharing
└── README.md
```

---

## Quick Personalisation Checklist

Open each file and search for the comments marked `── Update` or `── Change`.

### index.html
| What to change | Where to find it |
|---|---|
| Your name in the `<title>` and `<meta>` tags | Line ~6 |
| `<link rel="canonical">` URL | Line ~9 |
| `og:title`, `og:description`, `og:url` | Lines ~12–16 |
| Logo text (`.logo`) | Nav section |
| Hero badge status ("Available for Projects") | Hero section |
| Hero headline & description | Hero section |
| Stats (10+, 60+, 3×) | Hero stats |
| Skills ticker items | Ticker section |
| About copy | About section |
| Services copy | Services section |
| Case study titles, descriptions & metrics | Work section |
| Email, LinkedIn, GitHub links (×3 each) | Contact & Footer |
| Copyright name | Footer |

### css/styles.css
The `:root` block at the very top controls the entire colour theme:
```css
:root {
  --cream:  #F7F4EE;   /* page background */
  --ink:    #1C1917;   /* text & dark elements */
  --coral:  #E8572A;   /* ← YOUR accent colour — change this one first */
}
```
Change `--coral` to any colour (e.g. `#3B82F6` for blue, `#10B981` for green)
and the entire site recolours instantly.

---

## Previewing Locally

**Option A — just double-click `index.html`**
Works fine for most editing. Note: Google Fonts won't load if you're fully offline.

**Option B — VS Code Live Server (recommended)**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. The browser auto-refreshes on every save

**Option C — Python (no install needed)**
```bash
cd portfolio
python3 -m http.server 3000
# then open http://localhost:3000
```

---

## Deployment Options

### Netlify (easiest — free)
1. Go to https://netlify.com and sign up
2. Drag-and-drop the entire `portfolio/` folder onto the Netlify dashboard
3. Done — you get a live URL immediately (e.g. `fancy-name-123.netlify.app`)
4. To use a custom domain: Site Settings → Domain Management → Add domain

### Vercel (also free)
1. Push your folder to a GitHub repo
2. Go to https://vercel.com → Import project → connect your GitHub repo
3. No config needed — Vercel detects plain HTML automatically
4. Every `git push` auto-deploys

### GitHub Pages (free, GitHub-native)
1. Push to a GitHub repo named `yourusername.github.io`
2. Go to repo Settings → Pages → Source: `main` branch, `/ (root)` folder
3. Save — site is live at `https://yourusername.github.io` within a minute

### cPanel / Traditional Hosting
Upload all files via FTP to the `public_html` folder on your host.
The structure maps directly — `index.html` at the root is all that's needed.

---

## Adding a Custom Domain (any platform)

1. Buy a domain from Namecheap, Cloudflare Registrar, or Google Domains
2. In your registrar's DNS settings, add:
   - **Netlify/Vercel**: a `CNAME` record pointing to your platform URL
   - **GitHub Pages**: an `A` record pointing to GitHub's IPs (docs.github.com/pages)
3. Add the domain in your hosting platform's dashboard
4. Free HTTPS is provisioned automatically (usually within 10 min)

---

## Making Content Changes

All content lives in `index.html` with clear section comments like:
```html
<!-- ═══ HERO ═══ -->
<!-- ═══ ABOUT ═══ -->
<!-- ═══ SERVICES ═══ -->
<!-- ═══ CASE STUDIES ═══ -->
<!-- ═══ CONTACT ═══ -->
```

### Adding a third case study
Copy the `.case-card` div block, paste it inside `.cases-grid`, and update the text.
Also change the grid to 3 columns in `styles.css`:
```css
/* Find this rule and update it: */
.cases-grid { grid-template-columns: 1fr 1fr 1fr; }
```

### Changing fonts
In `index.html`, replace the Google Fonts `<link>` with any other font from fonts.google.com.
Then in `styles.css`, update:
```css
body       { font-family: 'YourBodyFont', sans-serif; }
h1, h2, h3 { font-family: 'YourDisplayFont', serif; }
```

---

## Recommended VS Code Extensions
- **Live Server** — instant browser preview
- **Prettier** — auto-formats HTML/CSS/JS on save
- **CSS Peek** — jump from HTML class names to their CSS definitions
- **HTML CSS Support** — autocomplete for class names

---

Built with plain HTML, CSS, and vanilla JS — no frameworks, no build step, no dependencies.
