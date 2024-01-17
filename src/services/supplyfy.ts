import axios from 'axios';
import https from 'https';

const SupplyfyApi = axios.create({
  baseURL: process.env.SUPPLYFY_API,
  withCredentials: true,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
}); 

export default SupplyfyApi;