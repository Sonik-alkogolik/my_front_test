$(document).ready(function(){


    let navToggle = $('.header_nav');
    let nav = $('#nav');
    let bur = $('.burger')

    navToggle.on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        nav.toggleClass('show');


    });







$("#get_head").click(function() { 
    $('html, body').animate({
        scrollTop: $(".contact").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});



$("#get_head_cont").click(function() { 
    $('html, body').animate({
        scrollTop: $(".contact").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#get_welcome").click(function() { 
    $('html, body').animate({
        scrollTop: $(".contact").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});



});