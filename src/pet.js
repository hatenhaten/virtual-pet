const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGRY_LIMIT = 5;
const WALK_LIMIT = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };

    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };

    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    };
};

Pet.prototype.feed = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };

    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = 0;
    };
};

Pet.prototype.checkUp = function() {
    if ((this.hunger) >= HUNGRY_LIMIT && (this.fitness) <= WALK_LIMIT) {
        return 'I am hungry AND I need a walk';
    } 
    else if (this.hunger >= HUNGRY_LIMIT) {
        return 'I am hungry';
    } 
    else if (this.fitness <= WALK_LIMIT) {
        return 'I need a walk';
    } 
    else {
        return 'I feel great!';
    };
};

Pet.prototype.adoptChild = function(child) {
    this.children.push(child);
};

Pet.prototype.haveBaby = function(name) {
    this.children.push(new Pet(name));
};



module.exports = Pet;