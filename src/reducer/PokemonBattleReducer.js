import { BattleStatusSeverity } from "../components/BattleStatus";

export const PokemonBattleReducerInitialStates = {
  battleMessage: 'Loading Pokemons...',
  battleStatusColor: BattleStatusSeverity.INFO.color,
  loading: true,
  startButtonDisabled: true,
  attackButtonDisabled: true,
  startOverButtonDisabled: true,
  chosenPokemon: {},
  opponentPokemon: {},
};

export default function (state, action) {
  switch (action.type) {
    case 'POKEMON_DATA_LOADED':
      return {
        ...state,
        loading: !state.loading,
        battleMessage: "Please, select your pokemon",
        battleStatusColor: BattleStatusSeverity.SUCCESS.color
      };
    case 'POKEMON_SELECTED':
      return {
        ...state,
        battleMessage: 'Seeking opponent...',
        battleStatusColor: BattleStatusSeverity.INFO.color,
        chosenPokemon: action.payload,
        anyPokemonSelected: true
      };
    case 'READY_FOR_BATTLE':
      return {
        ...state,
        battleStatusColor: BattleStatusSeverity.DANGER.color,
        battleMessage: 'Ready for battle!',
        startButtonDisabled: false,
        startOverButtonDisabled: false,
        opponentPokemon: action.payload
      }
    case 'BATTLE_START':
      return {
        ...state,
        startButtonDisabled: true,
      }
    case 'NOTIFY':
      return {
        ...state,
        battleMessage: action.payload.message,
        battleStatusColor: action.payload.color,
      }
    case 'USER_ATTACKS':
      return {
        ...state,
        attackButtonDisabled: false
      }
    case 'WINNER':
      return {
        ...state,
        startButtonDisabled: true,
        attackButtonDisabled: true,
        battleMessage: action.payload,
      }
  }
}
