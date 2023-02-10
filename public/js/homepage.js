let latText = document.getElementById('latitude');
let longText = document.getElementById('longitude');

navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  latText.innerText = lat.toFixed(2);
  longText.innerText = long.toFixed(2);
  for (let i = 0; i < 8; i++) {
    let reslat = document.querySelector(`.lat-${i}`).getAttribute('data-lat');
    let reslon = document.querySelector(`.lon-${i}`).getAttribute('data-lon');
    // alert(calcCrow(lat, long, reslat, reslon).toFixed(1));
    let distancevalue = document.querySelector(`.distance-${i}`);
    distancevalue.innerHTML = calcCrow(lat, long, reslat, reslon).toFixed(1);
  }
});

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}
