import express from "express";
import dotenv from "dotenv";

/** IMPORT: ROUTES */
import routes from "./routes/index.js";

/** CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());

/** ROUTES */
app.get("/", (req, res) => res.status(200).json({ message: "Hello world" }));
app.use("/api/v1", routes);

/** RUNNING THE SERVER */
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server is already running on port: ${port}`)
);
