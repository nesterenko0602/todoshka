<template>
  <div class="list-item__wrapper">
    <Checkbox
      :id="id"
      :checked="checked"
      @change="updateItem"
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
import { mapActions } from 'vuex';

import Checkbox from 'components/ui/Checkbox';
import Icon from 'components/ui/Icon';

export default {
  name: 'ListItem',
  components: {
    Checkbox,
    Icon,
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
    ...mapActions([
      'updateItem',
      'deleteItem',
    ]),
    deleteClickHandler: function deleteClickHandler() {
      this.deleteItem(this.id);
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
</style>
