import * as express from "express";
import movieRouter from "./moviesRoutes";
const router = express.Router();

router.use("/movies", movieRouter);

export default router;