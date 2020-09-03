new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: [],
    },
    methods: {
        startGame: function() {
            this.isGameRunning = true;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.turns = [];
        },
        attack: function() {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster for ` + damage
            })
            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        superAttack: function() {
            const damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster hard for ` + damage
            })
            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: `Player heals for 10`
            })
            this.monsterAttacks();
        },
        giveUp: function() {
            this.isGameRunning = false;
        },
        monsterAttacks: function() {
            const damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ` + damage
            })
            this.checkWin();
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max + 1, min));
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                const won = `You won 🙃 New game?`;
                this.startAgainAlert(won);
            } else if(this.playerHealth <= 0) {
                const loss = `You lost ☹️z New game?`;
                this.startAgainAlert(loss);
            }
            return
        },
        startAgainAlert: function(message) {
            if(confirm(message)) {
                this.startGame();
            }else {
                this.isGameRunning = false;
            }
            return true;
        }
    },
});