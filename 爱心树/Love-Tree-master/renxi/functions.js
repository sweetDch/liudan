/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = new Date();// 当前时间
    var date = new Date('2024-04-08 03:25:00'); // 替换为你的日期字符串
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000; //计算两个日期之间的时间差（以秒为单位）
	var days = Math.floor(seconds / (3600 * 24));   //计算天数
	seconds = seconds % (3600 * 24);  //计算剩余的秒数，用于计算小时
	var hours = Math.floor(seconds / 3600); //计算小时数/
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);  //计算分钟数
	if (minutes < 10) {
		minutes = "0" + minutes;    //如果小时数小于 10，则在前面添加一个零
	}
	seconds = seconds % 60;  //计算剩余的秒数，用于计算分钟
	if (seconds < 10) {
		seconds = "0" + seconds;    //如果秒数小于 10，则在前面添加一个零
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
