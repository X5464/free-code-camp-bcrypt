'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
let bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

//START_ASYNC -do not remove notes, place code between correct pair of notes.
const hash = bcrypt.hash(myPlaintextPassword, saltRounds, (err,hash) => {
  console.log(hash)
  bcrypt.compare(myPlaintextPassword,hash, (err,res) => {
    console.log(res)
  });
});



//END_ASYNC

//START_SYNC
let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
