/* eslint-disable no-param-reassign */

export const MUTATIONS = {
  ADD: 'add',
  DELETE: 'delete',
  UPDATE: 'update',
};

export default {
  /**
   * Add passed item to list
   * @param {Object} state
   * @param {Object} newItem Item to add to the list
   */
  [MUTATIONS.ADD](state, newItem) {
    state.items = [
      ...state.items,
      newItem,
    ];
  },

  /**
   * Update an item from the list that has the same ID as the item being passed
   *
   * @param {Object} state
   * @param {Object} updatedItem Updated version of item
   */
  [MUTATIONS.UPDATE](state, updatedItem) {
    state.items = [
      ...state.items.filter(item => item.id !== updatedItem.id),
      updatedItem,
    ];
  },

  /**
   * Delete an item with passed ID from the list
   *
   * @param {Object} state
   * @param {number} itemId ID of object to delete
   */
  [MUTATIONS.DELETE](state, itemId) {
    state.items = [
      ...state.items.filter(item => item.id !== itemId),
    ];
  },
};
