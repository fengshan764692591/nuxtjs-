<template>
  <div>
    
    <Header></Header>
    <!-- nuxt相当于router-view -->
    <nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
export default {
    components: {
      Footer,
      Header
    }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
/* 初始化样式 */
*{
  margin: 0;
  padding: 0;
}
ul, li , ol{
  list-style: none;
}
a{
  /* 继承颜色 */
  color: inherit;
 text-decoration: none;
}
em,i{
  font-style: normal;
}

</style>
