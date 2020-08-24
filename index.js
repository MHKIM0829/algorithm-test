const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/altorithm.route');

app.use(bodyParser.json());
app.use('/', apiRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Start port ${port}`);
});