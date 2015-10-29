(function($){
	$.fn.accordionToggle = function(options) {
		this.click(function(e){
			e.preventDefault();

			var $accordionContent = this;
			var $next = $(this).next($accordionContent);

			var settings = $.extend({
				speedDown: 400,
				animationDown: 'swing',
				speedUp: 400,
				animationUp: 'swing'
			}, options);

			if(!$next.hasClass('open')) {
				$(this).addClass('active');
				$next.slideDown(settings.speedDown, settings.animationDown);
				$next.addClass('open');
			} else if ($next.hasClass('open')) {
				$(this).removeClass('active');
				$next.slideUp(settings.speedUp, settings.animationUp);
				$next.removeClass('open');
			}else{}

			return this;
		})
	}
}(jQuery));