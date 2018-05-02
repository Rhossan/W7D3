import {values} from 'lodash';

function selectAllPokemon(state) => {
  const first = Object.keys(state);
  const second = Object.keys(first);
  const third = Object.keys(second);
  return _.values(third);

};

export default selectAllPokemon;
