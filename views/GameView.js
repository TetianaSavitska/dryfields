function GameView(user, fields){
    EventEmitter.call(this);
    this.user = user;
    this.fields = fields;

    this.init();
}

GameView.prototype = Object.create(EventEmitter.prototype);
GameView.prototype.constructor = GameView;

GameView.prototype.init = function(){
    //click listeners
};

GameView.prototype.showGame = function(){
    //html of Game
    let content = '<button id="start-game">Play</button>'+
        '<section id="top">' +
            '<span class="show-data" ><span id="harvests">0</span> harvests </span>'+
            '<span class="show-data" id="water">3L</span> '+
            '<span class="show-data" id="money">50$</span> '+
        '</section>' +
        '<section id="fields">';

    for (let ii=1; ii<4; ii++){
        content += '<section class="field-container" id="field' + ii +'">' +
            '<div class="field">'+
                '<button>Water</button>'+
                '<div id="cistern" class="show-water">3L</div>'+
                '<button>Collect</button>'+
            '</div>'+
        '</section>';
    }

    content += '</section>'+
        '<button id="show-buy-water">Buy water</button>';

    document.getElementById('main').innerHTML = content;
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