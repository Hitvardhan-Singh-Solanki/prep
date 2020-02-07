const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(5252, () => {
  console.log('server running on port 5252,');
});
