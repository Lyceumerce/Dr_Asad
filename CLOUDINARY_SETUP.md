# Cloudinary Setup & Deployment Guide

## Step 1: Set Up Cloudinary Account

1. **Create Account** (if you don't have one)
   - Go to https://cloudinary.com/
   - Sign up for free (includes 25GB storage & 25GB bandwidth/month)

2. **Get Your Credentials**
   - Login to https://console.cloudinary.com/
   - Find your **Cloud Name** on the dashboard
   - Copy it for later use

## Step 2: Upload Background Images to Cloudinary

### Option A: Using Cloudinary Dashboard (Easiest)

1. **Login to Cloudinary Console**
   - Go to https://console.cloudinary.com/

2. **Upload Images:**
   - Click "Media Library" in left sidebar
   - Click "Upload" button
   - Upload these files from `public/background/`:
     - `home-background.png`
     - `about-background.png`
     - `projects-background.png`
     - `contact-background.png`

3. **Create a folder structure:**
   - Create folder: `portfolio/backgrounds/`
   - Upload all background images there

4. **Note the URLs:**
   After uploading, your images will have URLs like:
   ```
   https://res.cloudinary.com/{your-cloud-name}/image/upload/v1234567890/portfolio/backgrounds/home-background.png
   ```

### Option B: Using Cloudinary Upload Widget (Alternative)

You can also use their web interface to drag and drop images directly.

## Step 3: Configure Environment Variables

1. **Create `.env.local` file** in your project root:
   ```bash
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   ```

2. **Replace `your_cloud_name_here`** with your actual Cloudinary cloud name

## Step 4: Update Image Paths (Already Configured!)

The Next.js config is already set up to support Cloudinary. Just update your image URLs to use Cloudinary.

Example format:
```javascript
const cloudinaryUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`;
```

## Alternative: Keep Local Images for Now

If you want to deploy quickly without Cloudinary setup, you can:
1. Keep the local images (they're already optimized by Next.js)
2. Deploy to Vercel as-is
3. Add Cloudinary later for additional optimization

Next.js already has built-in image optimization that works great with Vercel!

---

# Vercel Deployment Guide

## Prerequisites
- GitHub account
- Your code pushed to GitHub repository

## Step 1: Prepare for Deployment

1. **Ensure `.gitignore` includes:**
   ```
   .env.local
   .env*.local
   .next
   node_modules
   ```

2. **Check if you have a git repository:**
   ```bash
   git status
   ```

3. **If not initialized, initialize git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dr. Memon's AI Galaxy Portfolio"
   ```

## Step 2: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name: `dr-memon-portfolio` (or your choice)
   - Keep it Public or Private
   - Don't initialize with README (you already have files)

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dr-memon-portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com/
   - Click "Sign Up" or "Login" (use GitHub for easiest setup)

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables (if using Cloudinary):**
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` with your cloud name
   - Click "Deploy"

4. **Wait for Deployment:**
   - Vercel will build and deploy (takes 2-3 minutes)
   - You'll get a URL like: `https://dr-memon-portfolio.vercel.app`

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

## Step 4: Configure Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., `mlmemon.com`)

2. **Update DNS:**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel nameservers

## Performance Optimizations Already Applied

✅ Next.js Image Optimization
✅ Static Generation for fast loading
✅ Optimized bundle size
✅ Lazy loading for 3D models
✅ Code splitting
✅ Galaxy theme with optimized star particles

## Post-Deployment Checklist

- [ ] Test all pages (Home, About, Projects, Contact)
- [ ] Verify 3D models load correctly
- [ ] Check all links work (GitHub, LinkedIn, Scholar)
- [ ] Test on mobile devices
- [ ] Verify star particle effects work
- [ ] Check page load speed with Lighthouse

## Troubleshooting

### Build Errors:
- Check the build logs in Vercel dashboard
- Run `npm run build` locally to test first
- Ensure all dependencies are in `package.json`

### Environment Variables:
- Make sure Cloudinary env var starts with `NEXT_PUBLIC_`
- Redeploy after adding env vars

### 3D Models Not Loading:
- Ensure GLB files are in `public/models/`
- Check file paths are correct
- Verify files aren't too large (keep under 5MB each)

## Quick Deploy Command

```bash
# Build locally to test
npm run build

# If successful, commit and push
git add .
git commit -m "Ready for deployment"
git push

# Vercel will auto-deploy on push (if connected)
```

Your site will be live at your Vercel URL! 🚀
