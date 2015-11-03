// Google API Key – AIzaSyCKfjcLEpUCmMzLag352nl5kr8F5HQg-4w
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKfjcLEpUCmMzLag352nl5kr8F5HQg-4w&callback=initMap" async defer></script>

// var map;
// function initMap() {

//   var image = 'marker.png';
//   var beachMarker = new google.maps.Marker({
//       position: {lat: 51.5072, lng: 0.1275},
//       map: map,
//       icon: image
//     });

//   var customMapType = new google.maps.StyledMapType([
//       {
//         stylers: [
//           {saturation:-100},
//           {visibility: 'simplified'}
//         ]
//       },
//       {
//         elementType: 'labels',
//         stylers: [{visibility: 'off'}]
//       },
//       {
//         featureType: 'water',
//         stylers: [{color: '#fcfcfc'}]
//       }
//     ], {
//       name: 'Custom Style'
//   });
//   var customMapTypeId = 'custom_style';

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: {lat: 51.5072, lng: 0.1275},  // London.
//     disableDefaultUI: false,
//     mapTypeControlOptions: {
//       mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
//     }
//   });

//   map.mapTypes.set(customMapTypeId, customMapType);
//   map.setMapTypeId(customMapTypeId);
// }

