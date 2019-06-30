<template>
    <div>
        <div class="parent">
            <div>{{msg}}</div>
            <son :msg1="msg1" @parentEvent="say"/>
            <h3 >{{msg3}}</h3>
            <son2 />
        </div>       
    </div>
</template>
<script>
import son from "../son/son.vue";
import son2 from "../son2/son2.vue"
export default {
  data() {
    return {
      msg: "我是父组件",
      msg1: "我是子组件haha",
      msg3: ""
    };
  },
  components: {
    son,son2
  },
  methods: {
    say(e) {
     this.msg3=e+'sb'
    }
  }
};
</script>
<style>
.parent .son {
  background-color: red !important;
}
</style>
