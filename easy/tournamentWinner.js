function tournamentWinner(competitions, results) {
    let winner = '';
    let listOfResult = { [winner]: 0 };

    for (let i = 0; i < results.length; i++) {
        const [homeTeam, awayTeam] = competitions[i];
        if (results[i]) {
            updateResult(homeTeam)
        } else {
            updateResult(awayTeam)
        }
    }
    function updateResult(team) {
        if (!listOfResult.hasOwnProperty(team)) listOfResult[team] = 0;
        listOfResult[team] += 3;
        if (listOfResult[team] > listOfResult[winner]) winner = team;
    }

    return winner;
}