// server.js
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Import JSON data for dynamic content
const experienceData = require("./data/experience.json");
const projectsData = require("./data/projects.json");

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));
// Route to render the experience page


app.get("/api/experience", (req, res) => {
  res.sendFile(path.join(__dirname, "data/experience.json"));
});
app.get("/api/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "data/projects.json"));
});

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

// About route
app.get("/about", (req, res) => {
  res.render("about");
});

// Projects route (using dynamic data)
app.get("/projects", (req, res) => {
  res.render("projects", { projects: projectsData });
});

// Skills route
app.get("/skills", (req, res) => {
  res.render("skills");
});

// Experience route (using dynamic data)
app.get("/experience", (req, res) => {
  res.render("experience", { experience: experienceData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
