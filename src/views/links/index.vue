<!--
  @name: 'links',
  @describe: 关于-关于我
  @author: HeHua,
  @createDate: 2021年07月14日 22:54:00,
  @changeDate: ,
-->
<template>
  <div id='links'>
    <div class="note warning no-icon" style="">🌸 大佬 —— 没有不劳而获的工作，更没有坐享其成的收获</div>
    <div class="linkeBox">
      <li class="link-item link-item-dalao" v-for="item in linkList" :key="item.id">
        <a class="link-item-inner effect-apollo" :href="item.href" :title="item.title" target="_blank" data-pjax-state="external">
        <img :src="item.imgSrc"><span class="sitename">{{item.name}}</span>
        <div class="linkdes">{{item.title}}</div>
        </a>
      </li>
    </div>
    <div class="note warning no-icon" style="">🌸 大佬 —— 没有不劳而获的工作，更没有坐享其成的收获</div>
    <div class="linkeBox">
      <li class="link-item link-item-dalao" v-for="item in linkList" :key="item.id">
        <a class="link-item-inner effect-apollo" :href="item.href" :title="item.title" target="_blank" data-pjax-state="external">
        <img :src="item.imgSrc"><span class="sitename">{{item.name}}</span>
        <div class="linkdes">{{item.title}}</div>
        </a>
      </li>
    </div>
    <div class="note warning no-icon" style="">🌸 大佬 —— 没有不劳而获的工作，更没有坐享其成的收获</div>
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
  name: 'links',

  components: {},

  data () {
    return {
      linkList:[
        { id:1,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:2,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:3,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:4,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:5,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:6,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:7,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:8,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
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
    width: 24%;
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
      box-shadow: inset 0 0 10px #000;
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