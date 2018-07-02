<template>
    <section class="nav">
        <ul>
            <router-link :to="{name:'home'}" tag="li">
                <div class="iconfont icon-home"></div>
                <div>我的</div>
            </router-link>
            <router-link :to="{name:'home'}" tag="li">
                <div class="iconfont icon-home"></div>
                <div>我的</div>
            </router-link>
            <router-link :to="{name:'home'}" tag="li">
                <div class="iconfont icon-home"></div>
                <div>我的</div>
            </router-link>
            <router-link :to="{name:'home'}" tag="li">
                <div>
                    <i class="iconfont icon-home"></i>
                </div>
                <div>我的</div>
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
        height 98px
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
                .iconfont
                    font-size 36px
                 
</style>
