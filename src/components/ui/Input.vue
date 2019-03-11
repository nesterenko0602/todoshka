<template>
  <div class="input__wrapper">
    <input
      v-model="message"
      type="text"
      :class="classNames"
      :placeholder="placeholder"
      @keydown="keyDownHandler"
    >
    <Icon
      name="send"
      size="16"
      @click.native="submit"
    />
  </div>
</template>

<script>
import Icon from 'components/ui/Icon';
import { KEY_CODES } from 'constants/constants';

export default {
  name: 'Input',
  components: {
    Icon,
  },
  props: {
    /**
     * Placeholder text for input tag
     */
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return { message: '' };
  },
  computed: {
    /**
     * Whether input field not empty?
     *
     * @returns {Boolean}
     */
    isFilled() {
      return Boolean(this.message);
    },

    /**
     * List of class names for input field
     *
     * @returns {Array}
     */
    classNames() {
      return [
        'input',
        {
          'input--filled': this.isFilled,
        },
      ];
    },
  },
  methods: {
    /**
     * Input keydown event handler
     *
     * @param {Event} event Native keydown event
     */
    keyDownHandler(event) {
      const { keyCode } = event;

      if (keyCode === KEY_CODES.ENTER) {
        this.submit();
      }
    },

    /**
     * Form submit event handler
     */
    submit() {
      if (!this.message) {
        return;
      }

      this.$emit('submit', this.message);
      this.dropMessage();
    },

    /**
     * Clean up input field
     */
    dropMessage() {
      this.message = '';
    },
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
  padding: 14px 12px 12px;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0px;
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
