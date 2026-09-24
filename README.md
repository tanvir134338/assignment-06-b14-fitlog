# FitLog

FitLog is a dark, responsive workout library built with Next.js. It helps users discover workouts, view detailed exercise information, build a daily workout plan, and save workouts for later.

## Live Website

Add your deployed website URL here:

```text
https://your-live-site-url.com
```

## Project Overview

FitLog is designed as a simple and focused workout companion. Users can browse a collection of workouts, open any workout to see its details, add exercises to today's plan, save exercises for later, and manage their workout list from the My Plan page.

The application uses a dark gym-inspired interface with a lime accent color and is fully responsive across mobile, tablet, and desktop devices.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Toastify
- LocalStorage
- REST API

## Key Features

- Browse workouts from the FitLog workout API
- Responsive workout library for mobile, tablet, and desktop
- View detailed workout information
- Add workouts to today's plan with a maximum limit of five
- Save workouts for later
- My Plan page with Today's Plan and Saved tabs
- Sort workouts by duration, calories, or rating
- Live exercise, duration, and calorie statistics
- Toast notifications for workout actions
- Persist plan and saved workouts with LocalStorage
- Custom loading state
- Custom 404 page

## Pages

### Home

```text
/
```

Contains the hero section, workout library, workout cards, navigation, and footer.

### Workout Details

```text
/workout/[id]
```

Displays complete information about a selected workout, including equipment, difficulty, sets, reps, duration, calories, rating, and instructions.

### My Plan

```text
/my-plan
```

Manages Today's Plan, Saved Workouts, statistics, sorting, and workout actions.

## API

FitLog uses the following REST API:

```text
https://api.abcz.workers.dev/api/fitlog
```

The API provides workout information including images, muscle groups, equipment, difficulty, duration, calories, sets, reps, ratings, descriptions, and instructions.

## Project Structure

```text
src/
├── app/
│   ├── component/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.tsx
│   │   ├── WorkoutActions.tsx
│   │   └── WorkoutCard.tsx
│   │
│   ├── context/
│   │   └── PlanContext.tsx
│   │
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   └── assets/
│
└── ...
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd fitlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:3000
```

## Available Scripts

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## User Flow

```text
Home
  ↓
Browse Workouts
  ↓
Workout Details
  ↓
Add to Today's Plan
  ↓
My Plan
  ↓
Today's Plan
```

Saved workout flow:

```text
Workout Details
  ↓
Save for Later
  ↓
My Plan
  ↓
Saved
```

## Responsive Layout

FitLog uses Tailwind CSS responsive utilities to provide a consistent experience across different screen sizes.

- Mobile: Single-column workout layout
- Tablet: Two-column workout layout
- Desktop: Three-column workout layout

## Data Persistence

FitLog uses browser Local Storage to persist:

```text
fitlog-plan
fitlog-saved
```

This allows the selected workout plan and saved workouts to remain available after refreshing the browser.

## Error Handling

The application includes:

- Custom 404 page
- Loading state
- Disabled actions for already-added workouts
- Five-workout plan limit
- Toast feedback for user actions

## Future Improvements

Possible future improvements include:

- Workout search
- Filtering by muscle group
- Filtering by difficulty
- User authentication
- Workout history
- Progress tracking
- Custom workout creation
- Weekly workout statistics

## Author

Built as a Next.js assignment project using React and Tailwind CSS.
