import { Router } from 'express';
import loginRouter from './login';
import registerRouter from './register';
import mapRouter from './map';

const router = Router(); 

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/map', mapRouter);

export default router; 
