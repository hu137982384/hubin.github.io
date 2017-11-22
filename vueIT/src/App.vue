<template>
  <div id="app">
    <div class='nav'>
      <div class='left'>
          <div><img :src="img" ></div>
          <ul>
            <li><router-link to="/index">课程</router-link></li>
            <li><router-link to="">计划</router-link></li>
            <li><router-link to="">分享</router-link></li>
            <li><router-link to="/shequ">社区</router-link></li>
          </ul> 
      </div>
      <div class='right'>
        <div class='le' >
          <input type="text" placeholder="请输入你要查找得内容" :class='[{inp:ok},input]'  @click='fn1'    @blur='fn2'>
          <p :class='[p1,{p:ok}]'></p>
        </div>
        <div class='zhong'>
            <a href="">ITAPP</a>
        </div>
        <div class='ri'>
          <ul>
            <li @click='or=!or'>登录</li>
            <li @click='op=!op'>注册</li>
          </ul>
        </div> 
            <template v-if="or">
              <div  class="zd"  @click="or=!or"></div>
              <transition name="fade">  
                  <div class='zd1'  v-on:click.stop> 
                    <span class='spn1'>登录</span>      
                    <span class='spn2'  @click="or=!or">X</span >
                    <hr style='background:#ccc;width:100%'>
                    <p class='p1'><input class='yhm' type="text" placeholder="请输入用户名"></p>
                    <p class='p1'><input class='yhm' type="text" placeholder="请输入密码"></p>
                    <p class='p3'>
                      <input  type="checkbox" >
                      <label class="alert-login-autoFont">&nbsp;自动登录</label>
                      <span>忘记密码</span>
                    </p>
                    <p class="p4">登陆</p>
                    <p class='p5'>
                      <span class='span1'>联合登录</span>
                      <span class='span2'>QQ</span>
                      <span class='span2'>微信</span>
                      <span class='span2'>微博</span>
                    </p>
                  </div>  
                </transition>                           
            </template>

            <template v-if="op">
              <div  class="zd"  @click="op=!op"></div>
              <transition name="fade">  
                  <div class='zd1 zd2'  v-on:click.stop> 
                    <span class='spn1'>注册</span>      
                    <span class='spn2'  @click="op=!op">X</span >
                    <hr style='background:#ccc;width:100%'>
                    <p class='p1'><input class='yhm' type="text" placeholder="请输入用户名"></p>
                    <p class='p2'><input class='mima' type="password" placeholder="请输入密码"></p>
                    <p class='p1'><input class='yhm' type="password" placeholder="请再次输入你的密码"></p>
                    <p class='p2'><input class='mima' type="text" placeholder="请输入你的昵称"></p>
                    <p class="p4">注册</p>
                    <p class='p5'>
                      <span class='span1'>联合登录</span>
                      <span class='span2'>QQ</span>
                      <span class='span2'>微信</span>
                      <span class='span2'>微博</span>
                    </p>
                  </div>  
               </transition>                           
            </template>
      </div>
    </div>
    <div class='section'>
      <div class='left'>
        <router-view></router-view>
      </div>  
      <div class='right'>
          <ul>
            <li class='weixin '></li>
            <li class='yijian'></li>
            <li class='app'></li>
          </ul>
      </div>
    </div>
    <div class='footer'>
      <div class='foot'>
        <div class='left'>
          <p>
            <ul>
              <li>网站首页</li>
              <li>人才招聘</li>
              <li>联系我们</li>
              <li>高校联盟</li>
              <li>关于我们</li>
              <li>讲师招募</li>
              <li>意见反馈</li>
              <li>友情链接</li>
            </ul>
          </p>
          <p>
              <span v-for='wz in foot'>{{wz.name}}</span>
          </p>
        </div>
        <div class='right'>
           <ul>
              <li class='qq'></li>
              <li class='weibo'></li>
              <li class='weixin'></li>
           </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      img:'../../static/image/user_card_top.png',
      inp:'inp',
      input:'input',
      ok: false,
      p1:'p1',
      p:'p',
      or:false,
      op:false,
      foot:[
          {name:"Copyright ? 2015 imooc.com All Rights Reserved"},
          {name:"|"},
          { name:"京ICP备 13046642号-2"},
      ]
    }
  },
  methods: {
    fn1(){
      this.ok= true
    },
    fn2(){
      this.ok= false
    }
  }
}
</script>

<style >
/* 导航栏开始 */
*{
  padding: 0px;
  margin:0px;
  list-style: none;
  text-decoration: none;
}
body{
  
}

.nav{
  max-width:1366px;
  height: 62px;
  background: #333333;


}
.nav .left{
  width:40%;
  height: 100%;
  float: left;
}
.nav .left img{
  margin:10px 30px 0px 20px; 
  float: left;
  width: 120px;
  height:50px;
}
.nav .left ul{
  float: left;
  height: 100%;
  margin-left: 10px;
}
.nav .left ul li{
  float: left;
  width: 74px;
  height:100%;
  line-height: 62px;
  cursor: pointer;
  text-align: center;
}
.nav .left ul li a{
  line-height: 62px;
  cursor: pointer;
  float: left;
  text-align: center;
  color: #ccc;
  width: 74px;
  height:100%;
  font-size: 17px;
}
.nav .left ul li a:hover{
  background: #363C41;
}
.nav .right{
  width:40%;
  height: 100%;
  float: right;
  margin-right: 30px;

}
.nav .right .le .p1{
  background: url(./../static/image/search.png) no-repeat 0px 0px;
  width:30px;
  height: 28px;
  cursor: pointer;
  float: left;
}
.nav .right .le .p{
  background-position: 0px -40px;
  background-color:#ffffff;
}
.nav .right .le{
  width: 45%;
  height: 30px;
  
  margin-top: 15px;
  float: left;
}
.nav .right .le .input{
  float: left;
  width:85%;
  height: 93%;
  background: #363C41;
  border:none;
  outline: none;
}
.nav .right .le .inp{
  background: #fff;
  border:none;
 
}
.nav .right .zhong{
  float: left;
  width:19%;
  position: relative;
  height: 100%;
}
.nav .right .zhong a{
  float: left;
  width:60px;
  height: 60px;
  color: #ccc;
  font-size: 15px;
  text-align: center;
  line-height: 60px;
  padding: 0px 14px 0px 20px;

}
.nav .right .zhong::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 24px;
    display: inline-block;
    width: 11px;
    height: 16px;
    background: url(./../static/image/head-app-icon.png) no-repeat 0px 0px;
    transition: all 0.2s ease ;
}
.nav .right .zhong:hover::before{
    background-position: 0px -16px;
}
.nav .right .ri{
  float: left;
}
.nav .right .ri li{
  float: left;
  width:68px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #ccc;
  font-size: 15px;
}
.nav .right .ri li:nth-child(1):hover{
  background: #CC0000;
}.nav .right .ri li:nth-child(2):hover{
  background: #363C41;
}
.nav .right .ri li a{
  float: left;
  width:68px;
  height: 100%;
  font-size: 15px;
  color: #ccc;
  line-height: 60px;
  text-align: center;
}


/* 遮挡层开始 */
#app .nav .zd1{
  width: 30%;
  height: 60%;
  border: 2px solid #464068;
  position: fixed;
  left: 30%;
  top: 10%;
  overflow: auto;
  z-index: 9;
  background: #ffffff;
}
#app .nav .zd2{
  width: 30%;
  height: 75%;
  border: 2px solid #464068;
  position: fixed;
  left: 30%;
  top: 10%;
  overflow: auto;
  z-index: 9;
  background: #ffffff;
}

#app .nav .zd1 .spn2 {
  margin-right: 15px;
  float: right;
  margin-top: 11px;
  font-size: 13px;
}
#app .nav .zd1 .spn1 {
  float: left;
  padding:10px 10px 10px 60px; 
  font-size: 18px;
}
#app .nav .zd1 .spn1:hover {
  border-bottom: 1px solid red;
  color: red;
}

#app .nav .zd1 .spn2:hover{
  color: blue;
  cursor: pointer;
  font-size: 13px;
}
#app .nav .zd{
  width: 100%;
  height: 130%;
  background:rgba(0,0,0,.3);
  position: absolute;
  left:0px;
  top: 0px;
  z-index: 5;
}
#app .nav .zd1 p{
  margin:30px 10px 0px 40px; 
  color: #444444;
}
#app .nav .zd1 p .yhm{
    display: block;
    height: 38px;
    width: 30%;
    margin: 30px 0px 5px 60px;
    padding-left: 50px;
    font-size: 16px;
  background: url(./../static/image/ipt-sprite.png) no-repeat 0px -98px;
}
#app .nav .zd1 p .mima{
      display: block;
    height: 38px;
    width: 30%;
    margin: 10px 0px 5px 60px;
    padding-left: 50px;
    font-size: 16px;
  background: url(./../static/image/ipt-sprite.png) no-repeat 0px -48px;
}
#app  .nav .zd1 .p1 input{
  margin-left:20px ; 
  height: 35px;
  width:220px;
  border: 1px solid #ccc;
}
#app .nav .zd1 .p2 input{
  margin-left:20px ; 
  height: 35px;
  width:220px;
  border: 1px solid #ccc;  
}
#app .nav .zd1 .p3 input{
  margin-left:20px ; 
  border: 1px solid #ccc;  
}
#app .nav .zd1 .p3 label{
  font-size: 14px;
  cursor:pointer;
  color:#666666;
  margin-top: -3px;
  vertical-align:top;
}
#app .nav .zd1 .p3 span{
  font-size: 14px;
  margin-left: 37%;
  color:blue;
  cursor:pointer;
}
#app .nav .zd1 .p4{
  font-size: 16px;
  margin-left: 60px;
  color:#ffffff;
  background: #cc0000;
  width:66%;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ccc;
}
#app .nav .zd1 .p5 .span1{
  margin-left: 20px;
  font-size: 13px;
  color:#666666;
  margin-right: 130px; 
}
#app .nav .zd1 .p5 span{
  font-size: 13px;
}
#app .nav .zd1 .p5 .span2{
  color: #ccc;
}#app .nav .zd1 .p5 .span2:hover{
  color: #000;
}


#app  .nav .zd1  button{
  margin: 20px 0px 0px 142px ;
  width: 70px;
  height: 45px;
  background:#4FC08D ;
  color: #ffffff;
  border: 1px solid  transparent;
}
#app  .nav .zd2 button{
  margin: 20px 0px 0px 142px ;
  width: 60px;
  height: 40px;
  background:#4FC08D ;
  color: #ffffff;
  border: 1px solid  transparent;
}
/* 动画开始 */
  .fade-enter-active {
      transition: all 0.5s ease;
    }
    .fade-leave-active {
      transition: all 0.6s ease;
    }
    .fade-enter {
      transform: translateY(-500px);     
    }
    .fade-enter-active {
      transform: translateY(200px);
    }
    .fade-leave-active {
      transform: translateY(-500px) rotate(360deg); 
    }

/* 页中开始 */
.section{
  width:100%;
 
}
.section .left{
  width:94%;
  float: left;
}
.section .right{
  width:5.5%;
   float: left;
   position:relative;
}
.section .right ul li{
  display: block;
  width: 50px;
  height: 55px;
  position: fixed;
  right:18px;
  z-index: 20;
  background: url(./../static/image/elevator.png) no-repeat 0px 0px;
  transition: 0.1s all ease;
}

.section .right ul li:nth-child(1){
  top:66px;
}
.section .right ul li:nth-child(2){
  top:118px;
}
.section .right ul li:nth-child(3){
  top:173px;
}


.section .right ul .weixin{
  background-position:0px -861px ;
}
.section .right ul .yijian{
  background-position:0px -425px ;
}
.section .right ul .app{
  background-position:0px -550px ;
}
.section .right ul .weixin:hover{
  background-position:0px -922px ;
}
.section .right ul .yijian:hover{
  background-position:0px -488px ;
}
.section .right ul .app:hover{
  background-position:0px -611px ;
}

/* 页脚开始 */

.footer{
  width:100%;
  height: 92px;
  float: left;
  background: #000000;
}
.footer .foot{
  width:100%;
  height:46px;
  padding-top: 20px;
}
.footer .left{
  width:40%;
  float: left;
  margin-left: 60px;
  height: 46px;

}
.footer .left p ul li{
  float: left;
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
  width:65px;
  text-align: center;

}
.footer .left p span{
  float: left;
  color: #666;
  cursor: pointer;
  font-size: 12px;
  margin-top: 10px; 
  margin-left: 7px;
  text-align: center;

}
.footer .right{
  width:15%;
  height: 46px;
  float: right;
  margin-right: 80px;
}
.footer .right li{
  width:36px;
  height: 46px;
  float: right;
  margin-left: 15px;
  display: block;
  opacity: 0.5;
  background:url(./../static/image/footer-sprite.png) no-repeat scroll  0px 0px; 
}
.footer .right li:hover{
  opacity: 1;
}
.footer .right ul .weixin {
    background-position: 0px -271px;

}
.footer .right ul .weibo{
    background-position: 0px -313px;
}
.footer .right ul .qq{
    background-position: 0px -355px;
}

</style>
