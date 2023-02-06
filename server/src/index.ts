import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';


/* CONFIGURACIONES */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors());
app.use(morgan('dev'));

const PORT = process.env.PORT;

app.get('/server', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
    });

app.listen(PORT || 6001, () => {
    console.log('Server started on port 3000');
    });
