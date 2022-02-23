import "reflect-metadata";
import express from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";

import { routes } from "../../../routes/index.routes";
import swaggerFile from "../../../swagger.json";

import "@shared/container";
import "@shared/infra/typeorm";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(errorHandler);

app.listen(3000, () => console.log("Server is running!"));
