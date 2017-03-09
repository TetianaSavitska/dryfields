function GameView(user, fields){
    EventEmitter.call(this);
    this.user = user;
    this.fields = fields;

    this.init();
    this.bindEvents();
}

GameView.prototype = Object.create(EventEmitter.prototype);
GameView.prototype.constructor = GameView;

GameView.prototype.bindEvents = function(){
    //from model
    const _self = this;

    this.fields.forEach(function(field){
        field.on('cistern-changed', _self.showCistern);
    });

    _self.user.on('water-changed', _self.showWater);
};

GameView.prototype.init = function(){
    //click listeners
    const _self = this;

    //to controller
    document.getElementById('start-game').onclick = function(){
        _self.emit('start-game',  {});
    };

    for (let ii=1; ii<= this.fields.length ; ii++) {
        document.getElementById('water-field-'+ii).onclick = function () {
            _self.emit('water-field', {
                fieldId: ii,
                cistern: parseInt(document.getElementById('cistern-'+ii).innerHTML),
                water: parseInt(document.getElementById('water').innerHTML)
            });
            console.log('listen-emit' + ii);
            console.log(parseInt(document.getElementById('cistern-'+ii).innerHTML))
        };
        document.getElementById('collect-harvest-'+ii).onclick = function () {
            _self.emit('collect-harvest', {});
        };
    }

    document.getElementById('show-buy-water').onclick = function(){
        _self.emit('show-buy-water',  {});
    };

    //faire apparaitre la fenetre "buy-water-container"
    document.getElementById("buy-water-container").onclick = function () {
        _self.emit('show-buy-water')
    };


};

GameView.prototype.showCistern = function(data){
    $('#cistern-'+data.id).text(data.cistern);
};

GameView.prototype.showWater = function(data){
    $('#water').text(data.water);
};

GameView.prototype.showGame = function(){
    // //html of Game
    // let content = '<button id="start-game">Play</button>'+
    //     '<section id="top">' +
    //         '<span class="show-data" ><span id="harvests">0</span> harvests </span>'+
    //         '<span class="show-data" id="water">3L</span> '+
    //         '<span class="show-data" id="money">50$</span> '+
    //     '</section>' +
    //     '<section id="fields">';
    //
    // for (let ii=1; ii<= this.fields.length ; ii++){
    //     content += '<section class="field-container" id="field' + ii +'">' +
    //         '<div class="field">'+
    //             '<button id="water-field' + ii +'">Water</button>'+
    //             '<div class="show-water"><span id="cistern' + ii +'">3</span>L</div>'+
    //             '<button id="collect-harvest' + ii +'">Collect</button>'+
    //         '</div>'+
    //     '</section>';
    // }
    //
    // content += '</section>'+
    //     '<button id="show-buy-water">Buy water</button>';

   // document.getElementById('main').innerHTML = content;
    document.getElementById('game-view').setAttribute('class', 'active');
    document.getElementById('score-view').setAttribute('class', '');
};

GameView.prototype.showBuyWater = function(){
    let content = '<section id="buy-water-container">' +
            '<h3>' +
                '<span id="plus"><i class="material-icons">add_circle</i></span> ' +
                '<span id="minus"><i class="material-icons">remove_circle</i></span> ' +
                '<span id="close"><i class="material-icons">cancel</i></span> ' +
                '<span>Buy water</span>'+
            '</h3>'+
            '<div>' +
                '<input type="number" placeholder="0" /> L '+
                '<input type="submit" value="Buy"/>'+
            '</div>'+
        '</section>';

    document.getElementById('main').innerHTML+=content;
};



