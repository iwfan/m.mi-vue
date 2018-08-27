<template lang="pug">
.account__form
  section.form__input
    input(
      type="text"
      v-model="username"
      placeholder="邮箱/手机号码/小米ID"
      autocomplete="off"
    )
  section.form__input.password
    input(
      :type="showPassword ? 'text' : 'password'"
      v-model="password"
      placeholder="密码"
      autocomplete="off"
    )
    span
      svg.icon(aria-hidden="true")
        use(xlink:href="#icon-chakanmima")
  button.form__btn.login__btn(

  ) 登录
  button.form__btn.switch__loginType(
    @click.stop="$emit('update:type', 1)"
  ) 手机短信登录/注册
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'
@Component
export default class HelloWorld extends Vue {
  @Prop({ type: Number, required: true })
  private type!: number

  username: string = ''
  password: string = ''
  showPassword: boolean = false
}
</script>

<style lang="stylus" scoped>
.password
  display flex
  input
    flex 1
  span
    width 20px
    line-height 50px
</style>
