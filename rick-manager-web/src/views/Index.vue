<template>
  <div class="rick-index-container">
    <div class="rick-idex-header">
      <Header/>
    </div>
    <div class="rick-index-content">
      <router-view />
    </div>
    <div class="rick-idex-footer">
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: 'Index',
  components: {
    Header
  },
  data() { 
    return {

    }
  }
 }
</script>

<style scoped>
  .rick-index-container{
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-rows: 48px auto 48px;
    justify-items: center;
    background-color: #f6f6f6;
  }
  .rick-idex-header{
    position: fixed;
    z-index: 100;
    min-width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box;
  }
</style>