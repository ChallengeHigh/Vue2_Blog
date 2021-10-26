<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :xs="{span:22,offset:1}" :sm="{span:18,offset:3}" :md="{span:14,offset:6}" :lg="{span:6,offset:9}">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="" prop="username">
                            <el-input type="text" v-model="ruleForm.username" prefix-icon="el-icon-user" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" prefix-icon="el-icon-lock" show-password autocomplete="off"></el-input>
                        </el-form-item>
                                        
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      var checkpass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          username: '',
          pass: '',

        },
        rules: {
          username: [
            {validator: checkUsername,trigger: 'blur'}
          ],
          pass: [
            {validator: checkpass,trigger: 'blur'}
          ]
        }
      };
    },
    // mounted () {
    //   console.log(this.$store.state.username)
    // },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.ruleForm.pass.length < 8) {
              // this.$message('这是一条消息提示');
              this.$alert('密码长度至少8位', '提示', {
                confirmButtonText: '确定',

              });
            }
            axios.post('/users/login',JSON.stringify({
              "username":this.ruleForm.username,
              "password":this.ruleForm.pass,
            }))
            .then(Response => {
              // console.log(Response.data)
              this.$router.push({name:'Home'})
              this.$store.commit('user',Response.data.userName)
              localStorage.setItem('username',this.$store.state.username)
              // console.log(this.$store.state.username)
              // console.log(localStorage.getItem('username'))
            })
            .catch(err => {
              console.log(err)
            })
            // alert('submit!');
          } else {
            console.log('error!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss" scoped>
.el-container{
    margin-top: 80px;
    margin-bottom: 100px;
    .el-col{
        border: 1px solid gba(0, 0, 0, 0.1);
        padding: 80px 2% 20px;
        box-sizing: border-box;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        border-radius: 4px;
        
    }
}
</style>