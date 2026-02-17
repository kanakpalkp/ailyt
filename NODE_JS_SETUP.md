╔════════════════════════════════════════════════════════════════════════════════╗
║                   📦 NODE.JS INSTALLATION GUIDE (WINDOWS)                       ║
╚════════════════════════════════════════════════════════════════════════════════╝

⚠️ YOU MUST INSTALL NODE.JS FIRST BEFORE PROCEEDING!

═══════════════════════════════════════════════════════════════════════════════
STEP 1: DOWNLOAD NODE.JS
═══════════════════════════════════════════════════════════════════════════════

1. Open your web browser and go to: https://nodejs.org/

2. You'll see two versions:
   ✅ LTS (Recommended) - Long Term Support
   ❌ Current - Latest features but less stable

3. CLICK the green "LTS" button to download

4. Choose Windows Installer (.msi) - it will auto-select based on your system

═══════════════════════════════════════════════════════════════════════════════
STEP 2: RUN THE INSTALLER
═══════════════════════════════════════════════════════════════════════════════

1. Open your Downloads folder

2. Double-click on "node-v18.xx.x-x64.msi" (or similar name)

3. Windows may ask "Do you want to allow this app?"
   → Click "Yes"

4. A setup wizard will open:
   → Click "Next"
   → Accept the license agreement (checkbox)
   → Click "Next"
   → Leave the installation path as default: C:\Program Files\nodejs
   → Click "Next"
   → Click "Next" (keep all options selected)
   → Click "Install"
   → Wait 1-2 minutes for installation...
   → Click "Finish"

═══════════════════════════════════════════════════════════════════════════════
STEP 3: VERIFY INSTALLATION
═══════════════════════════════════════════════════════════════════════════════

IMPORTANT: Close all PowerShell/Terminal windows and open a NEW one!

Then run these commands:

node --version
npm --version

You should see version numbers like:
v18.17.0
9.6.7

If you see version numbers → ✅ SUCCESS! Go to STEP 4
If you see "not found" → ❌ Restart your computer and try again

═══════════════════════════════════════════════════════════════════════════════
STEP 4: NOW YOU CAN PROCEED WITH AILYT INSTALLATION
═══════════════════════════════════════════════════════════════════════════════

Once Node.js is verified, follow QUICK_START.txt:

cd "C:\Users\SIDDHARTH RAMOLA\OneDrive\Desktop\kanakpalkp\server"
npm install

Then:

cd ../client
npm install

═══════════════════════════════════════════════════════════════════════════════
TROUBLESHOOTING
═══════════════════════════════════════════════════════════════════════════════

Q: I get "node: not found" or "npm: not found"
A: 1. Close ALL PowerShell/Command Prompt windows
   2. Restart your computer
   3. Open a NEW PowerShell window
   4. Try again

Q: How do I know if it's installed?
A: Run: node --version && npm --version
   Should show two version numbers

Q: Installation stuck on "Installing Node.js Tools for Native Modules"
A: This is normal, wait 2-3 minutes. The installer is building native modules.

Q: Can I check installation path?
A: Run: npm root -g
   Should show: C:\Users\YOUR_USERNAME\AppData\Roaming\npm

═══════════════════════════════════════════════════════════════════════════════
WHAT IS NODE.JS & NPM?
═══════════════════════════════════════════════════════════════════════════════

Node.js: JavaScript runtime that runs JavaScript outside the browser
NPM: Node Package Manager - downloads and manages project dependencies

Together they allow you to:
✅ Run React development server
✅ Run Express backend server
✅ Install packages like Tailwind, Axios, Mongoose, etc.

═══════════════════════════════════════════════════════════════════════════════
SYSTEM REQUIREMENTS
═══════════════════════════════════════════════════════════════════════════════

✅ Windows 10 or later (recommended)
✅ At least 2 GB RAM
✅ 500 MB free disk space
✅ Administrator access to install

═══════════════════════════════════════════════════════════════════════════════

              🎯 After installing Node.js, run QUICK_START.txt 🎯

═══════════════════════════════════════════════════════════════════════════════
