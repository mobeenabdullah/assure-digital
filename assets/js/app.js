//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();

  var Menu = {

    el: {
      ham: $('.menu-icon'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },

    init: function() {
      Menu.bindUIactions();
    },

    bindUIactions: function() {
      Menu.el.ham
          .on(
              'click',
              function(event) {
                Menu.activateMenu(event);
                event.preventDefault();
              }
          );
    },

    activateMenu: function() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
  };

  Menu.init();

  // RIPPLE BUTTON EFFECT
  $('.btn-ripple').on('click', function (event) {
    event.preventDefault();

    var $div = $('<div/>'),
        btnOffset = $(this).offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;



    $div.addClass('ripple-effect');
    var $ripple = $(".ripple-effect");

    $ripple.css("height", $(this).height());
    $ripple.css("width", $(this).height());
    $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

    window.setTimeout(function(){
      $div.remove();
    }, 2000);
  });

  // STAGE BOX HOVER
  $('.stage-box').mouseenter(function () {
    $('.stage-box').removeClass('stage-box-active');
    $(this).addClass('stage-box-active');
  });

  // TESTIMONIAL SLIDER
  $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // CAPABILITIES TRIGGER
  $('.card .btn').click(function () {
    $('.card .btn .accordion-trigger-icon').removeClass('accordion-trigger-icon-active');
    $(' .accordion-trigger-icon', this).toggleClass('accordion-trigger-icon-active');
  });

  $('.contact-form .form-field-group .input-field').focusin(function () {
    var field_length = $(this).val().length;
    if (field_length < 1) {
      $(this).parent().addClass('field-focused');
    }
  });

  $('.contact-form .form-field-group .input-field').focusout(function () {
    var field_length = $(this).val().length;
    if (field_length < 1) {
      $(this).parent().removeClass('field-focused');
    }
  });

});