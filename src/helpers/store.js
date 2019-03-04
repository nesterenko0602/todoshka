import { STORAGE_NAME } from 'constants/constants';

/**
 * Save every changes of state to localStorage
 *
 * @param {Object} initialState
 */
export const applyProxy = initialState => new Proxy(initialState, {
  set: (obj, prop, value) => {
    obj[prop] = value; // eslint-disable-line

    if (window.localStorage) {
      window.localStorage.setItem(STORAGE_NAME, JSON.stringify(obj));
    }

    return true;
  },
});

/**
 * Restore initial state from localStorage
 *
 * @param {Object} initialState
 */
export const restoreState = (initialState) => {
  if (!window.localStorage) {
    return initialState;
  }

  const savedValue = JSON.parse(localStorage.getItem(STORAGE_NAME));

  if (!savedValue) {
    return initialState;
  }

  if (
    typeof savedValue !== 'object'
    || Object.keys(savedValue).length !== Object.keys(initialState).length
  ) {
    return initialState;
  }

  return savedValue;
};
