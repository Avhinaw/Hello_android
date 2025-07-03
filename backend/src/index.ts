import express from 'express';
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.send("hey there");
});
app.listen(PORT, () => {
    console.log("started");
});