# Web Application Development Club Website

A professional, high-performance website for the Web Application Development Club built with Next.js (frontend) and Node.js/Express (backend).

## 🚀 Features

- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Professional UI**: Corporate-style design with clean aesthetics
- **Backend API**: Node.js/Express REST API for dynamic data management
- **Component-Based**: Modular and reusable components

## 📁 Project Structure

```
wad-club-website/
├── client/                 # Next.js Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── home/       # Homepage sections
│   │   │   └── layout/     # Layout components (Navbar, Footer)
│   │   ├── pages/          # Next.js pages
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   ├── package.json
│   ├── tailwind.config.js
│   └── next.config.js
│
└── server/                 # Express Backend
    ├── data/               # Static data files
    ├── routes/             # API routes
    ├── server.js           # Express server entry
    ├── package.json
    └── .env
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The website will be available at `http://localhost:3000`

## 📚 API Endpoints

### Team API (`/api/team`)
- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get team member by ID
- `GET /api/team/category/:category` - Get members by category
- `GET /api/team/roles/leadership` - Get leadership team
- `GET /api/team/roles/heads` - Get all team heads

### Projects API (`/api/projects`)
- `GET /api/projects` - Get all projects (supports query params: category, status, year)
- `GET /api/projects/:id` - Get project by ID
- `GET /api/projects/developer/:name` - Get projects by developer
- `GET /api/projects/meta/categories` - Get all project categories
- `GET /api/projects/meta/stats` - Get project statistics

### Events API (`/api/events`)
- `GET /api/events` - Get all events (supports query params: status, type)
- `GET /api/events/:id` - Get event by ID
- `GET /api/events/upcoming` - Get upcoming events
- `GET /api/events/past` - Get past events
- `GET /api/events/meta/types` - Get event types

## 🎨 Pages

- **Home** (`/`) - Landing page with hero, about, projects, team, and events sections
- **About** (`/about`) - Club mission, vision, values, and milestones
- **Team** (`/team`) - Complete team directory with filtering
- **Projects** (`/projects`) - Project gallery with search and filters
- **Events** (`/events`) - Upcoming and past events
- **Contact** (`/contact`) - Contact form and information
- **Join** (`/join`) - Membership application form

## 👥 Featured Projects

1. **Timetable Tracker** - Academic scheduling application
2. **AI Graveyard** - Archive of discontinued AI projects
3. **Jeevan Utsav** - Cultural festival management platform
4. **Devrai** - Environmental conservation platform
5. **Sahabhag** - Civic engagement platform
6. **Green Club IOIT** - Sustainability initiatives platform
7. **MLSA Club** - Microsoft Learn Student Ambassadors portal

## 👨‍💻 Development Team

- Swaroop - Tech Team Head
- Ashish Kharde - Tech Team Joint Head
- Bhumi Shinde - Media Team Head
- Sarvesh Kolte - Media Team Joint Head
- Chinmay Nakwa - Documentation Team Head
- Pritam Rangari - Documentation Team Joint Head
- Amol Waghmare - Core Member

## 🎨 Color Palette

- **Primary**: Blue (#2563eb - primary-600)
- **Accent**: Cyan (#06b6d4 - accent-500)
- **Secondary**: Slate grays for text and backgrounds
- **Success**: Green for completed status
- **Warning**: Yellow for in-development status

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Framer Motion (animations)

### Backend
- Node.js
- Express.js
- CORS
- Helmet (security)
- Morgan (logging)

## 📄 License

This project is created for the Web Application Development Club.

## 🚀 Deployment

### Frontend - Vercel

1. Push the `client` folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repository
4. Set the root directory to `client`
5. Framework will be auto-detected as Next.js
6. Click "Deploy"

### Backend - Render

1. Push the `server` folder to a GitHub repository
2. Go to [render.com](https://render.com) and sign in
3. Click "New" → "Web Service"
4. Connect your repository
5. Set the root directory to `server`
6. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node
7. Click "Create Web Service"

---

Built with ❤️ by Pritam Rangari
