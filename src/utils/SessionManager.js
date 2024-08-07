const userChoiceItemId = 'user_choice';
const opponentItemId = 'opponent';
const pokemonsInSessionId = 'pokemons';

/**
 * Yields the session operations
 * 
 */
export class SessionManager {
  /**
   * Gets the pokemon previously chosen by user
   * 
   * @returns 
   * 
   */
  static getUserChoiceItemId() {
    return userChoiceItemId;
  }

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
  static storePokemonId(itemId, id) {
    try {
      sessionStorage.setItem(itemId, id);
    } catch (error) {
      console.error(error);
    }
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
      if( chosenPokemonId ){
        const filteredArray = pokemonsInSession.filter(
          (pokemon) => pokemon.id === chosenPokemonId
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
      }else{ 
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }

    /**
   * Gets the opponent from the session storage.
   *
   */
    static getOpponentPokemon() {
      try {
        const pokemonsInSession = this.getPokemonsFromSession();
        const chosenPokemonId = parseInt(
          sessionStorage.getItem(opponentItemId)
        );
        const filteredArray = pokemonsInSession.filter(
          (pokemon) => pokemon.id === chosenPokemonId
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
  static getRandomPokemon(but) {
    try {
      console.log(but);
      const pokemonsInSession = this.getPokemonsFromSession();
      const randomPokemonId = this.getRandomNumberBut(1, 5, but);
      const filteredArray = pokemonsInSession.filter(
        (pokemon) => pokemon.id === randomPokemonId
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

  static getRandomNumberBut(from, to, but){
    let random;
    do{
      random = Math.floor(Math.random() * to) + from;
    }while(random === but);
    return random;
  }

  static clearSession(){
    try{
      sessionStorage.clear();
      window.location.reload();
    }catch(error){
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
