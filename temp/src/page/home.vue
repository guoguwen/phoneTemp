<template>
    <div class="home">
        <router-view/>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomNav from '../components/bottomNav.vue'

export default {
    name:'home',
    components:{bottomNav},
    data (){
        return {
            
        }
    },
    methods:{

    },
    mounted(){

    },
}
</script>
<style lang="stylus" scoped>
    
</style>
