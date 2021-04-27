
    let name = prompt("What is your pet's name?");
    let energy = 0
    let happiness = 0
    for (i = 0; i <= 5; i++) {
        let petfeedwalk = prompt("feed, pet, or walk?");
        if (petfeedwalk === "feed") {
            energy += 2;
        }
        else if (petfeedwalk === "pet") {
            happiness ++;
        }
        else if (petfeedwalk === "walk" && energy === 0) {
            alert("Not enough energy to enjoy a walk");
        }
        else {
            happiness ++;
            energy --; 
          }   
    }
    console.log(name);
    console.log(happiness);
    console.log(energy);
    console.log(name + " has " + happiness + " happiness and " + energy + " energy.");
