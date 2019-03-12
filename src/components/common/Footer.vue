<template>
  <footer class="footer__wrapper">
    Developed by
    <a
      href="https://nesterenko.page"
      target="_blank"
    >Dmitry Nesterenko</a>
    for
    <a
      href="https://chainstack.com/"
      target="_blank"
    >Chainstack</a>
    with ❤️
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import '~variables';

.footer__wrapper {
  background: $dark;
  color: $light;
  flex: 0 0 auto;
  margin: 60px 0 0;
  padding: 20px 30px;
  text-align: center;

  a {
    color: $light;
    transition: color .1s ease;

    &:hover {
      color: $primary;
    }
  }
}
</style>
