<template lang="pug">
  .account__wrapper
    header.header
      img.header__logo(
        src="https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png"
        width="48"
        height="48")
      h4.header__title 小米账号登录
    .account__form
      component(
        :is="loginType === 0 ? 'SignInWithUserName' : 'SignInWithPhoneNumber'"
        :type.sync="loginType"
      )
    .account__other
      fieldset.other__wrapper
        legend.other__title(align="center") 其他方式登录
      .other__type__link
        a.login__link.qq
          svg.icon(aria-hidden="true")
            use(xlink:href="#icon-qq")
        a.login__link.weibo
          svg.icon(aria-hidden="true")
            use(xlink:href="#icon-weibo")
        a.login__link.alipay
          svg.icon(aria-hidden="true")
            use(xlink:href="#icon-zhifubao")
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'
import SignInWithUserName from './SignInWithUserName.vue'
import SignInWithPhoneNumber from './SignInWithPhoneNumber.vue'
// 登陆类型
enum Type {
  UserName,
  Phone
}
@Component({
  name: 'Account',
  components: {
    SignInWithPhoneNumber,
    SignInWithUserName
  }
})
export default class HelloWorld extends Vue {
  private loginType = Type.UserName
  constructor() {
    super()
    console.log(this)
  }
}
</script>


<style lang="stylus" scoped>
  .account__wrapper
    padding 30px 28px 0
    .header
      text-align center
      margin-bottom 10px
      &__logo
        margin-bottom 15px
      &__title
        font-size 18px
        font-weight normal
    .account__other
      .other__wrapper
        border none
        border-top 1px solid #f2f2f2
        .other__title
          font-size 12px
          color #b0b0b0
      .other__type__link
        text-align center
        .login__link
          display inline-block
          width 30px
          height 30px
          border-radius 50%
          font-size 25px
          margin 0 10px
          color white
          cursor pointer
          &.qq
            background #72c7db
          &.weibo
            background #ed9090
          &.alipay
            background #6bb6ea
</style>
