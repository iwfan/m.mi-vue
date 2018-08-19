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
</style>
