import { BattleStatusSeverity } from '../components/BattleStatus';

const userId = 'user';
const opponentId = 'opponent';

/**
 * Yields the battle main functionallity.
 * 
 */
export class BattleManager {
  turns = 0;
  next = 0;
  fighters = [];

  reducerDispatcher = () => {};

  constructor(
    user,
    userDispatcher,
    opponent,
    opponentDispatcher,
    reducerDispatcher
  ) {
    this.fighters.push(
      { id: userId, pokemon: user, dispatcher: userDispatcher },
      { id: opponentId, pokemon: opponent, dispatcher: opponentDispatcher }
    );
    this.reducerDispatcher = reducerDispatcher;
  }

    /**
   * Clculates which of the "opponents" is not the user
   * 
   * @returns 
   * 
   */
  getOpponent() {
    return this.fighters.filter((fighter) => fighter.id === opponentId)[0]
      .pokemon;
  }

  /**
   * Clculates which of the "fighters" is the user
   * 
   * @returns 
   * 
   */
  getUser() {
    return this.fighters.filter((fighter) => fighter.id === userId)[0].pokemon;
  }

  /**
   * Calculates the starting pokemon and enables the attack button if the player is next.
   *
   */
  startBattle() {
    try {
      this.reducerDispatcher({type: 'BATTLE_START'})
      // The starting pokemon is the fastest, if theres a draw,
      // the strongest starts
      const user = this.getUser();
      const opponent = this.getOpponent();
      let message = '';
      if (user.speed === opponent.speed) {
        if (user.attack > opponent.attack) {
          this.next = user.id;
          message = `User with: ${user.name} starts!`;
        } else {
          this.next = opponent.id;
          message = `Opponent: ${opponent.name} starts!`;
        }
      } else {
        if (user.speed > opponent.speed) {
          this.next = user.id;
          message = `User with: ${user.name} starts!`;
        } else {
          this.next = opponent.id;
          message = `Opponent: ${opponent.name} starts!`;
        }
      }
      this.notify(message, BattleStatusSeverity.INFO.color);
      // calculate if the user is next to attack, if so, delegate the
      // attack action to the user.
      setTimeout(() => {
        if (this.next === this.getUser().id) {
          console.log('User starts');
          this.reducerDispatcher({ type: 'USER_ATTACKS' });
        } else {
          this.attack();
        }
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Perform the substraction of hp from the 'opponent'
   * 
   */
  attack() {
    try {
      this.turns++;
      let attackingPokemon = this.calculateAttackingPokemon();
      let opponentPokemon = this.calculateOpponentPokemon();
      let attack = 0;
      const calcDmg = attackingPokemon.attack - opponentPokemon.defense;
      if (calcDmg <= opponentPokemon.defense) {
        attack = 1;
      } else {
        attack = calcDmg;
      }
      opponentPokemon.hp = opponentPokemon.hp - attack;
      this.next = opponentPokemon.id;
      const fighter = this.fighters.filter(
        (fighter) => fighter.pokemon.id === opponentPokemon.id
      )[0];
      fighter.dispatcher((oldState) => {
        return { ...oldState, hp: opponentPokemon.hp };
      });
      this.updateFighter(fighter, opponentPokemon);
      setTimeout(() => {
        this.notify(
          `Damage to ${opponentPokemon.name}! on turn ${this.turns}. ${opponentPokemon.name} is next.`,
          BattleStatusSeverity.INFO.color
        );
        if (opponentPokemon.hp === 0) {
          this.reducerDispatcher({type: 'WINNER', payload: `${attackingPokemon.name} wins!`})
          return
        } else {
          if (this.next === this.getUser().id) {
            this.reducerDispatcher({ type: 'USER_ATTACKS' });
          } else {
            this.attack();
          }
        }
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Updates a fighter from the class array
   * 
   * @param {} oldFighter 
   * @param {*} newPokemon 
   */
  updateFighter(oldFighter, newPokemon) {
    const index = this.fighters.indexOf(oldFighter);
    this.fighters[index].pokemon = newPokemon;
  }

  /**
   * Sends a message to resucer's dispatcher
   * 
   * @param {
   * } message 
   * @param {*} color 
   */
  notify(message, color) {
    this.reducerDispatcher({
      type: 'NOTIFY',
      payload: { message: message, color: color },
    });
  }

  /**
   * Clculates which of the "fighters" is the attacker
   * 
   * @returns 
   */
  calculateAttackingPokemon() {
    return this.fighters.filter(
      (fighter) => fighter.pokemon.id === this.next
    )[0].pokemon;
  }

    /**
   * Clculates which of the "fighters" is the opponent
   * 
   * @returns 
   */
  calculateOpponentPokemon() {
    return this.fighters.filter(
      (fighter) => fighter.pokemon.id !== this.next
    )[0].pokemon;
  }
}
