import { MUTATIONS } from 'store/mutations';

export default {
  /**
   * Add new item to the list
   *
   * @param {Object} context
   * @param {Function} context.commit
   * @param {Object} context.getters
   * @param {string} message ToDo item's text
   */
  addItem({ commit, getters }, message = '') {
    const id = getters.getLastItemId + 1;

    commit(MUTATIONS.ADD, {
      id,
      checked: false,
      message,
    });
  },

  /**
   * Update an item from the list that has the same ID as the item being passed
   *
   * @param {Object} context
   * @param {Function} context.commit
   * @param {Object} context.getters
   * @param {Object} updatedItem Updated version of item
   */
  updateItem({ commit, getters }, updatedItem = {}) {
    const { id, checked } = updatedItem;
    const item = getters.getItemById(id);

    if (!item) {
      return;
    }

    commit(MUTATIONS.UPDATE, {
      ...item,
      checked,
    });
  },

  /**
   * Delete an item with passed ID from the list
   *
   * @param {Object} context
   * @param {Function} context.commit
   * @param {number} id ID of item to remove
   */
  deleteItem({ commit }, id) {
    if (Number.isNaN(id)) {
      return;
    }

    commit(MUTATIONS.DELETE, id);
  },
};
