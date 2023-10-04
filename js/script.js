//dom-pedro-ii.infinityfreeapp.com
function movimento() {
  var img  = document.getElementById('foto-curriculo')
  var x = 0;
  var y = 0;
  
  function moverImg() {
    x += 1;
    y += 1;
    img.style.left = x +'px';
    img.style.top  = y +'px';
  }

  //setInterval(moverImg, 10)
  
  document.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
  
    moverImg();
  })
}

const listaDeFotos = ['img/domPedro-index.jpeg','img/domPedro-curriculo.jpeg','img/domPedro-familia.jpeg','img/domPedroII-1.jpeg','img/domPedroII-2.jpeg']
var indice = 0;

function fotoInicial() {
  let srcFotos = document.getElementById('foto-slide')
  srcFotos.src = listaDeFotos[0]
}

function next() {
  let img = document.getElementById('foto-slide')
  indice = indice + 1;
  if(indice > (listaDeFotos.length - 1)) {
    indice = 0
  }
  img.src = listaDeFotos[indice]
}

function back() {
  let img = document.getElementById('foto-slide')
  indice = indice - 1;
  if(indice < 0) {
    indice = 2
  }
  img.src = listaDeFotos[indice]
}