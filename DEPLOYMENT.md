# Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git repository set up
- Domain name (optional)

## Build for Production

```bash
# Install dependencies
npm install

# Create production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` directory.

## Deployment Options

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

Or use the Vercel Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel will auto-detect Vite and deploy

### 2. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

Or use Netlify Dashboard:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist/` folder
3. Or connect your Git repository

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio/', // Your repo name
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Upload `dist/` to S3 bucket
3. Configure bucket for static website hosting
4. Set up CloudFront distribution
5. Configure custom domain (optional)

### 5. Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Environment Variables

Create `.env.production`:
```env
VITE_API_URL=https://api.yoursite.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Performance Optimization

### Before Deployment
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Check bundle size
- [ ] Verify all assets load correctly
- [ ] Test on multiple devices/browsers

### After Deployment
- [ ] Set up CDN for assets
- [ ] Enable gzip/brotli compression
- [ ] Configure caching headers
- [ ] Set up SSL certificate
- [ ] Add to Google Search Console
- [ ] Configure analytics

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Monitoring

### Set up monitoring for:
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring (Lighthouse CI)

## Security

- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Configure CORS if needed
- [ ] Add Content Security Policy
- [ ] Regular dependency updates

## Post-Deployment Checklist

- [ ] Test all links
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test page load speed
- [ ] Verify SEO meta tags
- [ ] Test social media sharing
- [ ] Check browser compatibility
- [ ] Monitor error logs

## Troubleshooting

### Build fails
- Clear node_modules and reinstall
- Check Node.js version
- Review error logs

### Assets not loading
- Check base URL in vite.config.ts
- Verify asset paths are correct
- Check CORS settings

### Form not working
- Verify API endpoints
- Check environment variables
- Review browser console for errors
