<template>
  <div>
    <template v-if="items.length">
      <CollectionItem
        v-for="item in items"
        :id="item.id"
        :key="item.id"
        :message="item.message"
        :checked="item.checked"
        @update="updateHandler"
        @delete="deleteHandler"
      />
    </template>
    <template v-if="!items.length">
      No tasks in your list
    </template>
  </div>
</template>

<script>
import CollectionItem from 'components/ui/Collection/CollectionItem';

export default {
  name: 'Collection',
  components: {
    CollectionItem,
  },
  props: {
    /**
     * List of tasks
     */
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /**
     * Item deletion event handler
     *
     * @param {Number} itemId Id of element
     */
    deleteHandler: function deleteHandler(itemId) {
      this.$emit('delete', itemId);
    },

    /**
     * Item state changing event handler
     *
     * @param {Object} updatedItem Item to update
     */
    updateHandler: function deleteHandler(updatedItem) {
      this.$emit('update', updatedItem);
    },
  },
};
</script>
