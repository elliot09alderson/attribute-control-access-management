import express from "express";
const app = express();
import { port } from "./config/env.js";
import projectRoutes from "./routes/projectRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
app.use(express.json());
app.use("/api/projects", projectRoutes);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
