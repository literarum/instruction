$('ol').on('click', 'li', function() {
	if($(this).css('color') === 'rgb(128, 128, 128)') {
		$(this).css({
		color: 'rgb(0, 85, 23)',
		textDecoration: 'none'
	});
	} else {
		$(this).css({
		color: 'gray',
		textDecoration: 'line-through'
	});
	}	
});

$('ol').on('click', 'span', function(e) {
	e.stopPropagation();
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
});



$('input').on('keypress', function(e) {
	if(e.which === 13) {
		let itemText = $(this).val();
		let semicolon = ';';
		$(this).val('');
		$('ol').append('<li><span><img src="/img/trash.png"></span> ' + itemText + semicolon + '</li>');
	}
});

$('h2').on('click', 'img', function() {
	$('input').slideToggle();
});

$('document').ready(function() {
	$('.hover').mousemove(function(e) {
		let tooltip = $(this).attr('data-title');
		$('#tooltip').fadeIn(100).css({
			'left': e.clientX + 15,
			'top': e.clientY + 15,
			'font-size': '28px',
			'border-radius': '5px',
			'background-color': 'whitesmoke',
			'padding': '12px',
			'z-index': '999'
		});
		$('#tooltip').show().text(tooltip);
	}).mouseout(function() {
		$('#tooltip').fadeOut(100);
	});
});

$('document').ready(function(e) {
	$('input').mouseenter(function() {
		if ($('#trash').css('opacity') === '0') {
			$('#trash').css({
				'opacity': '1'
			});
		};
	});
	$('input').mouseleave(function() {
		if ($('#trash').css('opacity') === '1') {
			$('#trash').css({
				'opacity': '0'
			});
		};
	});
});

$('document').ready(function(e) {
	$('#span').mouseenter(function() {
		if ($('#trash').css('opacity') === '0') {
			$('#trash').css({
				'opacity': '1'
			});
		};
	});
	$('#span').mouseleave(function() {
		if ($('#trash').css('opacity') === '1') {
			$('#trash').css({
				'opacity': '0'
			});
		};
	});
});	

$('#span').on('click', function(e) {
	e.stopPropagation();
	$('li').fadeOut(function() {
		$('li').remove();
	});
}); 



