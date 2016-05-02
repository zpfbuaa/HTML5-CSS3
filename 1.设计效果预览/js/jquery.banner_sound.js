/* jquery.banner_sound.js - Banner设计 jQuery 插件, 2012 © yamoo9.com
---------------------------------------------------------------- */
;(function($) { // JavaScript自运行函数

	/*	编写jQuery 插件 banner_sound 
	*	$.fn指jQuery.prototype
	*	编写jQuery插件的基本语句
	*/
	$.fn.banner_sound = function(audio_src) { // audio_src : 音频地址
		
		var banner_audio = new Audio(), // 创建Audio对象
			hovered = false;			// 设置hovered检测变量
		
		function isSupportWebM() {		// 检测是否支持webm格式的函数
			var tester = document.createElement('audio');
			return !!tester.canPlayType('audio/webm');
		};
		
		if(isSupportWebM()) {
			banner_audio.src = audio_src + '.webm'; // 浏览器支持webm格式时
		} else {
			banner_audio.src = audio_src + '.mp3';	// 浏览器不支持webm格式时	
		};

		/*	return this.each()
		*   应用到所有被包装成jQuery对象的元素
		*	each()类似于JavaScript的for语句
		*/		
		return this.each(function() {	// 应用到所有jQuery链元素
			$(this)
				.hover(function() { // MouseOver、MouseOut事件处理函数
					if(!hovered) { 	// 当hovered === false时要处理的内容
                        banner_audio.load(); // 加载音源
						banner_audio.play(); // 播放音源
						hovered = true;	// 更改hovered
					}
				}, function() { 	// 当hovered === true时处理的内容
					banner_audio.pause(); // 暂停音源
					banner_audio.currentTime = 0; // 设置音源播放位置为0
					hovered = false;	// 更改hovered
				});
		});
	};
	
})(window.jQuery);

