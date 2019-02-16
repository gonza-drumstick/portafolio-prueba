(function () {
	var altura, inicio, contacto, acercaDe, trabajos, htmlYbody;

	function calcularPosiciones() {
		altura 		= $('.menu').offset().top;
		inicio    = $('#inicio').offset().top;
		contacto  = $('#contacto').offset().top;
		acercaDe  = $('#acerca-de').offset().top;
		trabajos  = $('#trabajos').offset().top;
		htmlYbody = $('html, body');
	}

	$(window).on('resize', calcularPosiciones);

	$(document).ready(function() {
		//-----NAVEGACION-----
		calcularPosiciones();
	
		$('#btn-toggle').on('click', function () {
			$('.menu').slideToggle(function () {
				if (!$('.menu').is(':visible')) {
					$('.menu').removeAttr('style');
				}
			});
		});

		$('#btn-inicio').on('click', function(){
			htmlYbody.animate({
				scrollTop: inicio 
			},1500);
		});
	
		$('#btn-contacto').on('click', function(){
			htmlYbody.animate({
				scrollTop: contacto
			},1500);
		});

		$('#btn-acerca-de').on('click', function(){
			htmlYbody.animate({
				scrollTop: acercaDe - 100
			},1500);
		});
					
		$('#btn-trabajos').on('click', function(){
			htmlYbody.animate({
				scrollTop: trabajos - 50
			},1500);
		});

		// -----MENU PEGAJOSO-----			
		var menu = $('.menu');

		$(window).on('scroll', function () {
			if ( $(window).scrollTop() > altura ){
				menu.addClass('menu-fixed');
			} else {
				menu.removeClass('menu-fixed');
			}
		});
	});
})();
