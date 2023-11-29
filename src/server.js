require('dotenv').config();
const cors = require('cors');
const AWS = require('aws-sdk');

const Cryptr = require('cryptr');
const secretKey = process.env.SECRET_KEY;
const cryptr = new Cryptr(secretKey);
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());


AWS.config.update({
  accessKeyId: 'AKIAVFBPTJUZAH3L4LXW',
  secretAccessKey: '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',
  region: 'us-east-2',
});


const ses = new AWS.SES({ apiVersion: '2010-12-01' });






  


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

app.post('/sendEmail', (req, res) => {

    const recipient = req.body.recipient
    const encryptedText = req.body.text
    const params = {
        Destination: {
          ToAddresses: [recipient],
        },
        Message: {
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: 'Encrypted text: ' + encryptedText,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: 'New encryptor app export',
          },
        },
        Source: 'thomas.t.ca@outlook.com',
      };
      
      ses.sendEmail(params, (err, data) => {
        if (err) {
          console.error('Error sending email:', err);
        } else {
          console.log('Email sent successfully:', data);
        }
      });

});
    


app.listen(port, () =>
{
    console.log("listening on port: " + port)
})