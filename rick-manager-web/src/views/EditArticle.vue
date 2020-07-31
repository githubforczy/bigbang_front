<template>
  <div class="edit-container">
    <mavon-editor class="mavon-editor" v-model="content"/>
    <div class="rick-button">
      <a-button type="primary" @click="submitForm()">立即发表</a-button>
      <a-button>存入草稿</a-button>
    </div>
    <article-submit-modal 
      @hidden="submitForm" 
      @publish="publishArticle"
      :visible=submitVisible
    />
  </div>
</template>
<script>
  import { edit } from "@/commons/service/article";
  import ArticleSubmitModal from "@/components/modal/ArticleSubmitModal"
  export default {
    name: "EditArticle",
    components: {
      ArticleSubmitModal
    },
    data() {
      return {
        submitVisible: false,
        content:''
      }
    },
    methods: {
      submitForm() {
        this.submitVisible = !this.submitVisible;
      },
      publishArticle(articleEntiy) {
        articleEntiy.content = this.content;
        console.info("articleEntiy",articleEntiy);
        edit(articleEntiy).then((data) => {
          if(data.success){
            console.info("saved_articleEntiy",data.data);
          }
        });
      }
    }
  }
</script>

<style scoped>
.edit-container {
  height: 100%;
}
.mavon-editor {
  height: 95%;
}
.rick-button {
  text-align: center;
  padding-top: 8px;
}
</style>