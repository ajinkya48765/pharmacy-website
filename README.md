# Your Premium Pharmacy Website

A simple, professional website for your pharmacy business in India.

## 📋 Project Structure

```
/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services offered
├── contact.html        # Contact & inquiry form
├── style.css           # Styling (Responsive design)
├── script.js           # JavaScript functionality
├── vercel.json         # Deployment configuration
└── README.md           # This file
```

## 🎯 Features

- **Responsive Design** - Works on mobile, tablet, and desktop
- **Professional Layout** - Clean and modern UI
- **Contact Form** - Collect customer inquiries
- **Service Showcase** - Display your pharmacy services
- **About Section** - Tell your story
- **Footer** - Business information

## 📝 Pages

1. **Home (index.html)** - Welcome page with features and services overview
2. **About (about.html)** - Your pharmacy story, mission, vision, and team
3. **Services (services.html)** - Detailed list of services offered
4. **Contact (contact.html)** - Contact information and inquiry form

## 🎨 Customization

### Update Business Information

1. **Replace placeholders** in HTML files:
   - `[Year]` - Founded year
   - `[X]` - Years of experience
   - `[Street Address]` - Your address
   - `[City], [State] [Postal Code]` - Full address
   - `+919999-999-999` - Your phone number
   - `info@yourpharmacy.com` - Your email
   - `Your Pharmacy Name` - Your business name

2. **Update colors** in `style.css`:
   - `:root` section contains CSS variables
   - `--primary-color` (Green currently)
   - `--secondary-color` (Blue currently)

3. **Add team members** in `about.html`:
   - Customize pharmacist names and roles

### Form Handling

The contact form in `contact.html`:
- Validates user input
- Shows success/error messages
- Data is logged to browser console
- To send emails, integrate with a backend service (optional)

## 🚀 Deployment to Vercel

### Free & Easy Setup

1. **Install Git** (if not already installed)
   ```bash
   # On macOS with Homebrew
   brew install git
   ```

2. **Create a GitHub repository**
   - Go to github.com and create a new repository
   - Clone it to your local machine
   - Copy your pharmacy website files into the repository

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial pharmacy website"
   git push origin main
   ```

4. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import your repository
   - Click "Deploy" - that's it!

5. **Get your domain**
   - Vercel gives you a free `.vercel.app` domain
   - Or connect your own domain (e.g., `yourpharmacy.in`)

### Alternative Deployment Options

- **GitHub Pages** - Free, simple
- **Netlify** - Free tier available
- **Cloudflare Pages** - Free hosting
- **Traditional Hosting** - cPanel or shared hosting

## 📱 Local Testing

1. Open `index.html` in your web browser
2. Navigate through all pages
3. Test the contact form

## 🔧 Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **Vanilla JavaScript** - No dependencies
- **Mobile Responsive** - Breakpoints at 768px and 480px

## 📞 Contact Form Integration

To enable actual email sending, integrate with:
- **Formspree** - Free form backend
- **EmailJS** - Client-side email API
- **Netlify Forms** - If hosted on Netlify
- **Your own backend** - Node.js, Python, etc.

## 🎓 Next Steps

1. ✅ Customize business information
2. ✅ Test locally
3. ✅ Set up GitHub repository
4. ✅ Deploy to Vercel
5. ✅ Purchase domain name (optional)
6. ✅ Connect domain to Vercel
7. ✅ Monitor analytics (optional)

## 📄 License

This is your business website. Feel free to modify and use as needed.

## Need Help?

- **Documentation**: Check HTML file comments for details
- **CSS**: Modify `style.css` for branding
- **Forms**: Add backend integration as needed

---

**Your Premium Pharmacy** - Serving your healthcare needs with excellence
