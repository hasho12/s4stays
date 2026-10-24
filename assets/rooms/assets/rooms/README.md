# Room Photographs Guide — S for Stays (`assets/rooms/`)

This folder holds the local room photographs displayed across the **S for Stays** website, including the hero display, room cards, and room detail galleries.

## Expected Image Filenames

Place your room photographs in this `assets/rooms/` directory using these exact lowercase filenames:

| Filename | Room Number | Category | Floor |
| :--- | :--- | :--- | :--- |
| `room-201.jpg` | Room 201 | Studio Room | Second floor |
| `room-202.jpg` | Room 202 | Studio Room | Second floor |
| `room-203.jpg` | Room 203 | Studio Room | Second floor |
| `room-204.jpg` | Room 204 | 1-Bedroom Room | Second floor |
| `room-301.jpg` | Room 301 | Studio Room | Third floor |
| `room-302.jpg` | Room 302 | Studio Room | Third floor |
| `room-303.jpg` | Room 303 | 1-Bedroom Room | Third floor |

> **Important Note on Placeholders:**  
> By default, the seven `.jpg` files in this folder are empty (`0 KB`) placeholder slots so you can see the exact filenames required. Whenever a room image file is empty (`0 KB`) or missing, the website automatically hides the broken image icon and displays a clean, neutral hospitality card stating **"Room photo coming soon"**. As soon as you replace any of these files with a real `.jpg` photograph, the website automatically displays your photo in the room card and room detail slider.

## Adding Optional Extra Gallery Photos for Any Room

Each room detail modal includes a swipeable image carousel:
- By default, each room loads its primary photograph (`room-201.jpg` through `room-303.jpg`). If only one photo exists, the carousel displays a single slide without creating fake duplicate slides.
- If you ever wish to display multiple angles of a room in the modal slider, you can optionally add extra filenames in `script.js` inside that room's `images` array (for example: `["assets/rooms/room-201.jpg", "assets/rooms/room-201-2.jpg"]`).

## Preferred Aspect Ratio & Dimensions

- **Preferred Aspect Ratio:** **4:3** (standard camera landscape) or **16:10**
- **Recommended Resolution:** **1600 × 1200 px** (or **1440 × 900 px**)
- **Orientation:** Landscape (horizontal) photographs work best inside both the room cards and the detail modal gallery.
- **Hero Image:** By default, the Hero section showcases `assets/rooms/room-204.jpg` (or the first populated room photograph).

## Image Compression Recommendations (Fast Mobile Loading)

Because many travelers browse on mobile data connections in Pakistan, optimizing your photographs before uploading to GitHub Pages will make your website load much faster:

1. **Target File Size:** Aim for **120 KB – 250 KB** per photograph (avoid uploading raw 5 MB – 12 MB phone photos directly).
2. **JPEG Quality Setting:** Export as **Progressive JPEG (`.jpg`)** at **75% – 82% quality** using the **sRGB** color profile.
3. **Free Compression Tools:**
   - [Squoosh.app](https://squoosh.app/) (browser-based, works offline once loaded; choose **MozJPEG** at quality `78` and resize width to `1600px`)
   - [TinyJPG](https://tinyjpg.com/)
4. **Filename Case Sensitivity:** GitHub Pages runs on Linux servers where filenames are strictly **case-sensitive**. Always name your files in lowercase (`room-201.jpg`, **not** `Room-201.JPG` or `room-201.jpeg`).
