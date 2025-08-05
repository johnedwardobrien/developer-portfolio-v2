# Static Website Framework

A modern, responsive static website framework with a clean structure and organized asset management.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast loading with optimized assets
- 🔧 Modular JavaScript with ES6 modules
- 📁 Organized file structure
- 🎯 SEO-friendly HTML structure
- 🎭 Smooth animations and transitions

## Project Structure

```
developer-portfolio-v2/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript file
│   └── modules/
│       ├── navigation.js   # Navigation functionality
│       └── animations.js   # Animation and scroll effects
├── public/                 # Public assets directory
│   ├── images/            # Image files
│   ├── fonts/             # Custom fonts
│   ├── icons/             # Icon files
│   └── README.md          # Assets documentation
└── README.md              # This file
```

## Getting Started

1. **Clone or download** this framework
2. **Open `index.html`** in your web browser
3. **Customize** the content, styles, and functionality
4. **Add your assets** to the `public/` directory
5. **Deploy** to your web server

## Customization

### HTML Structure
- Modify `index.html` to add your content
- Update meta tags for SEO
- Add new sections as needed

### Styling
- Edit `css/styles.css` to customize the design
- Add new CSS files and link them in HTML
- Use CSS custom properties for easy theming

### JavaScript
- Add new modules in `js/modules/`
- Import them in `js/main.js`
- Use ES6 module syntax throughout

### Assets
- Place images in `public/images/`
- Add custom fonts to `public/fonts/`
- Store icons in `public/icons/`
- Reference assets using relative paths from root

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## Development

### Local Development
Simply open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

### Deployment
Upload all files to your web server. The framework is designed to work with any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any traditional web hosting

## Best Practices

1. **Performance**
   - Optimize images before adding to `public/images/`
   - Use WebP format when possible
   - Minimize CSS and JavaScript for production

2. **SEO**
   - Update meta tags in `index.html`
   - Use semantic HTML elements
   - Add structured data if needed

3. **Accessibility**
   - Use proper heading hierarchy
   - Add alt text to images
   - Ensure keyboard navigation works

4. **Maintenance**
   - Keep dependencies minimal
   - Use consistent naming conventions
   - Document custom functionality

## License

This framework is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests! 