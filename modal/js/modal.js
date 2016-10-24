
// 弹出框
// 用法：Modal.init('#layer');

var Modal = (function() {

	var layer = null,
		closeBtn = null;

    function show() {
		layer.addClass('show');
		$('body').css('overflow', 'hidden')
			.children().not(layer).addClass('blur');
		$(document).on('click', function(event) {
			if (event.target == layer[0]) {
				hide();
			}
		});
		closeBtn.on('click', function(){
			hide();
		});
	}

	function hide() {
		layer.removeClass('show');
		$('body').css('overflow', 'visible')
			.children().not(layer).removeClass('blur');
	}

	return {
		init: function(id) {
		    layer = $(id);
			closeBtn = layer.find('.close-btn');
			show();
		}
	};
	
})();