<template>
    <section class="nav">
        <ul>
            <router-link :to="{name:'home'}" tag="li">
                <div class="iconfont icon-home"></div>
                <div class="band">首页</div>
            </router-link>
            <router-link :to="{name:'menu'}" tag="li">
                <div class="iconfont icon-home"></div>
                <div class="band">题库</div>
            </router-link>
            <router-link :to="{name:'bank'}" tag="li">
                <div class="iconfont icon-home"></div>
                <div class="band">题集</div>
            </router-link>
            <router-link :to="{name:'my'}" tag="li">
                <div>
                    <i class="iconfont icon-home"></i>
                </div>
                <div class="band">我的</div>
            </router-link>
        </ul>
    </section>
</template>
<script>
import '../assets/iconfont/iconfont.css'
export default {
    name:'bottomNav',
    components:{},
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
    .nav
        height 90px
        width 100%
        background-color #FAFAFA
        border-top 1px solid rgba(0,0,0,0.1) 
        position fixed
        bottom 0
        left 0
        ul
            display flex
            justify-content space-space-around
            li
                padding 10px 0
                display flex
                flex-direction column
                align-items center
                flex 1
                &.router-link-active  
                    color #EE4F37  
                .iconfont
                    font-size 36px
                .band
                    font-size 20px    
                 
</style>
