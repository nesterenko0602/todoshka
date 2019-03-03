<template>
  <div class="input__wrapper">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      @:keydown="handleKey"
    >
    <Icon name="send" />
  </div>
</template>

<script>
import { KEY_CODES } from 'constants/constants';
import Icon from 'components/ui/Icon';

export default {
  name: 'Input',
  components: {
    Icon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleKey: function handleKey(event) {
      const { keyCode, target: { value } } = event;

      if (keyCode === KEY_CODES.ENTER && value) {
        this.$emit('submit', { name: this.name, value });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~variables';

.input__wrapper {
  margin-bottom: 20px;
}

.input {
  background-color: $grey-lighter;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  padding: 12px;
  transition: background .3s ease;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    background-color: $grey-light;
  }

  &::placeholder {
    color: $grey;
    font-size: 13px;
    transition: color .3s ease;
  }
}
</style>
