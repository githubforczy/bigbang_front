<template>
  <div class="rick-header-container">
    <a class="rick-logo" href="">CZY</a>
    <a-menu mode="horizontal">
      <a-menu-item @click="toArticle('1')" key="1">Java</a-menu-item>
      <a-menu-item @click="toArticle('2')" key="2">SpringBoot</a-menu-item>
      <a-menu-item @click="toArticle('3')" key="3">SpringCloud</a-menu-item>
      <a-menu-item @click="toArticle('4')" key="4">MQ</a-menu-item>
      <a-menu-item @click="toArticle('5')" key="5">Docker</a-menu-item>
    </a-menu>
    <a-input-search
      placeholder="我想看..."
      style="width: 200px"
      @search="onSearch"
    />
    <a-button type="primary">
      提问
    </a-button>
    <a-popover placement="bottom">
      <template slot="content">
        <a @click="login">登陆</a>
      </template>
      <a-avatar
        shape="square"
        size="default"
        :style="{ backgroundColor: '#7265e6', verticalAlign: 'middle' }"
      >
      <a style="color:white">czy</a>
      </a-avatar>
    </a-popover>
    
  </div>
</template>

<script>
const UserList = ["U", "Lucy", "Tom", "Edward"];
const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
export default {
  name: "Header",
  data() {
    return {
      avatarValue: UserList[0],
      color: colorList[0]
    };
  },
  methods: {
    login() {
      this.$router.push({
        name: "login"
      });
    },
    onSearch() {

    },
    toArticle(type) {
      this.$router.push({
        name: "article",
        params:{
          type: type
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.rick-header-container {
  width: 1000px;
  height: 48px;
  display: flex;
  padding: 0 16px;
  margin: 0 auto;
  align-items: center;
  gap: 50px;
}
.rick-logo {
  font-size: 28px;
  font-weight: bold;
  color: black;
}
</style>
