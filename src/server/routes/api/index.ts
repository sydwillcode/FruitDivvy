// main router for api routes. sent to index.ts for routes folder.

import { Router } from 'express';
import locationsRouter from './locations';
import welcomeRouter from './welcome';
import fruitsRouter from './fruits';


const router = Router(); 

router.use('/locations', locationsRouter); 
router.use('/welcome', welcomeRouter);
router.use('/fruits', fruitsRouter);

export default router; 
