$(function () {
	/*
	$('.content .sideMenu').each(function (index, obj) {
		var self = $(obj);
		var timer = null;

		$(window).bind('scroll', function (event) {
			timer && clearTimeout(timer);
			timer = setTimeout(function () {
				var top = $(document).scrollTop() - 250;
				var limit = top + $(self).height() >= $('div.content').height();
				if (limit) {
					top = $('div.content').height() - $(self).height();
				} else if (top < -4) top = -4;
				self.stop().animate({'top': top}, 500, function () {
				});
			}, 10);
		});
	});
	*/

	$("#accordion").accordion({
		autoHeight: false,
		navigation: true
	});

	$('.ready').click(function(){
		alert("준비중");
	});
	$('.apply').click(function(){
		alert("6월 12일 오후 1시 오픈 예정입니다.");
	});
});