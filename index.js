const http = require("http")
const server = http.createServer((res,req)=>{
    res.write("edho oka roju meru collector avuthaaru babu avutharu.....")
    res.end("evvadu thaggatle.evad acting vaadu chesthunnadu")

});
server.listen("3001",()=>{
    console.log("namasta sir")
})