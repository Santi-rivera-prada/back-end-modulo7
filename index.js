import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const PORT = process.env.PORT
const app = express();

app.use(express.json());
app.use(cors())
app.use(router)

app.listen(PORT, () => console.log('Server listening on port ' + PORT))