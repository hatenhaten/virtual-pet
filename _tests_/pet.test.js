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

    it('has an initial children value of an empty array', () => {
        const pet = new Pet('Fido');

        expect(pet.children).toEqual(expect.arrayContaining([]));
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

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 31;

        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
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

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;

        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
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

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 31;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
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

describe('isAlive', () => {
    

    it('returns false if hunger > 10', () => {
        const pet = new Pet('Fido');
		pet.hunger = 11;

        expect(pet.isAlive).toBe(false);
    });

    it('returns false if age > 30', () => {
        const pet = new Pet('Fido');
		pet.age = 30;

        expect(pet.isAlive).toBe(false);
    });

    it('returns false if fitness <= 0', () => {
        const pet = new Pet('Fido');
		pet.fitness = 0;

        expect(pet.isAlive).toBe(false);
    });
    
    it('returns true if hunger > 10  AND fitness < 0 AND age < 30', () => {
        const pet = new Pet('Fido');

        expect(pet.isAlive).toBe(true);
    });
});

describe('adoptChild', () => {
    
    it('Adds the child to the children array of the parent', () => {
        const parent = new Pet('Fido');
        const child = new Pet('Amelia');
		parent.adoptChild(child);	

        expect(parent.children[0]).toBe(child);
    });

    it('can access any parameter of the child through the child variable', () => {
        const parent = new Pet('Fido');
        const child = new Pet('Amelia');
		parent.adoptChild(child);	

        expect(parent.children[0].name).toEqual('Amelia');
    });
});

describe('haveBaby', () => {
    
    it('creates an instance of pet as a child of the parent', () => {
        const parent = new Pet('Fido');
		parent.haveBaby('Amelia');	

        expect(parent.children[0]).toBeInstanceOf(Pet);
    });

    it('sets the parameter passed to the method as the name of the child', () => {
        const parent = new Pet('Fido');
        parent.haveBaby('Amelia');

        expect(parent.children[0].name).toEqual('Amelia');
    });
});