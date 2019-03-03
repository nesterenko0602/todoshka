<template>
  <div>
    <ListItem
      v-for="item in items"
      :id="item.id"
      :key="item.id"
      :message="item.message"
      :checked="item.checked"
    />
  </div>
</template>

<script>
import ListItem from 'components/ui/List/ListItem';

export default {
  name: 'ListCollection',
  components: {
    ListItem,
  },
  data: function() {
    return {
      items: [
        {
          id: 1,
          checked: false,
          message: 'Check the tickets',
        },
        {
          id: 2,
          checked: true,
          message: 'Clean up bedroom',
        },
      ],
    };
  },
};
</script>
