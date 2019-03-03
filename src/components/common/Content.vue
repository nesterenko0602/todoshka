<template>
  <section class="section">
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
  .section {
    flex: 1 1 auto;
    margin: 0 auto;
  }
</style>
