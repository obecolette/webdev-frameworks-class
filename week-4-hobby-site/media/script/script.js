$(document).ready(function(){

	$(window).scroll(function() {
	
		if ($(this).scrollTop() > 200){
			console.log("test");
			$(".navigation").addClass("fixed");
		} else{
			$(".navigation").removeClass("fixed");
		}

	});

	var waypoints = $('figure').waypoint({
	  	handler: function(direction) {
			console.log("waypoint");
	    	
	    	$(this.element).animate({
	    		opacity: "1"
	    	}, {
	    		duration: 800
	    	});
	  	},
	  	offset: "80%"
	})

});