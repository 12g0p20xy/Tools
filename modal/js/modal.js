
// 弹出框
// 用法：Modal.init('#layer');

var Modal = {

	layer: null,
	closeBtn: null,

	init: function(id) {
	    this.layer = $(id);
		this.closeBtn = this.layer.find('.close-btn');
		Modal.show();
	},

    show: function(){
		this.layer.addClass('show');
		$('body').css('overflow', 'hidden')
			.children().not(this.layer).addClass('blur');
		var _this = this;
		$(document).on('click', function(event) {
			if (event.target == _this.layer[0]) {
				Modal.hide();
			}
		});
		this.closeBtn.on('click', function(){
			Modal.hide();
		});
	},

	hide: function(){
		this.layer.removeClass('show');
		$('body').css('overflow', 'visible')
			.children().not(this.layer).removeClass('blur');
	}
	
};