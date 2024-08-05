const userChoiceItemId = 'user_choice';
const pokemonsInSessionId = 'pokemons';

export class SessionManager {
  constructor() {}

  /**
   * Stores the api returned value to prevent fetches on
   * page reload.
   *
   * @param pokemons
   */
  static storePokemons(pokemons) {
    try {
      sessionStorage.setItem(pokemonsInSessionId, JSON.stringify(pokemons));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Stores the user's choice in the session storage.
   *
   * @param id
   */
  static storeChosenPokemon(id) {
    try {
      sessionStorage.setItem(userChoiceItemId, id);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * DELETE ME
   */
  static stripId(id) {
    let idToString = new String(id);
    let indexOfDash = idToString.indexOf('-');
    return idToString.substring(indexOfDash + 1, idToString.length);
  }

  /**
   * Gets the user's choice from the session storage.
   *
   * @param pokemon
   */
  static getChosenPokemon() {
    try {
      const pokemonsInSession = this.getPokemonsFromSession();
      const chosenPokemonId = parseInt(
        sessionStorage.getItem(userChoiceItemId)
      );
      const filteredArray = pokemonsInSession.filter(
        (pokemon) => this.stripId(pokemon.id) == chosenPokemonId
      );
      if (filteredArray.length > 0) {
        const filteredPokemon = filteredArray[0];
        if (filteredPokemon.id != null) {
          return filteredPokemon;
        } else {
          throw new Error('Malformed pokemon object found.');
        }
      } else {
        throw new Error('No valid pokemon found.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Gets a random pokemon from the session storage.
   *
   * @param pokemon
   */
  static getRandomPokemon() {
      try {
        const pokemonsInSession = this.getPokemonsFromSession();
        const randomPokemonId = Math.floor(Math.random() * 5);
        const filteredArray = pokemonsInSession.filter(
          (pokemon) => this.stripId(pokemon.id) == randomPokemonId
        );
        if (filteredArray.length > 0) {
          const filteredPokemon = filteredArray[0];
          if (filteredPokemon.id != null) {
            return filteredPokemon;
          } else {
            throw new Error('Malformed pokemon object found.');
          }
        } else {
          throw new Error('No valid pokemon found.');
        }
      } catch (error) {
        console.error(error);
      }
  }

  /**
   * Gets the user's choice from the session storage.
   *
   */
  static getPokemonsFromSession() {
    try {
      return JSON.parse(sessionStorage.getItem(pokemonsInSessionId));
    } catch (error) {
      console.error(error);
    }
  }
}
