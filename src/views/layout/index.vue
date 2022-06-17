<template>
  <div class="layout-container">
    <!-- 规范: 组件封装时, 一般会给组件的根元素, 添加上一个和组件名同名的类名 -->
    <!-- <Jack></Jack>  .jack类 -->
    <!--面包屑导航区-->
    <el-breadcrumb separator-class="el-icon-arrow-right"> </el-breadcrumb>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 头部Logo -->
        <div class="logo" :class="{ minLogo: isCollapse }"></div>
        <!-- 菜单 -->
        <!--
          el-menu 整个的菜单组件
            default-active="2" 配置默认高亮的是哪个菜单
            collapse 配置菜单是否折叠显示, true折叠, false不折叠
            collapse-transition 配置菜单动画效果, 关闭false

          el-submenu 子菜单(不需要折叠效果, 这边不用)

          el-menu-item 具体的菜单项
            <i class="el-icon-menu"></i> 小图标
            <span slot="title">导航二</span> 文字内容
         -->
        <!--         <el-menu
          :router="true"
          background-color="#002033"
          :collapse="isCollapse"
          :collapse-transition="false"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">xxx</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">xxxx</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-picture"></i>
            <span slot="title">xxxx</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">xxxx</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">xxxx</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">xxxx</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">xxxx</span>
          </el-menu-item>
        </el-menu> -->
        <el-menu
          :router="true"
          background-color="#002033"
          :collapse="isCollapse"
          :collapse-transition="false"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-folder-add"></i>
              <span>导航三</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-chat-line-round"></i>
              <span>导航四</span>
            </template>
            <el-menu-item-group>
              <el-menu-item class="el-icon-time" index="1-1"
                >选项1</el-menu-item
              >
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <!-- 左侧部分 -->
          <div class="left" @click="toggleMenu">
            <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
            <span>上海的阿祖</span>
          </div>
          <!-- 右侧下拉菜单 -->
          <el-dropdown>
            <!-- 配置默认显示的内容的 -->
            <div class="avatar-wrap">
              <img class="avatar" :src="user.photo" alt="" />
              <span>{{ user.name }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>

            <!-- 下拉折叠的部分 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      isCollapse: false,
      user: {}
    };
  },
  methods: {
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.layout-container {
  position: fixed;
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-aside {
    background-color: #002033;
    .el-menu {
      border-right: none;
    }
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/2df3883b48560f1bda658aff5d79bdf.png)
        no-repeat center;
      background-size: 140px auto;
    }
    // 小logo 覆盖background 的图片和大小，类书写在logo的下方。
    .minLogo {
      background-image: url(../../assets/0dbee8afa52eba851376979cc0a8be7.png);
      background-size: 36px auto;
    }
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .avatar-wrap {
      display: flex;
      align-items: center;
      cursor: pointer;
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
  .el-main {
    background-color: #e9eef3;
  }
}
</style>
