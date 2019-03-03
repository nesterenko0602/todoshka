<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from 'components/common/Content';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style lang="scss">
@import 'styles/common';

#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  justify-content: flex-start;
  height: 100%;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
