import express from 'express';
const router = express.Router();
import {index, show} from '../Controllers/posts.js';



router.get('/',index);

router.get('/:id',show);

/*router.post('/',create);

router.delete('/:id',destroy);

router.patch('/:id',modify);*/

export default router;