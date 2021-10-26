<template>
  <el-footer>
    footer
  </el-footer>
      
      
</template>

<script>
// const axios = require('axios')
export default {
  name: 'HelloWorld',
  data(){
    return {
      menuLists: null
    }
  },
  mounted () {
    // axios
    // .get('/categorys/main?APPID=gaopanadmin&APPSECRET=passgaopan')
    // .then(Response => {
    //   this.menuLists = Response.data
    //   // console.log(this.menuLists)
    // })
  },
  methods: {
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

</style>
