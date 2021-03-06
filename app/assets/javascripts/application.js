// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery3
//= require popper
//= require turbolinks
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require_tree .

document.addEventListener("turbolinks:load", function(){

$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
  });
});


$(function() {
    $('.blog-area1').slick({
        autoplay: true,
        autoplaySpeed: 4000,
    });
});

$(function() {
    $('.blog-area2').slick({
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

$(function() {
    $('.blog-area3').slick({
        autoplay: true,
        autoplaySpeed: 6000,
    });
});
 });


