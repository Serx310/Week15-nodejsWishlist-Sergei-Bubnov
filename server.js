const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    response.send('Hello, world');
});





port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})