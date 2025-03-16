
# Subhasmita's Portfolio

A modern portfolio website showcasing articles, talks, and professional information. Built with React, TypeScript, and Tailwind CSS.

## Live Demo

Visit the live website: [subhasmita.in](https://www.subhasmita.in)

## Using This Template

If you'd like to use this template for your own portfolio:

1. Fork or clone this repository
2. Install dependencies with `npm install`
3. Customize the content and branding
4. Deploy to your preferred hosting service

## Environment Variables

While this project doesn't strictly require environment variables to function, you may want to set the following for extended functionality:

```
# Hashnode API Username (for article integration)
VITE_HASHNODE_USERNAME=YourHashnodeUsername

# Google Analytics Measurement ID (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── lib/               # Utility functions and API clients
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── main.tsx           # Application entry point
```

## Key Features

- Responsive design using Tailwind CSS
- Article integration with Hashnode API
- Custom talks and portfolio sections
- shadcn/ui components for consistent UI

## Development

To run the development server:

```sh
npm run dev
```

The site will be available at http://localhost:8080

## Building for Production

To build the project for production:

```sh
npm run build
```

## Deployment

This project is set up to deploy to GitHub Pages through GitHub Actions. When you push to the main branch, the site will automatically be built and deployed.

If you want to deploy to a different platform (Netlify, Vercel, etc.), follow their specific deployment instructions.

## Customization

### Google Analytics (Optional)

To enable Google Analytics:

1. Create a Google Analytics account and property if you don't have one
2. Get your Measurement ID (starts with "G-")
3. Add your Measurement ID as `VITE_GA_MEASUREMENT_ID` in your environment variables
4. Google Analytics will automatically be initialized if the ID is provided

### Social Links

Update the social links in `src/components/SocialIcons.tsx`.

### Content

- Update the Hero component in `src/components/Hero.tsx`
- Modify the About page in `src/pages/About.tsx`
- Add your own articles or connect your Hashnode account

## License

Feel free to use this template for your personal or professional portfolio.

## Credits

- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide Icons](https://lucide.dev/)
- Date Formatting: [date-fns](https://date-fns.org/)
