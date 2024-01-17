// import redis from '@libs/redis';	
import { Obj } from '@typograph/types';

export default async function setDataTable(data: Obj){
    // const valueObj = JSON.stringify(data);
    // console.log('valueObj', valueObj);
    // // verificar melhor estrategia de armazenagem
    // await redis?.set('data', valueObj);
    
    return data;
}