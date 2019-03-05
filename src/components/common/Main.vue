<template>
  <main class="content__wrapper">
    <List />
  </main>
</template>

<script>
import List from 'components/common/List';

export default {
  name: 'Main',
  components: {
    List,
  },
};
</script>

<style lang="scss" scoped>
  .content__wrapper {
    flex: 1 1 auto;
    margin: 0 auto;
  }
</style>
