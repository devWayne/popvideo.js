(function($) {
	$.fn.popVideo = function(options) {
		return this.each(function() {
			$.extend(options, $.fn.popVideo.defaults);
			_init = function() {
				if ($('#pop_video,#_overlay_').length < 2) {
					popWin = $('<div id="pop_video" class="pop-video" style="z-index: 2151; display: none;"><div class="hd"><div class="tit"></div><a id="video_close" class="close" href="javascript:">X</a></div><div id="video_box" class="con"></div></div>').appendTo($('body'));
					overlay = $('<div id="_overlay_" style="background-color: rgb(0, 0, 0); border-top-width: 1px; border-top-style: solid; border-top-color: rgb(0, 0, 0); position: absolute; height: 1957px;width: 100%; left: 0px; top: 0px; opacity: 0.7;display:none;z-index:2"></div>').appendTo($('body'));
				}

			};
			_init();
			playBtn = $('<i class="i-play"></i>').appendTo($(this));
		});
	}
	$.fn.popVideo.defaults = {

	}

	var openFlag = true,
		popWin,
		overlay,
		playBtn,
		closeBtn = $('.close'),
		_utils = {
			togglePop: function() {
				openFlag = !openFlag;
				if (!openFlag) {
					popWin.show();
					overlay.show();


				} else {
					popWin.hide();
					overlay.hide();
				}
			}
		};
		
	$(document).on('click', '.i-play', function(e) {
		e.preventDefault();
		_utils.togglePop();
		var flashUrl = $(this).parent().attr('data-flash-url'),
			title = $(this).parent().attr('title'),
			mHeight = $(window).height(),
			vHtml = '<embed src="' + flashUrl + '" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
		$('#pop_video .tit').html(title);
		$('#video_box').html(vHtml);
	});

	$(document).on('click','.close',function(e){
		e.preventDefault();
		_utils.togglePop();
	})
})($)