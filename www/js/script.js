// Inicializa as variáveis
var x = document.getElementById("demo");
var lt = -22.7436421;
var ln = -43.4912197;

// Executa a geolocalização
getLocation();

// Verifica se o aparelho suporta Geolocalização
function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  else {
    x.innerHTML="O seu celular não suporta Geolocalização.";
    }
}

// Gera o mapa centralizado na posição atual
function showPosition(position) {
  lt = position.coords.latitude;
  ln = position.coords.longitude;
  console.log(lt + '; ' + ln);
	
  var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 16,
	  center: {lat: lt, lng: ln}
	});

  // Cria a camada de tráfego sobre o mapa.
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);

}