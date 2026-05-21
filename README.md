# 🏠 Lunora Spaces - Modern Interior Design Website

A beautiful, modern, and fully responsive interior design startup website built with pure HTML, CSS, and JavaScript. No frameworks, no backend - just clean, beginner-friendly code!

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Color Scheme](#color-scheme)
- [Browser Support](#browser-support)

## ✨ Features

### Design Features
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Hero Sections** - Stunning image backgrounds with overlay
- ✅ **Design Cards** - Interactive cards with hover animations
- ✅ **Image Gallery** - Responsive grid gallery with overlay effects
- ✅ **Testimonials** - Client reviews section with star ratings
- ✅ **Designer Profiles** - Team member showcase with social links
- ✅ **Modern Navigation** - Sticky navbar with mobile menu toggle
- ✅ **Smooth Scrolling** - Elegant scroll reveal animations
- ✅ **Footer** - Comprehensive footer with links and social media

### Functionality
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Tab Switching** - User/Admin login tabs
- ✅ **Form Validation** - Real-time form validation with error messages
- ✅ **Login Forms** - Separate user and admin login interfaces
- ✅ **Contact Form** - Functional contact form with validation
- ✅ **Scroll Animations** - Elements reveal on scroll
- ✅ **Smooth Transitions** - CSS animations and transitions throughout

## 📂 Project Structure

```
Lunora_Spaces/
├── index.html          # Home page
├── explore.html        # Explore Interiors page
├── gallery.html        # Gallery page
├── designers.html      # Designers page
├── about.html          # About page
├── contact.html        # Contact page
├── login.html          # Login page
├── css/
│   └── style.css       # Main stylesheet (1000+ lines)
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Local image storage (using Unsplash URLs)
└── README.md           # This file
```

## 📄 Pages

### 1. **Home Page** (index.html)
- Hero section with call-to-action
- Featured designs showcase
- Why Choose Lunora section
- Client testimonials
- Newsletter/CTA section

### 2. **Explore Interiors** (explore.html)
- Multiple room categories:
  - Living Rooms
  - Bedrooms
  - Kitchens
  - Bathrooms
- Design cards with descriptions
- Inquiry buttons for each project

### 3. **Gallery** (gallery.html)
- Full-width responsive image gallery
- 18+ beautiful interior design images
- Hover overlay effects
- Statistics section (projects, clients, years)

### 4. **Designers** (designers.html)
- 6 professional designer profiles
- Designer expertise areas
- Social media links
- Team specializations showcase

### 5. **About** (about.html)
- Company story and mission
- Core values
- Timeline of achievements
- Awards and recognition
- Industry certifications

### 6. **Contact** (contact.html)
- Contact form with validation
- Contact information section
- Map placeholder
- Services overview
- FAQ section

### 7. **Login** (login.html)
- User login tab
- Admin login tab
- Member benefits showcase
- Security information

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - CSS Grid
  - Flexbox
  - CSS Variables
  - Media Queries
  - Animations & Transitions
- **JavaScript** - Pure vanilla JavaScript for:
  - Form validation
  - Mobile menu toggle
  - Tab switching
  - Scroll animations
  - Smooth scrolling

## 🚀 Getting Started

1. **Extract or clone the project** to your desired location
2. **Open any HTML file** in your web browser:
   - Double-click `index.html` to start
   - Or use a local server (recommended for better performance)

### Using a Local Server (Optional)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
http-server
```

Then navigate to `http://localhost:8000` in your browser.

## 🎨 Customization Guide

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
  --primary-color: #d4af94;      /* Gold/beige */
  --secondary-color: #3d3d3d;    /* Dark gray */
  --accent-color: #f5f5f5;       /* Light gray */
  --text-dark: #2a2a2a;          /* Dark text */
  --text-light: #666666;         /* Light text */
}
```

### Images
Replace Unsplash URLs with your own images:
```html
<!-- Find this pattern in HTML files -->
style="background-image: url('https://images.unsplash.com/...')"

<!-- Replace with your image -->
style="background-image: url('path/to/your/image.jpg')"
```

### Logo
Modify the logo in the navigation:
```html
<div class="logo-icon">🏠</div>  <!-- Change emoji or use custom icon -->
<span>LUNORA</span>               <!-- Change company name -->
```

### Content
- Edit text in HTML files directly
- Update company information in footer on all pages
- Modify testimonials and designer profiles
- Customize contact information on contact.html

## 🎯 Color Scheme

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Primary (Gold) | #d4af94 | Buttons, accents, highlights |
| Secondary (Dark Gray) | #3d3d3d | Text, dark accents |
| Accent (Light Gray) | #f5f5f5 | Backgrounds, contrast |
| Dark Text | #2a2a2a | Main text content |
| Light Text | #666666 | Secondary text |

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ✅ Features Breakdown

### Navbar
- Sticky positioning
- Mobile hamburger menu with animation
- Smooth link transitions
- Active page indicator
- Login button

### Hero Section
- Full-height background image
- Dark overlay for text contrast
- Fade-in animation on load
- Clear call-to-action button

### Cards & Grid
- CSS Grid layout (auto-fit, minmax)
- Hover lift animation (translateY)
- Box shadow effects
- Image zoom on hover

### Forms
- Real-time validation as user types
- Email validation regex
- Password length checking
- Phone number validation
- Error message display
- Success message feedback

### Animations
- Fade in on scroll
- Slide in from left
- Scale on hover
- Color transitions
- Smooth scroll behavior

## 🔐 Security Notes

**Important:** This is a frontend-only project. For production:
1. Add backend validation on server side
2. Implement proper authentication
3. Use HTTPS for form submissions
4. Add CSRF protection
5. Never trust client-side validation alone

## 🌐 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📝 Beginner Tips

1. **Edit CSS Variables First** - All colors change from `:root`
2. **Use DevTools** - Press F12 to inspect and debug
3. **Test Responsiveness** - Use Chrome DevTools mobile view
4. **Validate HTML** - Use W3C HTML Validator
5. **Check Accessibility** - Test with keyboard navigation

## 🎓 Learning Resources

Concepts covered in this project:
- HTML semantic elements
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- Responsive design with media queries
- Form validation with JavaScript
- DOM manipulation
- Event listeners
- Regular expressions for validation

## 📦 File Sizes

- CSS: ~40KB (minified: ~30KB)
- JavaScript: ~8KB (minified: ~5KB)
- HTML files: ~15-25KB each
- **Total: Lightweight and fast loading**

## 🤝 Best Practices Implemented

- ✅ Semantic HTML structure
- ✅ BEM-like CSS naming
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations
- ✅ DRY (Don't Repeat Yourself) principle
- ✅ Clean code organization
- ✅ Comments for clarity
- ✅ Smooth user experience

## 📸 Image Sources

All images are from **Unsplash** (free, high-quality):
- Living room designs
- Bedroom interiors
- Kitchen spaces
- Bathroom designs
- Dining areas
- Office spaces
- Designer portraits

## 🔧 Troubleshooting

**Images not showing?**
- Check internet connection (Unsplash requires internet)
- Replace URLs with local image paths if needed

**Forms not working?**
- Check browser console for JavaScript errors
- Ensure all form input IDs match JavaScript selectors

**Responsive design issues?**
- Clear browser cache (Ctrl+Shift+Delete)
- Test in different browsers
- Check media query widths in CSS

**Animations not smooth?**
- Check browser hardware acceleration settings
- Ensure CSS is not overridden elsewhere

## 💡 Future Enhancement Ideas

- Add dark mode toggle
- Implement image lightbox modal
- Add service comparison chart
- Create interactive room planner
- Add testimonial carousel
- Implement newsletter signup
- Add blog section
- Create portfolio/case studies page

## 📄 License

This project is free to use and modify for educational and personal purposes.

## 🙏 Credits

- **Design Inspiration**: Modern luxury interior design trends
- **Images**: Unsplash.com
- **Fonts**: System fonts (Segoe UI, Tahoma, Geneva, Verdana)
- **Icons**: Unicode characters and emojis

---

**Created with ❤️ for aspiring frontend developers**

Happy designing! 🎨✨
