<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="6" :offset="9">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="" prop="username">
                            <el-input type="text" v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="phone">
                            <el-input v-model.number="ruleForm.phone" placeholder="请输入手机号码" prefix-icon="el-icon-phone" minlength="11" maxlength="11" show-word-limit></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" placeholder="请确认密码" prefix-icon="el-icon-lock" show-password autocomplete="off"></el-input>
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
  export default {
    data() {
        var checkUsername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            } else {
                callback();
            }
        };
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if ((value.toString()).length < 11) {
              callback(new Error('手机号必须11位'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
            username: '',
          pass: '',
          checkPass: '',
          phone: ''
        },
        rules: {
            username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
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