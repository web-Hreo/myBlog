<template>
  <div id="head">
    <div id="head_cont">
      <el-row class="head_cont">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="head_img">
              <img src="../assets/head/logo.png" alt />
            </div>
          </div>
        </el-col>
        <el-col :span="16" class="head_nav">
          <div class="grid-content bg-purple">
            <ul class="hidden-xs-only">
              <li v-for="item in routerList" :key="item.id">
                <router-link :to="item.path" :class="{active:$route.path==item.path}">{{item.name}}</router-link>
              </li>
            </ul>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link hidden-sm-and-up">
                {{routername}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in routerList" :key="item.id" :command="item.id">
                  <router-link :to="item.path">{{item.name}}</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      routerList: [
        { name: "首页", id: 1, path: "/index" },
        { name: "学无止境", id: 2, path: "/style" },
        { name: "慢生活", id: 3, path: "#" },
        { name: "热度榜", id: 4, path: "#" },
        { name: "留言板", id: 5, path: "#" },
        { name: "零食柜", id: 6, path: "#" },
        { name: "关于我", id: 7, path: "#" }
      ]
    };
  },
  methods: {},
  computed: {
    routername() {
      let arr = this.routerList.filter(v => v.path == this.$route.path);
      if (arr.length === 0) return "首页";
      return arr[0].name;
    }
  }
};
</script>

<style lang='less' scoped>
#head {
  z-index: 999;
  font-size: 16px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  #head_cont {
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    height: 80px;
  }
  .head_cont {
    height: 80px;
    display: flex;
    justify-content: space-between;
  }
  .head_img {
    height: 80px;
    display: flex;
    align-items: center;
    img {
      height: 60px;
    }
  }
  .head_nav {
    height: 80px;
    max-width: 600px;
    ul {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #fff;
        a {
          color: #555;
          display: inline-block;
          padding: 0 5px;
          width: 100%;
          height: 100%;
        }
      }
      .active {
        color: #000;
        border-bottom: 2px solid #000;
      }
    }
  }
}
.el-dropdown {
  width: 100%;
  height: 40px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-dropdown-link {
  padding-right: 20px;
  font-size: 16px;
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
a {
  color: #555;
  display: inline-block;
  padding: 0 5px;
  width: 100%;
  height: 100%;
}
</style>