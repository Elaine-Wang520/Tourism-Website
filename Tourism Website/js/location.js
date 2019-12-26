jQuery(document).ready(function($){
		$('.scroll_top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); 

		$('.scroll_nav').click(function(){$('html,body').animate({scrollTop:$('.nav').offset().top}, 800);});

		$('.scroll_bottom').click(function(){$('html,body').animate({scrollTop:$('.copyRight').offset().top}, 800);});
});