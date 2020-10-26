import { Router } from 'express';
import db from "../../db/"

const router = Router(); 

router.post('/', async (req, res) => {
    let fruits = await db.fruit.insert(req.body.userid, req.body.fruit);
    res.send(fruits);
});



export default router; 
