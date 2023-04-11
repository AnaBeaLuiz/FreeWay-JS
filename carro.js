//codigos dos carros
let yCarros = [40, 96, 152, 210, 262, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial1(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}