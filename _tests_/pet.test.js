const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido'); 

        expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });

    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.hunger).toEqual(0);
    });

    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increments age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it('increments hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });


    it('stops increasing fitness when it reaches a value of 10', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {

    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');
                pet.hunger = 5;
                pet.feed();

        expect(pet.hunger).toEqual(2);
    });

    it('stops decreasing hunger when it reaches a value 0', () => {
        const pet = new Pet('Fido');
                pet.hunger = 2;
                pet.feed();

        expect(pet.hunger).toEqual(0);
    });
});

describe('checkUp', () => {
    
    it('returns a string stating the pet feels great if hunger <= 5 and fitness >= 3', () => {
        const pet = new Pet('Fido');

        expect(pet.checkUp()).toBe('I feel great!');
    });

    it('returns a string stating the pet needs a walk if fitness <= 3 ', () => {
        const pet = new Pet('Fido');
		pet.fitness = 2;

        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('returns a string stating the pet is hungry if hunger >= 5', () => {
        const pet = new Pet('Fido');
		pet.hunger = 8;

        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('returns a string stating the pet is hungry if hunger >= 5', () => {
        const pet = new Pet('Fido');
        pet.hunger = 8;
        pet.fitness = 2;

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
});

  