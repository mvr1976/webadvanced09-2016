var flipover = (function(){
	var login = $('.login-button'),
		toWelcome = $('.flip-side__nav-link'),
		front = $('.flip-side--front'),
		back = $('.flip-side--back');
	return {
		auth: function(){
			
		login.on('click', function(){		
		front.css('transform','rotateY(-180deg)');		
		back.css('transform','rotateY(0deg)');
		});
		},
		backToWelcome: function(){
		toWelcome.on('click', function(){		
		front.css('transform','rotateY(0deg)');		
		back.css('transform','rotateY(180deg)');		
		});
		},
		slowAppear: function(){
			$(window).on('load', function(){
				$('.flipper__front').animate({				
					top: 0
				},300);
				$('.flipper__back').animate({					
					top: 0
				},300);
			});
		}
	}
}());
flipover.auth();
flipover.backToWelcome();
flipover.slowAppear();

