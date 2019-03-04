<template>
  <svgicon
    :width="size"
    :height="size"
    :icon="name"
  />
</template>

<script>

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '24',
    },
  },
  mounted: function mounted() {
    import(`svg/${this.name}`);
  },
};
</script>
