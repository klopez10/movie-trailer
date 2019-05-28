console.log('OK');

// SCROLLING SECTIONS
$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 1000);
    }
  });
  
// TRAILER
  const player = new Plyr( '#player' , {
    controls: ['play', 'progress', 'fullscreen', 'mute']
  });
  
// COPYRIGHT
  let date = new Date();
  let currentYear = date.getFullYear();
  
  $('footer p span').text( currentYear );
  
  console.log( currentYear );
  console.log( date );