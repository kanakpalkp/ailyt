# 🚀 Ailyt - Quick Start Installation

## One-Command Installation Script (Windows PowerShell)

Copy and paste this into PowerShell:

```powershell
# Navigate to project root
cd C:\Users\SIDDHARTH RAMOLA\OneDrive\Desktop\kanakpalkp

# Install server dependencies
cd server
npm install
cd ..

# Install client dependencies
cd client
npm install
cd ..

Write-Host "Installation complete! Next steps:" -ForegroundColor Green
Write-Host "1. Create .env files (copy from .env.example)"
Write-Host "2. Terminal 1: cd server && npm run dev"
Write-Host "3. Terminal 2: cd client && npm start"
```

---

## Manual Installation (Step by Step)

### Step 1: Install Server Dependencies

```bash
cd server
npm install
```

Wait for installation to complete (~2-3 minutes).

### Step 2: Install Client Dependencies

```bash
cd ../client
npm install
```

Wait for installation to complete (~3-5 minutes).

### Step 3: Create Environment Files

**Server - Create `server/.env`:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ailyt
NODE_ENV=development
JWT_SECRET=ailyt_development_secret_key
FRONTEND_URL=http://localhost:3000
```

**Client - Create `client/.env`:**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Running the Application

### Terminal 1 - Start Backend Server

```bash
cd server
npm run dev
```

You should see:
```
Server is running on port 5000
MongoDB connected successfully
```

### Terminal 2 - Start Frontend

```bash
cd client
npm start
```

Browser will automatically open at `http://localhost:3000`

---

## What's Included

✅ **Complete MERN Stack Setup**
✅ **Mobile Responsive Design** (All breakpoints)
✅ **Modern UI with Poppins Font**
✅ **Auto-scrolling Image Carousel**
✅ **Project Portfolio Section**
✅ **Student Testimonials & Reviews**
✅ **Course Filtering System**
✅ **Contact Form**
✅ **Professional Footer**
✅ **API Route Structure Ready**
✅ **Error Handling Middleware**
✅ **Database Models (User, Course, Project)**

---

## Project Structure

```
📁 kanakpalkp/
├── 📁 server/
│   ├── 📁 config/ → database.js
│   ├── 📁 middleware/ → errorHandler, asyncHandler
│   ├── 📁 models/ → User.js, Course.js, Project.js
│   ├── 📁 routes/ → courseRoutes, userRoutes, projectRoutes
│   ├── index.js (Main server file)
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── 📁 client/
│   ├── 📁 public/
│   │   └── index.html
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── Navbar.jsx/css
│   │   │   ├── HeroSection.jsx/css
│   │   │   ├── Services.jsx/css
│   │   │   ├── About.jsx/css
│   │   │   ├── Reviews.jsx/css
│   │   │   └── Footer.jsx/css
│   │   ├── 📁 pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── 📁 styles/
│   │   │   ├── index.css (Global + Poppins Font)
│   │   │   ├── Courses.css
│   │   │   └── Contact.css
│   │   ├── App.jsx
│   │   └── index.js
│   ├── tailwind.config.js (Custom color palette)
│   ├── postcss.config.js
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── README.md (Full documentation)
├── SETUP_GUIDE.md (Detailed setup)
└── .gitignore
```

---

## Features Checklist

### ✅ Navbar
- Logo with gradient
- Navigation links (Home, Services, Courses, About, Contact)
- Start Learning CTA button
- Mobile hamburger menu
- Smooth scrolling

### ✅ Hero Section
- Welcome headline
- Call-to-action button
- Auto-scrolling carousel (5-second intervals)
- 4 featured student project cards
- Smooth hover transitions

### ✅ Services Section
- 4 service cards (Coding, English, Internship, Certificates)
- Icon and description for each
- Course tags
- Gradient hover effects

### ✅ About Section
- Company introduction
- Statistics cards (500+ students, 50+ instructors, etc.)
- Features list with checkmarks
- Core values grid
- Join CTA button

### ✅ Reviews & Testimonials
- Carousel displaying student reviews
- Star ratings
- Auto-rotating slides
- Clients/Partners section
- Indicator dots

### ✅ Courses Page
- Grid layout
- Filter buttons (All, Coding, Non-Coding)
- Course cards with images
- Course details (duration, students, price)
- Enroll button

### ✅ Contact Page
- Contact information cards
- Contact form
- Form validation
- Success message
- Multiple contact methods

### ✅ Footer
- Company info
- Quick links
- Course links
- Contact information
- Newsletter subscription
- Social media links
- Copyright and policies

---

## Technologies Used

### Frontend
- React 18.2
- React Router DOM 6.16
- Tailwind CSS 3.3
- Axios 1.5
- Poppins Font (Google Fonts)

### Backend
- Node.js
- Express.js 4.18
- MongoDB + Mongoose 7.5
- JWT (jsonwebtoken)
- bcryptjs
- CORS, Dotenv

---

## Default Colors

```css
Primary Blue:    #536fa0
Secondary Blue:  #3d9fff
Accent Purple:   #a591ff
Light BG:        #f5f7fa
Dark BG:         #242858
Text Dark:       #333d70
Text Light:      #999
```

---

## Responsive Breakpoints

- 📱 Mobile: < 480px
- 📱 Small: 480px - 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: 1024px - 1280px
- 🖥️ Large: > 1280px

All components are fully responsive!

---

## Available Scripts

### Server
```bash
npm run dev    # Start with nodemon (auto-reload)
npm start      # Start production server
```

### Client
```bash
npm start      # Start development server
npm run build  # Build for production
npm test       # Run tests
```

---

## MongoDB Setup (if using local)

### Windows

1. Download: https://www.mongodb.com/try/download/community
2. Install with default options
3. MongoDB runs as a service automatically

### macOS

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux

```bash
# Ubuntu/Debian
sudo apt-get install -y mongodb

# Start service
sudo systemctl start mongod
```

**Verify:**
```bash
mongosh
# Should open MongoDB shell
```

---

## Troubleshooting

### Issue: "Port 5000 already in use"
```bash
# Change port in server/.env to 5001
PORT=5001
```

### Issue: "Cannot find module 'express'"
```bash
# Reinstall dependencies
rm -rf server/node_modules
cd server && npm install
```

### Issue: "MongoDB connection failed"
1. Check if MongoDB is running
2. Verify connection string in .env
3. Check MongoDB is on port 27017 (default)

### Issue: "ENOENT: no such file or directory"
```bash
# Ensure you're in correct directory
pwd  # Check current path
cd server  # or cd client
```

---

## Next Development Steps

1. **Implement Authentication**
   - User signup/login
   - JWT tokens
   - Protected routes

2. **Course Management**
   - Create/edit courses
   - Enroll functionality
   - Progress tracking

3. **Payment Integration**
   - Stripe or Razorpay
   - Course purchases

4. **Admin Dashboard**
   - Manage courses
   - View analytics
   - User management

5. **Features**
   - Video streaming
   - Discussion forums
   - Certificates
   - Chat system

---

## Deployment Checklist

### Before Deploying

- [ ] Test all features locally
- [ ] Update .env for production
- [ ] Set strong JWT_SECRET
- [ ] Configure production MongoDB
- [ ] Enable HTTPS
- [ ] Set up error logging
- [ ] Configure CORS for production URL

### Deploy Frontend

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   cd client
   vercel
   ```

2. **Netlify**
   - Connect GitHub
   - Auto-deploy on push

### Deploy Backend

1. **Heroku**
   ```bash
   heroku create ailyt-server
   git push heroku main
   ```

2. **Railway**
   - Connect GitHub
   - Auto-deploy

---

## Support & Resources

- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com
- **MongoDB Docs**: https://docs.mongodb.com
- **Express Docs**: https://expressjs.com
- **Poppins Font**: https://fonts.google.com/specimen/Poppins

---

## License

ISC License - Open for educational and commercial use

---

## Contact

📧 **Email**: info@ailyt.com
🌐 **Website**: ailyt.com
💬 **Support**: support@ailyt.com

---

**🎉 You're all set! Start building amazing things with Ailyt!**

Happy Coding! 🚀✨
