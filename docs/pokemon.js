// Pokemon Game
// class for object pokemon
class Pokemon {
  constructor(name, type, level, hp, defense, damage, criticalChance) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.defense = defense;
    this.damage = damage;
    this.criticalChance = criticalChance;
    this.attackName = `${type} Attack!`;
  }
  attack(opponent) {
    // switch is to indetify type and change background color based on it
    switch (this.type) {
      case "Water":
        console.log(
          `${this.name} used an %c${this.attackName}`,
          "background: #489fb5; color: white; padding: 10px;   font-size: 15px; border-radius: 10px;",
          ` on ${opponent.name}, `
        );
        break;
      case "Fire":
        console.log(
          `${this.name} used an %c${this.attackName}`,
          "background: #d00000; color: white; padding: 10px;  font-size: 15px; border-radius: 10px;",
          ` on ${opponent.name}, `
        );
        break;
      case "Electric":
        console.log(
          `${this.name} used an %c${this.attackName}`,
          "background: #ffd60a; color: white; padding: 10px;  font-size: 15px; border-radius: 10px;",
          ` on ${opponent.name}, `
        );
        break;
        z;
      case "Poison":
        console.log(
          `${this.name} used an %c${this.attackName}`,
          "background: #001219; color: white; padding: 10px;   font-size: 15px; border-radius: 10px;",
          ` on ${opponent.name}, `
        );
        break;
      case "Flying":
        console.log(
          `${this.name} used an %c${this.attackName}`,
          "background: #90e0ef; color: black; padding: 10px; font-size: 15px; border-radius: 10px;",
          ` on ${opponent.name}, `
        );
        break;
      case "Legendary":
        console.log(
          `${this.name} used an %c${this.attackName}`,
          "background: linear-gradient(to bottom, #ffffcc 0%, #00ffcc 100%); color: black; padding: 10px; font-weight: bold; border:  solid 1px black; 2px; font-size: 20px; border-radius: 10px;",
          ` on ${opponent.name}, `
        );
        break;
    }

    // critical hit is depends on outcome its either true or false
    // critaacal probability depends on critical chance
    if (this.criticalHit(this.criticalChance)) {
      console.log(
        `%c Critical hit! Damage: ${this.damage * 2} `,
        "background: #d62828; color: #ffff; padding: 5px;"
      );
      opponent.damageReceived(this.damage * 2);
    } else {
      console.log(
        `%c Regular hit! Damage: ${this.damage} `,
        "background: #f77f00; color: #ffff; padding: 5px;"
      );
      opponent.damageReceived(this.damage);
    }
  }

  pokemonEvolve() {
    this.type = "Legendary";
    this.attackName = "Legendary " + this.attackName;
    console.log(
      `%c ${this.name} is now a Legendary Pokemon!!!`,
      "background: linear-gradient(to bottom, #ffffcc 0%, #00ffcc 100%); color: black; padding: 15px; font-weight: bold;   font-size: 20px;"
    );
  }

  damageReceived(damage) {
    // check first if the pokemon has no defense left
    if (this.defense <= 0) {
      this.hp -= damage;
      if (this.hp <= 0) {
        console.log(
          `%c${this.name} has fainted!`,
          "color: grey; font-weight:bold; text-transform: uppercase; font-size: 15px; "
        );
        this.hp = 0;
      } else {
        console.log(`${this.name} has ${this.hp} HP left`);
      }
    } else {
      if (this.defense >= damage) {
        this.defense -= damage;
        console.log(
          `Shield has been used, ${this.name} has ${this.defense} defense left`
        );
      } else {
        let damageRemaining = damage - this.defense;
        this.hp -= damageRemaining;
        this.defense = 0;
        if (this.hp <= 0) {
          console.log(
            `%c${this.name} has fainted!`,
            "color: grey; font-weight:bold; text-transform: uppercase;  letter-spacing: 20px;"
          );
        } else {
          console.log(
            `All remaining shield has been used.  ${this.name} has ${this.hp} HP left`
          );
        }
      }
    }
    if (this.hp < 0) this.hp = 0;
  }

  heal(healV) {
    // heal is only applicable when
    this.hp += healV;
    console.log(
      `%c${this.name} health has been restored by + ${healV} HP! Current HP: ${this.hp}`,
      "background: green; color: #ffff; padding: 5px"
    );
  }
  levelUp() {
    // level up if the pokemon win battle and when the pokemon reach level 5, 10, and 15 the level up will give more that its usual
    this.level += 1;
    console.log(
      `%c ${this.name} is now on level ${this.level}!`,
      "background: #ffff3f; color: black; padding: 5px; font-weight: bold; border: solid 1px black"
    );
    if (this.level == 5) {
      this.heal(30);
      this.damage *= 2;
      this.defense += 25;
      this.hp *= 2;
      this.criticalChance += 0.5;
    } else if (this.level == 10) {
      this.heal(50);
      this.damage = Math.round(this.damage * 2.5);
      this.defense += 50;
      this.hp = Math.round(this.hp * 2.5);
      this.criticalChance += 0.15;
    } else if (this.level == 15) {
      this.heal(100);
      this.pokemonEvolve();
      this.criticalChance += 0.15;
    } else {
      // normal level up
      this.heal(10);
      this.damage = Math.round(this.damage * 1.5);
      this.defense += 10;
      this.hp = Math.round(this.hp * 1.5);
    }

    console.log(
      `%c| HP ${this.hp} | DEFENSE ${this.defense} | DAMAGE ${
        this.damage
      } | CRIT. CHANCE ${this.criticalChance * 100}% |`,
      "background: #ffff3f; color: black; padding: 5px; font-weight: bold; border: solid 1px black"
    );
  }
  //  to randomize crtical depending on critical chacne
  criticalHit(criticalChance) {
    const randomNumber = Math.random();
    if (randomNumber <= criticalChance) {
      return true;
    } else {
      return false;
    }
  }
}

// For trainer
class Trainer {
  constructor(name, pokemons) {
    this.name = name;
    this.pokemons = pokemons;
  }
  // for shwong available pokemons i used arraMadeinBattle because
  // i created a new array in the tournament battle and thats what i identify here
  showAvailablePokemons(arrayMadeinBattle) {
    console.log(`${this.name} available pokemon's;`);
    for (let i = 0; i < arrayMadeinBattle.length; i++) {
      console.log(
        `%c${i + 1}. ${arrayMadeinBattle[i].name} | LVL: ${
          arrayMadeinBattle[i].level
        } | HP: ${arrayMadeinBattle[i].hp} | TYPE: ${
          arrayMadeinBattle[i].type
        } |`,
        "background: blue; padding: 10px; color: white; margin: 2px; border-radius: 1rem; font-weight: bold;"
      );
    }
  }

  choosePokemon() {
    // random choose for battle in tournament
    const randomIndex = Math.floor(Math.random() * this.pokemons.length);
    return this.pokemons[randomIndex];
  }
}

class Tournament {
  constructor(trainers) {
    this.trainers = trainers;
  }
  // start of tourna
  start() {
    // numOfFight is to count the trainer match to indetify console
    let numOfFight = 0;
    // while loop until 1 trainer left
    while (this.trainers.length > 1) {
      //randomized trainer 1 and 2
      let trainer1 =
        this.trainers[Math.floor(Math.random() * this.trainers.length)];
      let trainer2 =
        this.trainers[Math.floor(Math.random() * this.trainers.length)];
      // check if the chosen is equal
      while (trainer1 === trainer2) {
        trainer2 =
          this.trainers[Math.floor(Math.random() * this.trainers.length)];
      }
      numOfFight++;
      if (numOfFight == 1) {
        console.log(`\n`);
        console.log(
          `%c ${numOfFight}st MATCH IS BETWEEN ${trainer1.name} vs ${trainer2.name} `,
          " background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 5px 20px;"
        );
      } else if (numOfFight == 2) {
        console.log(`\n`);
        console.log(
          `%c ${numOfFight}nd MATCH IS BETWEEN ${trainer1.name} vs ${trainer2.name} `,
          " background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 5px 20px;"
        );
      } else if (numOfFight == 3) {
        console.log(`\n`);
        console.log(
          `%c ${numOfFight}rd MATCH IS BETWEEN ${trainer1.name} vs ${trainer2.name} `,
          " background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 5px 20px;"
        );
      } else if (numOfFight == 5) {
        console.log(`\n`);
        console.log(
          `%c ${numOfFight}th and FINAL MATCH IS BETWEEN ${trainer1.name} vs ${trainer2.name} `,
          " background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 5px 20px;"
        );
      } else {
        console.log(`\n`);
        console.log(
          `%c ${numOfFight}th MATCH IS BETWEEN ${trainer1.name} vs ${trainer2.name} `,
          " background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 5px 20px;"
        );
      }
      // create new array for pokemons
      let trainer1Pokemons = trainer1.pokemons;
      let trainer2Pokemons = trainer2.pokemons;
      let stillHadPokemon = true;
      let numOfPokemonFight = 0;
      // while loop untni one of the trainer has no pokemon left
      while (stillHadPokemon) {
        // check if the trainer1 has no pokemon left
        if (trainer1Pokemons.length == 0) {
          stillHadPokemon = false;
          console.log(
            `${trainer1.name} has no pokemon left. ` +
              `%c${trainer2.name} wins the battle!`,
            "font-size: 20px; font-weight: bold"
          );
          console.log(
            `%c${trainer1.name} has been eliminated from the tournament`,
            "color: grey; font-size:15px"
          );
          let index1 = this.trainers.indexOf(trainer1);
          this.trainers.splice(index1, 1);

          break;
        }
        // check if the trainer2 has no pokemon left
        else if (trainer2Pokemons.length == 0) {
          stillHadPokemon = false;

          console.log(
            `${trainer2.name} has no pokemon left. ` +
              `%c${trainer1.name} wins the battle!`,
            "font-size: 20px; font-weight: bold"
          );
          console.log(
            `%c${trainer2.name} has been eliminated from the tournament`,
            "color: grey; font-size:15px"
          );
          let index2 = this.trainers.indexOf(trainer2);
          this.trainers.splice(index2, 1);
          break;
        }
        // choose random pokemon
        let randomPlaye1Pokemon = trainer1.choosePokemon(trainer1Pokemons);
        // this indez is for removing the selected random plaer
        let indexPokemon1 = trainer1Pokemons.findIndex(
          (pokemon) => pokemon.name === randomPlaye1Pokemon.name
        );
        // this is for loop for the console of pokemon batle
        numOfPokemonFight++;
        if (numOfPokemonFight == 1) {
          console.log(`\n`);
          console.log(
            `%cThe ${numOfPokemonFight}st round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin!`,
            "background-color: grey; padding: 5px 10px; font-size: 15px; color: white;  text-transform: uppercase; border-radius:1rem;"
          );
        } else if (numOfPokemonFight == 2) {
          console.log(`\n`);
          console.log(
            `%cThe ${numOfPokemonFight}nd round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin`,
            "background-color: grey; padding: 5px 10px; font-size: 15px; color: white;  text-transform: uppercase; border-radius:1rem;"
          );
        } else if (numOfPokemonFight == 3) {
          console.log(`\n`);
          console.log(
            `%cThe ${numOfPokemonFight}rd round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin`,
            "background-color: grey; padding: 5px 10px; font-size: 15px; color: white;  text-transform: uppercase; border-radius:1rem;"
          );
        } else {
          console.log(`\n`);
          console.log(
            `%cThe ${numOfPokemonFight}th round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin`,
            "background-color: grey; padding: 5px 10px; font-size: 15px; color: white;  text-transform: uppercase; border-radius:1rem;"
          );
        }
        // showing available pokemons
        trainer1.showAvailablePokemons(trainer1Pokemons);
        trainer2.showAvailablePokemons(trainer2Pokemons);
        console.log(`\n`);
        // console what random chosed
        console.log(
          `${trainer1.name}: ` + `%cI chose you ${randomPlaye1Pokemon.name}!`,
          "background: #FFCC01; color:rgb(0, 84, 252); padding: 5px;  border: solid 1px black;   font-weight: bold; text-transform: uppercase;     font-size: 20px;"
        );

        let randomPlaye2Pokemon = trainer2.choosePokemon(trainer2Pokemons);
        let indexPokemon2 = trainer2Pokemons.findIndex(
          (pokemon) => pokemon.name === randomPlaye2Pokemon.name
        );

        console.log(
          `${trainer2.name}: ` + `%cI chose you ${randomPlaye2Pokemon.name}!`,
          "background: #FFCC01; color:rgb(0, 84, 252); padding: 5px;  border: solid 1px black;   font-weight: bold; text-transform: uppercase;     font-size: 20px;"
        );

        let pokemon1 = trainer1.pokemons[indexPokemon1];
        let pokemon2 = trainer2.pokemons[indexPokemon2];
        console.log(
          `%cThe battle between ${pokemon1.name} and ${pokemon2.name} has begun!`,
          "font-size: 15px"
        );
        // while looop check if one of the pokemon has no hp
        while (pokemon1.hp > 0 && pokemon2.hp > 0) {
          // randomInt is to randmized who goes first
          // if player1 goes first player2 next, and vice versa
          const randomInt = Math.floor(Math.random() * 2) + 1;
          // 1 means plyer 1 fist
          if (randomInt == 1) {
            pokemon1.attack(pokemon2);
            if (pokemon2.hp <= 0) {
              console.log(
                `%c ${pokemon1.name} has gained the victory over ${pokemon2.name} `,
                "background: green; color: black; padding: 10px; font-weight: bold; color: white;"
              );

              pokemon1.levelUp();
              trainer2Pokemons.splice(indexPokemon2, 1);
              break;
            } else {
              pokemon2.attack(pokemon1);
              if (pokemon1.hp <= 0) {
                console.log(
                  `%c ${pokemon2.name} has gained the victory over ${pokemon1.name} `,
                  "background: green; color: black; padding: 10px; font-weight: bold; color: white;"
                );
                pokemon2.levelUp();
                trainer1Pokemons.splice(indexPokemon1, 1);
                break;
              }
            }
          }
          // this is player 2 first
          else {
            pokemon2.attack(pokemon1);
            if (pokemon1.hp <= 0) {
              console.log(
                `%c ${pokemon2.name} has gained the victory over ${pokemon1.name} `,
                "background: green; color: black; padding: 10px; font-weight: bold; color: white;"
              );
              pokemon2.levelUp();
              trainer1Pokemons.splice(indexPokemon1, 1);
              break;
            } else {
              pokemon1.attack(pokemon2);
              if (pokemon2.hp <= 0) {
                console.log(
                  `%c ${pokemon1.name} has gained the victory over ${pokemon2.name} `,
                  "background: green; color: black; padding: 10px; font-weight: bold; color: white;"
                );
                pokemon1.levelUp();
                trainer2Pokemons.splice(indexPokemon2, 1);
                break;
              }
            }
          }
        }
      }
    }
    // finalllyyy! there is a winner console with style
    console.log(`\n`);
    console.log(
      `%c ${this.trainers[0].name} has emerged victorious in the tournament and is the ultimate POKEMON CHAMPION! `,
      "  background: linear-gradient(to bottom, #ff0000 60%, #ffff00 100%); color:#fffcf2; font-weight: 900; padding: 20px;   font-size: 26px; -webkit-text-stroke: 1px #010088; -webkit-text-fill-color: white; border-radius: 2rem"
    );
    console.log(`\n`);
  }
  // welcome message and show all contestans
  welcome() {
    console.log(
      "%c Welcome to the Tournament!",
      "  background: linear-gradient(to bottom, #ff0000 60%, #ffff00 100%); color:#fffcf2; font-weight: bold; padding: 20px; font-size: 20px;"
    );
    console.log("The tournament will begin shortly.\n");
    console.log("Contestants;");
    for (let i = 0; i < this.trainers.length; i++) {
      console.log(`${i + 1}. ${this.trainers[i].name}`);
    }
    console.log("\n");
    console.log("Let the tournament begin!");
  }
}
//  constructor(name, type, level, hp, defense, damage, criticalChance)
// Water type pokemons
let Blastoise = new Pokemon("Blastoise", "Water", 1, 20, 10, 10, 0.1);
let Squirtle = new Pokemon("Squirtle", "Water", 1, 20, 10, 10, 0.1);
let Azumarill = new Pokemon("Azumarill", "Water", 1, 20, 10, 10, 0.1);
let Chinchou = new Pokemon("Chinchou", "Water", 1, 20, 10, 10, 0.1);
let Staryu = new Pokemon("Staryu", "Water", 1, 20, 10, 10, 0.1);
// water pokemons trainer
let Misty = new Trainer("Misty", [
  Blastoise,
  Squirtle,
  Azumarill,
  Chinchou,
  Staryu,
]);
// Fire type
let Charmander = new Pokemon("Charmander", "Fire", 1, 20, 10, 10, 0.1);
let Rapidash = new Pokemon("Rapidash", "Fire", 1, 20, 10, 10, 0.1);
let Charizard = new Pokemon("Charizard", "Fire", 1, 20, 10, 10, 0.1);
let Charmeleon = new Pokemon("Charmeleon", "Fire", 1, 20, 10, 10, 0.1);
let Vulpix = new Pokemon("Vulpix", "Fire", 1, 20, 10, 10, 0.1);
// Fire pokemons trainer
let Asahi = new Trainer("Asahi", [
  Charmander,
  Rapidash,
  Charizard,
  Charmeleon,
  Vulpix,
]);
// Electric type
let Pikachu = new Pokemon("Pikachu", "Electric", 1, 20, 10, 10, 0.1);
let Raichu = new Pokemon("Raichu", "Electric", 1, 20, 10, 10, 0.1);
let Magnemite = new Pokemon("Magnemite", "Electric", 1, 20, 10, 10, 0.1);
let Magneton = new Pokemon("Magneton", "Electric", 1, 20, 10, 10, 0.1);
let Electabuzz = new Pokemon("Electabuzz", "Electric", 1, 20, 10, 10, 0.1);
// Fire pokemons trainer
let Ash = new Trainer("Ash", [
  Pikachu,
  Raichu,
  Magnemite,
  Magneton,
  Electabuzz,
]);
// Poison type
let Ekans = new Pokemon("Ekans", "Poison", 1, 20, 10, 10, 0.1);
let Arbok = new Pokemon("Arbok", "Poison", 1, 20, 10, 10, 0.1);
let Nidoran = new Pokemon("Nidoran", "Poison", 1, 20, 10, 10, 0.1);
let Nidorino = new Pokemon("Nidorino", "Poison", 1, 20, 10, 10, 0.1);
let Nidoking = new Pokemon("Nidoking", "Poison", 1, 20, 10, 10, 0.1);
// Poison pokemons trainer
let Agatha = new Trainer("Agatha", [Ekans, Arbok, Nidoran, Nidorino, Nidoking]);
// Flying typr
let Pidgeot = new Pokemon("Pidgeot", "Flying", 1, 20, 10, 10, 0.1);
let Spearow = new Pokemon("Spearow", "Flying", 1, 20, 10, 10, 0.1);
let Articuno = new Pokemon("Articuno", "Flying", 1, 20, 10, 10, 0.1);
let Zapdos = new Pokemon("Zapdos", "Flying", 1, 20, 10, 10, 0.1);
let Aerodactyl = new Pokemon("Aerodactyl", "Flying", 1, 20, 10, 10, 0.1);

// Flying pokemons trainer
let Kahili = new Trainer("Kahili", [
  Pidgeot,
  Spearow,
  Articuno,
  Zapdos,
  Aerodactyl,
]);

// grass type
let Bulbasaur = new Pokemon("Bulbasaur", "Grass", 1, 20, 10, 10, 0.1);
let Ivysaur = new Pokemon("Ivysaur", "Grass", 1, 20, 10, 10, 0.1);
let Venusaur = new Pokemon("Venusaur", "Grass", 1, 20, 10, 10, 0.1);
let Chikorita = new Pokemon("Chikorita", "Grass", 1, 20, 10, 10, 0.1);
let Bayleef = new Pokemon("Bayleef", "Grass", 1, 20, 10, 10, 0.1);

// Grass pokemon Trainer
let Mark = new Trainer("Mark", [
  Bulbasaur,
  Ivysaur,
  Venusaur,
  Chikorita,
  Bayleef,
]);
// calling the calss tornament
let tournament = new Tournament([Misty, Asahi, Ash, Agatha, Kahili, Mark]);
tournament.welcome();
tournament.start();
