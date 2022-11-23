$('document').ready(function() {
	$('.hover').mousemove(function(e) {
		let tooltip = $(this).attr('data-title');
		$('#tooltip').fadeIn(100).css({
			'left': e.clientX + 15,
			'top': e.clientY + 15,
			'font-size': '20px',
			'max-width': '100px',
			'border-radius': '5px',
   'border': 'none',
   'background-color': 'rgba(255, 255, 255, .5)',
			'color': '#fff',
			'padding': '12px',
			'z-index': '999'
		});
		$('#tooltip').show().text(tooltip);
	}).mouseout(function() {
		$('#tooltip').fadeOut(100);
	});
});