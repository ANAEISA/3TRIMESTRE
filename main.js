function tocaSom(idElementoAudio){
   document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');
 //Estrutura de repetição - Enquanto
 for(let contador = 0;contador  <listaDeTeclas.lenght;contador++) {
   const tecla= listaDeTeclas[contador];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_ ${instrumento}`;
   tecla.onclick = function(){
      tecla.classList.add('ativa');
      tocaSom(idAudio);
    };
    tecla.onkeydown = function() {
      tecla.classList.add('ativa');
    }
 }