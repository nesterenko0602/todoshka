export default {
  /**
   * Get all sorted by the ID items
   *
   * @param {Object} state
   * @returns {Array.<Object>}
   */
  getItems: state => state.items.sort((a, b) => b.id - a.id),

  /**
   * Get an item with passed ID
   *
   * @param {Object} state
   * @param {Object} getters
   * @returns {Function}
   */
  getItemById: (state, getters) => {
    const items = getters.getItems;

    return id => items.find(item => item.id === id);
  },
};
