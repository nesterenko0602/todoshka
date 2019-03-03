<template>
<div class="checkbox">
  <input
    type="checkbox"
    v-bind:id="id"
    v-bind:checked="checked"
    v-on:change="$emit('change', { checked: $event.target.checked, id })"
  >
</div>
</template>

<script>
export default {
  component: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
    id: Number,
  },
};
</script>

<style lang="scss" scoped>
  .checkbox {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    height: 18px;
    width: 18px;

    input[type="checkbox"] {
      cursor: pointer;
      margin: 0;
      transform: translate(25%, 0) scale(1.5);
    }
  }
</style>
