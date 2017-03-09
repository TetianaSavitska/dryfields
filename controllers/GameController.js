function GameController(view){
    this.view = view;
    this.user = view.user;
    this.fields = view.fields;

    this.bindEvents();
}

GameController.prototype.bindEvents = function(){
    this.view.on('start-game', this.startGame);
};

GameController.prototype.startGame = function(){
    this.view.on('water-field', this.waterField);
    this.view.on('collect-harvest', this.collectHarvest);
    this.view.on('buy-water', this.buyWater);
    //this.view.on('show-buy-water', this.buyWater);


};

GameController.prototype.waterField = function(field){
    //setWater
    this.user.water -=1;
    //setCistern
    this.fields[field.id].cistern += 1;
};

GameController.prototype.collectHarvest = function(field){

};

GameController.prototype.buyWater = function(){

};

//startGame()
//waterField(field):
//user -1 water
//field +1 water
//collectHarvest(field)
//buyWater()