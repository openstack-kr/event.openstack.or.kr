(function ($) {
    "use strict";

    $('.color-trigger').on('click', function () {
        $(this).parent().toggleClass('visible-palate');
    });
	
	var layoutChangerBtn = $(".color-palate .box-version li");
	var body = $("body");
	layoutChangerBtn.on("click", function(e) {
        var $this = $(this);
        if ( $this.hasClass("box") ) {
            body.addClass("box-layout");
        } else {
        	body.removeClass("box-layout");
    	};
	});


	var directionChanger = $(".color-palate .rtl-version li");
	var wrapper = $(".page-wrapper");
	directionChanger.on("click", function(e) {
        var $this = $(this);
        if ( $this.hasClass("rtl") ) {
            wrapper.addClass("rtl");
        } else {
        	wrapper.removeClass("rtl");
    	};
	});



}(jQuery));