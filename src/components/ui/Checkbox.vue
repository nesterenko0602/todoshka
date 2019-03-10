<template>
  <div class="checkbox">
    <input
      :id="id"
      type="checkbox"
      :checked="checked"
      @change="updateHandler"
    >
  </div>
</template>

<script>
export default {
  component: 'Checkbox',
  props: {
    /**
     * Whether checkbox checked (task is done)
     */
    checked: {
      type: Boolean,
      default: false,
    },

    /**
     * Item ID
     */
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    /**
     * Checkbox state changing handler
     * 
     * @param {Event} event Native event
     */
    updateHandler: function updateHandler(event) {
      const { id } = this;
      const { checked } = event.target;

      this.$emit('change', { checked, id });
    },
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
