<template>
  <div class="list__wrapper">
    <TextHeader message="Tasks list" />
    <Input
      placeholder="Leave a task"
      @submit="addItem"
    />
    <Collection
      :items="items"
      @update="updateItem"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Collection from 'components/ui/Collection/Collection';
import Input from 'components/ui/Input';
import TextHeader from 'components/ui/TextHeader';

export default {
  name: 'List',
  components: {
    Collection,
    Input,
    TextHeader,
  },
  computed: {
    ...mapGetters({
      items: 'getItems',
    }),
  },
  methods: {
    ...mapActions([
      'addItem',
      'deleteItem',
      'updateItem',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '~variables';

.list__wrapper {
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 32px 8px rgba(0,0,0,.1);
  box-sizing: border-box;
  margin: 0 auto;
  max-width: $mobile-width;
  min-height: 300px;
  padding: 12px 32px 32px;
  width: $mobile-width;
}

@media screen and (max-width: $mobile-width) {
  .list__wrapper {
    border-radius: 0;
    width: 100%;
  }
}
</style>
