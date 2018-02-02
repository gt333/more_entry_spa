<template lang="html">
  <div id="app" class="">
    <transition>
        <router-view class="g-content g-native-scroll router-view" ></router-view>
    </transition>
  </div>
</template>

<script>
import objectAssign from 'object-assign';
export default {
  name: 'app',
  data () {
    return {
      option:{ //头部信息配置
        title:'',
        rightShow:false,
        rightTitle:''
      }
    }
  },
  computed:{
  },
  methods:{
    back() {

    },
    changeTitle(opt) {
      let options = null;
      options = objectAssign({},this.option,opt);
      this.option = options;
    }
  }
}
</script>

<style lang="less">
    @import  '../../assets/css/main';
    #app{
      position:relative;
      .nav-header{
          .iconfont{
            color:#333;
            font-size:18px;
          }
      }
      .g-content{
          background: #EFEFF4;
      }
    }
</style>