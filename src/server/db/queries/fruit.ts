import { Query } from '../'; 

const all = async () => Query('');
const one = () => Query('', []);
// set? is shorthand to take an object and insert into database vs individual arguments (column : value pairs)
// splits in half for you and puts into table based on object structure.
const insert = (userid, fruit) => Query('INSERT INTO users_fruits (userid, fruit) VALUES (?,?)', [userid, fruit]);
const update = () => Query('', []);
const destroy = () => Query('', []);

export default {
all, 
one, 
insert,
update,
destroy
}
