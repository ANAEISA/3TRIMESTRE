function tocaSom(idElementoAudio){
   document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');
 let contador = 0;
 //Estrutura de repetição - Enquanto
 while(contador <listaDeTeclas.leight){
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_splash');
    };
    contador = contador + 1;
 }