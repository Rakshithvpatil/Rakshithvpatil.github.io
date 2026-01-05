# 🚀 Professional Portfolio Website

A modern, responsive portfolio website showcasing your Data Science and Machine Learning projects, skills, and professional experience.

## ✨ Features

- 🎨 Modern, professional design with dark theme
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading and optimized performance
- 🎭 Smooth animations and transitions
- 📊 Project showcase with GitHub integration
- 💼 Professional experience timeline
- 🛠️ Skills and expertise display
- 📧 Contact section with social links
- 🔍 SEO optimized

## 🌐 Live Demo

Your website will be live at: `https://yourusername.github.io`

## 📋 Prerequisites

- GitHub account
- Git installed on your computer (optional, but recommended)
- Your resume PDF
- Profile photo

## 🚀 Quick Start

### Option 1: Direct Upload to GitHub (Easiest)

1. **Create Repository**
   - Go to https://github.com
   - Click "New Repository"
   - Name it: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Make it Public
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all files:
     - `index.html`
     - `style.css`
     - `script.js`
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

4. **Wait 2-3 Minutes**
   - Your site will be live at `https://yourusername.github.io`

### Option 2: Using Git (Recommended)

```bash
# Clone your repository
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Add all files
git add .
git commit -m "Initial portfolio website"
git push origin main
```

## 📝 Customization Guide

### 1. Personal Information

Edit `index.html` and update:

```html
<!-- Line 11: Page Title -->
<title>Your Name | Data Scientist & ML Engineer</title>

<!-- Lines 20-30: Navigation Brand -->
<div class="nav-brand">Your Name</div>

<!-- Lines 35-45: Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>

<!-- Lines 60-65: Social Links -->
<a href="https://www.linkedin.com/in/yourprofile/" target="_blank">
<a href="https://github.com/yourusername" target="_blank">
<a href="mailto:your.email@example.com">
```

### 2. About Section

Update lines 75-95 in `index.html`:

```html
<p>
    Replace with your own bio and background...
</p>
```

### 3. Skills

Edit lines 110-165 to add/remove your skills:

```html
<span class="tag">Your Skill</span>
```

### 4. Projects

**IMPORTANT:** Update project information (lines 175-350):

For each project, update:
- Project title
- GitHub link: `https://github.com/yourusername/project-name`
- Description
- Technologies used
- Metrics/achievements

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
        <div class="project-links">
            <a href="https://github.com/yourusername/project" target="_blank">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <p class="project-description">
        Your project description here...
    </p>
    <div class="project-tags">
        <span class="tag-small">Python</span>
        <!-- Add your tech stack -->
    </div>
</div>
```

### 5. Experience

Update work experience (lines 360-430):

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name | Location</h4>
        <span class="timeline-date">Month Year - Present</span>
        <ul>
            <li>Achievement 1 with metrics</li>
            <li>Achievement 2 with impact</li>
        </ul>
    </div>
</div>
```

### 6. Contact Information

Update contact details (lines 450-485):

```html
<a href="mailto:your.email@example.com" class="contact-card">
    <p>your.email@example.com</p>
</a>
```

## 📸 Adding Images

### 1. Create Assets Folder

In your repository, create folder structure:
```
yourusername.github.io/
├── assets/
│   ├── profile.jpg (your photo)
│   ├── resume.pdf (your resume)
│   └── projects/
│       ├── project1.png
│       ├── project2.png
```

### 2. Add Profile Photo (Optional)

Add to `index.html` hero section:

```html
<div class="hero-content">
    <img src="assets/profile.jpg" alt="Your Name" class="profile-photo">
    <h1 class="hero-title">...</h1>
</div>
```

Add to `style.css`:

```css
.profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 2rem;
    border: 4px solid var(--primary-color);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
}
```

### 3. Add Resume

1. Upload `resume.pdf` to `assets/` folder
2. Update link in `index.html` (line 50):

```html
<a href="assets/resume.pdf" class="btn btn-secondary" download>
    Download Resume
</a>
```

## 🎨 Color Customization

Edit `style.css` (lines 10-20):

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #7c3aed;    /* Purple accent */
    --accent-color: #10b981;       /* Green for success */
    
    /* Change these to customize your theme */
}
```

**Popular Color Schemes:**

**Professional Blue (Default):**
```css
--primary-color: #2563eb;
--secondary-color: #7c3aed;
```

**Tech Green:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
```

**Modern Purple:**
```css
--primary-color: #8b5cf6;
--secondary-color: #a78bfa;
```

**Corporate Navy:**
```css
--primary-color: #1e40af;
--secondary-color: #3b82f6;
```

## 🔗 Adding to LinkedIn

### Step 1: Get Your Website URL

After deployment, your URL is: `https://yourusername.github.io`

### Step 2: Add to LinkedIn Profile

1. Go to your LinkedIn profile
2. Click **"Add profile section"** (top right)
3. Select **"Featured"** → **"Add featured"** → **"Link"**
4. **Title:** "My Portfolio Website" or "Data Science Portfolio"
5. **URL:** `https://yourusername.github.io`
6. Click **"Save"**

### Step 3: Add to Contact Info

1. On LinkedIn profile, click **"Contact Info"**
2. Under **"Website"**, click **"Edit"**
3. Add your portfolio URL
4. Select type: **"Portfolio"** or **"Personal"**
5. Click **"Save"**

### Step 4: Share in Post (Optional)

Create LinkedIn post:
```
🚀 Excited to share my new portfolio website!

Check out my latest Data Science and ML projects, including:
📊 Real-time Fraud Detection System
🤖 NLP Chatbot Development
📈 Sales Forecasting Models
☁️ Cloud-based ETL Pipelines

Visit: https://yourusername.github.io

#DataScience #MachineLearning #Portfolio #AWS #Python
```

## 🌟 Advanced Features (Optional)

### Add Google Analytics

1. Get tracking ID from analytics.google.com
2. Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Custom Domain

1. Buy domain (e.g., `www.yourname.com` from Namecheap, GoDaddy)
2. In repository, create file `CNAME` with your domain:
   ```
   www.yourname.com
   ```
3. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Host: www
   Value: yourusername.github.io
   ```

## 🐛 Troubleshooting

### Website Not Loading

1. Wait 5-10 minutes after initial deployment
2. Check Settings → Pages shows green checkmark
3. Verify repository name is exactly `yourusername.github.io`
4. Ensure files are in root folder, not subfolder

### Styling Not Working

1. Verify `style.css` is in same folder as `index.html`
2. Check browser console for errors (F12)
3. Clear browser cache (Ctrl+Shift+Delete)

### GitHub Links Not Working

1. Update all URLs with your actual GitHub username
2. Make sure project repositories are Public
3. Verify repository names match links

## 📱 Mobile Testing

Test on:
- Chrome DevTools (F12 → Toggle Device Toolbar)
- Real phone/tablet
- https://www.responsivedesignchecker.com

## 🔒 Security

- Never commit sensitive data (API keys, passwords)
- Keep resume PDF generic (remove SSN, full address)
- Use contact form instead of direct email if spam concerns

## 📚 Resources

- **GitHub Pages Docs:** https://pages.github.com
- **Font Awesome Icons:** https://fontawesome.com/icons
- **Google Fonts:** https://fonts.google.com
- **Color Palette Generator:** https://coolors.co

## 🆘 Support

If you encounter issues:

1. Check this README thoroughly
2. Search GitHub Pages documentation
3. Check browser console for errors (F12)
4. Verify all file paths are correct

## 📄 License

Free to use and modify for personal portfolio purposes.

## 🎉 You're Done!

Your professional portfolio is now live! Share it on:
- ✅ LinkedIn (Featured section + Contact Info)
- ✅ Resume (Personal Website section)
- ✅ Email signature
- ✅ Job applications
- ✅ Social media bios

---

**Made with ❤️ for Data Scientists and ML Engineers**
