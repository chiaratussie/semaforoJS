window.onload = start;

//document.addEventListener('DOMContectLoaded',start);

function 
        cambiarColor(id, prender){
            var color='grey';
            if(prender==true) color =id;
            document.querySelector('#'+id).style.backgroundColor=color
        }
        var estado=0;

        function 
        onBotonCambiar(){
        console.log(estado);
            switch(estado){

                case 0:
                    cambiarColor('red',true);
                    cambiarColor('yellow',false);
                    cambiarColor('green',false);
                break;

                case 1:
                    cambiarColor('red',true);
                    cambiarColor('yellow',true);
                    cambiarColor('green',false);
                break;

                case 2:
                    cambiarColor('red',false);
                    cambiarColor('yellow',false);
                    cambiarColor('green',true);
                break;

                case 3:
                    cambiarColor('red',false);
                    cambiarColor('yellow',true);
                    cambiarColor('green',false);
                break;

                default:
                    cambiarColor('red',false);
                    cambiarColor('yellow',false);
                    cambiarColor('green',false);
                break;
                }

            estado++;

            if (estado>3) 
            estado=0;

        }


            function textoBotonAuto(texto){
                document.querySelector('#boton-auto').innerHTML = texto; 
            }
            textoBotonAuto ('Modo Automatico');
            function ocultarBotonManual(ocultar){
                document.querySelector('#boton-cambiar').style.display=ocultar? 'none':'block';
                textoBotonAuto (ocultar? 'Modo Manual':'Modo Automatico');
            }


            var modoAutomatico=false;
            var refIntervalAuto;

            function  onBotonAuto(){
                modoAutomatico=!modoAutomatico;
                console.log(modoAutomatico);

                    if(modoAutomatico){
                        refIntervalAuto=setInterval(onBotonCambiar,600);
                        //document.querySelector('#boton-cambiar').style.display='none';
                        ocultarBotonManual(true);
                        textoBotonAuto ('Modo Manual');
                    }

                    else{
                        clearInterval(refIntervalAuto);
                        //document.querySelector('#boton-cambiar').style.display='block';
                        ocultarBotonManual(false);
                        textoBotonAuto ('Modo Automatico');
                    }

        }

function start (){
    cambiarColor('red', !true);
    cambiarColor('yellow',false);
    cambiarColor('green',true);

}





        


 

