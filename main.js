$(document).ready(function(){
    //efecto menu
    $(`.menu a`).each(function(index, elemento){
        $(this).css({
            "top":"-200px"
        });
        $(this).animate({
            top:"0"
        },2000+(index*500));//con esta multiplicacion se va dando un incremento para q vaya cayendo uno tras otro
    });
    //efecto header
    //un condicional porque solo queremos que solo se ejecute en un cierto tamaño de pantalla
    if($(window).width()>800){
        $(`header .contenedorUno .texto`).css({
            opacity:"0",
            marginTop:"0"
        });

        $(`header .contenedorUno .texto`).animate({
            opacity:"1",
            marginTop:"-102px"
        }, 2000);

    }

    //efecto scroll elementos menu
    //iniciamos con variables
    let acercaDe=$("#acerca-de").offset().top,
        menu=$("#platillos").offset().top,
        galeria=$("#galeria").offset().top,
        ubicacion=$("#ubicacion").offset().top;

    
    $("#btn-acerca-de").on("click", function(e){
        e.preventDefault();// para prevenir el error de la almoadilla
        $("html, body").animate({
            scrollTop:acercaDe

        }, 500);

    });
    $("#btn-menu").on("click", function(e){
        e.preventDefault();// para prevenir el error de la almoadilla
        $("html, body").animate({
            scrollTop:menu

        }, 500);

    });

    $("#btn-galeria").on("click", function(e){
        e.preventDefault();// para prevenir el error de la almoadilla
        $("html, body").animate({
            scrollTop:galeria

        }, 500);

    });

    $("#btn-ubicacion").on("click", function(e){
        e.preventDefault();// para prevenir el error de la almoadilla
        $("html, body").animate({
            scrollTop:ubicacion

        }, 500);

    });


});