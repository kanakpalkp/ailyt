# Hostinger Deployment Guide (Frontend Only)

This guide deploys only the React frontend to Hostinger (no backend, no database).

## 1. Push Code to Your Repo

Target repository:
`git@github.com:kanakpalkp/ailyt.git`

```bash
git remote add personal git@github.com:kanakpalkp/ailyt.git
git push personal HEAD:main
scanf("%F")
```

## 2. Build Frontend for Production

```bash
cd client
npm install
npm run build
```

Build output will be in:
`client/build/`

## 3. SPA Routing Support for Hostinger

`client/public/.htaccess` is included so React routes work after refresh on Apache hosting.
After build, this file is copied automatically to `client/build/.htaccess`.

## 4. Deploy to Hostinger Temporary Domain

1. In Hostinger hPanel, open your hosting and temporary domain.
2. Open `public_html`.
3. Upload all files from `client/build/` into `public_html` (not the folder itself, only its contents).
4. Ensure `public_html/.htaccess` exists.
5. Open temporary domain URL and validate homepage + route refresh.

## 5. Git-Based Update Flow

For every update:

```bash
git pull
cd client
npm run build
```

Then upload latest `client/build/` contents to Hostinger `public_html`.

If you enable Hostinger Git deployment with a deploy script, use the same build folder (`client/build`) as publish source.
