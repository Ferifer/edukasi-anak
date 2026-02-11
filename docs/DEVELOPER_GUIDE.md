# 👨‍💻 Developer Guide - Belajar Anak

Panduan untuk developer yang ingin berkontribusi atau mengembangkan aplikasi ini lebih lanjut.

## 🏗️ Arsitektur Aplikasi

### Tech Stack

```
Frontend
├── React 18.3.1 (UI Library)
├── Vite 5.2.0 (Build Tool)
├── React Router DOM 6.22.0 (Routing)
└── Tailwind CSS 3.4.1 (Styling)
```

### Design Pattern

Aplikasi ini menggunakan **Component-Based Architecture** dengan prinsip:

- Single Responsibility per component
- Props untuk data passing
- React Hooks untuk state management
- Functional components (no class components)

## 📂 File Structure Detail

```
belajar-anak/
│
├── public/                    # Static assets (auto-copied)
│
├── src/
│   ├── assets/               # Media files
│   │   ├── images/          # Future: animal images
│   │   └── sounds/          # Future: audio files
│   │
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Top navigation
│   │   ├── Card.jsx         # Clickable card wrapper
│   │   └── BackButton.jsx   # Fixed back button
│   │
│   ├── data/                # Static data files
│   │   ├── alphabet.js      # A-Z data array
│   │   ├── numbers.js       # 0-9 data array
│   │   └── animals.js       # Animals data array
│   │
│   ├── pages/               # Route components
│   │   ├── Home.jsx         # Landing page
│   │   ├── Alphabet.jsx     # Letters grid
│   │   ├── Numbers.jsx      # Numbers grid
│   │   └── Animals.jsx      # Animals grid
│   │
│   ├── routes/              # Routing config
│   │   └── AppRouter.jsx    # React Router setup
│   │
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global CSS + Tailwind
│
├── docs/                     # Documentation
│   ├── DOCUMENTATION.md      # Full docs
│   ├── USER_GUIDE.md         # User manual
│   ├── DEVELOPER_GUIDE.md    # This file
│   └── README.md             # Quick start
│
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── .gitignore               # Git ignore rules
```

## 🔧 Setup Development Environment

### Prerequisites

- Node.js >= 16.x
- npm >= 8.x (atau yarn/pnpm)
- Git
- Code Editor (VS Code recommended)

### VS Code Extensions (Recommended)

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "dsznajder.es7-react-js-snippets"
  ]
}
```

### Environment Setup

1. **Clone Repository**

   ```bash
   git clone <repository-url>
   cd belajar-anak
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Dev Server**

   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to `http://localhost:5173`
   - Enable React DevTools

## 🎨 Component Development

### Creating New Component

1. **Create File**

   ```bash
   touch src/components/NewComponent.jsx
   ```

2. **Component Template**

   ```jsx
   function NewComponent({ prop1, prop2 }) {
     return <div className="...">{/* Your JSX */}</div>;
   }

   export default NewComponent;
   ```

3. **Import & Use**

   ```jsx
   import NewComponent from "./components/NewComponent";

   function Parent() {
     return <NewComponent prop1="value" />;
   }
   ```

### Component Props Guidelines

```jsx
// ✅ Good: Explicit props
function Card({ title, emoji, onClick, className }) {
  return (
    <div onClick={onClick} className={className}>
      <h3>{title}</h3>
      <span>{emoji}</span>
    </div>
  );
}

// ❌ Avoid: Props spreading (unless necessary)
function Card({ ...props }) {
  return <div {...props} />;
}
```

## 🎯 State Management

Aplikasi ini menggunakan **React Hooks** untuk state management:

### useState Example

```jsx
import { useState } from "react";

function Alphabet() {
  // State untuk modal
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handleClose = () => {
    setSelectedLetter(null);
  };

  return (
    <>
      {/* Grid */}
      {alphabetData.map((item) => (
        <Card onClick={() => handleClick(item)}>{item.letter}</Card>
      ))}

      {/* Modal */}
      {selectedLetter && (
        <Modal onClose={handleClose}>{selectedLetter.letter}</Modal>
      )}
    </>
  );
}
```

### useNavigate Example

```jsx
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>⬅️ Kembali</button>;
}
```

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

```jsx
// ✅ Good: Descriptive, grouped classes
<div className="
  flex items-center justify-center
  bg-blue-500 text-white
  p-4 rounded-lg
  hover:bg-blue-600
  transition-colors duration-200
">
  Content
</div>

// ❌ Avoid: Long single line
<div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
```

### Custom Animations

```css
/* index.css */
@keyframes bounce-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-bounce-in {
  animation: bounce-in 0.5s ease-out;
}
```

### Responsive Design

```jsx
// Mobile-first approach
<div className="
  text-2xl        /* Mobile: 24px */
  md:text-4xl     /* Tablet: 36px */
  lg:text-5xl     /* Desktop: 48px */
">
  Responsive Text
</div>

<div className="
  grid grid-cols-2      /* Mobile: 2 columns */
  md:grid-cols-3        /* Tablet: 3 columns */
  lg:grid-cols-4        /* Desktop: 4 columns */
  gap-4
">
  {/* Grid Items */}
</div>
```

## 🔀 Routing

### Adding New Route

1. **Create Page Component**

   ```jsx
   // src/pages/NewPage.jsx
   function NewPage() {
     return <div>New Page</div>;
   }
   export default NewPage;
   ```

2. **Add Route**

   ```jsx
   // src/routes/AppRouter.jsx
   import NewPage from "../pages/NewPage";

   function AppRouter() {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/new-page" element={<NewPage />} />
         </Routes>
       </Router>
     );
   }
   ```

3. **Link to Route**

   ```jsx
   import { Link } from "react-router-dom";

   <Link to="/new-page">Go to New Page</Link>;
   ```

## 📊 Data Management

### Adding New Data

1. **Create Data File**

   ```javascript
   // src/data/colors.js
   export const colorsData = [
     {
       name: "Merah",
       hex: "#FF0000",
       emoji: "🔴",
       examples: ["Apel", "Tomat"],
     },
     // ... more colors
   ];
   ```

2. **Import & Use**

   ```jsx
   import { colorsData } from "../data/colors";

   function Colors() {
     return (
       <div>
         {colorsData.map((color) => (
           <Card key={color.name}>
             {color.emoji} {color.name}
           </Card>
         ))}
       </div>
     );
   }
   ```

### Data Structure Standards

```javascript
// ✅ Good: Consistent structure
export const dataArray = [
  {
    id: 1,
    name: "Item 1",
    emoji: "🎯",
    color: "bg-blue-400",
    description: "Description text",
  },
];

// ❌ Avoid: Inconsistent properties
export const dataArray = [
  { name: "Item 1", icon: "🎯" },
  { title: "Item 2", emoji: "🎨", bg: "red" },
];
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] All routes accessible
- [ ] Cards clickable
- [ ] Modals open/close correctly
- [ ] Back button works
- [ ] Responsive on mobile, tablet, desktop
- [ ] Animations smooth
- [ ] No console errors

### Testing on Devices

```bash
# Get local network IP
npm run dev -- --host

# Access from other devices
http://192.168.x.x:5173
```

## 🚀 Build & Deploy

### Production Build

```bash
# Create optimized build
npm run build

# Output: dist/ folder
```

### Preview Production

```bash
# Test production build locally
npm run preview
```

### Deploy Options

**1. Vercel (Recommended)**

```bash
npm install -g vercel
vercel
```

**2. Netlify**

```bash
npm install -g netlify-cli
netlify deploy
```

**3. GitHub Pages**

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

### Environment Variables

```bash
# .env.local (optional)
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Belajar Anak
```

Access in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🐛 Debugging

### React DevTools

1. Install React DevTools extension
2. Open DevTools (F12)
3. Navigate to "Components" tab
4. Inspect component tree and props

### Console Logging

```javascript
// ✅ Good: Descriptive logs
console.log("Selected letter:", selectedLetter);
console.log("Current state:", { letters, numbers, animals });

// ❌ Avoid: Generic logs
console.log("test");
console.log(data);
```

### Common Issues

**Issue: Tailwind classes not working**

```bash
# Solution: Restart dev server
# Ctrl+C to stop, then:
npm run dev
```

**Issue: Route not found**

```javascript
// Check: Exact path in AppRouter.jsx
<Route path="/alphabet" element={<Alphabet />} />

// Not: path="alphabet" (no slash)
```

**Issue: State not updating**

```javascript
// ✅ Correct: New object/array
setData([...data, newItem]);

// ❌ Wrong: Mutate existing
data.push(newItem); // Don't do this!
```

## 📝 Code Style

### Naming Conventions

```javascript
// Components: PascalCase
function AlphabetCard() {}

// Functions: camelCase
function handleClick() {}

// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 10;

// Files: PascalCase for components, camelCase for utils
Card.jsx;
utils.js;
```

### Comments

```javascript
// ✅ Good: Explain "why", not "what"
// Show modal when letter is selected
if (selectedLetter) {
  showModal()
}

// ❌ Avoid: Obvious comments
// Check if letter is selected
if (selectedLetter) {
```

## 🔐 Best Practices

1. **Component Size**: Keep under 200 lines
2. **Props**: Max 5-6 props per component
3. **Nesting**: Max 3-4 levels deep
4. **Files**: One component per file
5. **Imports**: Group by type (React, libraries, local)

```javascript
// ✅ Good import order
import { useState } from "react"; // React
import { Link } from "react-router-dom"; // Libraries
import Card from "./components/Card"; // Local
import { alphabetData } from "./data/alphabet"; // Data
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Make changes
4. Test thoroughly
5. Commit (`git commit -m 'Add NewFeature'`)
6. Push (`git push origin feature/NewFeature`)
7. Create Pull Request

### PR Guidelines

- Clear title dan description
- Screenshot untuk UI changes
- Test di berbagai devices
- No console errors

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Docs](https://reactrouter.com)

---

**Happy Coding! 🚀**

Questions? Open an issue on GitHub!
