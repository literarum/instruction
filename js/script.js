$('document').ready(function() {
	$('.hover').mousemove(function(e) {
		let tooltip = $(this).attr('data-title');
		$('#tooltip').fadeIn(100).css({
			'left': e.clientX + 15,
			'top': e.clientY + 15,
			'font-size': '20px',
			'border-radius': '5px',
            'border': 'none',
			'background-color': '#fff',
            'background-color': 'rgba(0, 0, 0, .8)',
			'padding': '12px',
			'z-index': '999'
		});
		$('#tooltip').show().text(tooltip);
	}).mouseout(function() {
		$('#tooltip').fadeOut(100);
	});
});