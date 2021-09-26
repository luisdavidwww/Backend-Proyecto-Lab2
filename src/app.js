import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import multer from "multer";
import bodyParser from 'body-parser';

import pkg from "../package.json";

import programRoutes from "./routes/program.routes";
import pensumRoutes from "./routes/pensum.routes";
import usersRoutes from "./routes/user.routes";
import fileRoutes from "./routes/file.routes";
import authRoutes from "./routes/auth.routes";

import { createRoles, createAdmin} from "./libs/initialSetup";

const app = express();
createRoles();
createAdmin();

// Coniguraciones
app.set("pkg", pkg);
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 4);

// Middlewares
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
//app.use( multer({ dest: "public/files" }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Welcome Routes
/*app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});*/

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/api/program", programRoutes);
app.use("/api/pensum", pensumRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/file", fileRoutes);
app.use("/api/auth", authRoutes);

app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'));


export default app;
