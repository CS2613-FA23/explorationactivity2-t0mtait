require('dotenv').config();
const cors = require('cors');
const Cryptr = require ('cryptr')
const secretKey = process.env.SECRET_KEY
const cryptr = new Cryptr(secretKey);
const bodyParser = require('body-parser');

const express = require ('express')
const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(cors());


app.post('/encrypt', (req,res) => {
    const ogText = req.body.text
    console.log("encrypting text ", ogText)
    const encryptedText = cryptr.encrypt(ogText)
    console.log("encrypted text ", encryptedText)
    res.json({encryptedText});
});

app.post('/decrypt', (req, res) => {
    const encryptedText = req.body.text
    console.log("decrypting text ", encryptedText)
    const ogText = cryptr.decrypt(encryptedText)
    console.log("decrypted text: ", ogText)
    res.json({ogText});
});

app.listen(port, () =>
{
    console.log("listening on port: " + port)
})