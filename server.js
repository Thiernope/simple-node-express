import express from "express";

const port = process.env.PORT || 3000;
const app = express();

// Define the route path (e.g., "/")
app.get("/", (req, res) => {
  return res.json({
    title: "This is my first app"
  });
});

app.listen(port, () => console.log(`The server has started on port ${port}`));
