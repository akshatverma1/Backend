console.log("Akshat");
const socket = io(); // This connects to the server
// socket.on("connect", () => {
//     console.log("Connected to server");
// });




let lnglong = {
    "locations": [
        { "latitude": 22.7196, "longitude": 75.8577, "location_name": "Rajwada Palace" },
        { "latitude": 22.7200, "longitude": 75.8580, "location_name": "Chhappan Dukan" },
        { "latitude": 22.7215, "longitude": 75.8592, "location_name": "Sarafa Bazaar" },
        { "latitude": 22.7223, "longitude": 75.8601, "location_name": "Krishnapura Chhatri" },
        { "latitude": 22.7230, "longitude": 75.8615, "location_name": "Lal Bagh Palace" },
        { "latitude": 22.7245, "longitude": 75.8620, "location_name": "Annapurna Temple" },
        { "latitude": 22.7251, "longitude": 75.8633, "location_name": "Geeta Bhawan" },
        { "latitude": 22.7260, "longitude": 75.8645, "location_name": "Bada Ganpati" },
        { "latitude": 22.7272, "longitude": 75.8650, "location_name": "Kanch Mandir" },
        { "latitude": 22.7280, "longitude": 75.8662, "location_name": "Indore Zoo" },
        { "latitude": 22.7291, "longitude": 75.8671, "location_name": "Pipliyapala Regional Park" },
        { "latitude": 22.7300, "longitude": 75.8680, "location_name": "ISKCON Indore" },
        { "latitude": 22.7315, "longitude": 75.8692, "location_name": "Central Museum" },
        { "latitude": 22.7323, "longitude": 75.8701, "location_name": "Gommatgiri" },
        { "latitude": 22.7330, "longitude": 75.8715, "location_name": "Ralamandal Wildlife Sanctuary" },
        { "latitude": 22.7345, "longitude": 75.8720, "location_name": "Town Hall" },
        { "latitude": 22.7351, "longitude": 75.8733, "location_name": "Khajrana Ganesh Temple" },
        { "latitude": 22.7360, "longitude": 75.8745, "location_name": "C21 Mall" },
        { "latitude": 22.7372, "longitude": 75.8750, "location_name": "Treasure Island Mall" },
        { "latitude": 22.7380, "longitude": 75.8762, "location_name": "Vijay Nagar" }
    ]
}

console.log(lnglong.locations[0].latitude);






if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;

        console.log("latitude = " + latitude + " longitude = " + longitude);
        socket.emit("send-location", { latitude, longitude });
    }, (error) => {
        console.log(error);
    },
        {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 0,
        })
}
const map = L.map("map").setView([22, 75], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Akshat Verma"
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: "https://us.123rf.com/450wm/yupiramos/yupiramos1802/yupiramos180210136/95204195-pin-pointer-spot-icon.jpg?ver=6",
    // shadowUrl: 'https://us.123rf.com/450wm/yupiramos/yupiramos1802/yupiramos180210136/95204195-pin-pointer-spot-icon.jpg?ver=6',

    iconSize: [10,20] ,
    // shadowSize: [50, 64], // size of the shadow
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


const marker = {};


const locations = [
    { lat: 22.7196, lng: 75.8577, message: "Rajwada Palace", icon: greenIcon },
    { lat: 22.7206, lng: 75.8654, message: "Indore Junction Railway Station", icon: greenIcon },
    { lat: 22.7130, lng: 75.9180, message: "Khajrana Ganesh Temple", icon: greenIcon },
    { lat: 22.7280, lng: 75.8895, message: "Chhappan Dukan (Food Street)", icon: greenIcon },
    { lat: 22.7189, lng: 75.8596, message: "Sarafa Bazaar", icon: greenIcon },
    { lat: 22.7545, lng: 75.8937, message: "Vijay Nagar", icon: greenIcon },
    { lat: 22.6465, lng: 75.9181, message: "Ralamandal Wildlife Sanctuary", icon: greenIcon },
    { lat: 22.6868, lng: 75.8355, message: "Rajendra Nagar", icon: greenIcon },
    { lat: 22.6986, lng: 75.8798, message: "Pipliyapala Regional Park", icon: greenIcon },
    { lat: 22.7491, lng: 75.9064, message: "MR 10 Road", icon: greenIcon },
    { lat: 22.7519, lng: 75.8896, message: "Malhar Mega Mall", icon: greenIcon },
    { lat: 22.7215, lng: 75.9012, message: "Bombay Hospital Square", icon: greenIcon },
    { lat: 22.7401, lng: 75.8799, message: "A.B. Road", icon: greenIcon },
    { lat: 22.7354, lng: 75.8526, message: "Geeta Bhawan Square", icon: greenIcon },
    { lat: 22.6944, lng: 75.8871, message: "Bengali Square", icon: greenIcon },
    { lat: 22.7712, lng: 75.9189, message: "Super Corridor Road", icon: greenIcon },
    { lat: 22.6804, lng: 75.8747, message: "Rajendra Nagar Main", icon: greenIcon },
    { lat: 22.7172, lng: 75.8979, message: "Patnipura Square", icon: greenIcon },
    { lat: 22.7483, lng: 75.9220, message: "Vishnupuri Colony", icon: greenIcon },
    { lat: 22.6881, lng: 75.8910, message: "Mhow Naka", icon: greenIcon },
    { lat: 22.7566, lng: 75.8943, message: "Scheme 78", icon: greenIcon },
    { lat: 22.7695, lng: 75.8988, message: "Vijay Nagar Square", icon: greenIcon },
    { lat: 22.7381, lng: 75.8579, message: "Old Palasia", icon: greenIcon },
    { lat: 22.7506, lng: 75.8783, message: "Indore Zoo", icon: greenIcon },
    { lat: 22.7034, lng: 75.8931, message: "Janjeerwala Square", icon: greenIcon },
    { lat: 22.7722, lng: 75.9185, message: "Infosys Campus", icon: greenIcon },
    { lat: 22.7069, lng: 75.8914, message: "Navlakha Bus Stand", icon: greenIcon },
    { lat: 22.7241, lng: 75.8645, message: "Bhawarkuan Square", icon: greenIcon },
    { lat: 22.7143, lng: 75.8721, message: "Sudama Nagar", icon: greenIcon },
    { lat: 22.7345, lng: 75.8703, message: "New Palasia", icon: greenIcon },
    { lat: 22.7456, lng: 75.8952, message: "Dewas Naka", icon: greenIcon },
    { lat: 22.7021, lng: 75.9123, message: "Tilak Nagar", icon: greenIcon },
    { lat: 22.7621, lng: 75.9210, message: "Super Corridor Square", icon: greenIcon },
    { lat: 22.6961, lng: 75.8995, message: "Scheme 54", icon: greenIcon },
    { lat: 22.7487, lng: 75.8663, message: "Manik Bagh Road", icon: greenIcon },
    { lat: 22.7688, lng: 75.9015, message: "Apollo DB City", icon: greenIcon },
    { lat: 22.7809, lng: 75.8872, message: "Phoenix Citadel Mall", icon: greenIcon },
    { lat: 22.7181, lng: 75.8580, message: "MG Road", icon: greenIcon },
    { lat: 22.7030, lng: 75.8857, message: "Annapurna Road", icon: greenIcon },
    { lat: 22.7802, lng: 75.8989, message: "TCS Campus", icon: greenIcon },
    { lat: 22.7029, lng: 75.9211, message: "Khandwa Road", icon: greenIcon },
    { lat: 22.6891, lng: 75.9128, message: "IDMR Campus", icon: greenIcon },
    { lat: 22.7321, lng: 75.8719, message: "Sapna Sangeeta", icon: greenIcon },
    { lat: 22.7394, lng: 75.8897, message: "Scheme No. 74", icon: greenIcon },
    { lat: 22.7603, lng: 75.9238, message: "LIG Colony", icon: greenIcon },
    { lat: 22.7425, lng: 75.8570, message: "White Church Colony", icon: greenIcon },
    { lat: 22.7320, lng: 75.8567, message: "Musakhedi Square", icon: greenIcon },
    { lat: 22.6987, lng: 75.8689, message: "Devi Ahilya University", icon: greenIcon },
    { lat: 22.7612, lng: 75.8990, message: "Silicon City", icon: greenIcon },
    { lat: 22.7199, lng: 75.8821, message: "Tukoganj", icon: greenIcon },
    { lat: 22.7741, lng: 75.9110, message: "Super Corridor Phase II", icon: greenIcon },
    { lat: 22.7085, lng: 75.9202, message: "Goyal Vihar", icon: greenIcon },
    { lat: 22.7683, lng: 75.9027, message: "Tulsi Nagar", icon: greenIcon },
    { lat: 22.6901, lng: 75.8920, message: "Malharganj", icon: greenIcon },
    { lat: 22.7384, lng: 75.8843, message: "Yeshwant Club", icon: greenIcon },
    { lat: 22.7581, lng: 75.9011, message: "Aurobindo Square", icon: greenIcon },
    { lat: 22.7187, lng: 75.8632, message: "Bhawar Kuan Police Station", icon: greenIcon },
    { lat: 22.7723, lng: 75.8998, message: "Nipania", icon: greenIcon },
    { lat: 22.7256, lng: 75.8710, message: "Marimata Square", icon: greenIcon },
    { lat: 22.7490, lng: 75.8934, message: "Navodaya Nagar", icon: greenIcon },
    { lat: 22.7832, lng: 75.9201, message: "Truba College Road", icon: greenIcon },
    { lat: 22.6904, lng: 75.8687, message: "Ranjeet Hanuman Temple", icon: greenIcon },
    { lat: 22.7662, lng: 75.9003, message: "Pacific Business Park", icon: greenIcon },
    { lat: 22.7081, lng: 75.8872, message: "Shivaji Vatika", icon: greenIcon },
    { lat: 22.7360, lng: 75.8715, message: "Marimata Temple", icon: greenIcon },
    { lat: 22.7378, lng: 75.8732, message: "Marimata Main Road", icon: greenIcon },
    { lat: 22.7385, lng: 75.8750, message: "Vyas Nagar", icon: greenIcon },
    { lat: 22.7341, lng: 75.8702, message: "Shri Krishna Nagar", icon: greenIcon },
    { lat: 22.7328, lng: 75.8710, message: "Ramkrishna Ashram", icon: greenIcon },
    { lat: 22.7315, lng: 75.8723, message: "Bholenath Temple Marimata", icon: greenIcon },
    { lat: 22.7301, lng: 75.8698, message: "Bhagirathpura", icon: greenIcon },
    { lat: 22.7381, lng: 75.8735, message: "Marimata Square", icon: greenIcon },
    { lat: 22.7357, lng: 75.8728, message: "Shri Ram Colony", icon: greenIcon },
    { lat: 22.7399, lng: 75.8745, message: "Annapurna Nagar", icon: greenIcon },
    { lat: 22.7363, lng: 75.8705, message: "Vijay Shree Colony", icon: greenIcon },
    { lat: 22.7317, lng: 75.8741, message: "Marimata Road Corner", icon: greenIcon },
    { lat: 22.7404, lng: 75.8758, message: "Vinoba Nagar", icon: greenIcon },
    { lat: 22.7330, lng: 75.8718, message: "Ambedkar Chowk Marimata", icon: greenIcon },
    { lat: 22.7348, lng: 75.8740, message: "Kalpana Nagar", icon: greenIcon },
    { lat: 22.7389, lng: 75.8704, message: "Ramakrishna Garden Colony", icon: greenIcon },
    { lat: 22.7312, lng: 75.8735, message: "Marimata Small Park", icon: greenIcon },
    { lat: 22.7345, lng: 75.8697, message: "Sri Aurobindo School Marimata", icon: greenIcon },
    { lat: 22.7401, lng: 75.8749, message: "Navkar Nagar", icon: greenIcon },
    { lat: 22.7324, lng: 75.8730, message: "Nanda Nagar Marimata", icon: greenIcon },
    { lat: 22.7368, lng: 75.8753, message: "Patidar Park", icon: greenIcon },
    { lat: 22.7311, lng: 75.8708, message: "Shiv Mandir Colony", icon: greenIcon },
    { lat: 22.7382, lng: 75.8727, message: "Old Maheshwar Road", icon: greenIcon },
    { lat: 22.7375, lng: 75.8719, message: "Chaitanya Vihar", icon: greenIcon },
    { lat: 22.7352, lng: 75.8701, message: "Marimata Mahakaleshwar Temple", icon: greenIcon },
  
    // Banganga Area Points
    { lat: 22.7462, lng: 75.8893, message: "Banganga Main Square", icon: greenIcon },
    { lat: 22.7456, lng: 75.8905, message: "Shankar Mandir Banganga", icon: greenIcon },
    { lat: 22.7443, lng: 75.8882, message: "Banganga Market", icon: greenIcon },
    { lat: 22.7428, lng: 75.8876, message: "Mahesh Nagar Banganga", icon: greenIcon },
    { lat: 22.7405, lng: 75.8869, message: "Banganga Police Station", icon: greenIcon },
    { lat: 22.7431, lng: 75.8891, message: "Indore Public School Banganga", icon: greenIcon },
    { lat: 22.7468, lng: 75.8920, message: "Shree Ram Colony Banganga", icon: greenIcon },
    { lat: 22.7453, lng: 75.8889, message: "Vinay Nagar Banganga", icon: greenIcon },
    { lat: 22.7485, lng: 75.8915, message: "Neelganga Nagar", icon: greenIcon },
    { lat: 22.7412, lng: 75.8890, message: "Banganga Road Junction", icon: greenIcon },
    { lat: 22.7408, lng: 75.8912, message: "Gayatri Nagar Banganga", icon: greenIcon },
    { lat: 22.7426, lng: 75.8907, message: "Rishi Nagar", icon: greenIcon },
    { lat: 22.7459, lng: 75.8898, message: "Shiv Colony Banganga", icon: greenIcon },
    { lat: 22.7461, lng: 75.8877, message: "Priyanka Nagar Banganga", icon: greenIcon },
    { lat: 22.7481, lng: 75.8902, message: "Mohan Nagar Banganga", icon: greenIcon },
    { lat: 22.7419, lng: 75.8888, message: "Chandrapuri Colony", icon: greenIcon },
    { lat: 22.7442, lng: 75.8906, message: "Maya Nagar Banganga", icon: greenIcon },
  ];
  
  
  locations.forEach(location => {
    L.marker([location.lat, location.lng], { icon: location.icon })
      .addTo(map)
      .bindPopup(location.message);
  });


socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    map.setView([latitude, longitude]);
    
      

    
    if (marker[id]) {
        marker[id].setLatLng([latitude, longitude]);
    } else {
        marker[id] = L.marker([latitude, longitude]).addTo(map);
    }
})


socket.on("user-disconnected", (id) => {
    if (marker[id]) {
        map.removeLayer(marker[id]);
        delete marker[id];
    }
})

