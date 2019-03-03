<template>
  <h2
    v-text="message"
  />
</template>

<script>
export default {
  name: 'ListHeader',
  props: {
    message: {
      type: String,
      default: '',
    },
  },

};
</script>
