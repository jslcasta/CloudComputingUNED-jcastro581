var visualRecognitionService = (function () {
    
  	// Service properties
  	var api_key = "ae710865420b1a8e59a8e47ccdc15b56027312b1";
	var service_url = "https://gateway-a.watsonplatform.net/visual-recognition/api";
	var end_point = "v3/classify";
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