

$(document).ready(function(){

  $(".mobile-menu-icon.fa-bars").click(function(){
        $(".hidden-mobile").slideDown();
    });


    $(".mobile-menu-icon.fa-times").click(function(){
        $(".hidden-mobile").slideUp();
    });

      $('select').niceSelect();





$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});


    $(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link2');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
        }
    };

    var accordion = new Accordion($('#accordion'), false);
});


$(document).ready(function() {
			$("#content-slider").lightSlider({
                loop:true,
                keyPress:true
            });
            $('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }
            });
		});

    $(".smooth-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#how-mrent-works").offset().top
    }, 2000);
});

  $('.slider').bxSlider({adaptiveHeight:true, mode:'horizontal', auto:true, speed: 2000,  pause: 8000});

$("#owl-demo").owlCarousel({

      items : 4,
    	itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],

      });

});

