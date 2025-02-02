console.log("Akshat");
const socket = io(); // This connects to the server
// socket.on("connect", () => {
//     console.log("Connected to server");
// });


if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log("latitude = " + latitude + " longitude = " + longitude);
        socket.emit("send-location",{latitude, longitude});
    }, (error) => {
        console.log(error);
    },
        {
            timeout: 5000,
            enableHighAccuracy: true,
            maximumAge: 0,
        })
}
const map = L.map("map").setView([0,0],10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution: "Akshat Verma"
}).addTo(map);


const marker = {};

socket.on("receive-location",(data)=>{
    const {id,latitude, longitude} = data;
    map.setView([latitude,longitude]);
    if(marker[id]){
        marker[id].setLatLng([latitude,longitude]);
    }else{
        marker[id] = L.marker([latitude,longitude]).addTo(map);
    }
})

socket.on("user-disconnected",(id)=>{
    if(marker[id]){
        map.removeLayer(marker[id]);
        delete marker[id];
    }
})