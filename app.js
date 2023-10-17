const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
var url = 'https://samples.openweathermap.org/data/2.5/forecast?q=}';
var appid = 'appid=47f2a111133960a747e1562330e688f7'


app.get('/',(req, res)=>{
    
    let city = req.query.city;
    const request = require('request');
    url = url+city+"&"+appid;
request(url, function (error, response, body) {
    if(response.statusCode === 200){
        let data = JSON.parse(body);
        res.send(`The weather your City  ${city} is ${data.list[0].weather[0].description}`);
    }
});
});


module.exports = app;
