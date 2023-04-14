import express = require('express');

//Express app congi
const app = express();
app.set('port', process.env.PORT || 3000);

//API endpoints
app.get('/', (req, res) => {
    res.send('--GET request--')
});

export default app;