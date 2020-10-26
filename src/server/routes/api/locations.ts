import { Router } from 'express';
import db from "../../db/"

const router = Router(); 

router.get('/', async (req, res) => {
    let locations = await db.users.all();
    res.send(locations);
});



export default router; 
