const express = require('express');
const date = require(__dirname+'/getDate.js');
const app = express();

app.use(express.static('public'));


app.get('/', (request, response)=>{
    response.send('Hello, world');
});

app.get('/getdate', (req, res)=> {
    let today = date.getDate();
    res.send(today);

});

app.get('/getweekday', (req, res)=> {
    let weekday = date.getWeekday();
    res.send(weekday);

});

app.get('*', (req, res)=> {
    res.sendFile(__dirname+"/404.html");
});


port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})