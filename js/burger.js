$(document).ready(function(){

    var i = 0;

    $('.burger').on('click', function(){
        i+=1;
        if (i%2 != 0){
            $('.up').addClass('up_active');
            $('.down').addClass('down_active');
            $('.burger').css('height', '2px');

            $('.menu').css('opacity', '1');
            $('.menu').css('z-index', '900')
        }
        else{
            $('.up').removeClass('up_active');
            $('.down').removeClass('down_active');
            $('.burger').css('height', '15px');

            $('.menu').css('opacity', '0');
            $('.menu').css('z-index', '-1')
        }
    })

})