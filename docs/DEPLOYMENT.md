# Deployment Guide

## 📦 Prerequisites

- GitHub repository linked
- MongoDB Atlas account (or local MongoDB)
- Hosting provider account (Hostinger, Vercel, etc.)

## 🚀 Hostinger Deployment

### Step 1: Prepare Application

1. **Create production build**
   ```bash
   cd client
   npm run build
   ```

2. **Set environment variables**
   - Create `.env` in project root
   - Add production values for MongoDB, JWT, etc.

### Step 2: Connect to Hostinger

1. Login to Hostinger → Hosting → Manage
2. Go to **Git** section
3. Add GitHub repository:
   ```
   https://github.com/ailytLearningCentre/ailyt.git
   ```
4. Select branch: `main`
5. Click **Deploy**

### Step 3: Configure Node.js

1. Go to **Node.js** settings
2. Select version (v18+)
3. Set **Application folder**: `client`
4. Set **Public folder**: `client/build`

### Step 4: Environment Variables

In Hostinger panel:
1. Go to **Environment Variables**
2. Add:
   ```
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_url
   JWT_SECRET=your_secret_key
   FRONTEND_URL=https://yourdomain.com
   ```

### Step 5: Deploy Server

For backend running on Hostinger:
1. Update the GitHub repo with latest code
2. Hostinger auto-deploys on push
3. Server runs from `/server` folder

## 🔄 MongoDB Atlas Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster (M0)
3. Create database user
4. Get connection string
5. Update in `.env`:
   ```
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/ailyt?retryWrites=true&w=majority
   ```

## 🌐 Domain Configuration

### DNS Setup
Update your domain DNS records:
```
Type: A
Name: @ (or www)
Value: Hostinger server IP
```

### SSL Certificate
- Hostinger provides free SSL
- Usually auto-enabled
- Renews automatically

## 📊 Post-Deployment

1. **Test application**
   - Frontend: https://yourdomain.com
   - API: https://yourdomain.com/api/health

2. **Monitor logs**
   - Check Hostinger logs for errors
   - Use GitHub Actions for CI/CD

3. **Update environment**
   - Change `FRONTEND_URL` in backend
   - Update API URLs in frontend if needed

## 🔐 Security Best Practices

- ✅ Use strong JWT_SECRET
- ✅ Enable HTTPS
- ✅ Use environment variables for secrets
- ✅ Set CORS origin to your domain
- ✅ Regular dependency updates
- ✅ Don't commit `.env` to GitHub

## 🆘 Troubleshooting

### Port issues
```bash
# Check if port is in use
lsof -i :5000
```

### MongoDB connection fails
- Verify connection string
- Add IP to MongoDB Atlas whitelist
- Check database user credentials

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 Deployment Checklist

- [ ] GitHub repository created
- [ ] MongoDB Atlas setup complete
- [ ] Environment variables configured
- [ ] Build tested locally
- [ ] Code pushed to GitHub
- [ ] Hostinger account created
- [ ] Domain DNS configured
- [ ] First deployment successful
- [ ] SSL certificate active
- [ ] Both frontend and backend accessible

---

Need help? Check the main [README.md](../README.md) or open an issue.
