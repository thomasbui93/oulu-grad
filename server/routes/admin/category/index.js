import express from 'express';

import { readAll, readOne, createOne, updateOne, removeOne, sample} from './controllers';

let categoryRouter = express.Router();

categoryRouter.get('/', readAll);
categoryRouter.get('/:id', readOne);
categoryRouter.post('/', createOne);
categoryRouter.post('/:id', updateOne);
categoryRouter.delete('/:id', removeOne);


export default categoryRouter;