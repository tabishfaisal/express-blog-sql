import router from './routes/posts.js';
import express from 'express';
const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/posts', router)

app.listen(PORT , ()=>{
    console.log(`server runnning on  PORT ${PORT}`);
    
})

