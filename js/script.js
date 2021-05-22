
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
