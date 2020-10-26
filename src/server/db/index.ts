import * as mysql from 'mysql';
import config from '../config';
import users from './queries/users';
import fruit from './queries/fruit';
// import tokens from './queries/tokens';

// pool creates and ends the mySQL connection without us having to explicitly write createConnection and end.
// pass the mySQL auth from .env file that is saved in mySQL object in config->index.ts
const pool = mysql.createPool(config.mysql);
console.log('MySQL connection made');

export const Query = <T = any>(query: string , values?: any) => {
    return new Promise<T>((resolve, reject) => {

        const sql = mysql.format(query, values);
        console.log((sql));

        pool.query(sql, (err, results) => {
            if(err) {
                reject(err); 
            } else { 
                resolve(results)
            }
        });
    });
}

export default {
    users, 
    fruit
}