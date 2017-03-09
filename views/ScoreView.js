function ScoreView(){
    EventEmitter.call(this);

    this.bindEvents();
    this.init();
}

ScoreView.prototype = Object.create(EventEmitter.prototype);
ScoreView.prototype.constructor = ScoreView;

ScoreView.prototype.bindEvents =  function(){
    //this.on('switch-view', function(){});
};

ScoreView.prototype.init = function(){
    //listen to click in order to change views: Game and Scores
    const _self = this;
    document.getElementById('game-view').onclick = function(){
        //_self.emit('switch-view', function(){});
    };
};

ScoreView.prototype.showScore = function(){
    //html of Score
    let content='<table class="table table-striped">' +
            '<tr>' +
                '<th>Player</th>' +
                '<th>Number of harvests</th>' +
            '</tr>' +
            //UserList.forEach(function(user){
            '<tr>' +
                '<td>user.name</td>' +
                '<td>user.nbHarvests</td>' +
            '</tr>' +
            //});
        '</table>';
    document.getElementById('main').innerHTML = content;
    document.getElementById('game-view').setAttribute('class', '');
    document.getElementById('score-view').setAttribute('class', 'active');
};