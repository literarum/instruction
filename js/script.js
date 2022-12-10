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

	$(window).on('scroll', function() {
		if($(window).scrollTop() > 100) {
			$('.header, .nav-toggle').addClass('active', 1000);
		} else {
		   $('.header').removeClass('active', 1000);
		}
	});

	$('#input__button').on('click', function() {
		$('#toggle__input').slideToggle(1000);
	})
});

function progressBar() {
	// Узнаем на сколько страница прокручена
	let scroll = document.body.scrollTop || document.documentElement.scrollTop;
	// Узнаем высоту всей страницы
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// Получаем в % на сколько прокручена страница
	let scrolled = scroll / height * 100;

	// Подставляем % прокрутки в ширину нашей линии
	document.getElementById('progressBar').style.width = scrolled + '%';
}

// Запускаем функцию, когда пользователь скроллит
window.addEventListener('scroll', progressBar);