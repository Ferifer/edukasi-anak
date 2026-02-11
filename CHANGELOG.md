# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-02-11

### ✨ Major New Features

#### 🔊 Audio Support

- Integrated Web Speech API for text-to-speech
- Sound toggle button in navigation (🔊/🔇)
- Automatic pronunciation for:
  - Letters with example words
  - Numbers with Indonesian names
  - Animal names and sounds
- Voice feedback in quiz mode
- Welcome message on home page
- Sound preference persisted in localStorage

#### 🎮 Interactive Quiz Mode

- Three quiz types:
  - **Letter Quiz**: Find the correct letter
  - **Number Quiz**: Identify the right number
  - **Animal Quiz**: Match animals with sounds
- 10 questions per quiz session
- Real-time score tracking with star display
- Confetti animation for correct answers
- Performance-based encouraging messages
- Replay and return to menu options
- Randomized questions for replayability

#### 📱 PWA (Progressive Web App)

- Web App Manifest for installability
- Service Worker for offline functionality
- App icons support (192px & 512px)
- Add to home screen capability
- Full-screen standalone mode
- Caching strategy for fast loading
- Works offline after first visit

### 🎨 UI/UX Improvements

- Added Quiz Mode card to home page
- Sound toggle always visible in navbar
- Better modal interactions
- Improved grid layouts for quiz options

### 🔧 Technical Updates

- Created `audioService.js` utility for centralized audio
- Updated all page components to use audio feedback
- Added service worker registration in `main.jsx`
- Enhanced Vite config for better build output
- Added PWA meta tags to `index.html`

### 📚 Documentation

- Created `FEATURES.md` - New features guide
- Added `ICON_INSTRUCTIONS.md` - PWA icon setup guide
- Updated README with v1.1.0 highlights

### 🐛 Bug Fixes

- Improved component state management
- Better error handling for audio API

---

## [1.0.0] - 2026-02-11

### ✨ Initial Release

#### Features

- 🔤 **Belajar Huruf (A-Z)**: Interactive alphabet learning with 26 letters
  - Click to see letter details
  - Example words with emojis
  - Colorful cards with animations
- 🔢 **Belajar Angka (0-9)**: Number learning with 10 numbers
  - Click to see number details
  - Visual illustrations with emojis
  - Descriptions for better understanding
- 🐾 **Mengenal Hewan**: Learn about 12 animals
  - Animal cards with emojis
  - Sound representation (text)
  - Interesting facts about each animal

#### UI/UX

- 🎨 Child-friendly design with bright colors
- 📱 Mobile-first responsive design
- ✨ Smooth animations and transitions
- 🔘 Large touch-friendly buttons (min 48x48px)
- 🔙 Floating back button on all pages
- 🎯 Simple navigation (max 3 clicks to any page)

#### Technical

- ⚛️ Built with React 18.3.1
- ⚡ Vite 5.2.0 for fast development
- 🎨 Tailwind CSS 3.4.1 for styling
- 🔀 React Router DOM 6.22.0 for routing
- 📦 Component-based architecture
- 🎭 Custom animations with CSS

#### Components

- `Navbar` - Top navigation with logo and title
- `Card` - Reusable interactive card component
- `BackButton` - Fixed position back navigation

#### Pages

- `Home` - Landing page with category cards
- `Alphabet` - A-Z letter grid with modal details
- `Numbers` - 0-9 number grid with modal details
- `Animals` - Animal cards with detailed modal

#### Data

- 26 alphabet items with words and emojis
- 10 number items with descriptions
- 12 animal items with sounds and facts

#### Documentation

- 📚 Complete technical documentation
- 📖 User guide for parents and teachers
- 👨‍💻 Developer guide for contributors
- 🚀 Quick start README

### 🔒 Security

- No external links
- No advertisements
- No data collection
- Safe for children

---

## Future Roadmap (Coming Soon)

### v1.1.0

- [ ] Audio support for letter pronunciation
- [ ] Real animal sounds
- [ ] Background music toggle

### v1.2.0

- [ ] Interactive quiz mode
- [ ] Score tracking
- [ ] Progress badges

### v1.3.0

- [ ] Learn colors
- [ ] Learn shapes
- [ ] Learn fruits & vegetables

### v2.0.0

- [ ] Multi-language support (English, Bahasa Indonesia)
- [ ] Dark mode
- [ ] Parent dashboard
- [ ] Save progress feature
- [ ] Offline mode (PWA)

---

For more details, see [DOCUMENTATION.md](docs/DOCUMENTATION.md)
