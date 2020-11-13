import {Router} from 'express';

const routes = new Router();


routes.get('/users', (request,response)=>{
    return response.json({messege:'Hello Word'})
});

export default routes;