(function($){
	$.fn.popVideo=function(options){
		return this.each(function(){
			$.extend(options,$.fn.popVideo.defaults);
		})
	}
})($)