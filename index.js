const http = require("http");

const server = http.createServer((req, res) => { 
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write("edho oka roju meru collector avuthaaru babu avutharu.....");
    res.end("evvadu thaggatle.evad acting vaadu chesthunnadu");
});

server.listen(3100, () => { 
    console.log("namasta sir");
});
