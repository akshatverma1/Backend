require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
app.set("view engine",  "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
const socketio = require("socket.io");
const http = require("http");
const SocketServer = http.createServer(app);
const io = socketio(SocketServer);

let productss = {
    "products": [
      {
        "id": 101,
        "name": "Wireless Bluetooth Headphones",
        "category": "Electronics",
        "price": 59.99,
        "currency": "USD",
        "brand": "SoundMax",
        "stock": 120,
        "rating": 4.5,
        "reviews": 354,
        "description": "High-quality wireless Bluetooth headphones with noise-canceling technology and up to 20 hours of battery life.",
        "features": [
          "Bluetooth 5.0",
          "Noise Cancellation",
          "20 Hours Battery Life",
          "Built-in Microphone"
        ],
        "images": ["https://example.com/images/headphone1.jpg"],
        "availability": true
      },
      {
        "id": 102,
        "name": "Smart Fitness Watch",
        "category": "Wearables",
        "price": 89.99,
        "currency": "USD",
        "brand": "FitTech",
        "stock": 75,
        "rating": 4.8,
        "reviews": 500,
        "description": "Stylish smart fitness watch with heart rate monitor, sleep tracking, and multiple workout modes.",
        "features": [
          "Heart Rate Monitor",
          "Sleep Tracking",
          "Water Resistant (50m)",
          "Long Battery Life"
        ],
        "images": ["https://example.com/images/watch1.jpg"],
        "availability": true
      },
      {
        "id": 103,
        "name": "4K Ultra HD Smart TV",
        "category": "Home Appliances",
        "price": 499.99,
        "currency": "USD",
        "brand": "VisionPlus",
        "stock": 50,
        "rating": 4.6,
        "reviews": 700,
        "description": "A 55-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
        "features": ["4K Resolution", "HDR Support", "Smart OS", "Wi-Fi Enabled"],
        "images": ["https://example.com/images/tv1.jpg"],
        "availability": true
      },
      {
        "id": 104,
        "name": "Gaming Laptop",
        "category": "Computers",
        "price": 1199.99,
        "currency": "USD",
        "brand": "GameCore",
        "stock": 30,
        "rating": 4.7,
        "reviews": 220,
        "description": "Powerful gaming laptop with high-performance graphics and fast processing speeds.",
        "features": ["16GB RAM", "512GB SSD", "NVIDIA RTX 3060", "15.6-inch Display"],
        "images": ["https://example.com/images/laptop1.jpg"],
        "availability": true
      },
      {
        "id": 105,
        "name": "Wireless Charging Pad",
        "category": "Accessories",
        "price": 29.99,
        "currency": "USD",
        "brand": "ChargeMate",
        "stock": 200,
        "rating": 4.3,
        "reviews": 400,
        "description": "Fast wireless charging pad compatible with all Qi-enabled devices.",
        "features": ["Fast Charging", "Non-Slip Design", "LED Indicator"],
        "images": ["https://example.com/images/chargingpad1.jpg"],
        "availability": true
      },
      {
        "id": 106,
        "name": "Smartphone with 5G",
        "category": "Mobile Phones",
        "price": 799.99,
        "currency": "USD",
        "brand": "NextPhone",
        "stock": 90,
        "rating": 4.9,
        "reviews": 1500,
        "description": "A flagship smartphone with 5G connectivity, excellent camera, and a stunning display.",
        "features": ["5G Connectivity", "128GB Storage", "Triple Camera", "6.7-inch OLED Display"],
        "images": ["https://example.com/images/phone1.jpg"],
        "availability": true
      },
      {
        "id": 107,
        "name": "Home Security Camera",
        "category": "Smart Home",
        "price": 99.99,
        "currency": "USD",
        "brand": "SecureCam",
        "stock": 150,
        "rating": 4.4,
        "reviews": 600,
        "description": "Full HD home security camera with motion detection and night vision.",
        "features": ["1080p HD", "Night Vision", "Two-Way Audio", "Mobile Alerts"],
        "images": ["https://example.com/images/camera1.jpg"],
        "availability": true
      },
      {
        "id": 108,
        "name": "Electric Kettle",
        "category": "Kitchen Appliances",
        "price": 39.99,
        "currency": "USD",
        "brand": "BrewMaster",
        "stock": 100,
        "rating": 4.2,
        "reviews": 300,
        "description": "1.7L electric kettle with rapid boiling and automatic shut-off.",
        "features": ["1.7L Capacity", "Auto Shut-Off", "Stainless Steel"],
        "images": ["https://example.com/images/kettle1.jpg"],
        "availability": true
      },
      {
        "id": 109,
        "name": "Running Shoes",
        "category": "Footwear",
        "price": 79.99,
        "currency": "USD",
        "brand": "RunMax",
        "stock": 80,
        "rating": 4.6,
        "reviews": 450,
        "description": "Lightweight and comfortable running shoes designed for long-distance runs.",
        "features": ["Breathable Material", "Lightweight", "Shock Absorption"],
        "images": ["https://example.com/images/shoes1.jpg"],
        "availability": true
      },
      {
        "id": 110,
        "name": "Portable Power Bank",
        "category": "Accessories",
        "price": 49.99,
        "currency": "USD",
        "brand": "PowerBoost",
        "stock": 250,
        "rating": 4.7,
        "reviews": 800,
        "description": "High-capacity portable power bank with fast charging capability.",
        "features": ["10000mAh Capacity", "Fast Charging", "Dual USB Ports"],
        "images": ["https://example.com/images/powerbank1.jpg"],
        "availability": true
      }
    ]
  }


  
SocketServer.listen(process.env.PORT, () => {
    console.log("Server Is ON");
})

io.on("connection", function (socket) {
    console.log("Connected");
    socket.on("send-location", (data) => {
        io.emit("receive-location", { id: socket.id, ...data });
    });
    socket.on("disconnected", (data) => {
        io.emit("user-disconnected", socket.id);
    });
})



app.get("/akshat", (req, res) => {
    res.send("Akshat is Live");
})

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/products", (req, res) => {
    res.json({productss});
})