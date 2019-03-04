<template>
  <section class="content__wrapper">
    <List />
  </section>
</template>

<script>
import List from 'components/ui/List/List';

export default {
  name: 'Content',
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
