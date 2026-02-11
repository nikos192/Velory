# Nikosta Systems - Website

Modern, elegant, premium single-page website for Nikosta Systems - a local website-creation business on the Gold Coast, Australia.

## About

Nikosta Systems builds professional websites for local service businesses. We build the website for free first, you review it, and only pay if you want to keep it. No risk, no contracts, no pressure.

## Technology Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Modern build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section with CTAs
│   ├── HowItWorks.jsx   # 3-step process explanation
│   ├── WhoItFor.jsx     # Target business types
│   ├── Examples.jsx     # Example websites
│   ├── Why.jsx          # Why choose Nikosta Systems
│   ├── Contact.jsx      # Contact form and info
│   └── Footer.jsx       # Footer with links
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## Customization

The site is built to be easy for non-technical users to update:

### Updating Text Content
Edit the text directly in the React components. All sections have clear, readable content.

### Changing Contact Information
Update the phone number, address, and contact details in:
- `src/components/Header.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### Updating Images
Replace the image URLs in:
- `src/components/Hero.jsx` - Main hero image
- `src/components/Examples.jsx` - Example website images

### Adjusting Colors
The site uses a black/white/neutral palette through Tailwind:
- Black text and accents: `text-black`, `bg-black`
- Gray backgrounds: `bg-gray-50`, `bg-gray-100`
- Update in `tailwind.config.js` if needed

## Responsive Design

The website is fully mobile-responsive with:
- Mobile-first approach
- Tested on all device sizes
- Touch-friendly buttons and forms
- Optimized typography for all screens

## Performance

- Fast page loads with Vite
- Optimized images
- Minimal dependencies
- Clean, scalable code

## Deployment

The built site is production-ready. Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Traditional web server

## License

© 2026 Nikosta Systems. All rights reserved.

## Support

For questions about updating or customizing the site, contact us directly.

---

Built with care for local Gold Coast businesses.
