<template>
  <div id>
    <!-- 文章盒子 -->
    <my-list :articleList="articleList"></my-list>

    <!-- 分页 -->
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50" @current-change="handleCurrentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
//引入文章组件
import myList from "@/components/home/list";
export default {
  name: "",
  data() {
    return {
      //向子组件发送该页面的数据 后期修改为后台数据
      articleList: [
        {
          id: 1,
          title: "前端微信开发",
          desc:
            "最近由于业务所需，对接了微信H5支付，然而微信支付对这块并没有现成的demo可用，所以就必须自己老老实实对照开发文档去写咯",
          containar: "暂无",
          imgSrc:
            "https://www.yxiaowei.com/Public/upload/article_banner/2018/11-16/5bee5c2c31364.jpg",
          label: "微信小程序",
          labelSrc: "#",
          date: "2020-05-05",
          Viewsnum: 1500,
          articleLinks: "/detail",
          lastArticleTitle: "",
          lastArticleTitleSrc: "",
          nextArticleTitle: "",
          nextArticleTitleSrc: ""
        },
        {
          id: 2,
          title: "测试文章",
          desc: "没有简介",
          containar: "暂无",
          imgSrc:
            "https://www.yxiaowei.com/Public/upload/article_banner/2018/11-16/5bee5c2c31364.jpg",
          label: "ES6",
          labelSrc: "#",
          date: "2020-05-12",
          Viewsnum: 10,
          articleLinks: "/detail",
          lastArticleTitle: "",
          lastArticleTitleSrc: "",
          nextArticleTitle: "",
          nextArticleTitleSrc: ""
        }
      ]
    };
  },
  created() {},
  components: {
    myList
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang='less' scoped>
</style>