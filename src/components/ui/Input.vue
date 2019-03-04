<template>
  <div class="input__wrapper">
    <input
      v-model="message"
      type="text"
      :class="classNames"
      :placeholder="placeholder"
      @keydown="handleKey"
    >
    <Icon
      name="send"
      size="16"
      @click.native="save"
    />
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
  data: function data() {
    return { message: '' };
  },
  computed: {
    isFilled: function isFilled() {
      return Boolean(this.message);
    },
    classNames: function classNames() {
      return [
        'input',
        {
          'input--filled': this.isFilled,
        },
      ];
    },
  },
  methods: {
    handleKey: function handleKey(event) {
      const { keyCode } = event;

      if (keyCode === KEY_CODES.ENTER) {
        this.save();
      }
    },
    save: function save() {
      if (!this.message) {
        return;
      }

      console.log('saveNewMessage', { name: this.name, message: this.message });

      this.dropMessage();
    },
    dropMessage: function dropMessage() {
      this.message = '';
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~variables';

.input__wrapper {
  margin-bottom: 20px;
  position: relative;
}

.svg-icon {
  cursor: pointer;
  fill: $grey;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0px;
  padding: 14px 12px 12px;
  pointer-events: none;
  transition: all .3s ease;

  &:hover {
    fill: $grey-dark;
  }
}

.input {
  background-color: $grey-lighter;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  padding: 12px 40px 12px 12px;
  width: 100%;

  &::placeholder {
    color: $grey;
    font-size: 13px;
    transition: color .3s ease;
  }

  &.input--filled {
    & + .svg-icon {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
