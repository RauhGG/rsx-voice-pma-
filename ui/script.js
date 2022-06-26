$(() => {
    $('.vmode').fadeOut(600);
    $('.ricon').fadeOut(600);
    $('.rmode').fadeOut(600);
    window.addEventListener('message', (event) => {
        let v = event.data;
       
        $('.rmode').text(v.radioChannel);
        $('.vmode').text(v.vlevel);

        if (v.clicon) {
            $(".clicon")[0].play();
        }
        if (v.clicoff) {
            $(".clicoff")[0].play();
        }
        
        if (v.hablando == 'show') {
            $('.micicon').css({'box-shadow' : '0vw 0vw 0vw .2vw #fff', 'transform' : 'scale(.9)'});
        } else if (v.hablando == 'hide') {
            $('.micicon').css({'box-shadow' : '0vw 0vw 0vw 0vw #fff', 'transform' : 'scale(1)'});
        }
        if (v.smode == 'trigger') {
             $('.vmode').text(v.vlevel);
            $('.vmode').fadeIn(600);
            setTimeout(() => {
                $('.vmode').fadeOut(600);
            } , 1700);
        }
        if (v.radio) {
            $('.ricon').fadeIn(400);
            $('.micicon').css('top', '49.6vw');
            $('.vmode').css('bottom', '4.38vw');
            $('.rmode').fadeIn(600);
        }
        if (v.radio == false) {
            $('.ricon').fadeOut(400);
            $('.micicon').css('top', '52.2vw');
            $('.vmode').css('bottom', '1.84vw');
            $('.rmode').fadeOut(600);
        }
        if (v.talkingr) {
            $('.ricon').css({'box-shadow' : '0vw 0vw 0vw .2vw #fff', 'transform' : 'scale(.9)'});
        } else {
            $('.ricon').css({'box-shadow' : '0vw 0vw 0vw 0vw #fff', 'transform' : 'scale(1)'});
        }
    });
});