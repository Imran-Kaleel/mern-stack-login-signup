import express from 'express';

import { signin } from '../controller/signup.js';
import { createUser } from '../controller/createUser.js';

const routes = express.Router();


// routes.post('/signup', signup );
routes.post('/signup', signin );    
routes.post('/createUser', createUser)                            //    {domainname}/api/user/signup                                //    {domainname}/api/user/signup

export default routes;