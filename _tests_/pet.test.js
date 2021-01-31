const Pet = require('../src/pet');

describe('pet', () => {

    let pet;
    beforeEach(() => {
        pet = new Pet('Fido');
    });

    describe('constructor', () => {
        it('returns an object', () => {
            expect(new Pet('Fido')).toBeInstanceOf(Object);
        });
    
        it('sets the name property', () => {
            expect(pet.name).toEqual('Fido');
        });
    
        it('has an initial age of 0, hunger of 0 and fitness of 10', () => {
            expect(pet.age).toEqual(0);
            expect(pet.hunger).toEqual(0);
            expect(pet.fitness).toEqual(10);
        });
    
        it('has an initial children value of an empty array', () => {
            expect(pet.children).toEqual(expect.arrayContaining([]));
        });
    });
    
    describe('growUp', () => {
        it('increments age by 1, hunger by 5 and fitness by 3', () => {
            pet.growUp();
            expect(pet.age).toEqual(1);
            expect(pet.hunger).toEqual(5);
            expect(pet.fitness).toEqual(7);
        });
    
        it('throws an error if the pet is not alive', () => {
            pet.age = 31;
            expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        });
    });
    
    describe('walk', () => {
        it('increases fitness by 4', () => {
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toEqual(8);
        });
    
    
        it('stops increasing fitness when it reaches a value of 10', () => {
            pet.fitness = 8;
            pet.walk();
            expect(pet.fitness).toEqual(10);
        });
    
        it('throws an error if the pet is not alive', () => {
            pet.fitness = 0;
            expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
        });
    });
    
    describe('feed', () => {
        it('decreases hunger by 3', () => {
            pet.hunger = 5;
            pet.feed();
            expect(pet.hunger).toEqual(2);
        });
    
        it('stops decreasing hunger when it reaches a value 0', () => {
            pet.hunger = 2;
            pet.feed();
            expect(pet.hunger).toEqual(0);
        });
    
        it('throws an error if the pet is not alive', () => {
            pet.age = 31;
            expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
    });
    
    describe('checkUp', () => {
        it('returns a string stating the pet feels great if hunger <= 5 and fitness >= 3', () => {
            expect(pet.checkUp()).toBe('I feel great!');
        });
    
        it('returns a string stating the pet needs a walk if fitness <= 3 ', () => {
            pet.fitness = 2;
            expect(pet.checkUp()).toBe('I need a walk');
        });
    
        it('returns a string stating the pet is hungry if hunger >= 5', () => {
            pet.hunger = 8;
            expect(pet.checkUp()).toBe('I am hungry');
        });
    
        it('returns a string stating the pet is hungry if hunger >= 5', () => {
            pet.hunger = 8;
            pet.fitness = 2;
            expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
        });
    });
    
    describe('isAlive', () => {
        it('returns false if hunger > 10', () => {
            pet.hunger = 11;
            expect(pet.isAlive).toBe(false);
        });
    
        it('returns false if age > 30', () => {
            pet.age = 30;
            expect(pet.isAlive).toBe(false);
        });
    
        it('returns false if fitness <= 0', () => {
            pet.fitness = 0;
            expect(pet.isAlive).toBe(false);
        });
        
        it('returns true if hunger > 10  AND fitness < 0 AND age < 30', () => {
            expect(pet.isAlive).toBe(true);
        });
    });
    
    describe('adoptChild', () => {
        let parent;
        let child;
        beforeEach(() => {
            parent = new Pet('Fido');
            child = new Pet('Amelia');
            parent.adoptChild(child);	
        });
        
        it('Adds the child to the children array of the parent', () => {
            expect(parent.children[0]).toBe(child);
        });
    
        it('can access any parameter of the child through the child variable', () => {
            expect(parent.children[0].name).toEqual('Amelia');
        });
    });
    
    describe('haveBaby', () => {
        let parent;
        beforeEach(() => {
            parent = new Pet('Fido');
            parent.haveBaby('Amelia');	
        });
        
        it('creates an instance of pet as a child of the parent', () => {
            expect(parent.children[0]).toBeInstanceOf(Pet);
        });
    
        it('sets the parameter passed to the method as the name of the child', () => {
            expect(parent.children[0].name).toEqual('Amelia');
        });
    });
});

