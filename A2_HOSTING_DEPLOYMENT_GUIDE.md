# 🚀 A2 Hosting Deployment Guide - Vibrant Petrochem FZE

This guide explains how to upload, extract, and run **Vibrant Petrochem** on **A2 Hosting** using cPanel's **Setup Node.js App**.

---

## 📋 Pre-configured Files Included in Project:
1. **`.htaccess`**: Configures Apache, HTTPS redirection, Phusion Passenger, and Gzip compression.
2. **`server.js`**: cPanel Node.js application startup entry point.
3. **`next.config.ts`**: Configured with `output: 'standalone'` for lightweight production packaging.
4. **`.env.example`**: Template for setting SMTP credentials for `ashish@vibrantpetro.com`.

---

## 🛠️ Step-by-Step Deployment Instructions:

### Step 1: Zip the Project
Compress the project files into a `.zip` archive. You can exclude `node_modules` and `.next` to keep the zip small.

### Step 2: Upload & Extract via cPanel File Manager
1. Log into your **A2 Hosting cPanel**.
2. Open **File Manager** and navigate to your site directory (e.g., `public_html` or a dedicated subdomain folder).
3. Click **Upload** and upload your project zip file.
4. Right-click the zip file and select **Extract**.

### Step 3: Configure Node.js App in cPanel
1. In cPanel, search for **Setup Node.js App**.
2. Click **Create Application**.
3. Set the following options:
   - **Node.js version**: Choose `18.x` or `20.x` (or latest available).
   - **Application Mode**: `Production`
   - **Application Root**: `public_html` (or your subdirectory path)
   - **Application URL**: `https://vibrantpetro.com` (or your domain)
   - **Application startup file**: `server.js`
4. Under **Environment Variables**, add:
   - `EMAIL_HOST`: `mail.vibrantpetro.com`
   - `EMAIL_PORT`: `465`
   - `EMAIL_SECURE`: `true`
   - `EMAIL_USER`: `ashish@vibrantpetro.com`
   - `EMAIL_PASS`: *Your cPanel email password*
   - `EMAIL_TO`: `ashish@vibrantpetro.com`
5. Click **Create**.

### Step 4: Run NPM Install & Build
1. In the Node.js App page, click **Run NPM Install**.
2. Once complete, click **Run JS script** and type `build` (or open cPanel **Terminal** / SSH and run `npm run build`).
3. Click **Restart Application**.

---

## 🔒 Multi-Domain Isolation Safety (Preventing Impact on Other Live Websites):

If you host multiple domains or addon domains on your A2 Hosting account:

1. **Dedicated Directory**:
   Ensure Vibrant Petrochem is placed in its own dedicated document root folder (e.g. `/home/USERNAME/vibrantpetro.com` or `/public_html/vibrantpetro.com`). Do NOT extract files directly into the root `/public_html` if another domain is hosted there.

2. **Domain-Scoped `.htaccess`**:
   All `.htaccess` rewrite rules included in this repository use `RewriteCond %{HTTP_HOST} (www\.)?vibrantpetro\.com [NC]`. This guarantees that Apache only applies the redirects when a request is made specifically for `vibrantpetro.com`, leaving all other domains hosted on your account untouched.

3. **Passenger App Root**:
   In cPanel **Setup Node.js App**, set the **Application Root** to the exact folder where Vibrant Petrochem is uploaded (e.g. `vibrantpetro.com`). This ensures Phusion Passenger runs Node.js exclusively for this app.

---

✅ **Your Vibrant Petrochem portal is live on A2 Hosting with automated email delivery and multi-site isolation!**
