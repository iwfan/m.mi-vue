<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/image/logo.png">
    <HelloWorld 
      msg="Welcome to Your Vue.js + TypeScript App"
      @testEmit="t"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  constructor() {
    super()
    console.log(this)
  }
  t() {
    console.log('event')
    let str = '12'
  }
}
</script>
