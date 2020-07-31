<template>
  <div class="rick-article-container">
    <div class="article-big-title">
      <img
        class="card-img"
        slot="cover"
        alt="example"
        style="height: 300px; width: 1000px"
        :src="contentEntity.bgSrc"
      />
      <div class="card-type">
        <a class="card-type-font" style="padding: 0px" href="">{{ contentEntity.type }}</a>
      </div>
    </div>
    <div class="article-directory">
      <div>
        <a-timeline >
          <a-timeline-item v-for="item in listData" :key="item.id">
            <article-card :contentEntity=item />
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { articles, getArticle } from "@/commons/service/article";
import ArticleCard from "@/components/ArticleCard"
export default {
  name: 'Article',
  components: {
    ArticleCard
  },
  data() { 
    return {
      articleList:[],
      contentEntity:contentEntity
    }
  },
  methods: {
    get(id){
      getArticle(id).then(({data}) => {

      })
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
  .rick-article-container {
    width: 1000px;
    height: 1752px;
    margin-top: 48px;
    display: grid;
    grid-template-rows: 300px auto;
  }
  .article-big-title {
  }
  .article-directory {
    width: 100%;
    padding-top: 20px;
  }
  .card-img {
  position: relative;
}
.card-type {
  position: absolute;
  top: 100px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.card-type-font {
  padding-left: 0px;
  font-size: 80px;
  font-weight: bold;
  padding-left: 20px;
  color: rgb(38, 37, 37);
}
</style>