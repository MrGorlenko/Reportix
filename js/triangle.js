$(document).ready(function(){

    anime({
        targets: '.unlimited__bg',
        keyframes:[
            {translateX: 250,},
            {translateY: -150},
            {translateX: 300},
            {translateY: -20},
            {translateX: -520},
            {translateY: 170}
        ],
        loop: true,
        duration: 10000,
        direction: 'alternate',
        easing: 'linear',
      });
    
})