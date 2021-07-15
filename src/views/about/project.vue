<!--
  @name: 'project',
  @describe: 关于-关于我
  @author: HeHua,
  @createDate: 2021年07月14日 22:54:00,
  @changeDate: ,
-->
<template>
  <div id='project'>
    <div class="note warning no-icon" style="">本站项目由博主工作以来开发的项目，仅为记录及参考使用</div>
    <div class="linkeBox">
      <li class="link-item link-item-dalao" v-for="item in linkList" :key="item.id">
        <a class="link-item-inner effect-apollo" :href="item.href" :title="item.title" target="_blank" data-pjax-state="external">
        <img :src="item.imgSrc"><span class="sitename">{{item.name}}</span>
        <div class="linkdes">{{item.title}}</div>
        </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',

  components: {},

  data () {
    return {
      linkList:[
        { id:1,name:'智工建智慧工地云平台-企业端',title:'智工建专业从事开发智慧工地云平台,采用物联网、人工智能',imgSrc:'https://company.libawall.com/2021_7_13_1812/assets/logo.4d25621e.svg',href:'https://company.libawall.com' },
        { id:1,name:'智工建智慧工地云平台-项目端',title:'智工建专业从事开发智慧工地云平台,采用物联网、人工智能',imgSrc:'https://company.libawall.com/2021_7_13_1812/assets/logo.4d25621e.svg',href:'https://project.libawall.com' },
        { id:2,name:'智工建智慧工地云平台-官网',title:'智工建专业从事开发智慧工地云平台,采用物联网、人工智能',imgSrc:'https://company.libawall.com/2021_7_13_1812/assets/logo.4d25621e.svg',href:'https://www.zjgong.com/' },
        { id:3,name:'景同舟-用户端',title:'此端口为微信H5 需要微信浏览器打开',imgSrc:'http://scenic.jtz.cn/logo.png',href:'https://i.jtz.cn' },
        { id:4,name:'景同舟-官网',title:'景同舟,整合国内众多优质大景区,推出景区大联盟年票产品,游客一票可无限次畅玩联盟景区',imgSrc:'http://testwww.jtz.cn/_nuxt/assets/image/layouts/logo.svg',href:'http://www.jtz.cn/' },
        { id:5,name:'篱笆墙人事管理平台',title:'为企业贯穿员工职业生涯的HRsaas服务共建信用体系',imgSrc:'https://hr.libawall.com/img/logo.7b68b222.svg',href:'https://hr.libawall.com' },
        { id:6,name:'篱笆墙-官网',title:'为企业贯穿员工职业生涯的HRsaas服务共建信用体系',imgSrc:'https://hr.libawall.com/img/logo.7b68b222.svg',href:'https://www.libawall.com/' },
      ]
    }
  },

  mounted () {},

  destroyed () {},

  methods: {
  }
}

</script>
<style lang='less' scoped>
.note.warning {
    background-color: #fdf8ea;
    border-left-color: #f0ad4e;
}
.note {
    position: relative;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: initial;
    border-left: 3px solid #eee;
    background-color: #f9f9f9;
    border-radius: 3px;
    font-size: var(--content-font-size);
    width:100%;
    font-size:19px;
    font-family: cursive,Noto Serif SC,sans-serif;
    margin: 30px 0 10px 0;
}
.linkeBox{
  margin: 0;
  list-style: none;
  padding: 0;
  width: 100%;
  display: inline-block;
  .link-item{
    width: 42%;
    float: left;
    border: 1px solid #ececec;
    padding: 10px 30px;
    margin: 4px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all .6s;
    transition: all .6s;
    border-radius: 10px;
    background-color: #fff;
    a{
      color: var(--base-color);
      text-decoration: none;
      transition: .3s;
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      color: #42b983;
    }
    img{
      float: right;
      // box-shadow: inset 0 0 10px #000;
      padding: 5px;
      opacity: 1;
      transform: rotate(0);
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      -o-transform: rotate(0);
      -ms-transform: rotate(0);
      transition: all ease 1s;
      -webkit-transition: all ease 1s;
      -moz-transition: all ease 1s;
      -o-transition: all ease 1s;
      margin-top: 5px;
      width: 65px;
      height: 65px;
      padding: 2px;
      border-radius: 100%;
    }
    .sitename{
      font-size: 18px;
      color: orange;
      padding-bottom: 10px;
      display: block;
      -webkit-transition: all .3s;
      transition: all .3s;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
    }
    .linkdes {
      color: #949494;
      font-size: 15px;
      padding: 10px 0;
      border-top: 1px dashed #ddd;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: 25px;
      -webkit-transition: all .5s;
      transition: all .5s;
    }
  }
}
</style>