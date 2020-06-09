$(document).ready(function(){

    anime({
        targets: '.unlimited__bg',
        keyframes:[
            {translateX: 80,
            translateY: -80},
            // {width: 300},
            {translateX: -80},
            {translateY: 80},
            // {width: 400},
            {translateX: 80,
            translateY: 80},
            {translateX: -80,
            translateY: -80},
            // {width: 500}

        ],
        loop: true,
        duration: 5000,
        direction: 'alternate',
        easing: 'linear',
      });
    
})