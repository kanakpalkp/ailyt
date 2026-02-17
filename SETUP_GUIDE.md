# Ailyt Project Setup Guide

## Complete Setup Instructions

### Step 1: Project Initialization ✓ (Already Done)

✅ Folder structure created
✅ Package.json files generated for both server and client
✅ Environment configuration files created
✅ Basic component structure set up

---

## Step 2: Install Dependencies

### Server Dependencies

Open Terminal in `server` directory:

```bash
cd server
npm install
```

This will install:
- express (Web framework)
- mongoose (MongoDB ODM)
- cors (Cross-origin support)
- dotenv (Environment variables)
- bcryptjs (Password hashing)
- jsonwebtoken (Authentication)
- validator (Input validation)
- multer (File uploads)
- express-validator (Request validation)
- nodemon (Dev server auto-reload)

### Client Dependencies

Open Terminal in `client` directory:

```bash
cd ../client
npm install
```

This will install:
- react (UI library)
- react-dom (DOM rendering)
- react-router-dom (Client routing)
- axios (HTTP client)
- react-scripts (Build tools)
- tailwindcss (CSS framework)
- postcss & autoprefixer (CSS processing)

---

## Step 3: Environment Configuration

### Server (.env)

Create file: `server/.env`

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/ailyt
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ailyt

# JWT Configuration
JWT_SECRET=ailyt_super_secret_key_change_in_production
JWT_EXPIRE=7d

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Client (.env)

Create file: `client/.env`

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

---

## Step 4: Database Setup

### Using Local MongoDB

1. **Install MongoDB Community Edition**
   - Download from: https://www.mongodb.com/try/download/community
   - Follow installation guide for your OS

2. **Start MongoDB Service**
   ```bash
   # Windows
   mongod
   
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

3. **Verify Connection**
   ```bash
   mongo  # or mongosh
   ```

### Using MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

---

## Step 5: Start the Application

### Terminal 1 - Start Backend Server

```bash
cd server
npm run dev
```

Expected output:
```
Server is running on port 5000
MongoDB connected successfully
```

### Terminal 2 - Start Frontend Development Server

```bash
cd client
npm start
```

Expected output:
```
Compiled successfully!
You can now view ailyt in the browser.

  Local:            http://localhost:3000
```

---

## Step 6: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

---

## Project Features Overview

### Homepage Components

1. **Navbar** - Navigation with logo, menu items, and CTA button
2. **Hero Section** - Auto-scrolling carousel with technology images
3. **Project Cards** - Showcase of student internship projects
4. **Services** - Display coding and non-coding courses
5. **About** - Company info, stats, and values
6. **Reviews** - Student testimonials and clients
7. **Footer** - Contact info and links

### Pages

1. **Home** - Landing page with all sections
2. **Courses** - Course catalog with filters
3. **Services** - Service offerings
4. **About** - About us page
5. **Contact** - Contact form and information

### Color Scheme

- Primary Blue: `#536fa0`
- Secondary Blue: `#3d9fff`
- Accent Purple: `#a591ff`
- Light Background: `#f5f7fa`

### Font

- Family: Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800, 900

---

## API Development

### Backend Routes Structure

```
/api/courses    - Course management
/api/users      - User management
/api/projects   - Project portfolio
```

### Example API Call from Frontend

```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
});

// Get all courses
const getCourses = async () => {
  const { data } = await API.get('/courses');
  return data;
};
```

---

## Build for Production

### Build Frontend

```bash
cd client
npm run build
```

Creates optimized production build in `client/build` directory.

### Deploy Frontend

You can deploy the build folder to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Heroku

### Deploy Backend

```bash
cd server
# Set NODE_ENV=production in your hosting platform
npm start
```

Deploy to:
- Heroku
- AWS EC2
- DigitalOcean
- Railway
- Render

---

## Troubleshooting

### Port Already in Use

```bash
# Change port in server/.env
PORT=5001

# For React development server
set PORT=3001 && npm start  (Windows)
PORT=3001 npm start          (macOS/Linux)
```

### MongoDB Connection Error

1. Check if MongoDB service is running
2. Verify connection string in `.env`
3. Ensure MongoDB is listening on correct port (default: 27017)

### CORS Errors

- Verify `FRONTEND_URL` in server `.env` matches your frontend URL
- Check CORS configuration in `server/index.js`

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## File Structure Explanation

### Server Files

- `index.js` - Main server entry point
- `config/database.js` - MongoDB connection
- `models/` - Database schemas (User, Course, Project)
- `routes/` - API endpoints
- `controllers/` - Business logic (to be implemented)
- `middleware/` - Custom middleware functions

### Client Files

- `src/App.jsx` - Main app component with routing
- `src/index.js` - React DOM rendering
- `src/components/` - Reusable UI components
- `src/pages/` - Full page components
- `src/styles/` - CSS stylesheets
- `public/index.html` - HTML template

---

## Next Steps

1. ✅ Complete setup
2. Implement authentication (JWT)
3. Create database controllers
4. Add course enrollment functionality
5. Implement payment integration
6. Add user dashboard
7. Create admin panel
8. Deploy to production

---

## Resources

- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- MongoDB: https://docs.mongodb.com
- Express: https://expressjs.com
- Axios: https://axios-http.com

---

## Support

For issues and questions:
- Email: info@ailyt.com
- GitHub Issues: [Create an issue]

---

**Happy Coding! 🚀**
