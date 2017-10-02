function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 16,
	  center: {lat: -22.7436421, lng: -43.4912197}
	});

	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);
}

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(showPosition);
    }
  else {
  	x.innerHTML="O seu navegador não suporta Geolocalização.";
  	}
}
function showPosition(position) {
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude; 
}