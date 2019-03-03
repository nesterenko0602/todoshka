<template>
  <div class="list-item__wrapper">
    <Checkbox
      :id="id"
      :checked="checked"
      @:change="changeHandler"
    />
    <label :for="id">{{ message }}</label>
  </div>
</template>

<script>
import Checkbox from 'components/ui/Checkbox';

export default {
  name: 'ListItem',
  components: {
    Checkbox,
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      default: '',
    },
  },
  methods: {
    changeHandler: function changeHandler({ checked, id }) {
      console.log(checked, id);
      // debugger;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~variables';

  .list-item__wrapper {
    align-items: center;
    border-radius: 4px;
    display: flex;
    margin-bottom: 4px;
    padding: 0 8px;

    label {
      cursor: pointer;
      padding: 4px 0 4px 8px;
      width: 100%;
    }

    &:hover {
      background: $grey-lighter;
    }
  }
</style>
