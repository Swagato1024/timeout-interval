class Runner {
#name
#distanceCovered
constructor(name) {
  this.#name = name;
  this.#distanceCovered = this.#distanceCovered;
}

location() {
}
}


//-----------------------------------------------

r = new Runner ();

const runRabbit = (distanceCovered, timeout) => {
  setTimeout(() => {
    if(distanceCovered % 3 === 0) 
    runRabbit(distanceCovered + 1, timeout);
  }, 1000);
}

rest

































class RaceTrack { conductRace = (trackLength) => {
   const participants = registerParticipants();
}

  const raceId = setInterval(() => {
    console.clear();
    showPosition(player1, distance1);
    showPosition(player2, distance2);

    distance1 += Math.floor(Math.random() * 5);
    distance2 += Math.floor(Math.random() * 5);
  }, 700);

  const checkId = setInterval(() => {
    isRaceOver(raceId, checkId);
  }, 500);
};

conductRace(50);






const showPosition = (playerName, location) => {
  const pad = " ".repeat(location);
  console.log(pad + playerName);
};

const isRaceOver = (raceId, checkId) => {
  if (distance1 >= 50 || distance2 >= 50) {
    console.log("end");
    clearTimeout(raceId);
    clearTimeout(checkId);
  }
};


