$(function () {
  
    $(".topbets__link").click(function (e) {
        e.preventDefault();
        $('#exampleModal_1').arcticmodal();
    });

    $(".topbets__title").click(function (e) {
        e.preventDefault();
        $('#exampleModal_2').arcticmodal();
    });

    $(".reviews__link").click(function (e) {
        e.preventDefault();
        $('#exampleModal_3').arcticmodal();
    });



  $('.hamburger__btn').on('click', function () {
    $('.hamburgerMenu').toggleClass('activeHamburger');
  });

});
