window.onload = function() {

    const user = new User('Tetiana');

    const field1 = new Field(1);
    const field2 = new Field(2);
    const field3 = new Field(3);
    const fields = [field1, field2, field3];

    const gameView = new GameView(user, fields);
    const gameController = new GameController(gameView);

    const scoreView = new ScoreView();
    const scoreController = new ScoreController();

    /*//gameView.showGame();

    //should be in the view and controller
    document.getElementById('game-view').onclick = function(){
        gameView.showGame();
    };

    document.getElementById('score-view').onclick = function(){
        scoreView.showScore();
    };
*/
};