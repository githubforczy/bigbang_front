<template>
  <div class="home-content-card">
    <a-card :hoverable=true style="width: 980px; height: 100px">
      <a-card-meta :title="contentEntity.title">
        <template slot="description">
          {{ contentEntity.content }}
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    contentEntity: {
      type: Object,
      default: {}
    }
  },
  computed: {
    setColor() {
      
    }
  },
  data() { 
    return {
      bgSrc: require(`@/assets/bg-1.jpg`)
    }
  },
  mounted() {
  }
 }
</script>

<style>
.home-content-card {
  width: 100%;
  height: 100px;
  background-color: #f6f6f6;
}

.content-left {
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 5px;
  border-radius:  15px 0 0 15px ;
  background-color: rgb(235, 201, 211);
  opacity: 0.7;
}

.content-right {
  display: grid;
  justify-items: left;
  align-items: center;
  padding: 5px;
  border-radius: 0 15px 15px 0;
  background-color: #fff;
}

.content-type-front {
  font-size: 28px;
  font-weight: bold;
  color: rgb(34, 33, 33);
}
.card-img {
  position: relative;
}
.card-type {
  position: absolute;
  top: 40px;
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
  font-size: 34px;
  font-weight: bold;
  padding-left: 20px;
  color: rgb(38, 37, 37);
}
</style>