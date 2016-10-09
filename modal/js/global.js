;(function($){

    // 弹出框
    var $layer = $('.layer'),
		$closeBtn = $layer.find('.close-btn');

	$.extend({
	    modalShow: function(){
			$layer.addClass('show');
			$('main, section, nav').addClass('blur');
			$('body').css('overflow', 'hidden');
			$(document).on('click', function(event) {
				if (event.target == $layer[0]) {
					$.modalHide();
				}
			});
			$closeBtn.on('click', function(){
				$.modalHide();
			});
		},

		modalHide: function(){
			$layer.removeClass('show');
			$('main, section, nav').removeClass('blur');
			$('body').css('overflow', 'visible');
		}
	});
 
})(jQuery);