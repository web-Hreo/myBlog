<!--
  @name: 'mode',
  @describe: 每日心情栏目
  @author: HeHua,
  @createDate: 2021年07月12日 17:41:03,
  @changeDate: ,
-->
<template>
  <div id='mode'>
     <el-timeline>
    <el-timeline-item v-for="item in modeList" :key="item.id" :timestamp="item.date" placement="top">
        <div class="mode-card" v-html="item.title"></div>
    </el-timeline-item>

  </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'mode',

  components: {},

  data () {
    return {
      modeList:[
        { id:1,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:2,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:3,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:4,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:5,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:6,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
      ]
    }
  },

  mounted () {},

  destroyed () {},

  methods: {}
}

</script>
<style lang='less' scoped>
// /deep/.el-card__body{
//   background-color: #F6F6F6;
// }
#mode{
  padding: 15px 30px 0;
}
.mode-card{
  z-index: 1;
  // background: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%);
  background-color: #fff;
  color: #444;
  padding: 20px;
  border-radius: 10px;
}
/deep/.el-timeline-item__timestamp{
  padding-top: 20px;
  color: #000;
  font-size: 18px;
}
/deep/.el-timeline-item__node--normal{
  width: 20px;
  height: 20px;
  left: -5px;
  top: 16px;
  // background-color: #00;
}
/deep/.el-timeline-item__tail{
  height: 200%;
}
</style>