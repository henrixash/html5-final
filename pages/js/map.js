const map = L.map('map', {
  center: [16.4796, 121.1432],
  zoom: 20
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


const marker = L.marker([16.4796, 121.1432],
  {alt: 'NVSU'}).addTo(map).bindPopup('NVSU Bayombong Campus');

  var popup = L.popup();

  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
  }
  
  map.on('click', onMapClick);

  var circle = L.circle([16.4796, 121.1432], {
    color: '#042550',
    fillColor: '#726eff',
    fillOpacity: 0.2,
    radius: 100
}).addTo(map);