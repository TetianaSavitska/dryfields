function GameController(view){
    this.view = view;
    this.user = this.view.user;
    this.fields = this.view.fields;

    this.inteval = null;

    this.startGameCb = this.startGame.bind(this);
    this.waterFieldCb = this.waterField.bind(this);
    this.buyWaterCb = this.buyWater.bind(this);
    this.collectHarvestCb = this.collectHarvest.bind(this);

    this.init();
    this.bindEvents();
}

GameController.prototype.init = function () {
    let _self = this;
    // faire disparaitre la fenetre "buy-water-container"
    document.getElementById("close-buy-water").onclick = function () {
        _self.off('hide-buy-water', _self.showBuyWater)
    }
};

GameController.prototype.bindEvents = function(){
    this.view.on('start-game', this.startGameCb);
    this.view.on('water-field', this.waterFieldCb);
    this.view.on('collect-harvest', this.collectHarvestCb);
    this.view.on('buy-water', this.buyWaterCb);
    this.view.on('show-buy-water', this.showBuyWater);
    this.view.on('hide-buy-water', this.hideBuyWater);
};

GameController.prototype.startGame = function(){
    const _self= this;
    _self.interval = setInterval(function(){
        _self.fields.forEach(function(field){
            if(field.cistern > 0){
                field.setCistern(field.cistern - 1);
                field.setProgress(field.progress +1);
            }
        });
    }, 2000);

};

GameController.prototype.waterField = function(data){
    if(data.water > 0) {
        this.user.setWater(data.water - 1);
    }
    if ( this.user.water == 0){
        $('#water').css('color', 'red');
    }
    if(this.user.water > 0){
        const id = data.fieldId -1;
        this.fields[id].setCistern(data.cistern+1);
    }
};

GameController.prototype.collectHarvest = function(data){
    const id = data.fieldId -1;
    if(this.fields[id]){
        
    }
    this.user.setHarvests(this.user.harvests + 1);
};

GameController.prototype.buyWater = function (data) {
    if(this.user.money - data.amount >= 0){
        this.user.setMoney(this.user.money - data.amount);
        this.user.setWater(this.user.water + data.amount);
    }
    if(this.user.money == 0 ){
        $('#money').css('color', 'red');
    }
};

GameController.prototype.showBuyWater = function(){
    $('#buy-water-container').show();
    //TODO stop the game
};
GameController.prototype.hideBuyWater = function () {
    $('#buy-water-container').hide();
    //TODO restart game
};

//collectHarvest(field)
//buyWater()