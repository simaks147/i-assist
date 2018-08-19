//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
(function($) {
	$.fn.animated = function(inEffect, offset) {
			offset = offset ? offset : '80%';
			$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
				$(this.element).addClass(inEffect).css("opacity", "1");
			}, {offset: offset});
	};
})(jQuery);