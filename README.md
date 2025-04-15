# Kanban Task & Time Tracker

A Kanban-style task and time tracker with multiple timers and JSON file storage.

## Features

- Project management with tasks and subtasks
- Drag-and-drop subtasks between columns
- Time tracking for tasks and subtasks
- Real-time time calculations and aggregations
- Data persistence using a JSON file

## Setup

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

## For GitHub Pages Deployment

If you're deploying to GitHub Pages:

1. Push this project to a GitHub repository
2. Go to repository Settings > Pages
3. Select the branch to deploy from and save

Note: Since GitHub Pages is a static hosting service, the server-side functionality will be limited. The application will work in read-only mode when accessed through GitHub Pages.

## Data Storage

All data is stored locally in the `kanban-data.json` file. No external database is required.
