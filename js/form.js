$(document).ready(function(){

    $("#getInTouchForm").submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(event) {
            
            
            $("#getInTouchForm").slideUp(500);
            setTimeout(function(){
                $("#getInTouchForm").html('<h2 class="thanks  form__title">Thank you! Your message has been received</h2>');
                $("#getInTouchForm").slideDown(400);
            }, 500);
        });
        return false;
    });

})