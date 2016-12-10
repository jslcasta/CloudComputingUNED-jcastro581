var visualRecognitionService = (function () {
    
  	// Service properties
  	var api_key = "ae710865420b1a8e59a8e47ccdc15b56027312b1";
	var service_url = "https://gateway-a.watsonplatform.net/visual-recognition/api";
<<<<<<< Upstream, based on 6ca89a12e2f87ca489aa9368c8223421914d2e0b
	var end_point = "/v3/classify";
=======
	var end_point = "v3/classify";
>>>>>>> c0aff2e js Dir changed. final_url "api/v3" fixed
	var version = "2016-05-20";

	return {
			// This function use the jQuery library to do the request
    		clasiffy: function(image_url, ui_function) {
      			var final_url = service_url + end_point + "?api_key=" + api_key + "&url=" + image_url + "&version=" + version; 
            	$.get( final_url, function( data ) {
					ui_function(data);
				});
    	}
	}

})();