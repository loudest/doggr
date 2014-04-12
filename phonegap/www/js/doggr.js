function set(selector, value) {
	console.debug( value );
	$( "#debug" ).html( value );
}

function success_location() {
	string = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
	set( "loading", string );
}

function failed_location() {
	string = "No locations";
	set( "loading", string );
}

function get_location() {
	navigator.geolocation.getCurrentPosition(success_location, failed_location);
}

$( document ).ready(function() {
	console.debug( "App load" );
	get_location();

	$( "#no_img" ).click(function() {
		string = "Handler for NO called.";
	  	set( "no_img", string );
	});

	$( "#info_img" ).click(function() {
		string = "Handler for INFO called.";
	  	set( "info_img", string );
	});

	$( "#yes_img" ).click(function() {
		string = "Handler for YES called.";
	  	set( "yes_img", string); 
	});
});
