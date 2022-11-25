$('document').ready(function() {
	$('.hover').mousemove(function(e) {
		let tooltip = $(this).attr('data-title');
		$('#tooltip').fadeIn(150).css({
			'left': e.clientX + -25,
			'top': e.clientY + -280,
            'text-align': 'center',
			'font-size': '20px',
			'max-width': '150px',
			'border-radius': '5px',
            'border': 'none',
            'background-color': 'rgba(255, 255, 255, .8)',
			'color': 'rgba(0, 0, 0, .8)',
			'padding': '12px',
			'z-index': '999'
		});
		$('#tooltip').show().text(tooltip);
	}).mouseout(function() {
		$('#tooltip').fadeOut(150);
	});
});