const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const path = require('path');
app.use(cors());


app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res) => {

 console.log('Request recieved.')

})




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});