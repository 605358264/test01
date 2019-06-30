<template>
    <div class="son">
        <div>我是子组件</div>
        <span>{{msg1}}</span>
        <button @click='chuan'>传</button>
        <h4>{{msg5}}</h4>
    </div>
</template>
<script>
import Bus from'../../assets/Bus.js'
export default {
  props: {
    msg1: String
  },
  data() {
    return {
      msg3: "hebi",
      msg5:'12'
    };
  },
  methods: {
    chuan() {
      this.$emit("parentEvent", this.msg3);
    }
  },
  created(){
    var self=this    
    Bus.$on('send',function(val){
      self.msg5=val+'sb'
    })
  }
};
</script>
<style>
.son {
  width: 300px;
  height: 200px;
  background-color: blue;
}
</style>

