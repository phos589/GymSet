function initMap() {

var mapContainer = document.getElementById('map-canvas');
if (!mapContainer) {
    console.error("Map container not found.");
    return; 
}


var gymLocation = { lat: 40.7128, lng: -74.0060 }; 


var map = new google.maps.Map(mapContainer, {
    center: gymLocation,
    zoom: 15
});


var marker = new google.maps.Marker({
    position: gymLocation,
    map: map,
    title: 'Gym Location'
});
}