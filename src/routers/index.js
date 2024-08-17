import { Router } from "express";

import ctrlWrapper from "../utils/ctrlWrapper.js";
import {getBalloonsController} from '../controllers/balloons.js'

const router = Router();

router.get('/balloons', ctrlWrapper(getBalloonsController))

export default router;
