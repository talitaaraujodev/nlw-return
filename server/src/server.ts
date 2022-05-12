import express from "express";
import cors from "cors";
import {routes} from "./routes/routes";
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(9000, () => {
  console.log("Server is running port 9000..");
});