function createGame(homeTeam, gameTime, visitingTeam) {
    return ` 
        <li>
            <img src="./assets/icon-${homeTeam}.svg" alt="Bandeira ${homeTeam}"/>
            <strong>${gameTime}</strong>
            <img src="./assets/icon-${visitingTeam}.svg" alt="Bandeira ${visitingTeam}"/>
        </li> `
}

function createCard(date, day, startGame) {
    return ` 
        <div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${startGame}
            </ul>
        </div> `
}

document.querySelector('#cards').innerHTML = createCard('24/11', "Segunda", createGame('brazil', '16:00', 'cameroon'));

