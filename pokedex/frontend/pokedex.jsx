import React from 'react';
import ReactDOM from 'react-dom';
import fetchAllPokemon from './util/api_util';
import * as apiUtilActions from './actions/pokemon_actions.js';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});


window.fetchAllPokemon = fetchAllPokemon;
window.apiUtilActions = apiUtilActions;
window.selectAllPokemon = selectAllPokemon;
