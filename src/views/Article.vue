<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span=18>
                    <el-card class="box-card">

                            <div slot="header" class="article-box clearfix">
                                <strong>{{article.art_title}}</strong>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                            
                        
                        <div class="text item" v-html="article.art_content">
                        </div>
                    </el-card>
                </el-col>
                <el-col :span=6>

                </el-col>
            </el-row>
            
        </el-main>  
    </el-container>
    
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            article: ''
        }
    },
    mounted () {
        // console.log(this.$route.params.articleId);
        // getArticle () {
            axios
            .get('/articles/getView/' + this.$route.params.articleId)
            .then(Response => {
                // console.log(Response.data)
                this.article = Response.data
            })
        // }
    }
}
</script>

<style lang="scss" scoped>
.el-container{
    width: 1400px;
    margin: 0 auto;
}
</style>