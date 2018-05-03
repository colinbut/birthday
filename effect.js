$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
	
	$('#play-music').hide();
	$('#present').hide();

		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3').stop();
			// $('#b11').animate({top:240, left: vw-350},500);
			// $('#b22').animate({top:240, left: vw-250},500);
			// $('#b33').animate({top:240, left: vw-150},500);
			// $('#b44').animate({top:240, left: vw-50},500);
			// $('#b55').animate({top:240, left: vw+50},500);
			// $('#b66').animate({top:240, left: vw+150},500);
			// $('#b77').animate({top:240, left: vw+250},500);
		});

		$(this).delay(5000).promise().done(function(){
			turnLightsOn();
		});


	function turnLightsOn() {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).delay(5000).promise().done(function(){
			$('#play-music').fadeIn('slow');
		});
	}

	$('#play-music').click(function(){
		playMusic();
	});
		
	function playMusic() {
		$('#play-music').fadeOut('slow');
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).delay(6000).promise().done(function(){
			decorateWithBanner();
		});	
	}

	function decorateWithBanner() {
		$('.bannar').addClass('bannar-come');
		$(this).delay(6000).promise().done(function(){
			balloonsFlying();
		});
	}

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}

	function balloonsFlying() {
		$('.balloon-border').animate({top:-500},8000);
		$('#b1').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		
		$(this).delay(5000).promise().done(function(){
			cakeFadeIn();
		});
	}

	function cakeFadeIn() {
		$('.cake').fadeIn('slow');
		$(this).delay(3000).promise().done(function(){
			lightCandle();
		});
	}

	function lightCandle() {
		$('.fuego').fadeIn('slow');
		$(this).delay(2000).promise().done(function(){
			wishMessage();
		});
	}

	function wishMessage() {
		vw = $(window).width()/2;

		$('#b1,#b2,#b3').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b11').animate({top:240, left: vw-150},500);
		$('#b22').animate({top:240, left: vw-50},500);
		$('#b33').animate({top:240, left: vw+50},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).delay(3000).promise().done(function(){
			story();
		});
	}

	function story() {
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1500);
			if(i==45){
				$("p:nth-child(44)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
					$('#present').fadeIn('slow');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
	}

	$('#present').click(function(){
		window.location = 'https://presents-app.herokuapp.com/';
	});

});