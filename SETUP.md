# 🚀 Setup Guide - Belajar Anak v1.1.0

Complete setup instructions for the educational app with new Audio, Quiz, and PWA features.

## 📋 Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🛠️ Installation Steps

### Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages including:

- React and React DOM
- React Router
- Tailwind CSS
- Vite build tool

### Step 2: Create PWA Icons (Optional but Recommended)

You have three options:

**Option A: Auto-generate with script (if ImageMagick installed)**

```bash
./create-icons.sh
```

**Option B: Use online generator**

1. Visit https://realfavicongenerator.net/
2. Upload a 512x512 icon
3. Download generated icons
4. Place `icon-192.png` and `icon-512.png` in `/public` folder

**Option C: Skip for now**

- App will work without icons
- PWA install will use default browser icon
- Can add icons later

### Step 3: Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Step 4: Test Features

✅ **Test Audio**:

1. Click the 🔊 icon in top-right
2. Navigate to Alphabet page
3. Click any letter - should hear pronunciation

✅ **Test Quiz Mode**:

1. Click "Quiz Mode 🎮" on home page
2. Select a quiz type
3. Answer questions and check score

✅ **Test PWA** (requires HTTPS or localhost):

1. Open in Chrome/Edge on mobile
2. Look for "Install" prompt
3. Or use Menu → "Add to Home Screen"

## 🏗️ Build for Production

### Create Production Build

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Opens the production build at `http://localhost:4173`

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow prompts to deploy. Vercel automatically:

- Detects Vite configuration
- Enables HTTPS (required for PWA)
- Provides custom domain
- Auto-deploys on git push

### Option 2: Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

1. Update `vite.config.js`:

```javascript
export default defineConfig({
  base: "/your-repo-name/",
  plugins: [react()],
});
```

2. Deploy:

```bash
npm run build
npx gh-pages -d dist
```

### Option 4: Traditional Web Hosting

1. Run `npm run build`
2. Upload contents of `dist/` folder to web server
3. Configure server to serve `index.html` for all routes
4. Ensure HTTPS is enabled for PWA features

## 🔧 Configuration

### Enable HTTPS Locally (for PWA testing)

Install `mkcert`:

```bash
npm install -g mkcert
mkcert create-ca
mkcert create-cert
```

Update `vite.config.js`:

```javascript
import fs from "fs";

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync("cert.key"),
      cert: fs.readFileSync("cert.crt"),
    },
  },
  plugins: [react()],
});
```

### Customize App

**Change App Name**:
Edit `/public/manifest.json`:

```json
{
  "name": "Your App Name",
  "short_name": "App Name"
}
```

**Change Colors**:
Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
    }
  }
}
```

**Modify Content**:

- Letters: `src/data/alphabet.js`
- Numbers: `src/data/numbers.js`
- Animals: `src/data/animals.js`

## 🐛 Troubleshooting

### Audio Not Working

- **Check**: Sound toggle is ON (🔊)
- **Check**: Browser supports Web Speech API
- **Fix**: Click on page first (browser security requires user interaction)

### PWA Not Installing

- **Check**: App is served over HTTPS (not http://)
- **Check**: `manifest.json` and icons exist in `/public`
- **Check**: Service worker registered (see browser console)
- **Fix**: Clear browser cache and reload

### Service Worker Errors

```bash
# Clear service worker
# In browser DevTools:
# Application → Service Workers → Unregister

# Then hard refresh:
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)
```

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

## 📱 Mobile Testing

### Test on Real Device

1. Find your local IP:

```bash
npm run dev -- --host
```

2. Note the network address (e.g., `http://192.168.1.100:5173`)

3. Open that URL on your mobile device (same WiFi network)

4. Test all features on actual mobile device

### Browser Testing

Recommended browsers for testing:

- ✅ Chrome 90+ (best PWA support)
- ✅ Edge 90+
- ✅ Safari 14+ (iOS PWA)
- ✅ Firefox 90+
- ⚠️ Older browsers may have limited features

## 🔒 Security Notes

- Service worker only works on HTTPS or localhost
- Web Speech API requires HTTPS in production
- No sensitive data is stored (safe for children)
- All data stays in browser (no backend)

## 📚 Next Steps

After setup:

1. ✅ Test all features thoroughly
2. ✅ Customize content for your needs
3. ✅ Add custom icons for professionalism
4. ✅ Deploy to production
5. ✅ Share with users!

## 🆘 Need Help?

- Check [FEATURES.md](FEATURES.md) for feature details
- See [DOCUMENTATION.md](docs/DOCUMENTATION.md) for technical docs
- Review [DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md) for development
- Open an issue on GitHub

---

**Ready to launch? Let's go! 🚀**

Happy teaching and learning! 📚✨
