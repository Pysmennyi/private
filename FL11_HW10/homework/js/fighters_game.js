function Fighter(fightersInputs) {
        this.win = 0;
        this.losses = 0;

        this.getName = function () {
            return fightersInputs.name;
        };
        this.getDamage = function () {
            return fightersInputs.damage;
        };
        this.getAgility = function () {
            return fightersInputs.agility;
        };
        this.getHealth = function () {
            return fightersInputs.hp;
        };
        this.dealDamage = function(attackDamage) {
            fightersInputs.hp < attackDamage ? fightersInputs.hp = 0 : fightersInputs.hp -= attackDamage;
        };
        this.attak = function (defender) {
            let maxProbability = 100;
            let isSucceess = maxProbability - defender.getAgility();
            let success = Math.round(Math.random() * isSucceess);
            if (success < isSucceess) {
                defender.dealDamage(this.getDamage());
                console.log(this.getName() + ` make ` + this.getDamage() + ` damage to ` + defender.getName());
            } else {
                console.log(this.getName() + ` attack missed`);
            }
        };
        this.logCombatHistory = function () {
            console.log(`Name: ` + fightersInputs.name + `, win: ` + this.win + `, Losses: ` + this.losses);
        };
        this.heal = function (healpoints) {
            fightersInputs.hp =+ healpoints;
        };
        this.dealDamage = function(attackDamage) {
            fightersInputs.hp < attackDamage ? fightersInputs.hp = 0 : fightersInputs.hp -= attackDamage;
        };
        this.getwin = function () {
            return this.win;
        };
        this.getLosses = function () {
            return this.losses;
        };
        this.addWin = function() {
            this.win = this.getwin() + 1 || 1;
        };

        this.addLoss = function() {
            this.losses = this.getLosses() + 1 || 1;
        };


}


let fighter1 = new Fighter({name: `John`, damage: 20, agility: 25, hp: 100});
let fighter2 = new Fighter({name: `Jim`, damage: 10, agility: 40, hp: 120});

function battle ( playerOne, playerTwo ) {
    if (playerOne.getHealth() === 0) {
        console.log(playerOne.getName() + ` is dead and can't fight!`);
    } else if (playerTwo.getHealth() === 0) {
        console.log(playerTwo.getName() + ` is dead and can't fight!`);
    } else {
        while (playerOne.getHealth() > 0 && playerTwo.getHealth() > 0) {
            playerOne.attak(playerTwo);
            playerTwo.attak(playerOne);
        }
    }
    if (playerOne.getHealth() > playerTwo.getHealth()) {
        playerOne.addWin();
        playerTwo.addLoss();
        fighter1.logCombatHistory();
        fighter2.logCombatHistory();
        console.log(playerTwo.getName() + ` is dead and can't fight!`);
    } else {
        playerOne.addLoss();
        playerTwo.addWin();
        fighter1.logCombatHistory();
        fighter2.logCombatHistory();
        console.log(playerOne.getName() + ` is dead and can't fight!`);
    }
}


battle(fighter1,fighter2);

