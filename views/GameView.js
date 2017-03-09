function GameView(user, fields) {
    EventEmitter.call(this);
    this.user = user;
    this.fields = fields;

    this.init();
    this.bindEvents();
}

GameView.prototype = Object.create(EventEmitter.prototype);
GameView.prototype.constructor = GameView;

GameView.prototype.bindEvents = function () {
    //from model
    const _self = this;

    this.fields.forEach(function (field) {
        field.on('cistern-changed', _self.showCistern);
        field.on('progress-changed', _self.showProgress)
    });

    _self.user.on('water-changed', _self.showWater);
    _self.user.on('money-changed', _self.showMoney);
    _self.user.on('harvests-changed', _self.showHarvests);
};

GameView.prototype.init = function () {
    //click listeners
    const _self = this;

    //to controller
    document.getElementById('start-game').onclick = function(){
        _self.emit('start-game',  {
            interval: null
        });
    };

    for (let ii=1; ii<= this.fields.length ; ii++) {
        document.getElementById('water-field-'+ii).onclick = function () {
            _self.emit('water-field', {
                fieldId: ii,
                cistern: parseInt(document.getElementById('cistern-'+ii).innerHTML),
                water: parseInt(document.getElementById('water').innerHTML)
            });
        };
        document.getElementById('collect-harvest-'+ii).onclick = function () {
            _self.emit('collect-harvest', {
                fieldId: ii
            });
        };
    }

    //faire apparaitre la fenetre "buy-water-container"
    document.getElementById('show-buy-water').onclick = function () {
        _self.emit('show-buy-water', null);
    };

    // faire disparaitre la fenetre "buy-water-container"
    document.getElementById("close-buy-water").onclick = function () {
        _self.emit('hide-buy-water', null)
    };

    document.getElementById('buy-water-form').onsubmit = function(e){
        e.preventDefault();
        _self.emit('buy-water',  {
            amount: parseInt(document.getElementById('water-input').value)
        });
    };

    document.getElementById('show-buy-water').onclick = function(){
        _self.emit('show-buy-water',  {});
    };

    //faire apparaitre la fenetre "buy-water-container"
    document.getElementById("buy-water-container").onclick = function () {
        _self.emit('show-buy-water', null);
    }

};


GameView.prototype.showCistern = function(data){
    $('#cistern-'+data.id).text(data.cistern);
};

GameView.prototype.showProgress = function(data){
    $('#progress-'+data.id).text(data.progress);
};

GameView.prototype.showWater = function(data){
    $('#water').text(data.water);
};

GameView.prototype.showMoney = function(data){
    document.getElementById('money').innerHTML = data.money;
};

GameView.prototype.showHarvests = function(data){
    $('#harvests').text(data.harvests);
};

GameView.prototype.showGame = function(){
    document.getElementById('game-view').setAttribute('class', 'active');
    document.getElementById('score-view').setAttribute('class', '');
};

    // GameView.prototype.showBuyWater = function () {
    //     let content = '<section id="buy-water-container">' +
    //         '<h3>' +
    //         '<span id="plus"><i class="material-icons">add_circle</i></span> ' +
    //         '<span id="minus"><i class="material-icons">remove_circle</i></span> ' +
    //         '<span id="close"><i class="material-icons">cancel</i></span> ' +
    //         '<span>Buy water</span>' +
    //         '</h3>' +
    //         '<div>' +
    //         '<input type="number" placeholder="0" /> L ' +
    //         '<input type="submit" value="Buy"/>' +
    //         '</div>' +
    //         '</section>';
    //
    //     document.getElementById('main').innerHTML += content;
    // };


