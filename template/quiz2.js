(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouseover > p');
	$click     = $('.click > span');
	$submit       = $('.submit');
	$timeout   = $('.timeout');

	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this)[0].innerHTML = 'Scrooge McDuck!';
		//$(this).height($(this).height() + 50);
	});

	$click.on('click', function() {
		$(this)[0].innerHTML = 'Peace Out!';
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on('ready', function() {
		setTimeout(function(){
			$timeout.fadeOut('slow');
		}, 10000);
	});
	
	//var title=getCookie('title');
	var title = 'title' + '=';
	var cook = document.cookie.split(';');
	var ret = '';
	for(var i=0; i<cook.length; i++) {
        var c = cook[i];
        while (c.charAt(0)==' '){
			c = c.substring(1);
        }
		if (c.indexOf(title) == 0){
			ret = c.substring(title.length, c.length);
		}
	}
	
   
	
	if(ret != '') {
		var head = document.createElement('H1');
		head.innerHTML = ret;
		head.style.color = 'pink';
		head.style.marginLeft = '45%';
		head.style.marginRight = '45%';
		head.style.width = '10%';
			
		$('#insert').append(head);
	}
	
	
	
	$("#myButton").on('click', function() {
	
		$.getJSON('http://www.mattbowytz.com/simple_api.json?data=quizData', function(data){
		
			maindata = data.data;
			randInd = Math.floor(Math.random() * maindata.length);
			$('#myButton')[0].innerHTML = 'Change It';
			
			
			
			
			if(document.getElementById('insert').hasChildNodes()) {//must replace
				var head = document.createElement('H1');
				head.innerHTML = maindata[randInd];
				head.style.color = 'pink';
				head.style.marginLeft = '45%';
				head.style.marginRight = '45%';
				head.style.width = '10%';
			
				$('#insert > H1').replaceWith(head);
				if($('#keeps').length == 0){
					var btn = document.createElement('BUTTON');
					btn.id = 'keeps';
					btn.innerHTML = 'Keep It';
					btn.style.backgroundColor = 'black';
					btn.style.color = 'white';
					btn.style.marginLeft = '45%';
					btn.style.marginRight = '45%';
					btn.style.width = '10%';
					$('#insert').append(btn);
					
				}
				
			}else{ //can append
				var head = document.createElement('H1');
				head.innerHTML = maindata[randInd];
				head.style.color = 'pink';
				head.style.marginLeft = '45%';
				head.style.marginRight = '45%';
				head.style.width = '10%';
				
				$('#insert').append(head);
				var btn = document.createElement('BUTTON');
				btn.style.marginLeft = '45%';
				btn.style.marginRight = '45%';
				btn.style.width = '10%';
				btn.id = 'keeps';
				btn.innerHTML = 'Keep It';
				btn.style.backgroundColor = 'black';
				btn.style.color = 'white';
				$('#insert').append(btn);
			}
			
		});

		$('#insert').on('click', '#keeps', function() {
			document.cookie = 'title=' + $('#insert > H1')[0].innerHTML + ';'; 

		});
		


		
	});
	
})(jQuery);