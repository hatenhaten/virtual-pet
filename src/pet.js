const MIN_FITNESS = 0;
const MAX_FITNESS = 10;
const MAX_AGE = 30;
const MIN_HUNGER = 0;
const MAX_HUNGER = 10;
const NEEDFOOD_HUNGER = 5;
const NEEDWALK_FITNESS = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
    this.children = [];
};

Pet.prototype = {

    get isAlive() {
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS;
    },

    growUp: function() {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        };
    
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    },

    walk: function() {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        };

        this.fitness <= (MAX_FITNESS - 4) ? this.fitness += 4 : this.fitness = MAX_FITNESS;
    },

    feed: function() {
        if(!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        };

        this.hunger >= (MIN_HUNGER + 3) ? this.hunger -= 3 : this.hunger = MIN_HUNGER;
    },

    checkUp: function() {
        if ((this.hunger) >= NEEDFOOD_HUNGER && (this.fitness) <= NEEDWALK_FITNESS) {
            return 'I am hungry AND I need a walk';
        } 
        else if (this.hunger >= NEEDFOOD_HUNGER) {
            return 'I am hungry';
        } 
        else if (this.fitness <= NEEDWALK_FITNESS) {
            return 'I need a walk';
        } 
        else {
            return 'I feel great!';
        };
    },

    adoptChild: function(child) {
        this.children.push(child);
    },

    haveBaby: function(name) {
        this.children.push(new Pet(name));
    },
};


module.exports = Pet;