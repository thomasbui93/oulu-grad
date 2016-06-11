import express from 'express';

import { readAll} from './controllers';

let settingRouter = express.Router();

settingRouter.get('/', readAll);



export default settingRouter;
