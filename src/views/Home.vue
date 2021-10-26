<template>
  <el-container>
        <el-main>
            <el-row :gutter=20>
                <el-col :xs="{span:24,offset:0}" :sm="{span:24,offset:0}" :md="{span:18,offset:0}" :lg="{span:15,offset:2}" >
                    <el-row>
                        <div class="carousel-block">
                            <el-carousel trigger="click">
                            <el-carousel-item v-for="carousel in carouselList" :key="carousel.slide_id">
                                <img :src="'https://www.85nc.com.cn/'+carousel.slide_image" class="carousel-image">
                            </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-row>
                    <div class="article-list-box">
                        <el-row :gutter=5>
                            <el-col :xs=12 :sm=8 :md=8 :lg=6 class="article-list" v-for="article in articleList" :key="article.art_id">
                                <el-card :body-style="{ padding: '5px' }" shadow="hover">
                                <img :src="'https://www.85nc.com.cn/'+article.art_thumb" class="image">
                                <div class="card-content">
                                    <div class="over-elli title"><strong :title="article.art_title">{{article.art_title}}</strong></div>
                                    <div class="over-elli description">{{article.art_description}}</div>
                                    <!-- <div class="bottom clearfix"> -->
                                        <el-button size="mini" icon="el-icon-view" style="margin: 10px auto; float: right" @click="articleDetail(article.art_id)">阅读</el-button>
                                    <!-- </div> -->
                                </div>
                                </el-card>  
                            </el-col>
                        </el-row>
                        <el-row :gutter=5>
                            <el-col :span=24>
                                <div class="pagination-block">
                                  <el-pagination
                                    background
                                    :small=false
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage"
                                    :page-sizes="[10, 20, 50, 100]"
                                    :page-size="pagesize"
                                    :pager-count="7"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    >
                                  </el-pagination>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="5" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:5,offset:0}"  class="hidden-sm-and-down">
                    <Introduce/>
                </el-col>
            </el-row>
            
        </el-main>
    </el-container>
</template>

<script>
// @ is an alias to /src
import Introduce from '@/components/Introduce.vue'
import axios from 'axios'

export default {
  data () {
    return {
      carouselList: '',
      articleList:'',
      // total: 0,

      pagenum: 1,
      pagesize: 10,
      currentPage: 1
    
      
    }
  },
  components: {
    Introduce
  },
//   beforeRouteEnter(to, from, next){
//         console.log(localStorage.getItem('username'))
//         store.$store.commit('user',localStorage.getItem('username'))
//         console.log(store.state.username)
//         next()
//     },
  mounted () {
    this.getCarousel(),
    this.getArticleList()
  },
  methods: {
    getCarousel () {
      axios
      .get('/slideshows/getList')
      .then(Response => {
          // console.log(Response.data)
          this.carouselList = Response.data
      })
    },
    
    getArticleList () {
        axios
        .get('/articles/getList?page=' + this.pagenum + '&size=' + this.pagesize)
        .then(Response => {
            // console.log(Response)
            this.articleList = Response.data
            // this.total = Response.data.sumCount
        })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pagesize = val
    },
    handleCurrentChange(newPage) {
      // console.log(newPage)
      this.pagenum = newPage
      this.$router.push({name:'Home',query:{page:this.pagenum}})
      this.getArticleList()
    },
    articleDetail(articleId){
      this.$router.push({name:'Article',params:{articleId:articleId}})
    }

  },
    
}
</script>

<style lang="scss" scoped>
.el-container{
    min-height: 90vh;
    margin: 0 auto;
    .carousel-block{
        .el-carousel{
            border-radius: 4px;
            .el-carousel__item{
                .carousel-image {
                    width: 100%;
                    height: 100%;
                }
            }
        }       
    }
    .article-list-box{
        margin: 30px auto;
        .article-list{
            margin: 10px auto;
            .el-card{
                border-radius: 10px;
                .image {
                    width: 100%;
                    height: 140px;
                    display: block;
                    border-radius: 4px;
                }
                .card-content{
                    padding: 10px;
                    .title{
                        strong{
                            display: block;
                            text-align: center;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 1.2rem;
                        }
                        
                    }
                    .over-elli{
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        margin-bottom: 10px;
                    }
                    .description{
                        min-height: 32px;
                        font-size: 1rem;
                        color: #aaa;
                    }
                }
                
            } 
        }
        .pagination-block{
          text-align: center;
        }
    }
}

</style>