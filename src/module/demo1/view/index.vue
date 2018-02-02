<template>
    <div class="g-ques-container">
            demo1
    </div>
</template>
<script>
    export default {
        name:'Index',
        data(){
            return {
                questionList:[],
                showView:true,
            }
        },
        methods:{}
           
    }
</script>
<style lang="less" scoped>
    .g-ques-container{
        padding-bottom: 0.5rem
    }
    .m-cell-list{
        background: #fff;
    }
    .m-cell-list .m-cell-con:last-child:after{
        display:none
    }
    .m-cell-head .icon-yijianfankui{
        color:#29A1F7;
        font-size:0.72rem;
    }

</style>