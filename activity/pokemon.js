// Pokemon Game
class Pokemon {
  constructor(name, type, level, hp, defense, damage, criticalChance) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.defense = defense;
    this.damage = damage;
    this.criticalChance = criticalChance;
  }
  attack(opponent) {
    console.log(`${this.name} attack ${opponent.name}`);
    if (criticalHit(this.criticalChance)) {
      console.log(`Critical hit!`);
      opponent.damageReceived(this.damage * 2);
    } else {
      console.log(`Regular hit!`);
      opponent.damageReceived(this.damage);
    }
  }

  damageReceived(damage) {
    if (this.defense <= 0) {
      this.hp -= damage;
      if (this.hp <= 0) {
        console.log(`${this.name} has fainted!`);
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

        console.log(
          `All remaining shield has been used.  ${this.name} has ${this.hp} HP left`
        );
      }
    }
    if (this.hp < 0) this.hp = 0;
  }

  heal(healV) {
    this.hp += healV;
    console.log(
      `${this.name} has healed + ${healV} HP! Current HP: ${this.hp}`
    );
  }
  levelUp() {
    this.level += 1;
    if (this.level == 5) {
      this.heal(10);
      this.damage *= 2;
      this.defense *= 2;
      this.hp *= 2;
      this.criticalChance += 0.5;
      console.log(
        `${this.name} is now on level ${this.level} stats has been upgrade`
      );
    } else if (this.level == 10) {
      this.heal(20);
      this.damage *= 2.5;
      this.defense *= 2.5;
      this.hp *= 2.5;
      this.criticalChance += 0.15;
    } else if (this.level == 15) {
      this.heal(30);
      this.criticalChance += 0.15;
      // Evolve/Power up/Max level
    } else {
      // normal level up
      this.damage *= 1.5;
      this.defense *= 1.5;
      this.hp *= 1.5;
      console.log(
        `${this.name} is now on level ${this.level} stats has been upgrade`
      );
    }

    console.log(
      `HP ${this.hp}, DEFENSE ${this.defense} DAMAGE ${
        this.damage
      } CRIT. CHANCE ${this.criticalChance * 100}%`
    );
  }
}

// For trainer
class Trainer {
  constructor(name, pokemons) {
    this.name = name;
    this.pokemons = pokemons;
  }
  showAvailablePokemons() {
    console.log(`Showing all ${this.name} available pokemon's...`);
    for (let i = 0; i < this.pokemons.length; i++) {
      console.log(`${i + 1} ${this.pokemons[i].name}`);
    }
  }

  choosePokemon() {
    const randomIndex = Math.floor(Math.random() * this.pokemons.length);
    return this.pokemons[randomIndex];
  }
}
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
let Asahi = new Trainer("Asahi ", [
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
let Ash = new Trainer("Ash ", [
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
let Agatha = new Trainer("Agatha ", [
  Ekans,
  Arbok,
  Nidoran,
  Nidorino,
  Nidoking,
]);
// Flying typr
let Pidgeot = new Pokemon("Pidgeot", "Flying", 1, 20, 10, 10, 0.1);
let Spearow = new Pokemon("Spearow", "Flying", 1, 20, 10, 10, 0.1);
let Articuno = new Pokemon("Articuno", "Flying", 1, 20, 10, 10, 0.1);
let Zapdos = new Pokemon("Zapdos", "Flying", 1, 20, 10, 10, 0.1);
let Aerodactyl = new Pokemon("Aerodactyl", "Flying", 1, 20, 10, 10, 0.1);

// Flying pokemons trainer
let Kahili = new Trainer("Kahili ", [
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

// iced type
let Glaceon = new Pokemon("Glaceon", "Ice", 1, 20, 10, 10, 0.1);
let Snorunt = new Pokemon("Snorunt", "Ice", 1, 20, 10, 10, 0.1);
let Walrein = new Pokemon("Walrein", "Ice", 1, 20, 10, 10, 0.1);
let Sneasel = new Pokemon("Sneasel", "Ice", 1, 20, 10, 10, 0.1);
let Frostlass = new Pokemon("Frostlass", "Ice", 1, 20, 10, 10, 0.1);

// Ice pokemon Trainer
let Angelo = new Trainer("Angelo", [
  Glaceon,
  Snorunt,
  Walrein,
  Sneasel,
  Frostlass,
]);
// figting type
let Machop = new Pokemon("Machop", "Fighting", 1, 20, 10, 10, 0.1);
let Machoke = new Pokemon("Machoke", "Fighting", 1, 20, 10, 10, 0.1);
let Machamp = new Pokemon("Machamp", "Fighting", 1, 20, 10, 10, 0.1);
let Hitmonlee = new Pokemon("Hitmonlee", "Fighting", 1, 20, 10, 10, 0.1);
let Hitmonchan = new Pokemon("Hitmonchan", "Fighting", 1, 20, 10, 10, 0.1);

// Fighting pokemon Trainer
let Bruno = new Trainer("Bruno", [
  Machop,
  Machoke,
  Machamp,
  Hitmonlee,
  Hitmonchan,
]);
// to ranfomize crtical chance
function criticalHit(criticalChance) {
  const randomNumber = Math.random();
  if (randomNumber <= criticalChance) {
    return true;
  } else {
    return false;
  }
}

class Tournament {
  constructor(trainers) {
    this.trainers = trainers;
  }
  start() {
    while (this.trainers.length > 1) {
      let trainer1 =
        this.trainers[Math.floor(Math.random() * this.trainers.length)];
      let trainer2 =
        this.trainers[Math.floor(Math.random() * this.trainers.length)];

      while (trainer1 === trainer2) {
        trainer2 =
          this.trainers[Math.floor(Math.random() * this.trainers.length)];
      }

      let trainer1Pokemons = trainer1.pokemons;
      let trainer2Pokemons = trainer2.pokemons;
      let stillHadPokemon = true;
      while (stillHadPokemon) {
        if (trainer1Pokemons.length == 0) {
          stillHadPokemon = false;
          console.log(
            `${trainer1.name} has no pokemon left. ${trainer2.name} wins the battle!`
          );
          console.log(
            `${trainer1.name} has been eliminated from the tournament`
          );
          let index1 = this.trainers.indexOf(trainer1);
          this.trainers.splice(index1, 1);

          break;
        } else if (trainer2Pokemons.length == 0) {
          stillHadPokemon = false;

          console.log(
            `${trainer2.name} has no pokemon left. ${trainer1.name} wins the battle!`
          );
          console.log(
            `${trainer2.name} has been eliminated from the tournament`
          );
          let index2 = this.trainers.indexOf(trainer2);
          this.trainers.splice(index2, 1);
          break;
        }
        let randomPlaye1Pokemon = trainer1.choosePokemon(trainer1Pokemons);
        let indexPokemon1 = trainer1Pokemons.findIndex(
          (pokemon) => pokemon.name === randomPlaye1Pokemon.name
        );
        console.log(`${trainer1.name} chose ${randomPlaye1Pokemon.name}`);
        let randomPlaye2Pokemon = trainer2.choosePokemon(trainer2Pokemons);
        let indexPokemon2 = trainer2Pokemons.findIndex(
          (pokemon) => pokemon.name === randomPlaye2Pokemon.name
        );
        console.log(`${trainer2.name} chose ${randomPlaye2Pokemon.name}`);
        // trainer1Pokemons.splice(indexPokemon1, 1);
        // trainer2Pokemons.splice(indexPokemon2, 1);
        let pokemon1 = trainer1.pokemons[indexPokemon1];
        let pokemon2 = trainer2.pokemons[indexPokemon2];
        console.log(`The battle between ${pokemon1.name} 
        and ${pokemon2.name} has begun!`);
        while (pokemon1.hp > 0 && pokemon2.hp > 0) {
          // random betwween 1
          const randomInt = Math.floor(Math.random() * 2) + 1;
          if (randomInt == 1) {
            pokemon1.attack(pokemon2);
            if (pokemon2.hp <= 0) {
              console.log(
                `${pokemon1.name} has gained the victory over ${pokemon2.name}`
              );
              pokemon1.levelUp();
              trainer2Pokemons.splice(indexPokemon2, 1);
              break;
            } else {
              pokemon2.attack(pokemon1);
              if (pokemon1.hp <= 0) {
                console.log(
                  `${pokemon2.name} has gained the victory over ${pokemon1.name}`
                );
                pokemon2.levelUp();
                trainer1Pokemons.splice(indexPokemon1, 1);
                break;
              }
            }
          } else {
            pokemon2.attack(pokemon1);
            if (pokemon1.hp <= 0) {
              console.log(
                `${pokemon2.name} has gained the victory over ${pokemon1.name}`
              );
              pokemon2.levelUp();
              trainer1Pokemons.splice(indexPokemon1, 1);
              break;
            } else {
              pokemon1.attack(pokemon2);
              if (pokemon2.hp <= 0) {
                console.log(
                  `${pokemon1.name} has gained the victory over ${pokemon2.name}`
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
    console.log(
      `${this.trainers[0].name} has emerged victorious in the tournament and is the ultimate POKEMON CHAMPION!`
    );
  }
}
let tournament = new Tournament([
  Misty,
  Asahi,
  Ash,
  Agatha,
  Kahili,
  Mark,
  Angelo,
  Bruno,
]);
tournament.start();
