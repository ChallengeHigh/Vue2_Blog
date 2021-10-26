<template>
    <el-container>
        <el-main>
            <el-row :gutter=20>
                <el-col :xs=24 :sm=24 :md=18 :lg="{span:15,offset:2}" >
                    <div class="article-list-box">
                        <el-page-header @back="goBack" content="文章列表页">
                        </el-page-header>
                        <el-row :gutter=5>
                            <el-col :span=6 class="article-list" v-for="article in articleList" :key="article.art_id">
                                <el-card :body-style="{ padding: '5px' }">
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
                    </div>
                    
                    
                </el-col>
                <el-col :xs=6 :sm=6 :md=6 :lg="{span:5,offset:0}"  class="hidden-sm-and-down">
                    <Introduce/>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import axios from 'axios'
import Introduce from '@/components/Introduce.vue'
export default {
    data () {
        return {
            
            articleList: ''
        }
    },
    components: {
        Introduce
    },
    mounted () {
        this.getClass()
        
    },
    watch: {
        $route(to, from) {
            // console.log(from)
            if (from.name == 'Class') {
               this.getClass()
            }
        }
    },
    methods: {
        goBack () {
            this.$router.push({name:'Home'})
        },
        getClass () {
            axios
            .get('/categorys/getMainView/' + this.$route.params.classId)
            .then(Response => {
                // console.log(Response)
                this.articleList = Response.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        articleDetail(articleId){
            this.$router.push({name:'Article',params:{articleId:articleId}})
        }
    }
}
</script>

<style lang="scss" scoped>
.el-container{
    min-height: 90vh;
    margin: 0 auto;
    .article-list-box{

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
    }
}



</style>