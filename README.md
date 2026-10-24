# S for Stays — Official Hotel Website

A lightweight, responsive, static hospitality website built for **S for Stays** (Pakistan). Designed to run directly on **GitHub Pages** without any backend, database, build step, or paid hosting dependencies.

---

## 1. Project Folder Structure

```text
s-for-stays/
├── index.html                 # Main semantic HTML5 website
├── styles.css                 # Responsive mobile-first CSS3 & animations
├── script.js                  # Room filtering, modal gallery, & WhatsApp inquiry logic
├── favicon.svg                # Original S for Stays vector favicon
├── robots.txt                 # Search engine crawling instructions
├── .nojekyll                  # Prevents GitHub Pages Jekyll processing
├── README.md                  # Complete setup & GitHub Pages deployment guide
└── assets/
    ├── icons/                 # Local SVG icons for facilities, navigation, and UI
    │   ├── arrow-up.svg
    │   ├── bed.svg
    │   ├── boulevard.svg
    │   ├── chevron-left.svg
    │   ├── chevron-right.svg
    │   ├── close.svg
    │   ├── electricity.svg
    │   ├── logo-mark.svg
    │   ├── map-pin.svg
    │   ├── parking.svg
    │   ├── room-placeholder.svg
    │   ├── washroom.svg
    │   ├── water.svg
    │   ├── whatsapp.svg
    │   └── wifi.svg
    └── rooms/                 # Local room photographs directory
        ├── README.md          # Image specifications & compression guide
        ├── room-201.jpg       # Second floor — Studio Room
        ├── room-202.jpg       # Second floor — Studio Room
        ├── room-203.jpg       # Second floor — Studio Room
        ├── room-204.jpg       # Second floor — 1-Bedroom Room
        ├── room-301.jpg       # Third floor — Studio Room
        ├── room-302.jpg       # Third floor — Studio Room
        └── room-303.jpg       # Third floor — 1-Bedroom Room
```

---

## 2. How to Extract the ZIP File

1. Download `s-for-stays.zip` to your computer.
2. **On Windows:** Right-click `s-for-stays.zip` → click **Extract All...** → choose a destination folder and click **Extract**.
3. **On macOS:** Double-click `s-for-stays.zip` in Finder to automatically extract the `s-for-stays` folder.
4. Open the extracted `s-for-stays` folder and verify that `index.html`, `styles.css`, `script.js`, and the `assets/` folder are directly inside it.

---

## 3. How to Add Your Seven Room Photographs (`assets/rooms/`)

By default, the seven `.jpg` files in `assets/rooms/` are `0 KB` empty placeholder slots. Whenever an image slot is empty or missing, the website automatically displays a clean **"Room photo coming soon"** placeholder card instead of a broken image icon.

To add your real photographs:

1. Prepare your seven room photographs as `.jpg` files.
2. Rename them to match these **exact lowercase filenames**:
   - `room-201.jpg` (Room 201 — Studio Room, Second floor)
   - `room-202.jpg` (Room 202 — Studio Room, Second floor)
   - `room-203.jpg` (Room 203 — Studio Room, Second floor)
   - `room-204.jpg` (Room 204 — 1-Bedroom Room, Second floor — *also featured in the Hero banner*)
   - `room-301.jpg` (Room 301 — Studio Room, Third floor)
   - `room-302.jpg` (Room 302 — Studio Room, Third floor)
   - `room-303.jpg` (Room 303 — 1-Bedroom Room, Third floor)
3. Copy your 7 photographs into `s-for-stays/assets/rooms/`, choosing **Replace** when prompted.
4. **Recommended Image Specs:**
   - **Aspect Ratio:** `4:3` or `16:10` landscape (e.g., `1600 × 1200 px`).
   - **File Size:** Compress each photo to **120 KB – 250 KB** using [Squoosh.app](https://squoosh.app/) or [TinyJPG](https://tinyjpg.com/) so the website loads quickly on mobile data connections.

---

## 4. How to Preview the Website Locally

You do not need Node.js or any build tools to preview the site on your computer:

- **Method A (Quickest):** Open the `s-for-stays/` folder and double-click `index.html` to open it in Chrome, Safari, Edge, or Firefox.
- **Method B (Optional Local Web Server):**
  - If you use VS Code, install the **Live Server** extension and click **Go Live**.
  - Or, if Python is installed, open a terminal inside `s-for-stays/` and run:
    ```bash
    python3 -m http.server 8000
    ```
    Then visit `http://localhost:8000` in your browser.

---

## 5. Step-by-Step GitHub Pages Deployment Guide

### Step 1: Create a GitHub Repository
1. Sign in to [GitHub.com](https://github.com/).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Enter a **Repository name** (for example: `s-for-stays`).
4. Set the repository visibility to **Public** (required for free GitHub Pages hosting).
5. Leave *"Add a README file"* unchecked (since your project already includes one) and click **Create repository**.

### Step 2: Upload the Complete Project
1. On your new repository page, click the **uploading an existing file** link (or click **Add file** → **Upload files**).
2. Open your local `s-for-stays/` folder, select **all files and folders inside it** (`index.html`, `styles.css`, `script.js`, `favicon.svg`, `robots.txt`, `.nojekyll`, `README.md`, and the `assets/` folder), and drag them into the GitHub upload box.
   > **Tip:** Make sure `index.html` is at the top level of the repository, not nested inside an extra `s-for-stays/s-for-stays/` subfolder.
3. Wait for all files to finish uploading.
4. In the **Commit changes** box at the bottom, type `Initial website deployment` and click **Commit changes**.

### Step 3: Enable GitHub Pages from Repository Settings
1. Inside your GitHub repository, click the **Settings** tab (top navigation bar).
2. In the left sidebar under *Code and automation*, click **Pages**.
3. Under **Build and deployment** → **Source**, ensure **Deploy from a branch** is selected.
4. Under **Branch**:
   - Change the branch dropdown from `None` to **`main`** (or `master`).
   - Leave the folder dropdown set to **`/ (root)`**.
   - Click **Save**.

### Step 4: Open Your Published Website
1. Wait **1 to 2 minutes** for GitHub Pages to build and publish your site.
2. Refresh the **Settings → Pages** screen.
3. At the top of the page, you will see a banner reading:
   > **Your site is live at `https://your-username.github.io/s-for-stays/`**
4. Click **Visit site** to open your live hotel website on desktop or mobile.

---

## 6. How to Update Room Photographs or Text Later

- **Updating a Room Photo:**
  1. Open your GitHub repository and navigate into the `assets/rooms/` folder.
  2. Click **Add file** → **Upload files**.
  3. Drag your new `room-201.jpg` (using the exact same lowercase filename) into the upload box and click **Commit changes**.
  4. GitHub Pages will automatically update your live website within 1–2 minutes.
- **Updating Text or Contact Info:**
  1. Click on `index.html` or `script.js` in your GitHub repository.
  2. Click the **Pencil icon (Edit this file)** in the top-right corner.
  3. Make your changes and click **Commit changes...** at the top right.

---

## 7. Troubleshooting Guide

### Problem 1: Room Photos Still Show "Room photo coming soon"
- **Check Filename Case:** GitHub Pages is case-sensitive. Verify your file is named `room-201.jpg` (all lowercase), **not** `Room-201.JPG`, `ROOM-201.jpg`, or `room-201.jpeg`.
- **Check Folder Location:** Ensure the photos were uploaded inside `assets/rooms/` and not in the root folder.
- **Clear Browser Cache:** After replacing a photo on GitHub Pages, wait 90 seconds and hard-refresh your browser (`Ctrl + F5` on Windows or `Cmd + Shift + R` on Mac).

### Problem 2: Styles or Scripts Not Loading (404 Error on GitHub Pages)
- Ensure `index.html`, `styles.css`, `script.js`, and the `assets/` folder sit directly in the **root** of your repository (`https://github.com/username/repo/blob/main/index.html`).
- All paths in this project are strictly relative (`assets/rooms/room-201.jpg`, `styles.css`, `script.js`), so the site works seamlessly whether hosted at a custom domain or a repository subpath (`https://username.github.io/repository-name/`).

### Problem 3: WhatsApp Redirect Does Not Open
- Verify that your device has the **WhatsApp app** installed (on mobile) or can access **WhatsApp Web / Desktop** (`https://wa.me/923237402926`).
- Ensure all required form fields (Full Name, Room Selection, Check-in Date today or later, Check-out Date after Check-in, and Guests `1` or more) are filled out with no red validation messages before clicking **Continue to WhatsApp Inquiry**.
