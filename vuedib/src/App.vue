<template>
<div id="app">
      <div class="nav">
           <router-link :to="{path: '/'}" class='spn'>
              <img src="./page/img/logo.png">
              <span>首页</span>
           </router-link >
          
          <ul>
            <li  @click="or=!or">登录</li>
              
            <li>|</li>
            <li @click="ok=!ok">注册</li>
            <li>|</li>
            <li @click="op=!op">关于</li>
            <template v-if="or">
              <div  class="zd"  @click="or=!or"></div>
              <transition name="fade">  

              <div class='zd1'  v-on:click.stop>           
                
                  <span  @click="or=!or">X</span >
                <p class='p1'>用户名:<input type="text" placeholder="请输入用户名"></p>
                <p class='p2'>密码:<input type="password" placeholder="请输入密码"></p>
                <button >登录</button>
                
                </div>  
                </transition>                           
              </template>
              <template v-if="ok">
              <div  class="zd"  @click="ok=!ok">  </div>
              <transition name="fade">                  
                  <div class='zd2'  v-on:click.stop>
                  <span  @click="ok=!ok">X</span >      
                <button >登录</button>
                  </div>                            
              </transition> 
            
            </template>
          <template v-if="op">
            <div  class="zd"  @click="op=!op">  </div>
              <transition name="fade">                  
                  <div class='zd3'  v-on:click.stop>
                      <span  @click="op=!op">X</span >
                    <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
                  </div>                            
              </transition> 
            
          </template>
          </ul>
      </div>
      <div class="section">
            <router-view></router-view>
           
      </div>
      <div class="footer">
          <p> © 2016 fishenal MIT</p>
      </div>       
    
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
        or: false,
        ok: false,
        op: false,        
        }
     }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  list-style: none;
  text-decoration: none;
  font: inherit;
}
#app {
  width:100%;
  
}
#app .nav{
  width:100%;
  height:90px;
  background: #363636;
  position: relative;
}
#app .nav img{
  width:50px;
  height:50px;
  margin:25px 0px 0px 70px ;
  float: left;
  vertical-align:center;
}
#app .nav ul {
   float: right;
   width:250px;
  height:90px;
}
#app .nav .spn span{
   width:50px;
   height: 100%;
   display: inline-block;
   color: #B2B2B2;   
   font-size: 13px;
   text-align: center;
   line-height: 90px;

}
#app .nav ul li{
    cursor: pointer;
    float: left;
    color:#B2B2B2;
    font-size: 13px;
    width:28px;
  height:90px;
  line-height: 90px;
  text-align-last: center;
}
#app .nav .zd1{
  width: 50%;
  max-height: 50%;
  border: 2px solid #464068;
  position: fixed;
  left: 30%;
  top: 20%;
      padding: 2%;
  overflow: auto;
  z-index: 999;
  background: #ffffff;
}
#app .nav .zd2{
  width: 600px;
  height: 100px;
  border: 2px solid #464068;
  position: fixed;
  left: 370px;
  top: 150px;
  z-index: 999;
  background: #ffffff;
}
#app .nav .zd2 span {
  margin-right: 15px;
  float: right;
  margin-top: 11px;
  font-size: 13px;
}#app .nav .zd2 span:hover{
  color: blue;
  cursor: pointer;
  font-size: 13px;
}
#app .nav .zd3{
  width: 600px;
  height: 150px;
  border: 2px solid #464068;
  position: fixed;
  left: 370px;
  top: 150px;
  z-index: 999;
  background: #ffffff;
  
}#app .nav .zd3 p{
  margin:21px;
  font-size:13px; 
}
#app .nav .zd1 span {
  margin-right: 15px;
  float: right;
  margin-top: 11px;
  font-size: 13px;
}#app .nav .zd1 span:hover{
  color: blue;
  cursor: pointer;
  font-size: 13px;
}#app .nav .zd3 span {
  margin-right: 15px;
  float: right;
  margin-top: 11px;
  font-size: 13px;
}#app .nav .zd3 span:hover{
  color: blue;
  cursor: pointer;
  font-size: 13px;
}
#app .nav .zd{
  width: 100%;
  height: 1200px;
  background:rgba(0,0,0,.3);
  position: absolute;
  left:0px;
  top: 0px;
  z-index: 12;
}
#app .nav .zd1 p{
  margin:40px 10px 10px 40px; 
  color: #444444;
}
#app  .nav .zd1 .p1 input{
  margin-left:50px ; 
  height: 25px;
  width:220px;
  
}
#app .nav .zd1 .p2 input{
  margin-left:65px ; 
  height: 25px;
  width:220px;

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
    #app .section{
        width: 100%;
        float: left;
      background: #F0F2F5;
      padding-bottom: 50px;
        }
    
 .footer{
      width:100%;
      height: 80px;
      background: #E3E4E8;
      float: left;
     }
      .footer p{
        width:100%;
      height: 80px;
      line-height: 80px;
      text-align:center;
      color: #444444;
      font-size: 13px;
      }
</style>
