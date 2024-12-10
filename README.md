Image Editing Tool
This is a simple image editing tool built with Next.js, TailwindCSS, and TypeScript. The application allows users to browse, edit, and download images. Users can adjust the image size, apply grayscale and blur effects, and download the edited image.

Project Structure
pages/: Contains the application's route files. index.tsx displays the image gallery, and edit/[id].tsx provides the interface to edit an individual image.
components/: Contains reusable UI components.
utils/: Contains helper functions for handling local storage.
public/: Stores public assets like images and icons.
styles/: Contains the global and TailwindCSS configurations.
Technologies Used
Next.js: React framework for server-side rendering and routing.
TailwindCSS: Utility-first CSS framework for styling.
TypeScript: Strongly typed superset of JavaScript for type safety.
Picsum Photos API: A free API for placeholder images.
Features
Browse Images: View images from the Picsum Photos API with pagination.
Edit Images: Change the size, apply grayscale, and apply blur to the images.
Download Image: Download the edited image directly without opening a new page.
Persistence: The settings (image size, grayscale, blur) are persisted in the browser's localStorage and restored when the page is refreshed.


Installation
git clone https://github.com/Jubril1464/image-editor.git
cd image-editing-tool
npm install
npm run dev

Usage
Gallery Page: When you open the app, you'll be taken to the gallery page where you can browse images. Each image can be clicked to navigate to the edit page.
Edit Image: On the edit page, you can adjust the image width, height, apply grayscale, and blur the image. You can also download the edited image directly.
Local Storage: The settings for width, height, grayscale, and blur are saved in the localStorage, so when you refresh the page, the settings will be retained.

File Structure:
/image-editor
├── /components
│   └── ImageCard.tsx
├── /pages
│   ├── index.tsx
│   └── /edit/[id].tsx
├── /public
│   └── /images
├── /styles
│   └── globals.css
├── /utils
│   └── localstorage.ts
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json

Technologies
Next.js: For server-side rendering and routing.
TailwindCSS: For styling the application with utility-first classes.
TypeScript: For type safety and better development experience.
Picsum API: Used for fetching random images for the gallery and editing.
