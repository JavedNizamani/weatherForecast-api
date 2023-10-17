const express = require('express');
const request = require('request');
const app = express();


app.get('/',(req, res)=>{
    let city = req.query.city;
    const request = require('request');
request(`https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=47f2a111133960a747e1562330e688f7`, function (error, response, body) {
    if(response.statusCode === 200){
        let data = JSON.parse(body);
        res.send(`The weather in your City  ${city} is ${data.list[0].weather[0].description}`);
    }
});
});


module.exports = app;