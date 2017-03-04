// there is a bug with MENU button .... 

$(document).ready(function(){
    $('.menuBtn').click(function(){
        $('.menu').toggleClass("showMenu");
        $('.menuBtn').toggleClass("open"); 
    });
    $('.menuItems a').click(function(){
        $('.menu').toggleClass("showMenu");
        $('.menuBtn').toggleClass("open");
    })
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var animation = 'easeOutCubic';
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, animation, function(){
            window.location.hash = hash;
      });
    }
  });
})