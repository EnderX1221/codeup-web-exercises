"use strict";


$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: API_KEY,
    q:     "San Antonio, US"
}).done(function(data) {
    console.log(data);
});

let lat =29.4252;
let long =98.4916;

$.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + API_KEY + "&units=metric").done(function(data) {
    let reports = data.list;
    for(let i = 0; i < reports.length; i += 8) {
        // should get 5 objects back
        console.log(reports[i]);

    }
});
// MapBox
mapboxgl.accessToken = MAPBOX_APPID;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

var marker = new mapboxgl.Marker({
    draggable: true,
    color: "#red"
})
    .setLngLat([-98.600340,29.591680])
    .addTo(map);
var accessToken = YOUR_ACCESS_TOKEN_HERE;

mapboxgl.accessToken = accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
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



