<template>
  <h2
    v-text="message"
  />
</template>

<script>
export default {
  name: 'TextHeader',
  props: {
    message: {
      type: String,
      default: '',
      required: true,
    },
  },

};
</script>
