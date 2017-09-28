jQuery(document).ready(function() {

	jQuery("#slider1").revolution({
		  
		sliderType : "standard",
		jsFileLocation: "assets/",
		sliderLayout : "auto",
		delay : 9000,
		navigation : {
		
			arrows : {
				enable : true,
				hide_onleave:false
			}
		},
		responsiveLevels : [1240, 1024, 778, 480],
		gridwidth : [1240, 1024, 778, 480],
		gridheight : [1078, 650, 650, 750],
	});
	
});
