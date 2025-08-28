# Replit Project Documentation

## Overview

This is a static landing page for a Japanese real estate company called "Sakutto Chintai" (サクッと賃貸) that specializes in rental property services in Nagoya with a focus on zero commission fees. The site is built with pure HTML, CSS, and JavaScript and served via Express.js for development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Static Site Architecture
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript  
- **Backend**: Express.js server for development (server.js)
- **Styling**: Custom CSS with CSS variables for theming and responsive design
- **Interactivity**: Vanilla JavaScript for FAQ toggles, smooth scrolling, and form handling
- **Images**: Optimized PNG files stored in `images/` directory
- **Fonts**: Google Fonts (Noto Sans JP) for proper Japanese typography
- **Responsive**: Mobile-first design approach with media queries

## Key Components

### Static Site Structure
- **index.html**: Main landing page with semantic HTML structure
- **styles.css**: Complete responsive styling with CSS custom properties
- **script.js**: Interactive functionality including FAQ toggles and tracking
- **images/**: Image assets (woman illustration, comparison charts, truth diagram)
- **README.md**: Comprehensive setup and customization documentation
- **upload-guide.txt**: Quick reference for server deployment

### Page Sections
- **Hero Section**: Company branding, main value proposition, and primary CTA
- **Merit Badges**: Three key selling points with numbered design
- **Problem Solution**: Industry truth explanation with comparison charts
- **FAQ Section**: Expandable questions and answers
- **Final CTA**: Secondary conversion opportunity
- **Footer**: Business hours and company information

## User Interaction Flow

1. **Page Load**: Static HTML loads with CSS and JavaScript
2. **Interactive Elements**: FAQ toggles, smooth scrolling, and button animations
3. **LINE Integration**: CTA buttons link to LINE official account (requires setup)
4. **Responsive Design**: Automatic adaptation to different screen sizes
5. **SEO Optimization**: Meta tags and structured content for search engines

## External Dependencies

### Minimal Dependencies
- **Google Fonts**: Noto Sans JP for Japanese typography
- **No JavaScript Frameworks**: Pure vanilla JavaScript for maximum compatibility
- **No Build Process**: Direct HTML/CSS/JS files for easy hosting
- **LINE Platform**: Integration point for customer communication (setup required)

### Browser Compatibility
- Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- iOS Safari 12+, Android Chrome 60+
- Graceful degradation for older browsers

## Deployment Strategy

### Hosting Requirements
- **Any Web Server**: Apache, Nginx, shared hosting (X-Server, etc.)
- **No Server-Side Processing**: Pure static file serving
- **HTTPS Recommended**: For security and SEO benefits
- **Domain Pointing**: Standard DNS configuration to hosting provider

### Deployment Process
1. **File Upload**: Copy all files to web server document root
2. **LINE Configuration**: Update script.js with actual LINE official account URL
3. **Testing**: Verify all functionality works on live server
4. **Analytics Setup**: Optional Google Analytics or tracking implementation

### File Structure for Hosting
```
public_html/
├── index.html
├── styles.css
├── script.js
├── README.md
├── upload-guide.txt
└── images/
    ├── woman-illustration.png
    ├── real-estate-truth.png
    └── sakutto-comparison.png
```

### Customization Options
- **Colors**: Modify CSS custom properties in styles.css
- **Content**: Edit text directly in index.html
- **Images**: Replace files in images/ directory
- **LINE Integration**: Configure handleLineClick() function in script.js

The architecture prioritizes simplicity, performance, and ease of deployment on standard web hosting services while maintaining professional design and functionality.