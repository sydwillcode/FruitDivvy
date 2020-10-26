import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const providersData = await db.users.all()
        res.json(providersData)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error', error })
    }
})

export default router;
