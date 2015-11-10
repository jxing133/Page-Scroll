jQuery(document).ready(function($) {
	var aimScroll = 0;
	var screenH = 0;
	
	var timeout = false;   
	
	$(window).scroll(function(event) {
		//when scroll finish do:
		if (timeout){clearTimeout(timeout);}   
		// //延迟方法实现当滚动结束后执行函数
   		timeout = setTimeout(function(){   
	        var winScroll = $(window).scrollTop() - aimScroll;
	        var winH = $(window).height();
			// console.log(winScroll);
			// console.log(aimScroll);
			if (winScroll >=50) {
				screenH += winH;
				aimScroll += winH;
				$("html, body").stop().animate({scrollTop: screenH},500);
			}
			else if(winScroll < -50){
				screenH -= winH;
				if (screenH <=0) {
					screenH = 0;
				};
				aimScroll -= winH;
				$("html, body").stop().animate({scrollTop: screenH},500);
			}else {
				
				$("html, body").stop().animate({scrollTop: screenH},500);
			};
	    },100);   

	});
	$(window).resize(function() {
		aimScroll = 0;
		screenH = 0;
		$("html, body").stop().animate({scrollTop: 0},500);
	});
});