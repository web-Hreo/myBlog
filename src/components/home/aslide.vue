<template>
  <div id="aslide">
    <!-- 个人信息 -->
    <div class="info_my background">
      <div class="my_background"></div>
      <div class="my_headpic">
        <img
          src="@/assets/common/avatar.jpg"
          alt
        />
      </div>
      <div class="my_information">
        <p>Hhua | 何华</p>
        <p>web前端开发工程师</p>
        <p>邮箱：ngpeipao9977590@163.com</p>
        <p>微信(添加备注来源)：17779168734</p>
        <p>爱代码、爱吉他、爱民谣的97伪文艺程序猿一枚，分享一些个人开发之路上踩的各种坑，只为后来人更好的行走。</p>
      </div>
    </div>
    <!-- 天气 -->
    <div class="background info_weather" v-if="Weather">
      <p>您的位置 -> {{Weather.address}}</p>
      <!-- {{Weather.basic.update.loc}} -->
      <p>{{Weather.time}}</p>
      <p>
        <i class="el-icon-sunrise"></i>
      </p>
      <p>实时气温：{{Weather.tmp}}°C</p>
      <p>{{Weather.mintmp}}°C~{{Weather.maxtmp}}°C</p>
      <p>{{Weather.txt}}</p>
      <p>{{Weather.dir}}</p>
      <p>{{Weather.aqi}} {{Weather.qlty}}</p>
    </div>
    <!-- 标签 -->
    <div class="info_label background">
      <p class="info_title">标签云</p>
      <ul>
        <li v-for="(item, index) in label" :key="index" :style="randomRgb(item)">
          <a href>{{item.label}}</a>
        </li>
      </ul>
    </div>
    <!-- 热度榜 -->
    <div class="info_rankingList background">
      <p class="info_title">热度榜</p>
      <div class="rankingList_item" v-for="(item, index) in [1,2]" :key="index">
        <a href>
          <p class="item_title">小程序插件</p>
          <div class="item_text">
            <div class="item_img">
              <img src="https://www.yxiaowei.com/Public/upload/article_banner/2019/12-30/5e09c45564d98.jpg" alt />
            </div>
            <div class="item_desc">
              <p>一款超好用的插件——WxParse，在解析内容的时候就需要将内容中的HTML标签转换成微信小程序所支持</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="info_friendChain background">
      <p class="info_title">
        友情链接
        <a href>申请友链</a>
      </p>
      <div class="friendChain_website">
        <p>本站信息如下：</p>
        <p>网站名称：花未央</p>
        <p>网站链接:https://http://localhost:8080/</p>
        <p>
          <span style="color:red">注：</span> 申请友链之前，请务必先将本站添置友链，花未央收到后会立马处理，处理结果会以邮件形式通知您~
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { apiAddress, weather } from "../../axios/api.js"; //引入api
export default {
  data() {
    return {
      label: [
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
      userinfo: [],
      Weather: []
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    //在getdata内调用所有方法
    async getdata() {
      try {
        //使用apiAddress接口 -> 获取用户当前ip、所在城市
        let { data } = await apiAddress();
        //使用weather接口 -> 获取用户所在城市当前天气
        let weatherData = await weather(data.ip);
        weatherData = weatherData.result.HeWeather5[0];

        this.Weather = {
          address: data.mainInfo, //地址
          time: weatherData.basic.update.loc, //当前刷新时间
          tmp: weatherData.now.tmp, //当前气温
          maxtmp: weatherData.daily_forecast[0].tmp.max, //当前气温
          mintmp: weatherData.daily_forecast[0].tmp.min, //当前气温
          txt: weatherData.now.cond.txt, //天气状况
          dir: weatherData.now.wind.dir, //风向
          aqi: weatherData.aqi.city.aqi, //aqi指数
          qlty: weatherData.aqi.city.qlty //空气质量等级
        };
      } catch (err) {
        console.log(err);
      }
    },
    //该方法返回一个不规则背景色
    randomRgb(item) {
      let R = Math.floor(Math.random() * 255);
      let G = Math.floor(Math.random() * 255);
      let B = Math.floor(Math.random() * 255);
      return { background: "rgb(" + R + "," + G + "," + B + ")" };
    }
  }
};
</script>

<style lang='less' scoped>
.background {
  margin: 15px 0;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 5px;
  .info_title {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c0c0c0;
    a {
      display: inline-block;
      background: #fc9d9a;
      padding: 3px 11px;
      border-radius: 8px;
      transition: all 0.5s;
      color: #fff;
      font-size: 12px;
      margin-left: 10px;
    }
  }
}
.info_my {
  position: relative;
  padding: 0 !important;
  .my_background {
    height: 200px;
    filter: blur(5px);
    background-image: url("http://b-ssl.duitang.com/uploads/item/201601/19/20160119171650_XLAfs.thumb.700_0.jpeg");
    background-size: 100% 120%;
    background-position: center;
  }
  .my_headpic {
    position: absolute;
    width: 100%;
    top: 150px;
    left: 50%;
    img {
      transform: translateX(-50%);
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .my_information {
    margin-top: 60px;
    padding: 15px 10px;
    p {
      text-align: center;
      &:nth-child(1) {
        color: #3f3f3f;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 10px;
      }
      &:nth-child(2) {
        color: #1abc9c;
        padding: 5px 0;
      }
      &:nth-child(3),
      &:nth-child(4) {
        font-size: 14px;
        padding: 2px 0;
        color: #555;
      }
      &:nth-child(5) {
        padding: 5px;
        font-size: 14px;
        text-align: left;
        text-decoration: none;
        color: rgb(170, 169, 159);
      }
    }
  }
}
.info_weather {
  background-image: linear-gradient(#7d90a0, #9198e5);
  color: #fff;
  text-align: center;
  p {
    margin: 5px 0;
    &:nth-child(1),
    &:nth-child(2) {
      font-size: 12px;
      text-align: left;
    }
    &:nth-child(3) {
      font-size: 80px;
    }
    &:nth-child(8) {
      display: inline-block;
      width: 80px;
      height: 30px;
      line-height: 30px;
      background-color: #40c057;
      padding-bottom: 5px;
    }
  }
}
.info_label {
  ul {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 7px;
      padding: 7px;
      border-radius: 5px;
      font-size: 14px;
      transition: all ease 0.5s;
      &:hover {
        border-radius: 0;
      }
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #fff;
      }
    }
  }
}
.info_rankingList {
  .rankingList_item {
    padding: 10px 0;
    border-bottom: 1px solid #eaeaea;
    a {
      color: #555;
      &:hover {
        color: #000;
      }
      &:hover img {
        transform: scale(1.2);
      }
    }
    .item_title {
      padding: 5px 0;
      font-size: 14px;
      font-weight: 600;
    }
    .item_text {
      width: 100%;
      .item_img {
        overflow: hidden;
        width: 100%;
        img {
          width: 100%;
          height: 160px;
          transition: all ease 0.6s;
        }
      }
      .item_desc {
        margin: 5px;
        font-size: 14px;
        text-indent: 2em;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>