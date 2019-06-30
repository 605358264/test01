<template>
    <div>
        <h2>我是第二个儿子</h2>
        <h3>{{msg5}}</h3>
        <button @click="sendMsg">兄弟</button>
        <sun /> 
    </div>
</template>
<script>
import Bus from'../../assets/Bus.js'
import sun from '../sun/sun.vue'
export default {
    data(){
        return{
            msg5:'兄弟交流567'
        }
    },
    methods:{
        sendMsg(){
            Bus.$emit('send',this.msg5)
        }
    },
    components:{
        sun
    }
}
</script>

