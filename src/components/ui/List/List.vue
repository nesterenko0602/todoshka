<template>
    List
  <div class="list__wrapper">
  </div>
</template>

<script>
export default {
  name: 'List',
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
