import { applyProxy, restoreState } from 'helpers/store';

const initialState = restoreState({ items: [] });
const state = applyProxy(initialState);

export default state;
