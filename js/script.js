
$('.toggle').click(function(){

    $(this).next().toggle();
  
  })
  $('.menu__item').on('click', function () {
                  $(this).toggleClass('rotate')
            
 
  });
  
  function header(){
	   if( window.scrollY > 60 ) {
              
			$('.header').addClass('fixed');
			$('.bt-hide').css({'display':'none'});
			$('.language').css({'display':'none'});
			$('.btn__free').css({'display':'block'});


              
            } else{
				$('.header').removeClass('fixed')
				$('.bt-hide').css({'display':'block'});
				$('.language').css({'display':'block'});
				$('.btn__free').css({'display':'none'});


			}
  }


 window.addEventListener('scroll',header);

 var mySwiper = new Swiper ('.slider-main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:false,
    parallax: true,
      slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        el: ".rv-page",
        clickable: true,
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        // when window width is <= 499px
        310: {
            slidesPerView: 1,
          
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
        }
    }
  });
  $('#showNavigationLink').click(function(){

    $('.mobile-container').css({'display':"block"});

  })
  $('.close').click(function(){

    $('.mobile-container').css({'display':"none"});

  })
  $('.accordion-link ').click(function(){

    $(this).next('.footer__navigation').slideToggle( "1000", function() {
        
    });
    
  })