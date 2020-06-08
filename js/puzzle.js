$(document).ready(function(){

    $('#puzzle-1').on('click', function(){

        $("#modal-1").css('display', 'flex');
        $("#modal-1").css('z-index', '1050');
        // $('.body').css('overflow', 'hidden');
        var modalActive = function(){
            $('#modal-1').addClass('modal-active');
        }
        setTimeout(modalActive, 100);

    })

    $('.modal__close').on('click', function(){

        $('#modal-1').removeClass('modal-active');
        // $('.body').css('overflow', 'initial');
        var modalClose = function(){
            $("#modal-1").css('display', 'none');
            $("#modal-1").css('z-index', '-1');
        }
        setTimeout(modalClose, 100);

    })

})