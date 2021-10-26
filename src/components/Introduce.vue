<template>

        <el-row>
            <el-col :span="24" class="introduce">
                <el-descriptions title="简介" :column="1">
                    <el-descriptions-item label="头像">
                        <el-avatar shape="square" :size="40" fit="fill" src="https://www.85nc.com.cn/assets/images/logo.png"></el-avatar>
                    </el-descriptions-item>
                    <el-descriptions-item label="职业">Web前端开发</el-descriptions-item>
                    <el-descriptions-item label="居住地">北京市</el-descriptions-item>
                    <!-- <el-descriptions-item label="备注">
                    <el-tag size="small">学校</el-tag>
                    </el-descriptions-item> -->
                    <el-descriptions-item label="邮箱">sir_pangao@163.com</el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
        
    
</template>

<style lang="scss" scoped>
.introduce{
    // border: 1px solid #545c64;
    border-radius: 4px;
    padding: 3%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.377)
}


</style>