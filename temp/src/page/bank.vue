<template>
   <section class="bank">
       题库
   </section>
</template>
<script>
import '../assets/js/xback.js'
export default {
    name:'bank',
    data (){
        return {
            
        }
    },
    methods:{
        
    },
    mounted(){
        XBack.listen(function(){
            alert('back');
        });
    },
}
      
</script>
<style lang="stylus" scoped>
    
</style>
