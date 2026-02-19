import express from 'express';
import {testRouter} from './router.js';

const app = express();

app.use("/", testRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});