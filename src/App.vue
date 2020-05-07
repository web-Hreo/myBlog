<template>
  <div id="app">
    <my-head></my-head>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHead from "./components/Header";
import myFooter from "./components/footer";
export default {
  data() {
    return {
      //  reg = /^[1]{0,1}[0-9]{0,4}(\.[0-9]{1,6})?|[20000](\.[0]{1,6})?$/
    };
  },
  components: {
    myHead,
    myFooter
  }
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  border: 0;
  display: block;
}
#app {
  font: 16px "微软雅黑", Arial, Helvetica, sans-serif;
  color: #555;
  background: #f7f7f7;
  min-height: 1000px;
}
</style>
