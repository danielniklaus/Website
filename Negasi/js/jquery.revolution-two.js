jQuery(document).ready(function() {
	jQuery("#slider1").revolution({
		sliderType : "standard",
		jsFileLocation: "assets/",
		sliderLayout : "auto",
		delay : 9000,
		navigation : {

			arrows : {
				enable : true,
				hide_onleave : false,
				left : {
					h_align : "right",
					v_align : "center",
					h_offset:60
				},
				right : {
					h_align : "right",
					v_align : "center",
					h_offset:60,
					v_offset:55

				}
			}
		},
		responsiveLevels : [1240, 1024, 778, 480],
		gridwidth : [1240, 1024, 778, 480],
		gridheight : [1002, 800, 700, 700],
	});
});
