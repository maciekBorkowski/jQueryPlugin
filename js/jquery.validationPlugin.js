(function($) {

	$.fn.regexTest = function(options) {
		var pattern = new RegExp(options.pattern);
		this.each(function() {
			if(!pattern.test(this.value)) {
				$(this).addClass('error');
			} else {
				if($(this).hasClass('error')){
					$(this).removeClass('error');
				}
			}
		});
		return this;
	};

	$.fn.checkEmail = function(options) {
		var pattern;
		if(typeof(options) !== 'undefined' && typeof(options.pattern) !== 'undefined'){
			pattern = new RegExp(options.pattern);
		} else {
			pattern = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$");
		}
		this.each(function() {
			if(!pattern.test(this.value)) {
				$(this).addClass('error');
			} else {
				if($(this).hasClass('error')){
					$(this).removeClass('error');
				}
			}
		});
		return this;
	};

})(jQuery);