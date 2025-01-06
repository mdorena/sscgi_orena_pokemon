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
      opponent.damageRecieved(this.damage * 2);
    } else {
      console.log(`Regular hit!`);
      opponent.damageRecieved(this.damage);
    }
  }
  heal() {
    this.hp += 100;
    console.log(`${this.name} HEALS now has ${this.hp} HP`);
  }
  damageRecieved(damage) {
    if (this.defense <= 0) {
      this.hp -= damage;
      if (this.hp <= 0) {
        console.log(`${this.name} has fainted!`);
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
        console.log(`All remaing shield has been used`);
        console.log(`${this.name} has ${this.hp} HP left`);
      }
    }
  }

  levelUp() {
    this.level += 1;
    if (this.level == 5) {
      this.damage *= 2;
      this.defense *= 2;
      this.hp *= 2;
      this.criticalChance += 0.5;
      console.log(
        `${this.name} is now on level ${this.level} stats has been upgrade`
      );
    } else if (this.level == 10) {
      this.damage *= 2.5;
      this.defense *= 2.5;
      this.hp *= 2.5;
      this.criticalChance += 1.5;
    } else if (this.level == 15) {
      this.criticalChance += 1.5;
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
  constructor(name, numeberOfHealPotion, pokemons) {
    this.name = name;
    this.numeberOfHealPotion = numeberOfHealPotion;
    this.pokemons = pokemons;
  }
  showAvailablePokemons() {
    console.log(`Showing all ${this.name} available pokemon's...`);
    for (let i = 0; i < this.pokemons.length; i++) {
      console.log(`${i + 1} ${this.pokemons[i].name}`);
    }
  }
}
// Water type pokemons
let Blastoise = new Pokemon("Blastoise", "Water", 1, 50, 10, 5, 0.05);
let Squirtle = new Pokemon("Squirtle", "Water", 1, 50, 10, 5, 0.05);
let Azumarill = new Pokemon("Azumarill", "Water", 1, 50, 10, 5, 0.05);
let Chinchou = new Pokemon("Chinchou", "Water", 1, 50, 10, 5, 0.05);
let Staryu = new Pokemon("Staryu", "Water", 1, 50, 10, 5, 0.05);
// water pokemons trainer
let Misty = new Trainer("Misty", 5, [
  Blastoise,
  Squirtle,
  Azumarill,
  Chinchou,
  Staryu,
]);
// Fire type
let Charmander = new Pokemon("Charmander", "Fire", 1, 50, 10, 5, 0.05);
let Rapidash = new Pokemon("Rapidash", "Fire", 1, 50, 10, 5, 0.05);
let Charizard = new Pokemon("Charizard", "Fire", 1, 50, 10, 5, 0.05);
let Charmeleon = new Pokemon("Charmeleon", "Fire", 1, 50, 10, 5, 0.05);
let Vulpix = new Pokemon("Vulpix", "Fire", 1, 50, 10, 5, 0.05);
// Fire pokemons trainer
let Asahi = new Trainer("Asahi ", 5, [
  Charmander,
  Rapidash,
  Charizard,
  Charmeleon,
  Vulpix,
]);
// Electric type
let Pikachu = new Pokemon("Pikachu", "Electric", 1, 50, 10, 5, 0.05);
let Raichu = new Pokemon("Raichu", "Electric", 1, 50, 10, 5, 0.05);
let Magnemite = new Pokemon("Magnemite", "Electric", 1, 50, 10, 5, 0.05);
let Magneton = new Pokemon("Magneton", "Electric", 1, 50, 10, 5, 0.05);
let Electabuzz = new Pokemon("Electabuzz", "Electric", 1, 50, 10, 5, 0.05);
// Fire pokemons trainer
let Ash = new Trainer("Ash ", 5, [
  Pikachu,
  Raichu,
  Magnemite,
  Magneton,
  Electabuzz,
]);
// Poison type
let Ekans = new Pokemon("Ekans", "Poison", 1, 50, 10, 5, 0.05);
let Arbok = new Pokemon("Arbok", "Poison", 1, 50, 10, 5, 0.05);
let Nidoran = new Pokemon("Nidoran", "Poison", 1, 50, 10, 5, 0.05);
let Nidorino = new Pokemon("Nidorino", "Poison", 1, 50, 10, 5, 0.05);
let Nidoking = new Pokemon("Nidoking", "Poison", 1, 50, 10, 5, 0.05);
// Poison pokemons trainer
let Agatha = new Trainer("Agatha ", 5, [
  Ekans,
  Arbok,
  Nidoran,
  Nidorino,
  Nidoking,
]);
// Flying typr
let Pidgeot = new Pokemon("Pidgeot", "Flying", 1, 50, 10, 5, 0.05);
let Spearow = new Pokemon("Spearow", "Flying", 1, 50, 10, 5, 0.05);
let Articuno = new Pokemon("Articuno", "Flying", 1, 50, 10, 5, 0.05);
let Zapdos = new Pokemon("Zapdos", "Flying", 1, 50, 10, 5, 0.05);
let Aerodactyl = new Pokemon("Aerodactyl", "Flying", 1, 50, 10, 5, 0.05);
// Flying pokemons trainer
let Kahili = new Trainer("Kahili ", 5, [
  Pidgeot,
  Spearow,
  Articuno,
  Zapdos,
  Aerodactyl,
]);

// Kahili.showPokemonsName();

function criticalHit(criticalChance) {
  const randomNumber = Math.random();
  if (randomNumber <= criticalChance) {
    return true;
  } else {
    return false;
  }
}

// Battle

class Battle {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  begun() {
    console.log(`The battle between ${this.pokemon1.name}
      and ${this.pokemon2.name} has begun!`);
    while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
      // random betwween 1
      const randomInt = Math.floor(Math.random() * 2) + 1;
      if (randomInt == 1) {
        this.pokemon1.attack(this.pokemon2);
        if (this.pokemon2.hp <= 0) {
          console.log(
            `${this.pokemon1.name} has gained the victory over ${this.pokemon2.name}`
          );
          this.pokemon1.levelUp();

          return true;
        } else {
          this.pokemon2.attack(this.pokemon1);
          if (this.pokemon1.hp <= 0) {
            console.log(
              `${this.pokemon2.name} has gained the victory over ${this.pokemon1.name}`
            );
            this.pokemon2.levelUp();

            return false;
          }
        }
      } else {
        this.pokemon2.attack(this.pokemon1);
        if (this.pokemon1.hp <= 0) {
          console.log(
            `${this.pokemon2.name} has gained the victory over ${this.pokemon1.name}`
          );
          this.pokemon2.levelUp();

          return false;
        } else {
          this.pokemon1.attack(this.pokemon2);
          if (this.pokemon2.hp <= 0) {
            console.log(
              `${this.pokemon1.name} has gained the victory over ${this.pokemon2.name}`
            );
            this.pokemon1.levelUp();

            return true;
          }
        }
      }
    }
  }
}
class trainerVsTrainer {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }
  battleBegun() {
    console.log(this.trainer1.pokemons.length);
  }
}
class Tournament {
  constructor(trainers) {
    this.trainers = trainers;
  }
  begun() {
    console.log(this.trainers.length);
  }
}
let ashPokemon1 = Ash.pokemons[0];
let MistyPokemon2 = Misty.pokemons[1];
let battle = new Battle(ashPokemon1, MistyPokemon2);
battle.begun();
