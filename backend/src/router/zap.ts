import { Router } from "express";
import { authMiddleware } from "../middleware";

const router = Router();
//@ts-ignore
router.post('/', authMiddleware, (req, res) => {

});

//@ts-ignore
router.get('/', authMiddleware, (req, res) => {

});

//@ts-ignore
router.get('/:zapId', authMiddleware,  (req, res) => {

});


export const zapRouter = router;