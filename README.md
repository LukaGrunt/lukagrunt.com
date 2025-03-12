# lukagrunt.com Website

Personal website built with React + Vite, deployed on GitHub Pages.

## Development Guide

### Initial Setup
1. Open the project in Cursor
2. Make sure you're in the project directory:
   ```bash
   cd /Users/lukaravnikar/Desktop/lukagrunt.com
   ```

### Before Making Changes
1. Pull the latest changes:
   ```bash
   git pull origin main
   ```
2. Install any new dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   This will open the site locally at http://localhost:3000

### Making and Testing Changes
1. Make your changes in Cursor
2. Test them locally in your browser
3. Ask Claude for help if needed!

### Deploying Changes
After testing your changes locally:
```bash
npm run build
git add .
git commit -m "Description of your changes"
git push origin main
```

The site will automatically deploy through GitHub Actions after pushing your changes.

### Important Notes
- The site uses an Imgur-hosted background image
- Base URL is configured for the custom domain
- All deployments are handled automatically by GitHub Actions 