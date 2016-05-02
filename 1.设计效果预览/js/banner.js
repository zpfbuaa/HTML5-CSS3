/* banner.js - Banner设计脚本, 2012 © yamoo9.com	
---------------------------------------------------------------- */
;(function($){
	$(function() { // $(document).ready(); 文档准备好后运行
		
		var banner_audio= new Audio(),		// 创建Audio.
			 webm = isSupportWebM();	// 检查是否支持webm格式
		banner_audio.src = 'media/banner_sound.mp3';
		/*if(webm) {   //支持webm格式
			banner_audio.src = 'media/banner_sound.webm';
		} else {	// 不支持webm格式
			banner_audio.src = 'media/banner_sound.mp3';
		};*/
		$('.banner')
			.bind('mouseover focusin', function() { // 当发生MouseOver，FocusIn事件时调用处理函数
				banner_audio.load(); // 加载audio
				banner_audio.play(); // 播放audio
			})
			.bind('mouseout focusout', function() { // 当发生MouseOut，FocusOut事件时调用处理函数
				banner_audio.pause(); 			// 暂停audio
				banner_audio.currentTime = 0;	// 初始化audio播放位置
			});
		
	});
})(window.jQuery);

// 检测是否webm格式的函数
function isSupportWebM() {
	var tester = document.createElement('audio');
	return !!tester.canPlayType('audio/webm');
};
