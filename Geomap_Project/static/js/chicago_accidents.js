var myMap = L.map("map", {
  center: [41.8, -87.6],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: MAP_API_KEY
}).addTo(myMap);


var heat_map = L.map("heat_map", {
  center: [41.8, -87.6],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: MAP_API_KEY
}).addTo(heat_map);

var hit_map = L.map("hit_map", {
  center: [41.8, -87.6],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: MAP_API_KEY
}).addTo(hit_map);

//var newtry = "https://data.cityofchicago.org/resource/85ca-t3if.json?$$app_token={CHI_API_KEY}$limit=2000";



var accident_fatalities = d3.json("fatalities.json", function(data) {    
    const lat = Object.values(data.latitude);
    const long = Object.values(data.longitude);
    console.log(lat);
     for (var i = 0; i < lat.length; i++) {
      L.marker([lat[i], long[i]]).addTo(myMap);
    }
});
    
    


