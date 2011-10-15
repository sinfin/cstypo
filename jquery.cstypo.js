;(function($) {
// jednoznakovky,…
$.fn.cstypo = function(options) {
	var opts = $.extend({}, $.fn.cstypo.defaults, options);
	
	return this.each(function() {
		var $this = $(this);
		
		var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
		
		if(o.jednoznaky == true){
			var words = $this.html().split(' ');
			words = jQuery.map(words, function(word, i) {
				if(word.length == 1 && word.match(/([szkvaiouSZKVAIOU])/)){
					return word.replace(/([szkvaiouSZKVAIOU])/, '\$1&nbsp;');
				}else{
					return word + ' ';
				}
			});
			$this.html(words.join(''));
		}
	});
};

// default options
$.fn.cstypo.defaults = {
  jednoznaky:true
};

})(jQuery);