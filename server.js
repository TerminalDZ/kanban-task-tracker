const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const dataFile = path.join(__dirname, "kanban-data.json");

// Middleware for parsing JSON
app.use(express.json());
// Serve static files
app.use(express.static(__dirname));

// Initialize data file if it doesn't exist
if (!fs.existsSync(dataFile)) {
  const initialData = {
    projects: [
      {
        id: `proj-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: "Default Project",
        tasks: [],
        aggregatedTime: 0,
      },
    ],
    currentView: "projects",
    selectedProjectId: null,
    selectedTaskId: null,
  };
  fs.writeFileSync(dataFile, JSON.stringify(initialData, null, 2));
}

// Get kanban data
app.get("/api/data", (req, res) => {
  try {
    const data = fs.readFileSync(dataFile, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading data file:", error);
    res.status(500).json({ error: "Failed to read data" });
  }
});

// Save kanban data
app.post("/api/data", (req, res) => {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error("Error writing data file:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
