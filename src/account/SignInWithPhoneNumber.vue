<template lang="pug">
.account__form
  section 电话登陆
    button(@click="$emit('update:type', 0)") switch 
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'
@Component
export default class HelloWorld extends Vue {
  @Prop({ type: Number, required: true })
  private type!: number
}
</script>
