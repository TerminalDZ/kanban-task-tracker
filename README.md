# Kanban Task & Time Tracker

A responsive Kanban-style task and time tracker with multiple timers and JSON file storage. Optimized for GitHub Pages.

## Features

- Project management with tasks and subtasks
- Drag-and-drop subtasks between columns
- Time tracking for tasks and subtasks
- Real-time time calculations and aggregations
- Data persistence (using localStorage on GitHub Pages)
- Works in both online and offline modes

## Using on GitHub Pages

To use this application directly from GitHub Pages:

1. Access the app through its GitHub Pages URL
2. All data will be automatically stored in your browser's localStorage
3. The application works completely client-side when deployed on GitHub Pages

## Development Setup

If you want to run this project locally with server-side storage:

1. Make sure you have Node.js installed (v14 or higher)
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Data Storage

- **GitHub Pages**: Uses browser localStorage for data persistence
- **Local Development**: Uses a JSON file (kanban-data.json) on the server

## Created by

terminaldz
