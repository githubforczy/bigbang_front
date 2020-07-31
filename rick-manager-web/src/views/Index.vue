<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <h3 v-if="!collapsed" class="logo-text">后台管理系统</h3>
        <img
          v-else
          class="card-img"
          slot="cover"
          alt="example"
          style="height: 32px"
          :src="require(`@/assets/logo.png`)"
        />
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item @click="toTarget('manage_article')" key="1">
          <a-icon type="dashboard" />
          <span>博客管理</span>
        </a-menu-item>
        <a-menu-item @click="toTarget('edit_article')" key="2">
          <a-icon type="edit" />
          <span>写博客</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <div class="layout-right">
        <div class="layout-header">
          <div class="layout-header-icon">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
          </div>
          <div class="rick-breadcrumb">
            <a-breadcrumb>
              <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
                <router-link
                  v-if="item.name != name && index != 1"
                  :to="{ path: item.path === '' ? '/' : item.path }"
                >{{ item.meta.title }}</router-link>
                <span v-else>{{ item.meta.title }}</span>
              </a-breadcrumb-item>
            </a-breadcrumb>
            <div class="layout-header-avatar">
              <a-avatar style="backgroundColor:#001529;" icon="user" />
            </div>
          </div>
        </div>
        <div class="layout-content">
          <router-view />
        </div>
      </div>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: 'Index',
  components: {
    Header
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route (){
      this.getBreadcrumb();
    }
  },
  data() { 
    return {
      collapsed: false,
      breadList: []
    }
  },
  methods: {
    getBreadcrumb() {
      this.breadList = []
      this.name = this.$route.name
      this.$route.matched.forEach(item => {
        if(item.meta.title){
          this.breadList.push(item)
        }
      })
      console.info("breadList",this.breadList);
    },
    toTarget(path) {
      this.$router.push({
        name: path
      });
    }
  }
 }
</script>

<style scoped>
  .layout-right {
    height: 100%;
    display: grid;
    grid-template-rows: 54px auto;
  }
  .layout-header {
    z-index: 100;
    position: relative;
    top: 0px;
    width: 100%;
    display: grid;
    grid-template-columns: 80px auto;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.1);
  }
  .layout-header-icon {
    display: grid;
    justify-items: center;
    align-items: center;
  }
  .layout-header-avatar {
    padding-right: 20px;
  }
  .rick-breadcrumb {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
  }
  .layout-content {
    z-index: 1;
    padding: 24px;
    height: 100%;
    min-height: 280px;
  }
  .logo {
    display: grid;
    justify-items: center;
    align-items: center;
  }
  .logo-text {
    color: #eee;
    font-size: 22px;
    font-weight: bold;
  }
  #components-layout-demo-custom-trigger {
    height: 100%;
  }
  #components-layout-demo-custom-trigger .trigger {
    display: grid;
    justify-items: center;
    align-items: center;
    font-size: 20px;
    line-height: 54px;
    cursor: pointer;
    transition: color 0.3s;
  }
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
  }
</style>