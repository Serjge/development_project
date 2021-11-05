$(document).ready(function() {
	$('.grid-wedo__title').click(function(event) {
		if ($('.grid-wedo__item').hasClass('one')){
			$('.grid-wedo__title').not($(this)).removeClass('active');
			$('.grid-wedo__text').not($(this).next()).slideUp(300);
		} else {
			
		}
$(this).toggleClass('active').next().slideToggle(300);
	});
}
);