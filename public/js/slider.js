const mapDiv = document.getElementById('map');
console.log(mapDiv.className.split(','));
const coordinates = mapDiv.className.split(',');

mapboxgl.accessToken =
  'pk.eyJ1IjoibWF4aW1taXhhbSIsImEiOiJjbGdjZ2xiaWQweGRpM3BxbHg5ZHhhY3Z5In0.gg2H-X76P4JvwAlmQkA4fA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  projection: 'globe',
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [coordinates[1], coordinates[0]], // starting position [lng, lat]
  zoom: 1, // starting zoom
});

map.on('load', function () {
  map.addLayer({
    id: 'circle-layer',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [coordinates[1], coordinates[0]],
        },
      },
    },
    paint: {
      'circle-radius': {
        base: 5,
        stops: [
          [12, 10],
          [22, 180],
        ],
      },
      'circle-color': '#007cbf',
      'circle-opacity': 0.5,
    },
  });
});
