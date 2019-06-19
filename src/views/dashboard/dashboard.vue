<template>
  <div class="app-container">
   <nx-github-corner></nx-github-corner>
     <!-- <a target="_blank" href="https://github.com/mgbq/vue-permission"><img
        style="position: absolute; top: 48px; right: 0; border: 0;"
        src="../../../static/img/report/forkme.png"
        alt="Fork me on GitHub"></a> -->
     <div class="header-content">
        <div class="left-content">            
        <div class="user-info">
              <div class="title">{{helloTime}} 祝你开心每一天！</div>             
        </div> 
        </div>
    </div>
    <div class="item">
      <h4>您的关注</h4>
      <nx-data-display :option="option"></nx-data-display>
    </div>
    <h4>快速开始</h4>

  <div v-bind:style="display">

    <el-row type="flex" class="row-bg" justify="space-between">
      
          <el-col :span="6" class="text-center1">
            <h5>邀请好友，获取现金分成</h5>
            <router-link class="pan-btn blue-btn" to="/components/index">邀请好友</router-link>
          </el-col> 
          <el-col :span="6" class="text-center2">
           <h5>业绩详情，一目了然</h5>
            <router-link class="pan-btn light-blue-btn" to="/charts/ndex">查看业绩</router-link>
          </el-col>
          <el-col :span="6" class="text-center3">
           <h5>现金分成，快速提现</h5>
            <router-link class="pan-btn pink-btn" to="/excel/download">提款</router-link>
          </el-col>          
      </el-row>
  </div>

  <div style="display: none;">

  <el-row type="flex" class="row-bg" justify="space-between">
      
          <el-col :span="6" class="text-center1">
            <h5>邀请好友，获取现金分成</h5>
            <router-link class="pan-btn blue-btn" to="/components/index">邀请好友</router-link>
          </el-col> 
          <el-col :span="6" class="text-center2">
           <h5>业绩详情，一目了然</h5>
            <router-link class="pan-btn light-blue-btn" to="/charts/ndex">查看业绩</router-link>
          </el-col>
          <el-col :span="6" class="text-center3">
           <h5>现金分成，快速提现</h5>
            <router-link class="pan-btn pink-btn" to="/excel/download">提款</router-link>
          </el-col>          
        </el-row>
        </div>
  </div>
</template>

<script>

import nxDataDisplay from '@/components/nx-data-display/nx-data-display'
import nxGithubCorner from '@/components/nx-github-corner'
import { showHelloTime } from '@/utils/util'
export default {
  name: 'report',
  components: {
    nxDataDisplay,    
    nxGithubCorner

  },
  data() {
    return {
      display: '',
      currUser: {},
      name: '',
      option: {
        span: 8,
        color: '#15A0FF',
        data: [
          {
            count: 1000,
            title: '已邀请好友'
          },
          {
            count: 3000,
            title: '好友订单数'
          },
          {
            count: 20000,
            title: '已获分成'
          }
        ]
      }     
      
    }
  },
  created() {
    console.log('this name' + this.$store.state.user.name)
    this.name = this.$store.state.user.name
    // this.currUser['name'] = this.name
    // this.display='display: none;'
    this.display=''
  },
  watch: {},
  mounted() {},
  computed: {
    helloTime() {
      return showHelloTime()
    }
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 16px;
}
</style>
<style lang ="scss">
    @import '../../styles/data-card.scss';
    @import '../../styles/data-display.scss';
    @import '../../styles/data-icons.scss';
    @import '../../styles/data-tabs.scss';
    .header-content {
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      .left-content {
        display: flex;
        align-items: center;

        .user-info {
          margin-left: 12px;
          line-height: 33px;
          .title {
            font-size: 20px;
                      
            .team {

                  }
              }
          }
        }
      }
    .text-center0 {
     display: flex;
  flex-direction: row;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 1px 1px 2px #eee;  
  position:relative;
    }
   h5 {  
  padding: 0px;
  text-align: centre;
  color: #409eff; 
  left:0;top:0;
}
</style>
