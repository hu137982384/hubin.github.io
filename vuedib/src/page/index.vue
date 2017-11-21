<template>

			<div class='auto'>
				<div class='article'>
					<div class='txt1'>
						<p>全部产品</p>
						<h3>pc产品</h3>
						<ul>
							<li>数据统计</li>
							<li>数据预测</li>
							<li>流量分析<span>HOT</span></li>
							<li>广告发布</li>
						</ul>
						<hr style="margin:10px 0px 0px 0px ;" />
						<h3>手机应用类</h3>
						<ul>
							<li>91助手</li>
							<li>产品助手<span>HOT</span></li>
							<li>智能地图</li>
							<li>团队语音</li>
						</ul>
					</div>
					<div class='txt2'>
						<h3>最新消息</h3>
						<p><span>新闻条目1新闻条目1新闻条目1新...</span></p>
						<p><span>新闻条目2新闻条目2新闻条目2新...</span></p>
						<p><span>新闻条目3新闻条目3新闻条目3</span></p>
						<p><span>新闻条4广告发布</span></p>
					</div>	
				</div>
				<div class='thead'>
					<div class="carousel-wrap lb" id="carousel">
					   <!--  // 轮播图列表 -->
					    <transition-group tag="ul" class='slide-ul' name="list">
					      <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
					        <a :href="list.clickUrl" >
					          <img :src="list.image" :alt="list.desc">
					        </a>
					      </li>
					    </transition-group>
					    <!-- // 轮播图位置指示 -->
					    <div class="carousel-items">
					      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
					    </div>
					</div>
				
					<div class='tem1' v-for="(div,index) in slides" 
						:class="[{'line-last' : index % 2 !== 1}, 'index-board-' + div.id]"
					>
						<a href="#"><img :src="div.url" ></a>

						<h2>{{div.h2}}</h2>
						<p>{{div.p}}</p>
						<div class='button'> 
                            <router-link :to="{path: '/denglu'+div.tokey}" class='wz'>
                                立即购买
                            </router-link>
                        </div>
						
					</div>
					
				</div>
			</div>			
		
</template>
<script >
	export default {
    name: 'app',
    data() {
        return {
            or: false,
            ok: false,
            op: false,
            slideList: [
            {
                "clickUrl": "#",
                "desc": "nhwc",
                "image":"../static/img/pic1.jpg"
            },
            {
                "clickUrl": "#",
                "desc": "hxrj",
                "image": "../static/img/pic2.jpg"
            },
            {
                "clickUrl": "#",
                "desc": "rsdh",
                "image": "../static/img/pic3.jpg"
            },
            {
                "clickUrl": "#",
                "desc": "rsdh",
                "image": "../static/img/pic4.jpg"
            }
                ],
            currentIndex: 0,
            timer: '',
            slides:[
                {
                "a": "#",
                "h2": "开放产品",
                "p":"开放产品是一款开放产品",
                "url":"../static/img/1.png",
                "tokey":'1'
            },
            {
                "a": "#",
                "h2": "品牌营销",
                "p":"品牌营销帮助你的产品更好地找到定位",
                "url": "../static/img/2.png",
                "tokey":'2'
            },
            {
                "a": "#",
                "h2": "使命必达",
                "p":"使命必达快速迭代永远保持最前端的速度",
                "url": "../static/img/3.png",
                "tokey":'3'
            },
            {
                "a": "#",
                "h2": "勇攀高峰",
                "p":"帮你勇闯高峰，到达事业的顶峰",
                "url": "../static/img/4.png",
                "tokey":'4'
            }
            ]
            }
         },
          methods: {
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        })
    }
}
</script>
<style scope> 
        #app .section .auto{
        	width: 87%;	
			margin :0px auto;
        }
        #app .section .auto .article{
        	width: 22.1%;
			float: left;
			margin-top: 15px;
        }
         #app .section .auto .thead{
        	width: 76.23%;
			float: left;
			margin-left: 15px;
			margin-top: 15px;
        }
         #app .section .auto .article .txt1 {
        	width: 100%;
			height: 350px;
			    cursor: pointer;
			    color: #444444;
			    background: #ffffff;
        } 
        #app .section .auto .article .txt1 p{
        	width: 100%-16px;
			height: 32px;
			background: #4FC08D;
			color:#ffffff ;
			font-size: 14px;
			line-height:34px;
			padding-left: 15px;
        }
         #app .section .auto .article .txt1 h3{
        	width: 100%-16px;
			height: 50px;
			font-size: 14px;
			line-height:50px;
			padding-left: 15px;
        }
        #app .section .auto .article .txt1 ul li{
        	width: 100%;
			height: 23px;
			font-size: 14px;
			line-height:23px;
			padding-left: 15px;
			cursor: pointer;
        } 
         #app .section .auto .article .txt1 ul li span{
        	width: 35px;
			height: 17px;
			display: inline-block;
			font-size: 14px;
			background: #FF0000;
			margin-left: 6px;
			text-align-last: center;
			line-height:17px;
			cursor: pointer;
			color: #ffffff;
        }
        #app .section .auto .article .txt2 p{
        	width: 100%;
			height: 28px;
			font-size: 13px;
			line-height:28px;
			cursor: pointer;
			padding-left: 15px;

        }

        #app .section .auto .article .txt2 {
        	width: 100%;
			height: 510px;
			background: #ffffff;
			margin-top:15px;
			color: #444444;
        }
         #app .section .auto .article .txt2 h3{
        	width: 100%-16px;
			height: 32px;
			background: #4FC08D;
			color:#ffffff ;
			font-size: 14px;
			line-height:34px;
			padding-left: 15px;
			margin-bottom: 30px;
        }
        #app .thead .lb{
        	width: 100%;
        	height:500px;
        	float: left;
        }
        #app .thead .tem1{
        	width: 48.8%;
        	height:165px;
        	
        	float: left;
        	margin-bottom: 10px;
        	margin-top: 15px;
        	background:#ffffff;
        }
        #app .thead .line-last{
        	margin-right: 15px;
        }
        #app .thead .tem1 a{
        	width: 140px;
        	height:100%;
        	display: block;
        	float: left;
        	text-align: center;
        	line-height: 165px;
        	
        }
        #app .thead .tem1 a img{
 			margin-top: 30px;
        	
        	
        }
        #app .thead .tem1  h2{
        	font-size: 19px;
        	margin-top:10px;
        	margin-bottom:10px;
        }
        #app .thead .tem1 p{
        	margin-bottom:25px;
        	font-size: 14px;
        }
         #app .thead .tem1 .button{
            width: 95px;
            height:33px;
            color:#ffffff;
            margin-left: 140px;
            cursor: pointer;
        } #app .thead .tem1 .button .wz{
        	width: 95px;
        	height:33px;
        	color:#ffffff;
        	background: #4FC08D;
            font-size: 12px;
            text-align: center;
            line-height: 33px;
            cursor: pointer;
        } 

       
        /* 轮播图开始 */
	 .carousel-wrap {
	  position: relative;
	  height: 453px;
	  width: 100%;
	  overflow: hidden;
	  background-color: #fff;
	}

	.slide-ul {
	  width: 100%;
	  height: 100%;
		}
	  .slide-ul li {
	    position: absolute;
	    width: 100%;
	    height: 100%;
		}
	   .slide-ul li img{
	      width: 100%;
	      height: 100%; 
	  }
	.carousel-items {
	  position: absolute;
	  z-index: 10;
	  top: 380px;
	  width: 100%;
	  margin: 0 auto;
	  text-align: center;
	  font-size: 0;
	   }
	  .carousel-items span {
	    display: inline-block;
	    height: 6px;
	    width: 30px;
	    margin: 0 3px;
	    background-color: #b2b2b2;
	    cursor: pointer;
	    }
	  .carousel-items span .active {
	    background-color: $btn-color;  
	   }
	   .footer{
	   	width:100%;
	   	height: 80px;
	   	background: #E3E4E8;
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