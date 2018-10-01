$(document).ready(function(){

        //-----NAVEGACION-----

        var inicio    = $('#inicio').offset().top,
        	contacto  = $('#contacto').offset().top,
			acercaDe  = $('#acerca-de').offset().top,
			trabajos  = $('#trabajos').offset().top;
			htmlYbody = $('html, body')

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
        
	        var altura = $('.menu').offset().top;
			var menu = $('.menu');

			
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > altura ){
					menu.addClass('menu-fixed');

				} else {
					menu.removeClass('menu-fixed');
				}
			});
		
	
});
