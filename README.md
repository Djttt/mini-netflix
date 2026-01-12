# Mini Netflix

[English](README.md) | [简体中文](README_zh-CN.md)


A modern, responsive movie and TV show discovery application built with TMDB API. Browse trending content, search for your favorites, and view detailed information—all in a sleek interface.

## Features

- **Movies**: Discover Now Playing, Top Rated, and Upcoming movies.
- **TV Shows**: Explore Trending, Airing Today, Top Rated, and On The Air TV shows.
- **Detailed Views**: Comprehensive information for every movie and TV show.
- **Search**: Powerful search functionality to find exactly what you're looking for.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) & [Material UI](https://mui.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd mini-netflix
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add your TMDB API key:

   ```env
   VITE_TMDB_KEY=your_tmdb_api_key_here
   ```

   > You can get an API key by signing up at [The Movie Database](https://www.themoviedb.org/).

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

---
Built with ❤️ using React and Vite.
