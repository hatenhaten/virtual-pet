# Virtual Pet

Who needs real pets when you can create them in JavaScript!

The pets have the following features:
- You can give them a name
- They can get older
- As they get older, they get hungrier and less fit
- You can walk your pet to increase it's fitness.
- You can feed your pet to decrease it's hunger.
- You can talk to your pet to see if it needs feeding or walking
- If your pet gets too hungry or unfit, it will DIE
- If your pet gets to 30 days old it will DIE
- Your pet can also adopt or have its own children

## Getting Started

Fork and clone the repo.

### Prerequisites

You need a unix based system (Mac OS or Linux) to run the programme in the terminal. You could also copy and paste the code into the browser.

### Installing

Fork and Clone the repo.

Install node.js [Download here](https://nodejs.org/en/)

Move into the virtual-pet directory through the terminal.

Enter:

```javascript
node
```
into the terminal.

We then need to import thr functionality into node using:

```javascript
const Pet = require('.src/pet')
```

## Deployment

To create a new Pet:

```javascript
> const pet = new Pet('petname');
```

Your pet has the following attributes which can be accessed by typing Pet.attribute:

```javascript
name,
age,
hunger,
fitness,
children
```

To age your Pet:

```javascript
> pet.growUp;
```

Your pet also gets unhealthier and hungrier as they age so keep track of their attributes!

To check if your pet needs anything use:

```javascript
> pet.checkUp();
```
It will let you know.

To take your pet for a walk use:

```javascript
> pet.walk();
```
To feed your pet use:

```javascript
> pet.feed();
```
To check if your pet is still alive use:

```javascript
> pet.isAlive()
```
To make your pet have a child:

```javascript
> const parent = new Pet('parentName');
> const child = new Pet('childName');
> parent.adoptChild(child);
```
To adopt children:

```javascript
> parent.haveBaby('babyName');
```

## Authors

* **Kallum Tolkien** - *Initial work* - [PurpleBooth](https://github.com/hatenhaten)

See also the list of [contributors](https://github.com/hatenhaten/virtual-pet/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Made as part of the ManchesterCodes Software Engineering Fast-track Course
