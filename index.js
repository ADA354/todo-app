import express from "express"; // Import the Express framework
import bodyParser from "body-parser"; // Import body-parser to handle form data
import pg from "pg"; // Import the PostgreSQL client library
import "dotenv/config"; // Import dotenv to load environment variables from a .env file

const app = express(); // Create an instance of Express
const port = 3000; // Define the port number where the server will listen

// Database connection setup 
const db = new pg.Client({
  user: "postgres", // PostgreSQL username
  host: "localhost", // Database server host
  database: "permalist", // The name of the database to connect to
  password: process.env.db_pass, // Retrieve the password from .env file
  port: 5432, // Default PostgreSQL port
});
db.connect(); // Establish a connection to the PostgreSQL database

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser to parse incoming form data (URL-encoded)
app.use(express.static("public")); // Serve static files (like CSS, images, etc.) from the 'public' folder

// Array to store items temporarily (although data is primarily from the database)
let items = [];

// Route to handle the root URL ('/')
app.get("/", async (req, res) => {
  try {
    // Fetch all items from the 'items' table, sorted by 'id' in ascending order
    const result = await db.query("SELECT * FROM items ORDER BY id ASC;");
    items = result.rows; // Store the fetched items in the 'items' array

    // Render the 'index.ejs' template with dynamic values for 'listTitle' and 'listItems'
    res.render("index.ejs", {
      listTitle: "Today", // Static list title for display
      listItems: items, // Pass the items fetched from the database to the view
    });
  } catch (err) {
    console.log(err); 
  }
});

// Route to handle adding a new item
app.post("/add", async (req, res) => {
  const item = req.body.newItem; // Extract the new item from the request body

  try {
    // Insert the new item into the 'items' table
    await db.query("INSERT INTO items (title) VALUES ($1);", [item]);
    res.redirect("/"); 
  } catch (err) {
    console.log(err); 
  }
});

// Route to handle editing an existing item
app.post("/edit", async (req, res) => {
  try {
    // Update the item's title in the 'items' table based on the provided 'id'
    await db.query("UPDATE items SET title = $1 WHERE id = $2;", [
      req.body.updatedItemTitle, // New title for the item
      req.body.updatedItemId, // ID of the item to update
    ]);
    res.redirect("/"); 
  } catch (err) {
    console.log(err); 
  }
});

// Route to handle deleting an item
app.post("/delete", async (req, res) => {
  try {
    // Delete the item from the 'items' table based on the provided 'id'
    await db.query("DELETE FROM items WHERE id = $1;", [req.body.deleteItemId]);
    res.redirect("/"); // After deleting, redirect the user back to the homepage
  } catch (err) {
    console.log(err); 
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Log a message when the server is successfully running
});
