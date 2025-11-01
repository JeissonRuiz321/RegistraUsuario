// Iinicializar mapa //
var map = L.map('map').setView([4.5709, -74.2973], 6); // Coordenadas iniciales (Colombia)  

// Agregar una capa de mapa (OpenStreetMap) //
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Agregar marcadores para las casas //
var houses = [
    { name: "Casa Moderna", location: [4.6100, -74.0833] },
    { name: "Casa Campestre", location: [6.2442, -75.5812] },
    { name: "Casa de Lujo", location: [3.4372, -76.5225] },
    { name: "Casa Tradicional", location: [10.3910, -75.4794] },
    { name: "Casa Cabaña", location: [4.6100, -74.0833] },
    { name: "Casa de la Vida", location: [6.2442, -75.5812] }
];

// Agregar los marcadores al mapa //
houses.forEach(function(house) {
    L.marker(house.location).addTo(map).bindPopup(house.name);
}); 