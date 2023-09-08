// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(receivedDamage) {
        this.health -= receivedDamage;
    }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
