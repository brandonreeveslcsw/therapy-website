# Brandon Reeves, LCSW — Website

Static therapy website for Brandon Reeves, LCSW in Baton Rouge, LA.

## Structure

```
brandon-site/
├── index.html                  # Home
├── about.html                  # About Brandon
├── services.html               # Services overview
├── individual-therapy.html     # Individual therapy
├── therapy-for-men.html        # Men's therapy (key SEO page)
├── young-adult-therapy.html    # Young adult therapy
├── clinical-supervision.html   # Clinical supervision
├── consultation-training.html  # Consultation & CE
├── contact.html                # Contact + map
├── sitemap.xml
├── robots.txt
├── css/style.css
├── js/main.js
└── images/
    ├── headshot-gray.jpg       # Primary/hero headshot
    └── headshot-blue.jpg       # About section headshot
```

## Deploy to Netlify

1. Push this folder to a GitHub/GitLab repo, or drag-and-drop to Netlify
2. Set custom domain to `brandonreeveslcsw.com`
3. Enable HTTPS (automatic with Netlify)
4. No build command needed — it's static HTML

### Netlify Settings
- **Publish directory:** `/` (or wherever the root of this folder lives)
- **Build command:** (none)
- **Node version:** N/A

### Custom Domain DNS
Point your domain to Netlify:
- Add a CNAME record: `www` → `[your-site].netlify.app`
- Or use Netlify DNS for the apex domain

### Optional: Pretty URLs
Add a `_redirects` file to remove `.html` extensions:
```
/about      /about.html     200
/services   /services.html  200
/contact    /contact.html   200
```
(etc.)

## SEO Checklist
- [x] Semantic HTML5
- [x] Meta titles & descriptions per page
- [x] Schema.org structured data (home, about, men's therapy FAQ)
- [x] Open Graph tags
- [x] Proper heading hierarchy
- [x] Alt text on images
- [x] Internal linking
- [x] XML sitemap
- [x] robots.txt
- [x] Mobile responsive
- [x] Fast loading (no frameworks, minimal JS)

## Notes
- Private pay only — no insurance mentioned
- Board conflict-of-interest disclaimer on supervision & consultation pages
- EMDR mentioned as one tool, not a primary focus
- Google Maps embed on contact page may need API key for production
