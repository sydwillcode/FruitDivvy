//main file to connect all routes used in routes folder. passed to server.ts

import { Router } from 'express';
import apiRouter from './api';
import authRouter from './auth';

const router = Router(); 

router.use('/api', apiRouter);
router.use('/auth', authRouter)



export default router; 
