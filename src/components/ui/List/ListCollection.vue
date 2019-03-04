<template>
  <div>
    <template v-if="items.length">
      <ListItem
        v-for="item in items"
        :id="item.id"
        :key="item.id"
        :message="item.message"
        :checked="item.checked"
      />
    </template>
    <template v-if="!items.length">
      No tasks in your list
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from 'components/ui/List/ListItem';

export default {
  name: 'ListCollection',
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters({
      items: 'getItems',
    }),
  },
};
</script>
