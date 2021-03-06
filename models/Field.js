function Field(id){
    EventEmitter.call(this);

    this.id = id;
    this.cistern = 3;
    this.progress = 0;
}

Field.prototype = Object.create(EventEmitter.prototype);
Field.prototype.constructor = Field;

Field.prototype.findFieldById = function(id){

};

Field.prototype.setCistern = function(cistern){
    this.cistern = cistern;
    this.emit('cistern-changed', {
        id: this.id,
        cistern: this.cistern
    });
};

Field.prototype.setProgress = function(progress){
    this.progress = progress;
    this.emit('progress-changed', {
        id: this.id,
        progress: this.progress
    });
};