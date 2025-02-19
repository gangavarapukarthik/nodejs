const http = require("http");

const server = http.createServer((req, res) => {  // Ensure correct parameter order: req, res
    // Set response header to indicate you're sending plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write("edho oka roju meru collector avuthaaru babu avutharu.....");
    res.end("evvadu thaggatle.evad acting vaadu chesthunnadu");
});

server.listen(3100, () => {  // Ensure the server listens on the correct port
    console.log("namasta sir");
});
