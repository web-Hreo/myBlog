<!--
  @name: 'tags',
  @describe: 归档-文章标签
  @author: HeHua,
  @createDate: 2021年07月15日 20:50:00,
  @changeDate: ,
-->
<template>
  <div id='tags'>
    <p class="note warning no-icon" style="margin-left:15px">文章标签数量：80</p>
    <ul class="fc mt-20">
      <li v-for="item in tagList" :key="item.id" :style="randomRgb()">🔖 {{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tags',

  components: {},

  data () {
    return {
      tagList: [
        { id: 1, label: "HTML(5)", path: "#" },
        { id: 2, label: "CSS(3)", path: "#" },
        { id: 3, label: "JavaScript", path: "#" },
        { id: 4, label: "ES6", path: "#" },
        { id: 5, label: "jQuery", path: "#" },
        { id: 6, label: "UI框架", path: "#" },
        { id: 7, label: "VUE", path: "#" },
        { id: 8, label: "React", path: "#" },
        { id: 9, label: "Angular", path: "#" },
        { id: 10, label: "Node", path: "#" },
        { id: 11, label: "MongoDB", path: "#" },
        { id: 12, label: "Webpack", path: "#" },
        { id: 13, label: "git", path: "#" },
        { id: 13, label: "数据结构", path: "#" },
      ],
    }
  },

  mounted () {},

  destroyed () {},

  methods: {
      //该方法返回一个不规则背景色
    randomRgb(item) {
      let R = Math.floor(Math.random() * 200);
      let G = Math.floor(Math.random() * 200);
      let B = Math.floor(Math.random() * 200);
      return { background: "rgb(" + R + "," + G + "," + B + ")" };
    }
  }
}

</script>
<style lang='less' scoped>
  #tags{
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    margin-top: 15px;
    box-sizing: border-box;
    padding: 15px;
  }
  ul{
    flex-wrap: wrap;
  }
  li{
    font-family: "Linux Biolinum", "Noto Serif SC", Helvetica, Arial, Menlo, Monaco, monospace, sans-serif;
    font-size: 16px;
    color: #fff;
    border-radius: 6px;
    padding: 10px;
    display: inline-block;
    margin: 0 15px 15px;
  }
  .note{
    width: calc(100% - 15px);
  }
</style>