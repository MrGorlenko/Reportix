$(document).ready(function(){


    var blueFirst = function(){
        $('#blue_first').addClass('blue_width');
        $('#blue_label_first').addClass('blue__label_vis');
    }
    var blueFirstBack = function(){
        $('#blue_first').removeClass('blue_width');
        $('#blue_label_first').removeClass('blue__label_vis');
    }
    var blueSecond = function(){
        $('#blue_second').addClass('blue_width_2');
    }
    var blueSecondLabel = function(){
        $('#blue_label_second').addClass('blue__label_vis');
    }
    var blueThird = function(){
        $('#blue_third').addClass('blue_width_3');
    }
    var blueThirdLabel = function(){
        $('#blue_label_third').addClass('blue__label_vis');
    }
    var logoDown = function(){
        $('.hero__logo').css('top', '0');
        $('.hero__labels').css('opacity', '1');
    }

        if ($(window).width()>576){

            setTimeout(blueFirst, 0);
            setTimeout(blueSecond, 300);
            setTimeout(blueSecondLabel, 500);
            setTimeout(blueThird, 600);
            setTimeout(blueThirdLabel, 800);

        }
        else{
            
            setTimeout(logoDown, 1200);
            setTimeout(blueFirst, 1500);
            setTimeout(blueSecond, 1800);
            setTimeout(blueSecondLabel, 2100);
            setTimeout(blueThird, 2400);
            setTimeout(blueThirdLabel, 2700);
        }

})