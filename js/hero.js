$(document).ready(function(){
    $('#blue_first').addClass('blue_width');
    $('#blue_label_first').addClass('blue__label_vis');


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

    setTimeout(blueSecond, 300);
    setTimeout(blueSecondLabel, 500);
    setTimeout(blueThird, 600);
    setTimeout(blueThirdLabel, 800);

})