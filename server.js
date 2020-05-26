const express = require('express');

const app = express();

app.get('/', (request,response)=>{
    return response.json({message: 'Server is UP!'});
});

app.listen(8001);
