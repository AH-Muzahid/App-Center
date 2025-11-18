# AppVault

A modern and responsive app store interface built with React and Vite. AppVault provides a seamless experience for discovering, browsing, and managing applications with a clean and intuitive design.



## 📋 Overview

AppVault is a comprehensive app store application that allows users to browse, search, and manage a collection of popular applications. The project features a modern, responsive design with smooth animations and an intuitive user interface. Users can explore apps, view detailed information, install/uninstall applications, and manage their installed apps through a dedicated installation page.

## 🚀 Main Features

- **Responsive Design**: Fully responsive interface that works seamlessly on all devices (desktop, tablet, mobile)
- **App Discovery**: Browse through 32+ popular applications with detailed information
- **Search Functionality**: Real-time search with loading indicators to find apps quickly
- **App Details**: Comprehensive app information including ratings, reviews, descriptions, and statistics
- **Installation Management**: Install and uninstall apps with beautiful confirmation dialogs
- **Trending Apps**: Display trending applications on the home page
- **Statistics Dashboard**: View app store statistics and metrics
- **Smooth Animations**: Elegant page transitions and loading animations
- **Error Handling**: Custom error pages (404 and app not found) for better user experience
- **Local Storage**: Persistent app installation tracking using browser local storage
- **Dynamic Routing**: Client-side routing with React Router for seamless navigation

## 🛠️ Main Technologies Used

- **React 19** - Modern frontend library for building user interfaces
- **Vite 7** - Lightning-fast build tool and development server
- **React Router DOM 7** - Client-side routing and navigation
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **DaisyUI 5** - Component library built on Tailwind CSS
- **Recharts** - Powerful charting library for data visualization
- **SweetAlert2** - Beautiful, customizable alert and confirmation dialogs
- **React Icons** - Comprehensive icon library for React
- **React Toastify** - Toast notification library for user feedback
- **JavaScript ES6+** - Modern JavaScript features and syntax

## 📦 Dependencies

### Production Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.14",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.3",
  "react-router-dom": "^7.9.3",
  "react-toastify": "^11.0.5",
  "recharts": "^3.2.1",
  "sweetalert2": "^11.25.0",
  "sweetalert2-react-content": "^5.1.0",
  "tailwindcss": "^4.1.14"
}
```

### Development Dependencies

```json
{
  "@eslint/js": "^9.36.0",
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "daisyui": "^5.1.29",
  "eslint": "^9.36.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.22",
  "globals": "^16.4.0",
  "vite": "^7.1.7"
}
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (version 16 or higher recommended)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

### Installation & Setup

Follow these steps to run the project on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/AH-Muzahid/App-Center.git
   cd "Assignment 08"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   - The application will be available at `http://localhost:5173` (or the port shown in your terminal)
   - The dev server supports hot module replacement (HMR) for instant updates

### Build for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To check for linting errors:

```bash
npm run lint
```

## 📱 Pages & Components

### Pages
- **Home** - Hero section with statistics and trending apps
- **All Apps** - Complete app listing with search functionality
- **App Details** - Individual app information and installation
- **Installation** - Manage installed apps with sorting options
- **Error Pages** - Custom 404 and app not found pages

### Components
- **Navbar** - Responsive navigation with active link styling
- **Footer** - App information and links
- **AppCard** - Reusable app display component
- **LoadingSpinner** - Attractive loading animation
- **Banner** - Hero section with store links
- **States** - Statistics dashboard component
- **TrendingApps** - Trending apps display component

## 🎨 Design Features

- **Modern UI/UX** - Clean and professional interface
- **Smooth Animations** - Page transitions and hover effects
- **Mobile-First** - Responsive design starting from mobile
- **Interactive Elements** - Buttons, cards, and navigation
- **Color Scheme** - Consistent branding throughout

## 📊 Data Management

- **JSON Data Store** - 32 popular apps with detailed information stored in `public/allApps.json`
- **Local Storage** - Persistent installation tracking using browser's localStorage API
- **Error Handling** - Graceful handling of missing data and routes
- **Search Filtering** - Real-time app filtering based on user input

## 📈 Performance

- **Fast Loading** - Optimized with Vite build system
- **Lazy Loading** - Components loaded on demand
- **Efficient Routing** - Client-side navigation with React Router
- **Optimized Images** - External CDN for app icons

## 🔗 Live Links

- **Live Demo**: [Add your live deployment link here]
- **Repository**: [Add your GitHub repository link here]
- **Documentation**: [Add documentation link if available]

## 📝 Additional Information

- **Project Structure**: The project follows a component-based architecture with separate folders for pages, components, routes, and utilities
- **Routing**: Uses React Router v7 with loader functions for data fetching
- **Styling**: Tailwind CSS with DaisyUI components for consistent design
- **State Management**: Local storage for persistence and React hooks for component state

---

Built with ❤️ using React and Vite
