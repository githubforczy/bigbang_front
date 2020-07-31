<template>
  <div class="rick-home-container">
    <div class="home-container-left">
      <a-list item-layout="vertical" size="large" :data-source="articleList">
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <h1 class="post-list-titl">
            <a href="">{{item.title}}</a>
          </h1>
          <p class="post-list-description">{{item.content}}</p>
          <p class="post-list-meta">
              <span class="octicon octicon-calendar"></span> 2020/07/22
          </p>
        </a-list-item>
      </a-list>
    </div>
    <div class="home-container-right">
      <a-list :split=false item-layout="vertical" size="large" :data-source="articleList">
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <home-content-card :contentEntity=item />
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import HomeContentCard from "@/components/HomeContentCard"
import { articles, getArticle } from "@/commons/service/article";
export default {
  name: 'Home',
  components: {
    HomeContentCard
  },
  data() { 
    return {
      articleList:[]
    }
  },
  mounted() {
    this.$nextTick(() => {
      articles().then(({data}) => {
        console.info("articleList",data);
        this.articleList = data;
      });
    });
  }
 }
</script>

<style scoped>
  .rick-home-container {
    width: 1000px;
    margin-top: 60px;
    display: grid;
    grid-template-columns: auto 330px;
    gap: 10px;
  }
  .home-container-left {
  }
  .home-container-right {
  }

  .post-list-item {
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
    list-style: none;
    border-bottom: 1px solid #eee;
  }
  .post-list-title a {
    text-decoration: none;
}
  .hvr-underline-from-center {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0,0,0,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    overflow: hidden;
}
</style>