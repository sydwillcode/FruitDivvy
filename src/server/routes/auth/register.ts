import { Router } from 'express';
import db from '../../db';
import { generateHash } from '../../utils/password';
import * as NodeGeocoder from "node-geocoder"

const router = Router(); 

router.post('/', async (req, res) => {
    try {
        const newUser = req.body; 
        // uses bcrypt library to hash password 
        newUser.password = generateHash(newUser.password);

        const options = {
            provider: 'google',
            // Optional depending on the providers
            apiKey: 'AIzaSyBa6FOxyZS33BgzNn-xmWuq2JPor7cNroQ', // for Mapquest, OpenCage, Google Premier
            formatter: null // 'gpx', 'string', ...
        };
        const geocoder = NodeGeocoder(options);
        // Using callback
        let response = await geocoder.geocode(newUser.address)
        console.log()
        newUser.lat = response[0].latitude
        newUser.lng = response[0].longitude

        const result = await db.users.insert(newUser);
        res.json({ msg: 'New user registered', result })        
    } catch (error) {
            console.log(error); 
            res.status(500).json({msg: 'error user cannot be registered', error})
        }
    
})

// router.get('/', async () => {
//     res.json({data: 'Hello wolrd'})
// })

export default router; 
