function initMap() {
	
	var position = {lat: 13.715903500362058 , lng: -89.15369868278503}
	var divMapa = new google.maps.Map(document.getElementById('miMapa'), {
		center: position,
		zoom:10
	});

	var marcador_soyapando = new google.maps.Marker({
		position: position,
		map:divMapa,
		title:"campus SOYAPANGO",
		icon: "logo1.png"

	});

	var marcador_antiguoCuscatlan = new google.maps.Marker({
		position: {lat:13.6740048, lng:-89.238955},
		map:divMapa,
		title:"campus ANTIGUO CUSCATLAN",
		icon:"logo1.png"
	});
}

window.onload = initMap;