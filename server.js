const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port,(err)=>{
    if(err){
        process.exit(1);
    }
    console.log(`Server Running at PORT : ${port}`);
});