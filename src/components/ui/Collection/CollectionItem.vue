<template>
  <div class="list-item__wrapper">
    <Checkbox
      :id="id"
      :checked="checked"
      @change="updateClickHandler"
    />
    <label :for="id">{{ message }}</label>
    <Icon
      name="delete"
      size="18"
      @click.native="deleteClickHandler"
    />
  </div>
</template>

<script>
import Checkbox from 'components/ui/Checkbox';
import Icon from 'components/ui/Icon';

export default {
  name: 'CollectionItem',
  components: {
    Checkbox,
    Icon,
  },
  props: {
    /**
     * Item ID
     */
    id: {
      type: Number,
      required: true,
    },

    /**
     * Whether checkbox checked (task is done)
     */
    checked: {
      type: Boolean,
      default: false,
    },

    /**
     * Task text
     */
    message: {
      type: String,
      default: '',
    },
  },
  methods: {
    /**
     * Checkbox click handler
     */
    updateClickHandler() {
      const { id, message, checked } = this;

      this.$emit('update', {
        id,
        message,
        checked: !checked,
      });
    },

    /**
     * Delete icon click handler
     */
    deleteClickHandler() {
      this.$emit('delete', this.id);
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
  padding-left: 8px;

  label {
    cursor: pointer;
    padding: 4px 4px 4px 8px;
    width: 100%;
  }

  .svg-icon {
    cursor: pointer;
    display: none;
    fill: $grey-dark;
    padding: 6px 8px;
    transition: fill .3s ease;

    &:hover {
      fill: $alert;
    }
  }

  &:hover {
    background: $grey-lighter;

    .svg-icon {
      display: block;
    }
  }
}

@media screen and (max-width: $mobile-width) {
  .list-item__wrapper {
    &:hover {
      background: transparent;
    }

    .svg-icon {
      display: block;
    }
  }
}
</style>
