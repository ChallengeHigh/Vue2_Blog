<template>
    <el-container>
        <el-main>
            <el-row :gutter=20>
                <el-col :xs="{span:24,offset:0}" :sm="{span:24,offset:0}" :md="{span:18,offset:0}" :lg="{span:15,offset:2}">
                    <el-card class="box-card">
                        <div slot="header" class="article-title clearfix">
                            <strong>{{article.art_title}}</strong>
                            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        </div>
                        <div class="" v-html="article.art_content">
                        </div>
                    </el-card>
                </el-col>
                <el-col :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:5,offset:0}"  class="hidden-sm-and-down">
                    <Introduce/>
                </el-col>
            </el-row>
        </el-main>  
    </el-container> 
</template>

<script>
import Introduce from '@/components/Introduce.vue'
import axios from 'axios'
export default {
    data () {
        return {
            article: ''
        }
    },
    components: {
        Introduce
    },
    mounted () {
        // console.log(this.$route.params.articleId);
        // getArticle () {
            axios
            .get('/articles/getView/' + this.$route.params.articleId)
            .then(Response => {
                // console.log(Response.data)
                let reg = new RegExp('/ueditor','g')
                Response.data.art_content = JSON.parse(JSON.stringify(Response.data.art_content).replace(reg,'https://www.85nc.com.cn/ueditor'))
                this.article = Response.data
            })
        // }
    }
}
</script>

<style lang="scss" scoped>
.el-container{
    margin: 0 auto;
    .article-title{
        text-align: center;
        font-size: 1.6rem;
    }
}
</style>