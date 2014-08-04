(function($) {
	$.fn.popVideo = function(options) {
		return this.each(function() {
				$.extend(options, $.fn.popVideo.defaults);
				var _init = function() {
					$('<div id="pop_video" class="pop-video" style="z-index: 2151; display: none;"><div class="hd"><div class="tit"></div><a id="video_close" class="close" href="javascript:">X</a></div><div id="video_box" class="con"></div></div>').appendTo($('body'));
					$('<div id="_overlay_" style="background-color: rgb(0, 0, 0); border-top-width: 1px; border-top-style: solid; border-top-color: rgb(0, 0, 0); position: absolute; height: 1957px;width: 100%; left: 0px; top: 0px; opacity: 0.7;display:none;z-index:2"></div>').appendTo($('body'));
				};
			if ($('#pop_video,#_overlay_').length < 2) {
				_init();
			}
	});
	}
	$.fn.popVideo.defaults = {

	}
})($)