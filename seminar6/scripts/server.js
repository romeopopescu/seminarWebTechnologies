const http = require ('http');

const server = http.createServer((req, res)=>{
    //Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); //Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); //Allow methods 
    res.setHeader('Access-Control-Allow-Headers', 'Content-type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204); // No content for preflight response
        res.end();
        return; // Stop further processing for OPTIONS requests
    }
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get('id');

    if(url.pathname === '/get-resource' && id){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({id:id, resource:"Resource for ID " + id}));

    }
    else if (url.pathname === '/post-resource' && req.method === 'POST') {
        let body = '';
        req.on('data', buffer => body += buffer)
        req.on('end', () => {
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(JSON.stringify({message:'POST received', data: body}));
        });
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Resource not found');
    }
});

server.listen(3000, ()=>console.log('The server is runnnig on port 3000...'));