$("document").ready(function () {
  $(".hover")
    .mousemove(function (e) {
      let tooltip = $(this).attr("data-title");
      $("#tooltip")
        .fadeIn(150)
        .css({
          left: e.clientX + 10,
          top: e.clientY + 20,
          "text-align": "center",
          "font-size": "20px",
          "max-width": "170px",
          "border-radius": "5px",
          border: "none",
          "background-color": "rgba(255, 255, 255, .8)",
          color: "rgba(0, 0, 0, .8)",
          padding: "12px",
          "margin-right": "50px",
          "z-index": "999",
        });
      $("#tooltip").show().text(tooltip);
    })
    .mouseout(function () {
      $("#tooltip").fadeOut(150);
    });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".header, .nav-toggle").addClass("active", 1000);
    } else {
      $(".header").removeClass("active", 1000);
    }
  });

  $("#input__button").on("click", function () {
    $("#toggle__input").slideToggle(1000);
  });
});

function progressBar() {
  // Узнаем на сколько страница прокручена
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  // Узнаем высоту всей страницы
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // Получаем в % на сколько прокручена страница
  let scrolled = (scroll / height) * 100;

  // Подставляем % прокрутки в ширину нашей линии
  document.getElementById("progressBar").style.width = scrolled + "%";
}

// Запускаем функцию, когда пользователь скроллит
window.addEventListener("scroll", progressBar);


function turnLightOff() {
  let button = document.getElementById('light');
  let container = document.getElementById("container");
  let body = document.getElementById("body");
  let header = document.querySelector("header");
  let clicked = document.getElementById('clicked');
  let dropdown = document.getElementById('dropdown-content');
  let isButtonApplied = false;

  button.addEventListener("click", function () {
    if (isButtonApplied === false) {

		dropdown.style.background = 'rgba(255, 255, 255, .1)';

		setTimeout(() => {
			clicked.style.textShadow = "1px 1px 1px rgba(255, 0, 0, 1)";
			clicked.style.color = 'rgba(255, 255, 255, .5)';
			clicked.style.transition = '1s ease-in-out';
		}, 2500);
		
    	container.style.background = "black";
    	container.style.transition = "background 2.5s ease-in-out";

    	body.style.transition = "color 3.5s ease-in-out";
    	body.style.color = "rgba(255, 0, 0, .6)";

    	header.style.background = "rgba(0, 0, 0, .6";
    	header.style.transition = "2.5s ease-in-out";

    	setTimeout(() => {
        	(body.style.background = "rgba(0, 0, 0, .9)"),
        	(body.style.transition = "background 1s ease-in-out");
      }, 2500);

    	isButtonApplied = true;

    } else if (isButtonApplied === true) {

		setTimeout(() => {
			clicked.style.textShadow = "0 0 10px #fff, 1px 1px 1px #fff";
			clicked.style.color = 'rgba(0, 0, 0, 1)';
			clicked.style.transition = '1s ease-in-out';
		}, 2500);

    	container.style.background = "linear-gradient(90deg, rgba(224, 0, 255, 0.5) -15%, rgba(179, 90, 195, 0.5) 48%, rgba(20, 138, 227, 0.5) 100%)";
    	container.style.transition = "background 2.5s ease-in-out";

    	body.style.color = "rgba(232, 230, 230, 1)";
    	body.style.transition = "color 3.5s ease-in-out";

    	header.style.background = "#d1c3fca5";
    	header.style.transition = "2.5s ease-in-out";

    	setTimeout(() => {
        	(body.style.transition = "background 1s ease-in-out"),
        	(body.style.background =
            "linear-gradient(90deg, rgba(59, 9, 121, 1) -40%, rgba(147, 0, 255, 1) 48%, rgba(207, 0, 255, 0.5) 100%)");
      }, 2500);

    	isButtonApplied = false;
    }
  });
}
turnLightOff();
