# NextJS IT Website

A modern, responsive IT company website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and MongoDB.

## Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 🌗 **Dark Mode** - Automatic dark/light theme support
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🎨 **Easy Theme Controls** - Customizable color scheme through CSS variables
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🗄️ **MongoDB Integration** - Database support with fallback to demo data
- ⚡ **Next.js 15** - Latest features with App Router
- 🔷 **TypeScript** - Type-safe development experience

## Pages

- **Home (/)** - Landing page with hero section, features, and call-to-action
- **Projects (/projects)** - Portfolio showcasing completed projects
- **About (/about)** - Company information, mission, values, and team
- **Builder (/builder)** - Interactive project management dashboard with tabs, cards, and tables

## Components

- **Header.tsx** - Responsive navigation with mobile menu
- **Footer.tsx** - Site footer with links and social media
- **ProjectCard.tsx** - Reusable card component for projects
- **FeatureCard.tsx** - Card component for features and services

## API Endpoints

- **GET /api/projects** - Fetch all projects (returns demo data if MongoDB not configured)
- **POST /api/projects** - Create a new project (requires MongoDB)

## Easy Theme Color Controls

Customize the theme by editing CSS variables in `app/globals.css`:

```css
:root {
  --primary: #3b82f6;        /* Main brand color */
  --secondary: #8b5cf6;      /* Secondary brand color */
  --accent: #10b981;         /* Accent color */
  --background: #ffffff;     /* Background color */
  /* ... more colors */
}
```

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Database:** MongoDB
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB instance (optional - app works with demo data)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nafis-Iqbal/NextJS-IT-website.git
cd NextJS-IT-website
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure MongoDB:
   - Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   - Add your MongoDB connection string to `.env.local`:
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── projects/
│   │       └── route.ts        # Projects API endpoint
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── builder/
│   │   └── page.tsx           # Builder dashboard page
│   ├── projects/
│   │   └── page.tsx           # Projects page
│   ├── globals.css            # Global styles with theme controls
│   ├── layout.tsx             # Root layout with Header/Footer
│   └── page.tsx               # Home page
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   ├── ProjectCard.tsx        # Project card component
│   └── FeatureCard.tsx        # Feature card component
├── lib/
│   └── mongodb.ts             # MongoDB connection helper
├── public/                     # Static assets
├── .env.example               # Environment variables template
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── next.config.ts             # Next.js configuration
```

## Environment Variables

The application uses the following environment variables:

- `MONGODB_URI` - MongoDB connection string (optional)

**Note:** The application will work without MongoDB by serving demo data. Configure MongoDB to enable data persistence.

## Customization

### Adding New Projects

If MongoDB is configured, you can add projects via the API:

```javascript
fetch('/api/projects', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    link: 'https://project-url.com'
  })
});
```

### Modifying Theme Colors

Edit the CSS variables in `app/globals.css` to match your brand:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  /* ... */
}
```

### Adding New Pages

Create a new folder in the `app/` directory with a `page.tsx` file:

```bash
mkdir app/new-page
touch app/new-page/page.tsx
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
