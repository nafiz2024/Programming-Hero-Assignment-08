# SkillSphere

## Purpose

SkillSphere is a modern online learning platform built with Next.js. The purpose of this project is to help users explore online courses, view course details, create an account, log in, manage their profile, and search courses by title in a simple and clean interface.

## Live URL

- Live Site: `Add your deployed project URL here`

## Key Features

- Browse all courses from the full catalog
- Search courses by title on the All Courses page
- View single course details
- Register and login with email and password
- Google social sign-in
- Profile and update profile pages

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `daisyui`
- `better-auth`
- `@better-auth/mongo-adapter`
- `mongodb`
- `react-hook-form`
- `react-icons`
- `react-toastify`
- `swiper`

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- DaisyUI
- Better Auth
- MongoDB

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Create a `.env` file and add your environment variables

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
MONGO_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
```

## Main Pages

- `/` Home page
- `/allcourses` All courses page
- `/courses/[id]` Course details page
- `/login` Login page
- `/register` Register page
- `/profile` Profile page
- `/update` Update profile page

## Author

Nafiz
