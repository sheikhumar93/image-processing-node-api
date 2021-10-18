import express from 'express';

const app = express();
const port = 5000;

// start the Express server
app.listen(port, () => {
    console.log(`server started at port ${port}`);
});
