import express from 'express';
import routes from './routes';
import cors from "cors";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(routes);
app.use(cors);

app.listen(PORT);
