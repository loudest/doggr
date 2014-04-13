/* I need to be able to make a PARSE call from here. */


function set(selector, value) {
	console.debug( value );
	$( "#debug" ).html( value );
}

$( document ).ready(function() {
	console.debug( "App load" );

	/** location based stuff */
  	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(found_location, no_location);
  	} else {
  		no_location();
  	}

	function found_location(position) {
		string = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
	    $( "#map-canvas" ).html( value ) = "https://maps.googleapis.com/maps/api/staticmap?center="+ position.coords.latitude +","+ position.coords.longitude +"&amp;zoom=11&amp;size=300x300&amp;sensor=false&amp;";
		set( "loading", string );
	}

	function no_location() {
		string = "No location service";	
		set( "loading", string );

	} 

	/** update picture bindings */
	counter = 1;
	img_str = 'https://s3-us-west-2.amazonaws.com/dog-tinder/dog' + counter.toString() +  '.jpg';
	function next_image(){
		if(counter < 13) {
			counter++;
		} else {
			counter = 1;
		}

		img_str = 'https://s3-us-west-2.amazonaws.com/dog-tinder/dog' + counter.toString() +  '.jpg';		
		$( "#profile_img" ).attr('src', img_str);
	}	
	
	/** the okay, info, and no button bindings */
	$( "#no_img" ).click(function() {
		string = "Handler for NO called.";
	  	set( "no_img", string );
		next_image(); 		
	});

	$( "#info_img" ).click(function() {
		string = "Handler for INFO called.";
	  	set( "info_img", string );
	});

	$( "#yes_img" ).click(function() {
		string = "Handler for YES called.";
	  	set( "yes_img", string);
		next_image();
	});
});
