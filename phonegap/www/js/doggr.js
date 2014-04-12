var counter = 1;

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
		
		/* THIS SHOULD NOT BE STUCK IN THIS LOOP. Use for 'YES' and 'NO'. */
		string img_str = 'https://s3-us-west-2.amazonaws.com/dog-tinder/dog' + counter.toString() +  '.jpg';
		$( "#profile_img" ).attr('src', img_str);
		counter++; 		
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
