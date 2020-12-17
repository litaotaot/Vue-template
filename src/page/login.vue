<template>
  <div class="login-background">
    <!-- <div class="login-top-logo"><img src="../assets/img/logo-w.png" alt=""></div> -->
    <div class="login_page">
      <div class="login-container">
        <div class="login-container-logo">
          <img v-if="!showFindPwd && !showSetPwd" src="../assets/img/logo-title.png" alt="" class="width-50">
          <img v-if="showFindPwd" src="../assets/img/logo-f.png" alt="" class="width-50">
          <img v-if="showSetPwd" src="../assets/img/logo-s.png" alt="" class="width-50">
        </div>
        <!--登录主页 start-->
        <el-form v-if="!showFindPwd && !showSetPwd" ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
          <el-form-item prop="username">
            <span class="svg-container">
              <img src="../assets/img/user.png" alt="">
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              :placeholder="$t('login.usernameTips')"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <span class="svg-container">
              <img src="../assets/img/psw.png" alt="">
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              :placeholder="$t('login.passwordTips')"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="forget-psw" @click="toFindPwd">忘记密码?</span>
          </el-form-item>
          <div>
            <label>
              <el-checkbox v-model="checked" />
              <span class="remember-psw">记住账号密码</span>
            </label>
            <el-button :loading="loading" type="primary" class="login-button" :disabled="!loginForm.username || !loginForm.password" @click.native.prevent="handleLogin">{{ $t('login.logIn') }}</el-button>
          </div>
        </el-form>
        <!--登录主页 end-->

        <!--找回密码弹窗 start-->
        <div v-if="showFindPwd" class="find-form">
          <el-form
            class="login-form"
          >
            <el-form-item prop="email">
              <el-input
                ref="email"
                v-model="email"
                placeholder="请输入邮箱账号"
                name="email"
                type="text"
                tabindex="1"
                auto-complete="on"
              />
            </el-form-item>
          </el-form>
          <div class="width-100 btn-wrap">
            <div class="icon-margin-12">
              <el-button type="primary" class="width-200 form-btn" :disabled="!email" @click="onSendEmailConfirm">提交</el-button>
            </div>
            <div class="icon-margin-12">
              <el-button type="default" class="width-200 form-btn" @click="()=> showFindPwd=false">取消</el-button>
            </div>
          </div>
        </div>
        <!--找回密码 end-->

        <!--设置密码弹窗 start-->
        <div v-if="showSetPwd" class="find-form">
          <el-form
            ref="setPwdForm"
            class="login-form"
            :rules="setPwdRules"
            :model="setPwdForm"
          >
            <el-form-item prop="passwordOne">
              <el-input
                ref="passwordOne"
                v-model="setPwdForm.passwordOne"
                placeholder="请输入至少8位同时包含字母、数字、特殊符号"
                name="passwordOne"
                type="password"
              />
            </el-form-item>
            <el-form-item prop="passwordTwo">
              <el-input
                ref="passwordTwo"
                v-model="setPwdForm.passwordTwo"
                placeholder="请再次输入密码"
                name="passwordTwo"
                type="password"
              />
            </el-form-item>
            <div class="width-100 btn-wrap">
              <div>
                <el-button type="primary" class="width-100 form-btn" :disabled="!(setPwdForm.passwordOne && setPwdForm.passwordTwo)" @click="onSetPwdConfirm">提交</el-button>
              </div>
            </div>
          </el-form>
        </div>
        <!--找回密码 end-->

      </div>
    </div>
  </div>

</template>

<script>
import { getCookies } from '@/utils/auth'
// import { validEmail } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    // 登录-密码校验
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      }
      if (value.length < 8) {
        callback(new Error('账号或密码错误，请重试'))
      } else if (!/^(?![^a-zA-Z]+$)(?!\D+$)(?![a-zA-Z0-9]+$).{8,15}$/.test(value)) {
        callback(new Error('账号或密码错误，请重试'))
      } else {
        callback()
      }
    }
    // 重设-密码校验
    const validatePassword2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      }
      if (value.length < 8) {
        callback(new Error('密码需至少8位同时包含字母、数字、特殊符号'))
      } else if (!/^(?![^a-zA-Z]+$)(?!\D+$)(?![a-zA-Z0-9]+$).{8,15}$/.test(value)) {
        callback(new Error('密码需至少8位同时包含字母、数字、特殊符号'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: getCookies('userAccount') || '',
        password: getCookies('pwd') || ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: this.$t('login.usernameTips') }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      setPwdForm: {
        passwordOne: '',
        passwordTwo: ''
      },
      setPwdRules: {
        passwordOne: [{ required: true, trigger: 'blur', validator: validatePassword2 }],
        passwordTwo: [{ required: true, trigger: 'blur', validator: validatePassword2 }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      checked: !!getCookies('pwd'), // 是否记住密码
      // 找回密码
      email: '',
      showFindPwd: false,
      showSetPwd: false // 设置密码
      // expireTime: 0 // 记录登录时间
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
  },
  mounted() {
    this.showSetPwd = this.$route.query.showSetPwd
    this.token = this.$route.query.token
    this.userId = this.$route.query.userId
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
    console.log(this.$i18n.locale)
  },
  destroyed() {

  },
  methods: {
    // 处理登录
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('Login', this.loginForm).then((res) => {
      //       this.$message.success('登录成功')
      //       if (this.checked) this.$store.dispatch('RememberAccount', this.loginForm)
      //       else this.$store.dispatch('ForgetAccount')
      //       this.$router.push({ path: this.redirect || '/home' })
      //       this.loading = false
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    /**
     * input change
     * @param attr -键
     * @param value-值
     * @param {Object} form_data
     */
    onChange(attr, value, form_data) {
      this.form_data = { ...this.form_data, ...form_data }
      return form_data
    },
    // TODO 找回密码
    toFindPwd() {
      this.showFindPwd = true
    },
    // 弹窗popup确认
    onSendEmailConfirm() {
      // if (!this.email) {
      //   this.$message.error('请输入邮箱')
      //   return
      // }
      // if (!validEmail(this.email)) {
      //   this.$message.error('请输入有效邮箱')
      //   return
      // }
      // this.$store.dispatch(`FindPwd`, { email: this.email }).then(() => {
      //   this.$message.success('提交成功，请注意查收邮箱')
      //   this.showFindPwd = false
      // }).catch(() => {})
    },
    // 关闭弹窗
    hideDialog(dialog) {
      this[dialog].show = false
    },
    // 重新设置密码
    onSetPwdConfirm() {
      // this.$refs.setPwdForm.validate(valid => {
      //   if (valid) {
      //     if (this.setPwdForm.passwordOne !== this.setPwdForm.passwordTwo) {
      //       this.$message.error('两次密码不一致，请重新输入')
      //       return
      //     }
      //     this.$store.dispatch(`PwdResetSubmit`, { token: this.token, userId: this.userId, password: this.setPwdForm.passwordOne }).then(() => {
      //       // this.$message.success('提交成功')
      //       this.$message.success('提交成功')
      //       this.showSetPwd = false
      //     }).catch(() => {})
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/style/autosize.scss";
@import "~@/style/mixin.scss";
  .find-form {
    .btn-wrap{
      text-align: center;
      .form-btn {
        height: px2Rem(60);
        line-height: px2Rem(60);
        padding:0
      }
      .width-200{
        width:px2Rem(200);
      }
    }
  }
  .login-top-logo {
    position: absolute;
    top: 8.8%;
    left: 4.4%;
  }

  .login_page {
    position: absolute;
    top: 26.2%;
    right: 8.6%;
		width: 28.2%;
		min-height: 52.2%;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 8px 20px 0 rgba(11,88,184,0.85);
    border-radius: 10px;
		background-size: cover;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  @media only screen and (max-width: 1440px) {
  .login_page {
    min-height: 55.5%;
  }

}

 .login-background {
		position: absolute;
    height: 100%;
    width: 100%;
		background: url('../assets/img/login-background.jpg') no-repeat;
		background-size: 100% 100%;
  }

  .login-button {
    width: px2Rem(185);
    height: 6vh;
    padding: 12px;
    border-radius: 3vh;
    font-size: px2Rem(24);
    position: absolute;
    /* top: 74%; */
    /* margin-left: 15.71%; */
    right: 0;
    // background: #2D75F4;
  }

  .remember-psw {
    font-size: 16px;
    font-family: $font-family-typeR;
    color: #999;
    cursor: pointer;
    margin-left: 10px;
  }

  .login-container {
    width: 100%;
    margin: 0 auto;
    .login-form {
      position: relative;
      width: 79.64%;
      margin: 0 auto;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      color: #cdcdcd;
      vertical-align: middle;
      padding: 20px 0;
      img {
        position: absolute;
        height: px2Rem(20);
        top: px2Rem(20);
        left: px2Rem(12);
        z-index: 100;
      }
    }
  }
</style>
<style lang="scss">

$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
    text-indent: 30px;
    height: px2Rem(60);
    line-height: px2Rem(60);
    &:active {
      border: 1px solid red;
    }
  }
}

/* reset element-ui css */
.login-container {

  .el-input {
    display: inline-block;

    input {
      border: none;
      font-size: 16px;
      padding: 12px 5px 12px 10px;
      color: #333333;
    }
  }

  .el-form-item {
    &:hover {
      border-color: #2D75F4;
    }
  }

  .login-container-logo {
    margin: 10% 10% 5% 10%;
  }

  .forget-psw {
    position: absolute;
    width: 100px;
    text-align: right;
    top: px2Rem(12);
    right: 15px;
    color: #2D75F4;
    font-family: PingFangSC-Light;
    cursor: pointer;
    font-size: 14px;
  }

  .el-form-item {
    border: 1px solid #eee;
    color: #454545;
    margin-bottom: 9.28%;
  }
}
</style>
