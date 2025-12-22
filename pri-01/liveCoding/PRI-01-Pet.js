class Pet {
    constructor(name, voice) {
        this.name = name
        this.voice = voice
    }

    // methods to be defined here
    makeSound() {
        console.log(`${this.name} says ${this.voice}`)
    }
}

// Here we create new instances of the class
const rauli = new Pet('Rauli', 'meooow')
const ebi = new Pet('Ebichu', 'squeeeek')

console.log(rauli)
console.log(typeof rauli)
console.log(rauli instanceof Pet)
console.log(rauli.name)
rauli.makeSound()

// 10 minute mini exercise!
// Add "type" to the Pet class
// Provide the value to the constructor
// Print the type when calling makeSound
// "Rauli the cat says meooow"

ebi.makeSound()
