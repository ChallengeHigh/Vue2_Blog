<template>
  <el-container>
    <el-header>
        <el-row>
          <el-col :xs="{span:8,offset:0}" :sm=5 :md=4 :lg=4>
            <div id="logo">
              <img class="logo" @click="goHome()" src="../assets/logo.png" alt="">
            </div>
          </el-col>
          <el-col :xs="11" :sm=13 :md=14 :lg=15 class="hidden-sm-and-down">
            <el-menu default-active="1" class="el-menu-demo" background-color="#545c64" text-color="#fff" active-text-color="#fff" mode="horizontal">
              <el-menu-item index=1 >
                <router-link to="/">首页</router-link>
              </el-menu-item>
              <el-menu-item :index="(index+2).toString()" v-for="(menu,index) in menuLists" :key="menu.cate_id">
                <router-link :to="'/class/'+menu.cate_id">{{menu.cate_name}}</router-link>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :xs="{span:9,offset:3}" :sm="{span:6,offset:13}" :md="{span:6,offset:0}" :lg=5 class="hidden-xs-and-down">
            <div class="user-info">
              <el-button class="hidden-sm-and-down">移动端</el-button>
              <el-button v-if="user">{{user}}</el-button>
              <el-button type="primary" plain v-if="!user" @click="login">登录</el-button>
              <el-button type="primary" plain v-if="!user" @click="register">注册</el-button>
              <el-button type="danger" v-if="user" @click="logout">退出</el-button>
            </div>
            
          </el-col>
        </el-row>
    </el-header>
  </el-container>
</template>

<script>

const axios = require('axios')
export default {
  name: 'HelloWorld',
  data(){
    return {
      menuLists: '',

    }
  },
  computed: {
    user () {
      this.$store.commit('user',localStorage.getItem('username'))
      return this.$store.state.username
    }
  },
  mounted () {
    axios
    .get('/categorys/main')
    .then(Response => {
      this.menuLists = Response.data
      // console.log(this.menuLists)
    })
  },
  methods: {
    goHome () {
      this.$router.push({name:'Home'})
    },
    login () {
      this.$router.push({name:'Login'})
    },
    register () {
      this.$router.push({name:'Register'})
    },
    logout () {
      this.$store.commit('user','')
      localStorage.setItem('username',this.$store.state.username)
      this.$router.push({name:'Home'})
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-header{
  padding: 0;
  background-color: #545c64;

    #logo{
      width: 100%;
      height: 60px;
      padding: 10px 20px;
      background-color: #fff;
      box-sizing: border-box;
      .logo{
        width: 100%;
        height: 40px;
      }
    }
    .el-menu-item{
      padding: 0;
      a{
        display: inline-block;
        padding: 0 20px;
      }
    }
    .user-info{
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

}

</style>
