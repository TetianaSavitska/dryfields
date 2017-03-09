function GameController(view){
    this.view = view;
    this.user = view.user;
    this.fields = view.fields;
    this.init()
    this.bindEvents();
}

GameController.prototype.init = function () {
    let _self = this
    // faire disparaitre la fenetre "buy-water-container"
    document.getElementById("close-buy-water").onclick = function () {
        _self.off('hide-buy-water', _self.showBuyWater)
    }
}

GameController.prototype.bindEvents = function(){
    this.view.on('start-game', this.startGame);
    this.view.on('show-buy-water', this.showBuyWater);
    this.view.on('hide-buy-water', this.hideBuyWater)
};

GameController.prototype.startGame = function(){
    this.view.on('water-field', this.waterField);
    this.view.on('collect-harvest', this.collectHarvest);
    this.view.on('buy-water', this.buyWater);
};

GameController.prototype.waterField = function(field){
    //setWater
    this.user.water -=1;
    //setCistern
    this.fields[field.id].cistern += 1;
};

GameController.prototype.collectHarvest = function(field){

};

GameController.prototype.buyWater = function () {

}

GameController.prototype.showBuyWater = function(){
    document.getElementById('buy-water-container').setAttribute('style', 'display: block')
    //TODO stop the game
};
// GameController.prototype.hideBuyWater = function () {
//     document.getElementById('buy-water-container').setAttribute('style', 'display: none')
//     //TODO restart game
// }

//startGame()
//waterField(field):
//user -1 water
//field +1 water
//collectHarvest(field)
//buyWater()