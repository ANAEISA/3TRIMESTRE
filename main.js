function tocaSom(idElementoAudio){
   document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');
 //Estrutura de repetição - Enquanto
 for(let contador = 0;contador<listaDeTeclas.lenght;contador++) {
   const tecla= listaDeTeclas[contador];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`;
   console.log(idAudio);
   console.log(instrumento);

   tecla.onclick = function(){
      tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
      if (evento.code === 'Enter'|| evento.code === 'Space') {
      tecla.classList.add('ativa');
      }
  };
    tecla.onkeydown = function() {
      tecla.classList.remove('ativa');
    };
    console.log(contador);
 };