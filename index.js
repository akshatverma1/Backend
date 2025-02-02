const express =  require("express");
const app = express();
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.static("public"));
const socketio = require("socket.io");
const http = require("http");
const SocketServer = http.createServer(app);
const io = socketio(SocketServer);



SocketServer.listen(3000,()=>{
    console.log("Server Is ON");
})

io.on("connection",function(socket){
    console.log("Connected");
    socket.on("send-location",(data)=>{
        io.emit("receive-location",{id:socket.id,...data});
    });
    socket.on("disconnected",(data)=>{
        io.emit("user-disconnected",socket.id);
    });
})
app.get("/akshat",(req,res)=>{
    res.send("Akshat is Live");
})

app.get("/",(req,res)=>{
    res.render("index");
})