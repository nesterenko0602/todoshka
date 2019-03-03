<template>
  <div class="list__wrapper">
    <ListHeader message="ToDo List" />
    <Input
      placeholder="Leave ToDo"
      name="newToDo"
      v-on:submit="this.saveValue"
    />
  </div>
</template>

<script>
import ListHeader from 'components/ui/List/ListHeader';
import Input from 'components/ui/Input';
export default {
  name: 'List',
  components: {
    ListHeader,
    Input,
  },
  methods: {
    saveValue: function({ value }) {
      // this.$store.commit('updateMessage', { value });
    },
  }
};
</script>

<style lang="scss" scoped>
  @import '~variables';

  .list__wrapper {
    background: white;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 0 32px 8px rgba(0,0,0,.1);
    padding: 12px 56px 32px;
    margin: 20px;
    width: 500px;
  }
</style>
