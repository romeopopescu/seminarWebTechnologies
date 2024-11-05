const http = require ('http');

const server = http.createServer((req, res)=>{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get('id');

    if(url.pathname === '/get-resource' && id){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({id:id, resource:"Resource for ID " + id}));

    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Resource not found');
    }
});

server.listen(3000, ()=>console.log('The server is runnnig on port 3000...'));