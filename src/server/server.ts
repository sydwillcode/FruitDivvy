//combines main routers from public index and server index
import * as express from "express";
import apiRouter from "./routes";
import * as morgan from "morgan";
import * as path from "path";
import * as cors from "cors";

const app = express();

app.use(cors());
// morgan logs the method request and where its going (get, put, etc and route)
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apiRouter);
// react router routes (front end) will work without interference from express's back end requests and routes & helps w/ refresh
app.use("/", express.static(path.join(__dirname, "../public/")));
app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));
