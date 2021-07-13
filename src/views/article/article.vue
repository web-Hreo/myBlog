<!--
  @name: 'article',
  @describe: 文章存档
  @author: HeHua,
  @createDate: 2021年07月12日 10:43:00,
  @changeDate: ,
-->
<template>
  <div id='article'>
    <div class="article-box mt-15">
      <el-row >
        <el-col :span="6" class="article-menu">
          <el-menu
            :default-active="menuActive"
            @select="select"
            class="el-menu-vertical-demo"
            >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">文章分档</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              <span slot="title">文章归档</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" class="article-cont">
          <ul class="label-list fbc" v-if="menuActive==='1'">
            <li class="label-item fbc" v-for="(item, index) in labelList" :key="index">
              <p>{{item.label}}</p>
              <p>文章数( 100 )</p>
            </li>
          </ul>
          <div class="article-list" v-else>
            <div v-for="(item,index) in articleList" :key="index" class="list-item">
              <h3>FROM: {{ item.date }}</h3>
              <ul class="list-ul">
                <li v-for="(it, index) in item.list" :key="index">
                  <p>
                    <span class="list-date">{{ it.date }}</span>
                    <a href="" class="list-name">{{ it.name }}</a>
                    <span class="list-num">{{ it.num }}次浏览</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  
  </div>
</template>

<script>
export default {
  name: 'article',

  components: {},

  data () {
    return {
      menuActive:'2',
      labelList: [
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
        { id: 13, label: "git", path: "#" }
      ],
      articleList:[
        {
          date:'2021',
          list:[
            { id:1,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'08/11' },
            { id:3,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:4,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'08/11' },
            { id:5,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:6,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'08/11' },
            { id:7,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:8,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'08/11' }
          ]
        },
        {
          date:'2020',
          list:[
            { id:1,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:2,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:3,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:4,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:5,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:6,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:7,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:8,name:'js一些操作运算符',num:100,date:'08/11' }
          ]
        },
        {
          date:'2020',
          list:[
            { id:1,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:2,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:3,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:4,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:5,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:6,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:7,name:'js一些操作运算符',num:100,date:'08/11' },
            { id:8,name:'js一些操作运算符',num:100,date:'08/11' }
          ]
        }
      ]
    }
  },

  mounted () {},

  destroyed () {},

  methods: {
    select(index){
      console.log(index);
      this.menuActive = index
    }
  }
}

</script>
<style lang='less' scoped>
  #article{
    width: 100%;
    padding-bottom: 20px;
    .article-box{

    }
    .article-menu{
      background-color: #fff;
      margin-right: 10px;
      .el-menu-vertical-demo{
        border-right: none;
      }
    }
    .article-cont{
      box-sizing: border-box;
      padding: 10px;
      background-color: #fff;
      .el-tag{
        // cursor: pointer;
      }
      .label-list{
        flex-wrap: wrap;
      }
      .label-item{
        color: #000;
        box-sizing: border-box;
        width: 49%;
        padding: 10px 20px;
        margin-top: 20px;
        background-color: #f5f5f5;
        // cursor: pointer;
        border-radius: 5px;
        transition: all .2s ease-in;
        letter-spacing: 1px;
        &:hover{
          color: #409EFF;
          background-color: rgba(0, 0, 0, .1);
        }
        &:nth-child(1),
        &:nth-child(2){
          margin-top: 0;
        }
      }
    }
    .list-item{
      h3{
        padding: 10px 0;
        font-size: 18px;
      }
    }
    .list-ul{
      margin-left: 20px;
      list-style-type: disc;
      li{
        padding: 5px 0;
        .list-date{
          margin-right: 8px;
          color: #666;
          font-size: 13px;
        }
        .list-name{
          color: #3d658d;
          text-decoration: none
        }
        .list-num{
          color: #a8ced8;
          margin-left: 30px;
        }
      }
    }

  }
</style>