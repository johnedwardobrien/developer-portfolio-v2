# Public Assets Directory

This directory is for all public assets that should be served directly by your web server.

## Structure

- `images/` - For all image files (PNG, JPG, SVG, etc.)
- `fonts/` - For custom font files
- `icons/` - For icon files and favicons
- `videos/` - For video files
- `documents/` - For PDFs and other documents
- `favicon.ico` - Website favicon

## Usage

Place your assets in the appropriate subdirectory and reference them in your HTML like this:

```html
<!-- Images -->
<img src="public/images/logo.png" alt="Logo">

<!-- CSS background images -->
background-image: url('public/images/hero-bg.jpg');

<!-- JavaScript -->
const imagePath = 'public/images/example.jpg';
```

## Best Practices

1. Use descriptive filenames
2. Optimize images for web (compress PNG/JPG files)
3. Use appropriate formats (SVG for icons, WebP for photos when possible)
4. Keep file sizes reasonable for fast loading
5. Use relative paths from the root directory 