const express = require('express');
const app = express();
const port = 3000;

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/', express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
