<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ message }}</h2>
    <h3>{{ greet() }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'
@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg!: string

  private message: string = '123'

  get computedAttr() {
    return '12'
  }

  @Watch('message', { immediate: true, deep: true })
  onMessageChange() {
    console.log(arguments)
  }

  @Emit('testEmit')
  greet() {
    return '11111'
  }

  created() {
    this.$nextTick(() => {
      console.log(1)
    })

    setTimeout(() => {
      this.message = '111123123124214'
    }, 10e3)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
