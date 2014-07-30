function popVideo() {
	this.options = {

	};
	this.create = function() {

	}
}
var proto = {
	attach:function(elements){
	elements || (elements = jQuery(this.options.attach.selector));	
	}
}
popVideo.prototype = proto;
$.fn.popVideo = function(options) {

	options || (options = {});
	return new videopop($.extend(options, {
		attach: this
	}));

}