import { Request, Response } from "express";


const loginCheck = (req: Request, res: Response, next: () => void) => {


    try {
        const checkLogin = req.cookies;
        if (!checkLogin) {
            res.status(401).json({ error: "Unauthorized Login First" });
        }
        else {
            next();
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }

}

export default loginCheck;