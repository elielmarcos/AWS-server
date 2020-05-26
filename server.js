const express = require('express');

const app = express();

app.get('/', (request,response)=>{
    return response.json({message: 'Server is UP!', hour: Math.round(+new Date()/1000)});
});

app.listen(8000);
