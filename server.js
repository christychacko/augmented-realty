// //app = 'tIRJutysBPxUFc2uJfifZw' // *** Dont delete *** this is the pharse for all certificate.

const fs = require('fs');
const key = fs.readFileSync('./cert/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./cert/localhost/localhost.crt');

const express = require('express');
const app = express();
 app.use(express.static('public'))
app.get('/', (req, res, next) => {
   res.status(200).sendFile('/Users/apps/Downloads/Video_Exp'+'/index.html');
  //res.status(200).sendFile(__dirname + '/index.html');
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});


