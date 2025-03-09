import { Router } from "express";
import { authMiddleware } from "../middleware";
import { SignupSchema } from "../types";

const router = Router();

router.post('/signup', (req, res) => {
    const body = req.body.username;
    const parsedData = SignupSchema.safeParse(body);
    if(!parsedData.success){
        return res.status(411).json({

        });
    }
    
});

router.post('/signin', (req, res) => {
    console.log("Signin Handler");
});

router.get('/user', authMiddleware, (req, res)=> {
    console.log("User signed");
});

export const userRouter = router;