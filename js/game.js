var Furry=require('./furry');
var Coin=require('./coin');
var Game=function () {
    this.board=document.querySelectorAll('#board div');
    this.furry=new Furry();
    this.coin=new Coin();
    this.score=0;
    var self=this;
    this.index=function (x,y) {
        return x+(y*10);
    };
    this.showFurry=function () {
        this.board.forEach(function (element) {
            if (element.classList.contains('furry')){
                self.hideVisibleFurry();
            }
        });
        this.board[this.index(this.furry.x,this.furry.y)].classList.add('furry');
    };
    this.showCoin=function () {
        this.board[this.index(this.coin.x,this.coin.y)].classList.add('coin');
    };
    this.startGame=function () {
        this.idSetInterval=setInterval(function () {
            self.moveFurry();
        },250);
    };
    this.moveFurry=function () {
        if (this.furry.direction==='right'){
            this.furry.x+=1;
            this.gameOver();
        }else if (this.furry.direction==='left'){
            this.furry.x-=1;
            this.gameOver();
        }else if(this.furry.direction==='up'){
            this.furry.y-=1;
            this.gameOver();
        }else if (this.furry.direction==='down'){
            this.furry.y+=1;
            this.gameOver();
        }
        this.showFurry();
        this.checkCoinCollision();

    };
    this.hideVisibleFurry=function () {
        var classSelect=document.querySelector('.furry');
        classSelect.classList.remove('furry');
    };

    this.turnFurry=function (event) {
        switch (event.key) {
            case 'ArrowUp':
                this.furry.direction='up';
                break;
            case 'ArrowDown':
                this.furry.direction='down';
                break;
            case 'ArrowRight':
                this.furry.direction='right';
                break;
            case 'ArrowLeft':
                this.furry.direction='left';
                break;
        }
    };
    this.checkCoinCollision=function () {
        if (this.coin.x===this.furry.x && this.coin.y===this.furry.y){
            this.board.forEach(function (element) {
                if (element.classList.contains('coin')){
                    element.classList.remove('coin');
                }

            });
            this.score++;
            document.querySelector('#score strong').innerText=this.score;
            this.coin=new Coin();
            this.showCoin();
        }

    };

    this.gameOver=function () {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
            clearInterval(this.idSetInterval);
            this.board.forEach(function (element) {
                element.classList.add('invisible');
            });
            document.querySelector('#score div').innerText='YOU LOST!Your score is: '+this.score;
            document.querySelector('#score div').style.fontWeight='700';
            document.querySelector('#score').style.marginTop='300px';
            this.hideVisibleFurry();

        }

    }

};

module.exports=Game;