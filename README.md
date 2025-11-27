# Teri Mummy App - Vanilla HTML/CSS/JS

A stunning animated text display website built with pure HTML, CSS, and JavaScript. No frameworks, no build process - just open and enjoy!

## 🚀 Quick Start

Simply open `index.html` in your browser. That's it!

```bash
# Option 1: Double-click index.html

# Option 2: Use a local server (recommended)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use VS Code Live Server extension
```

## ✨ Features

- **Massive Animated Text**: Cycles through words with smooth slide-in animations
- **Neon Gradient Effects**: Pink → Purple → Cyan gradients with glow
- **100 Floating Particles**: Color-varied particles (white, pink, cyan)
- **Animated Gradient Blobs**: Three large blobs creating depth
- **Glass-morphism Header**: Premium frosted glass effect
- **Noise Texture Overlay**: Subtle grain for premium feel
- **Pause on Hover**: Hover over text to pause the animation
- **Fully Responsive**: Works on all screen sizes
- **Zero Dependencies**: Pure vanilla JavaScript

## 📁 Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `app.js` - Word cycling logic and particle generation

## 🎨 Customization

### Change Words
Edit the `words` array in `app.js`:
```javascript
const words = [
    "your text here",
    "another phrase",
    // add more...
];
```

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --neon-pink: #ff00ff;
    --neon-cyan: #00ffff;
    --neon-purple: #8b5cf6;
}
```

### Change Animation Speed
Edit the interval in `app.js`:
```javascript
intervalId = setInterval(updateText, 2500); // 2500ms = 2.5 seconds
```

## 🎯 Performance

- **60 FPS animations** using CSS transforms
- **Hardware accelerated** with GPU rendering
- **Optimized particles** with efficient DOM manipulation
- **Lightweight**: ~10KB total (uncompressed)

## 📱 Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📄 License

MIT
