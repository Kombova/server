

const http = require('http')
const path = require('path')
const fs = require('fs');
const PORT = 3000;


const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html')
    const createPath = (page) => path.resolve(__dirname, 'view', `${page}.html`);
    let basePath = '';
    switch (req.url) {
        case '/':
            basePath = createPath('home')
            
            break;
        case '/about-us':
            basePath = createPath('about-us')
            
            break;
    
        default:
            basePath = createPath('error')
            break;
    }

    fs.readFile(basePath,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })


})

server.listen(PORT, 'localhost', (error)=>{
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})









