import express from 'express';
import path from 'path';
import parser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public/dist')));

app.listen(PORT, () => console.log(`Connected to BLS Server ${PORT}`))