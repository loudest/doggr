function set(selector, value) {
	console.debug( value );
	$( "#debug" ).html( value );
}

$( document ).ready(function() {
	console.debug( "App load" );

  	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(found_location, no_location);
  	} else {
  		no_location();
  	}

	function found_location(position) {
		string = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
		set( "loading", string );
	}

	function no_location() {
		string = "No location service";	
		set( "loading", string );

	}

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
