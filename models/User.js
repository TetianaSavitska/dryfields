function User(name){
    EventEmitter.call(this);

    this.name = name;
    this.water = 3;
    this.money = 50;
    this.harvests = 0;
}

User.prototype = Object.create(EventEmitter.prototype);
User.prototype.constructor = User;

User.prototype.setWater = function(water){
    this.water = water;
    this.emit('water-changed', {
        username: this.name,
        water: this.water
    });
};