# Summit Construction Website

A professional, responsive construction company website showcasing North Head Digital's web development capabilities.

![Construction Website](https://img.shields.io/badge/Status-Production%20Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Overview

This is a fully functional, modern construction business website built to demonstrate North Head Digital's expertise in creating professional, industry-specific web solutions. While designed for a fictional construction company (Summit Construction), it showcases real-world features and functionality that construction businesses need.

## Features

### Core Pages
- **Homepage** - Hero section, company features, services overview, statistics, and call-to-action
- **Services** - Detailed service offerings with visual elements and process workflow
- **Projects** - Filterable portfolio gallery with modal project details
- **About** - Company story, mission & values, team members, and certifications
- **Contact** - Contact form, business information, FAQ accordion, and map placeholder

### Key Functionality
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Interactive navigation with mobile menu
- ✅ Animated statistics counter
- ✅ Project filtering system
- ✅ Modal popups for project details
- ✅ FAQ accordion
- ✅ Contact form with validation
- ✅ Smooth scroll animations
- ✅ Sticky navigation
- ✅ Modern gradient designs
- ✅ Font Awesome icons integration

## Technology Stack

- **HTML5** - Semantic markup for better SEO and accessibility
- **CSS3** - Modern styling with CSS Grid, Flexbox, animations, and custom properties
- **Vanilla JavaScript** - No dependencies, lightweight and performant
- **Font Awesome 6.4.0** - Professional icon library

## Project Structure

```
Generic-construction-website-Alpha/
├── index.html              # Homepage
├── services.html           # Services page
├── projects.html           # Projects portfolio page
├── about.html              # About us page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # All styling (responsive, animations, components)
├── js/
│   └── script.js           # Interactive functionality
├── images/                 # Image assets folder
├── LICENSE                 # MIT License
└── README.md              # Project documentation
```

## Installation & Setup

### Option 1: Direct Browser Access
1. Clone the repository:
   ```bash
   git clone https://github.com/North-Head-Digital/Generic-construction-website-Alpha.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Generic-construction-website-Alpha
   ```

3. Open `index.html` in your web browser

### Option 2: Local Development Server
1. Using Python:
   ```bash
   python -m http.server 8000
   ```

2. Using Node.js (with http-server):
   ```bash
   npx http-server
   ```

3. Using PHP:
   ```bash
   php -S localhost:8000
   ```

4. Open browser to `http://localhost:8000`

## Usage Guide

### Customization

#### Branding & Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #FF6B35;      /* Primary brand color */
    --secondary-color: #004E89;    /* Secondary brand color */
    --dark-color: #1A1A2E;         /* Dark text/backgrounds */
    --light-color: #F4F4F4;        /* Light backgrounds */
}
```

#### Company Information
Update the following in all HTML files:
- Company name: "Summit Construction"
- Contact details in footer
- Social media links
- Business hours
- Address information

#### Adding Project Images
1. Add images to the `images/` folder
2. Update the placeholder divs in `projects.html`
3. Update the `projectData` array in `js/script.js` with real image paths

#### Contact Form Integration
The contact form currently uses client-side validation. To connect to a backend:

1. Update the form submission handler in `js/script.js`
2. Add your API endpoint or email service (e.g., FormSpree, EmailJS, SendGrid)
3. Example with fetch API:
   ```javascript
   fetch('your-api-endpoint', {
       method: 'POST',
       body: JSON.stringify(data),
       headers: { 'Content-Type': 'application/json' }
   })
   ```

## Features Breakdown

### Navigation
- Responsive design with mobile hamburger menu
- Sticky header that stays visible on scroll
- Active page highlighting
- Smooth scroll to anchor links

### Homepage
- Eye-catching hero section with gradient background
- Feature cards highlighting company strengths
- Services overview with icon placeholders
- Animated statistics counter
- Call-to-action sections

### Services Page
- Detailed service descriptions
- Visual icon representations
- Service features lists
- 6-step process workflow
- Alternating layout design

### Projects Gallery
- Filter projects by category (Commercial, Residential, Industrial, Renovation)
- Smooth filtering animations
- Modal popup with detailed project information
- Responsive grid layout

### About Page
- Company story section
- Mission and vision statements
- Core values showcase
- Team member profiles
- Why choose us section
- Certifications display

### Contact Page
- Validated contact form
- Multiple contact methods display
- FAQ accordion
- Map placeholder section
- Social media links

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies (except Font Awesome CDN)
- Lightweight codebase
- Optimized CSS with minimal redundancy
- Vanilla JavaScript for maximum performance
- Fast loading times

## SEO Features

- Semantic HTML5 markup
- Meta descriptions on all pages
- Proper heading hierarchy
- Alt text ready for images
- Clean URL structure
- Mobile-friendly (Google's mobile-first indexing)

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus states for interactive elements
- Screen reader friendly structure

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select branch and save
5. Site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect repository to Netlify
2. Set build settings (none needed for static site)
3. Deploy
4. Site will be live with custom domain option

### Traditional Web Hosting
1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Check file permissions
4. Access via your domain

## Future Enhancements

Potential features to add:
- [ ] Blog section for company news and construction tips
- [ ] Live chat integration
- [ ] Testimonials/Reviews section with carousel
- [ ] Video backgrounds or project videos
- [ ] Interactive timeline for company history
- [ ] Real-time project status tracking
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Integration with CMS (WordPress, Contentful, etc.)
- [ ] Real map integration (Google Maps API)

## Credits

**Developed by:** [North Head Digital](https://northheaddigital.com)

**Design & Development:** Custom-built to showcase construction industry best practices

**Icons:** [Font Awesome](https://fontawesome.com)

**Fonts:** System fonts for optimal performance

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions or support regarding this website template:

- **Website:** https://northheaddigital.com
- **Email:** info@northheaddigital.com

## Showcase

This website demonstrates North Head Digital's ability to create:
- Industry-specific web solutions
- Modern, responsive designs
- User-friendly interfaces
- Professional business websites
- SEO-optimized code
- Accessible web applications

---

**Built with ❤️ by North Head Digital** | Showcasing professional web development capabilities
