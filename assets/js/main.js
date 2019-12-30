$(document).ready(function () {
  // Student's number
  var a = 0;
  var navbar = document.querySelector('nav')

  $(window).scroll(function () {


    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }

    $(".page").on("click", function () {
      window.scroll(0, 0);
    });

    var elementExists = document.getElementById("counter");
    var re = document.body.contains(elementExists);
    if (re) {
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },

            {

              duration: 3000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }
    }


  });
});