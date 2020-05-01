// require('./printer');
//
// var calc=require('./calc');
//
// console.log(calc.add(4,5));
// console.log(calc.subtract(9,7));

var Game=require('./game');

var elPositions=new Game();
elPositions.showFurry();
elPositions.showCoin();
elPositions.startGame();

document.addEventListener('keydown',function (event) {
    elPositions.turnFurry(event);

});