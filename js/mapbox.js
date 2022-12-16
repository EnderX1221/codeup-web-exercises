var accessToken = MAPBOX_APPID;

mapboxgl.accessToken = accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-104.9903, 39.7392]
});

var alamoInfo = {
    address: "The Alamo",
    popupHTML: "<p>Remember the Alamo!</p>"
};

function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function(coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
}

placeMarkerAndPopup(alamoInfo, accessToken, map);