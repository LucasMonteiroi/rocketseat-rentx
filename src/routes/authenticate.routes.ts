import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateUserRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateUserRoutes.post("/login", authenticateUserController.handle);

export { authenticateUserRoutes };
