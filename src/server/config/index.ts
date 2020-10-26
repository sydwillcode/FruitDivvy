import * as dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("No .env file found.");
}

//config to match variables in .env file
// to import use import config.mysql
export default {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  mapsAPI: {
    authorization: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    partnerToken: process.env.mapsAPI_PARTNER_TOKEN,
  },
  secret: process.env.JWT_SECRET,
};
