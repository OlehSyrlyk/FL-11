class Fighter {
    constructor ({name, damage, hp, agility}) {
        this._name = name;
        this._damade = damage;
        this._hp = hp;
        this._agility = agility;
        this._win = 0;
        this._lose = 0;
    }
    get Name() {
        return this._name;
    }
    get Damage() {
        return this._damage;
    }
    get Health() {
        return this._hp;
    }
    get Agility() {
        return this._agility;
    }
    attack(defender) {
        let maxHit = 100;
        let hit = maxHit - defender._agility;
        let chance = Math.floor(Math.random() * maxHit);
        if(chance <= hit) {
            defender.getDam(this._damage);
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${this.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`)
    }
    heal(healingValue) {
        if(healingValue > this.fighterHp) {
           this._hp = this.fighterHp
        } else {
            this._hp += healingValue;
        } 
    }
    dealDamage(dmg) {
        this._hp = this._hp - dmg;
        if (this._hp < 0) {
            this._hp = 0;
        } else {
            this._hp - dmg;
        }
    }
    addWin() {
        let winingRds = this._win +=1;
        return winingRds;
    }
    addLoss() {
        let loseRds= this._loss += 1;
        return loseRds;
    }
}
function battle(fighter1, fighter2) {
    if (fighter1.Health === 0) {
        console.log(`${fighter1.Name} is dead and can't fight`);
    } else if (fighter2.Health === 0) {
        console.log(`${fighter2.Name} is dead and can't fight`);
    } else {
        while (fighter1.Health > 0 && fighter2.Health > 0) {
            fighter1.attack(fighter2);
            if (fighter2.Health > 0) {
                fighter2.attack(fighter1);
            }
        }   
    }
    if (fighter1._hp > 0) {
        fighter1.addWin();
    } else {
        fighter1.addLoss();
    }
    if (fighter2._hp > 0) {
        fighter2.addWin();
    } else {
        fighter2.addLoss();
    }
}