<!--
  @name: 'wangeditor',
  @describe: 富文本编辑器
  @author: HeHua,
  @createDate: 2021年07月18日 12:25:21,
  @changeDate: ,
-->
<template>
  <div id='wangeditor'>
    <p>11</p>
    <wangeditor/>
  </div>
</template>

<script>
import E from "wangeditor"
const editor = new E("wangeditor")
editor.config.height = 500
editor.create()
export default {
  name: 'wangeditor',

  components: {},

  data () {
    return {}
  },

  mounted () {},

  destroyed () {},

  methods: {}
}

</script>
<style lang='less' scoped>

</style>