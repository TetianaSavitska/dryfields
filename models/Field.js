function Field(id){
    EventEmitter.call(this);

    this.id = id;
    this.cistern = 3;
    this.progress = 0;
}

Field.prototype = Object.create(EventEmitter.prototype);
Field.prototype.constructor = Field;