team = {
    _players: [
        {firstName: "Dalton", lastName: "Walker", age: 25},
        {firstName: "Brianna", lastName: "Walker", age: 23},
        {firstName: "Trevor", lastName: "Sills", age: 22}
    ],
    _games: [
        {opponent: "White Soxs", teamPoints: 36, opponentPoints: 29},
        {opponent: "Mordor", teamPoints: 47, opponentPoints: 32},
        {opponent: "USSR", teamPoints: 12, opponentPoints: 19}
    ],

    // Getters

    get players () {
        return this._players;
    },

    get games() {
        return this._games;
    },

    // Methods

    addPlayer (firstName, lastName, age) {
        const newPlayer = {};
        newPlayer.firstName = firstName;
        newPlayer.lastName = lastName;
        newPlayer.age = age;

        return this._players.push(newPlayer);
    },

    addGame (opponentName, teamPoints, opponentPoints) {
        const newGame = {};
        newGame.opponent = opponentName;
        newGame.teamPoints = teamPoints;
        newGame.opponentPoints = opponentPoints;

        return this._games.push(newGame);
    },

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('France', 23, 61);
team.addGame('Germany', 14, 32);
team.addGame('Italy', 23, 26);

console.log(team._players);
console.log(team._games);