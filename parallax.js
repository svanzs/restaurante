$(document).ready(function(){
    $(window).scroll(function(){
        let anchoVentana= $(window).width();
        //concidcional para ejecutar el efecto solo en cierto tamaño de pantalla
        if(anchoVentana>800){// el valor de 800 tiene q concordar con uno de los mediaqueries
            let scroll= $(window).scrollTop();
            $("header .contenedorUno .texto").css({
                "transform": "translate(0px,"+ scroll/2 +"%)"
                //los espacios son muy importantes SIEMPRE
            });

            $(".acerca-de article").css({
                "transform": "translate(0px, -"+ scroll/4 +"%)"
                
            });
        }
    });
    $(window).resize(function(){// paraq en menos de 800px no tenga error el efecto
        let ancho=$(window).width();
        if(ancho < 800){
            $(".acerca-de article").css({
                "transform": "translate(0px, 0px)"
            });
        }

    })

});