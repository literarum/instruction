$('document').ready(function() {
	$('.hover').mousemove(function(e) {
		let tooltip = $(this).attr('data-title');
		$('#tooltip').fadeIn(150).css({
			'left': e.clientX + 10,
			'top': e.clientY + 20,
      		'text-align': 'center',
			'font-size': '20px',
			'max-width': '170px',
			'border-radius': '5px',
      		'border': 'none',
      		'background-color': 'rgba(255, 255, 255, .8)',
			'color': 'rgba(0, 0, 0, .8)',
			'padding': '12px',
			'margin-right': '50px',
			'z-index': '999'
		});
		$('#tooltip').show().text(tooltip);
	}).mouseout(function() {
		$('#tooltip').fadeOut(150);
	});

	$(window).on("scroll", function() {
		if($(window).scrollTop() > 100) {
			$(".header").addClass("active", 1000);
		} else {
		   $(".header").removeClass("active", 1000);
		}
	});
});