<template>
  <div id="home">
    <el-row :gutter="20" class="home_cont">
      <!-- 左侧文章item -->
      <el-col :span="17" class="home_cont_blog">
        <!-- 文章盒子 -->
        <div class="blog_item" v-for="(item, index) in [1, 2, 3, 4,5,6,7,8]" :key="index">
          <el-row>
            <!--文章图片  -->
            <el-col :span="8">
              <div class="text_img">
                <a href title="centos系统漏洞修复：yum安装包工具">
                  <img
                    src="https://www.yxiaowei.com/Public/upload/article_banner/2019/12-30/5e09c45564d98.jpg"
                    alt="centos系统漏洞修复：yum安装包工具"
                  />
                </a>
              </div>
            </el-col>
            <!-- 文章介绍 -->
            <el-col :span="16">
              <div class="blog_text">
                <!-- 标题 -->
                <h3 class="blogtitle">
                  <a href>Ubuntu或Debian系统的漏洞修复：apt安装......</a>
                </h3>
                <!-- 部分内容截取 -->
                <p>Ubuntu 及 Debian 系统的软件漏洞怎么修复？其实很简单，只需要链接ssh，然后用apt安装包管理工具进行软件升级.</p>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16">
              <div class="blog_config">
                <!-- 标签链接 -->
                <div class="config_link config_item">
                  <i class="el-icon-link"></i>
                  <a href>VUE</a>
                </div>
                <!-- 时间 -->
                <div class="config_time config_item">
                  <i class="el-icon-time"></i>2020-05-07
                </div>
                <!-- 浏览量 -->
                <div class="config_viewnum config_item">
                  <i class="el-icon-view"></i>
                  浏览 (
                  <a href>570</a> )
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="blog_read">
                <a href>阅读原文</a>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <!-- 右侧配置 -->
      <el-col :span="7" class="home_cont_info">
        <!-- 个人信息 -->
        <div class="info_my background">
          <div class="my_background"></div>
          <div class="my_headpic">
            <img
              src="http://b-ssl.duitang.com/uploads/item/201601/19/20160119171650_XLAfs.thumb.700_0.jpeg"
              alt
            />
          </div>
          <div class="my_information">
            <p>Hhua | 花未央</p>
            <p>web前端开发工程师</p>
            <p>ngpeipao9977590@163.com</p>
            <p>爱代码、爱吉他、爱民谣的97伪文艺程序猿一枚，分享一些个人开发之路上踩的各种坑，只为后来人更好的行走。</p>
          </div>
        </div>
        <!-- 天气 -->
        <div class="background info_weather">
          <p>您的位置 -> 江西南昌</p>
          <p>05月07日 周四 农历四月十五</p>
          <p>
            <i class="el-icon-sunrise"></i>
          </p>
          <p>实时气温：25°C - 阴</p>
          <p>24~26°C</p>
          <p>小雨转多云</p>
          <p>东风微风</p>
          <p>36 优</p>
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
          <div class="rankingList_item">
            <p class="item_title">测试头部测试头部测试头部</p>
          </div>
        </div>
        <!-- 友情链接 -->
        <div class="info_friendChain background">
          <p class="info_title">
            友情链接
            <a href>申请友链</a>
          </p>
          <p>
            本站信息如下：
            <br />网站名称：花未央
            <br />网站链接:https://http://localhost:8080/
            <br />注：申请友链之前，请务必先将本站添置友链，花未央收到后会立马处理，处理结果会以邮件形式通知您~
            <br />
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      label: [
        { id: 1, label: "HTML(5)", path: "#" },
        { id: 2, label: "CSS(3)", path: "#" },
        { id: 3, label: "JavaScript", path: "#" },
        { id: 4, label: "jQuery", path: "#" },
        { id: 5, label: "UI框架", path: "#" },
        { id: 6, label: "VUE", path: "#" },
        { id: 7, label: "React", path: "#" },
        { id: 8, label: "Angular", path: "#" },
        { id: 9, label: "MongoDB", path: "#" },
        { id: 10, label: "Webpack", path: "#" },
        { id: 11, label: "git", path: "#" },
        { id: 12, label: "Node", path: "#" }
      ]
    };
  },
  methods: {
    randomRgb(item) {
      let R = Math.floor(Math.random() * 255);
      let G = Math.floor(Math.random() * 255);
      let B = Math.floor(Math.random() * 255);
      return {
        width: (item.num / item.total) * 100 + "%", // 进度条
        background: "rgb(" + R + "," + G + "," + B + ")"
      };
    }
  }
};
</script>

<style lang='less' scoped>
#home {
  max-width: 1200px;
  min-width: 320px;
  margin: 90px auto 0 auto;
  padding-top: 20px;

  .home_cont {
    height: 100%;
    .home_cont_blog,
    .home_cont_info {
      height: 100%;
    }
  }
}
.el-row {
  padding: 0 !important;
  margin: 0 !important;
}
.blog_item {
  margin: 15px 0;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 5px;
  .text_img {
    box-sizing: border-box;
    img {
      margin: 5px 0;
      width: 100%;
    }
  }
  .blog_text {
    box-sizing: border-box;
    padding: 0 10px;
    .blogtitle {
      width: 50%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      margin: 5px 0;
      a {
        color: #000;
      }
    }
    p {
      margin: 5px 0;
      font-size: 15px;
      color: #555;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .blog_config {
    display: flex;
    .config_item {
      padding-right: 15px;
      font-size: 12px;
      i {
        font-weight: 600;
        font-size: 16px;
        padding-right: 5px;
      }
      .el-icon-link {
        color: rgb(204, 146, 156);
      }
      .el-icon-time {
        color: rgb(66, 120, 190);
      }
      .el-icon-view {
        color: #cccccc;
      }
      a {
        color: green;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .blog_read {
    display: flex;
    justify-content: flex-end;

    a {
      font-size: 13px;
      color: green;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.home_cont_info {
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
      }
      &:nth-child(3) {
        color: #555;
      }
      &:nth-child(4) {
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
</style>