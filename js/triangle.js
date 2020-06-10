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

      anime({
          targets: '#pric-1',
          keyframes: [
            {translateY: 60, translateY: 30, rotate: 15}
          ],
          loop: true,
          duration: 1500,
          direction: 'alternate',
          easing: 'linear'
      });

      anime({
        targets: '#pric-2',
        keyframes: [
          {translateY: 60, translateX: 30, rotate: 5}
        ],
        loop: true,
        duration: 4000,
        direction: 'alternate',
        easing: 'linear'
    });

      anime({
        targets: '#pric-3',
        keyframes: [
          {translateY: 60, translateX: 30, rotate: -20}
        ],
        loop: true,
        duration: 3500,
        direction: 'alternate',
        easing: 'linear'
    });

    anime({
        targets: '#pric-4',
        keyframes: [
          {translateY: 45, translateX: 45, rotate: -20}
        ],
        loop: true,
        duration: 2000,
        direction: 'alternate',
        easing: 'linear'
    });

    anime({
        targets: '#pric-5',
        keyframes: [
          {translateY: 50, translateX: -10, rotate: -20}
        ],
        loop: true,
        duration: 4500,
        direction: 'alternate',
        easing: 'linear'
    });

    anime({
        targets: '#pric-7',
        keyframes: [
          {translateY: 60, translateX: 30, rotate: 10}
        ],
        loop: true,
        duration: 2500,
        direction: 'alternate',
        easing: 'linear'
    });

    anime({
        targets: '#pric-8',
        keyframes: [
          {translateY: 30, translateX: 60, rotate: 15}
        ],
        loop: true,
        duration: 4500,
        direction: 'alternate',
        easing: 'linear'
    });

    anime({
      targets: '#pric-9',
      keyframes: [
        {translateY: 20, translateX: 40, rotate: 15}
      ],
      loop: true,
      duration: 4500,
      direction: 'alternate',
      easing: 'linear'
    });

  anime({
      targets: '#pric-10',
      keyframes: [
        {translateY: 15, translateX: 10, rotate: 25}
      ],
      loop: true,
      duration: 5000,
      direction: 'alternate',
      easing: 'linear'
    });

    anime({
      targets: '#pric-11',
      keyframes: [
        {translateY: 10, translateX: 15, rotate: 45}
      ],
      loop: true,
      duration: 5000,
      direction: 'alternate',
      easing: 'linear'
    });

    anime({
      targets: '#pric-12',
      keyframes: [
        {translateY: 20, translateX: 5}
      ],
      loop: true,
      duration: 3000,
      direction: 'alternate',
      easing: 'linear'
    });

    anime({
      targets: '#pric-13',
      keyframes: [
        {translateY: 23, translateX: 10}
      ],
      loop: true,
      duration: 4000,
      direction: 'alternate',
      easing: 'linear'
    });
    
})