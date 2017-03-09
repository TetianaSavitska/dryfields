function GameController(view){
    this.view = view;
    this.user = this.view.user;
    this.fields = this.view.fields;

    this.waterFieldCb = this.waterField.bind(this);

    this.init()
    this.bindEvents();
}

GameController.prototype.init = function () {
    let _self = this
    // faire disparaitre la fenetre "buy-water-container"
    document.getElementById("close-buy-water").onclick = function () {
        _self.off('hide-buy-water', _self.showBuyWater)
    }
};

GameController.prototype.bindEvents = function(){
   // this.view.on('start-game', this.startGame);
    this.view.on('water-field', this.waterFieldCb);
    this.view.on('collect-harvest', this.collectHarvest);
    this.view.on('buy-water', this.buyWater);
    //this.view.on('show-buy-water', this.buyWater);
};

GameController.prototype.startGame = function(){
    this.bindEvents();
};

GameController.prototype.waterField = function(data){
    if(data.water > 0) {
        this.user.setWater(data.water - 1);
    }
    if ( this.user.water == 0){
        $('#water').css('color', 'red');
    }
    var id = data.fieldId -1;
    this.fields[id].setCistern(data.cistern+1);
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
//collectHarvest(field)
//buyWater()