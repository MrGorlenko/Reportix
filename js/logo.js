$(document).ready(function(){

	$('#line-3').addClass('line_active_3');
	$('#line-4').addClass('line_active_4');

	var line_2 = function(){
		$('#line-5').addClass('line_active_5');
		$('#line-2').addClass('line_active_2');
	}
	var line_3 = function(){
		$('#line-6').addClass('line_active_6');
		$('#line-1').addClass('line_active_1');
	}
	var line_4 = function(){
		$('#line-7').addClass('line_active_7');
		$('#line-8').addClass('line_active_8');
		$('#line-9').addClass('line_active_9');
	}
	var line_5 = function(){
		$('#line-10').addClass('line_active_10');
		$('#line-13').addClass('line_active_13');
		$('#line-11').addClass('line_active_11');
		$('#line-12').addClass('line_active_12');
	}

	var label_1 = function(){
		$('.logo__label_investor').addClass('label_visible');
	}

	var label_2 = function(){
		$('.logo__label_founder').addClass('label_visible');
	}

	var label_3 = function(){
		$('.logo__label_team').addClass('label_visible');
	}

	setTimeout(line_2, 200);
	setTimeout(line_3, 400);
	setTimeout(line_4, 600);
	setTimeout(line_5, 800);

	setTimeout(label_1, 900);
	setTimeout(label_2, 900);
	setTimeout(label_3, 900);
	// $('.logo__label_investor').addClass('label_visible');
	// $('.logo__label_founder').addClass('label_visible');
	// $('.logo__label_team').addClass('label_visible');



	// logo__label_investor">Investor</span>
    //         <span class="logo__label logo__label_founder">Founder</span>
    //         <span class="logo__label logo__label_team">Team</


    // var controller = new ScrollMagic.Controller();

    // var ourScene = new ScrollMagic.Scene({
	// 	triggerElement: '#logo'
    // })
    
    // .setClassToggle('#project01', 'fade-in')
    // .addIndicators({
	// 	name: 'fade scene',
	// 	colorTrigger: 'black',
	// 	indent: 100,
	// 	colorStart: '#75C695'
	// }) // this requires a plugin
	// .addTo(controller);

})