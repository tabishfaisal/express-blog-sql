import express from 'express';
const router = express.Router();
import {index, show, destroy} from '../Controllers/posts.js';



router.get('/',index);

router.get('/:id',show);

router.delete('/:id',destroy);

/*router.post('/',create);



router.patch('/:id',modify);*/

export default router;