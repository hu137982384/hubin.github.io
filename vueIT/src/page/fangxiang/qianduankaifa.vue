<template>	
	<div >
			<div class='fx1'>
			<span>分类：</span>
			<p>
				 <ul>
					<li v-for='(obj,$index ) in fx' ><router-link  :to="{ path: obj.path }">{{obj.ename}}</router-link></li>
				</ul>
			</p>
		</div>
		<div class='fx2'>
			<span>难度：</span>
			<p>
				 <ul>
					<li v-for='(obj,$index ) in fx1' ><router-link  :to="{ path: obj.path }">{{obj.ename}}</router-link></li>
				</ul>
			</p>
		</div>
		<div class='zuire'> 
			<span>最新</span>
			<span>最热</span>
		</div>
		<div class="down">
			<div  class='down1' :class="{'active':currentIndex}"  v-for='(obj,index) in fx3'  @mouseover='fn(index)' @mouseout='fn1(index)' >
				<div class="down2">
					 <img :src="obj.img">
					 <h5>{{obj.h5}}</h5>
					 <p class='p1'>{{obj.p1}}</p>
					 <span class='sp1'>{{obj.sp1}}</span>
					 <span class='sp2'>{{obj.sp2}}</span>
					 <span id='sp3' class='sp3'  >{{obj.sp3}}</span>
					 <span class='sp4'>{{obj.sp4}}</span> 
				</div>			
			</div>
			<div class='daohang'>
				<div class='daohang1'>
					<span>首页</span>
					<span>上一页</span>
					<ul>
						<li class="li1">1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
					</ul>
					<span>下一页</span>
					<span>尾页</span>
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
			vactive:true,
			currentIndex: 0,
			fx3:[
				{
					ename:'全部',
					img:'../../../static/image/be/1.jpg',
					h5:'仿微信图片选择器',
					p1:'实现微信APP中的图片选择器，综合案例不容错过！',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'4小时1分',
					sp4:'跟我学',
					currentIndex:1
				},
				{
					ename:'全部',
					img:'../../../static/image/be/2.jpg',
					h5:'Spring事务管理',
					p1:'应用事务解决银行转账中数据不一致问题',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'3小时1分',
					sp4:'跟我学',
					currentIndex:2
				},
				{
					ename:'全部',
					img:'../../../static/image/be/3.jpg',
					h5:'Linux权限管理之基本权限',
					p1:'Linux的基本权限和默认权限管理',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'2小时1分',
					sp4:'跟我学',
					currentIndex:3
				},
				{
					ename:'全部',
					img:'../../../static/image/be/4.jpg',
					h5:'sass进阶篇',
					p1:'Sass使你摆脱重复编写css代码的工作',

					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'3小时1分',
					sp4:'跟我学',
					currentIndex:4
				},
				{

					ename:'全部',
					img:'../../../static/image/be/5.jpg',
					h5:'C#开发轻松入门',
					p1:'NET开发轻松入门',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'3小时1分',
					sp4:'跟我学',
					currentIndex:5
				},
				{
					ename:'全部',
					img:'../../../static/image/be/6.jpg',

					h5:'神奇的JpGraph类库',
					p1:'通过JpGraph类库可以画出炫彩的统计图',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'3小时12分',
					sp4:'跟我学',
					currentIndex:6
				},
				{
					ename:'全部',
					img:'../../../static/image/be/7.jpg',

					h5:'x游戏开发基础之Lua基础篇',
					p1:'游戏开发入门从撸啊开始',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'1小时34分',
					sp4:'跟我学',
					currentIndex:7
				},
				{
					ename:'全部',
					img:'../../../static/image/be/8.jpg',

					h5:'CSS图片动态提示效果',
					p1:'实用的CSS3图片动态提示效果',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'2小时18分',
					sp4:'跟我学',
					currentIndex:8
				},
				{
					ename:'全部',
					img:'../../../static/image/be/9.jpg',
					h5:'屏幕适配全攻略',

					p1:'重点概念、常见问题及解决方案',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'2小时1分',
					sp4:'跟我学',
					currentIndex:9
				},
				{
					ename:'全部',
					img:'../../../static/image/be/10.jpg',

					h5:'C++远征之多态篇',
					p1:'多态，C++的精华所在。更新至8-1360人学习跟我学',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'3小时17分',
					sp4:'跟我学',
					currentIndex:10
				},
				{
					ename:'全部',
					img:'../../../static/image/be/11.jpg',

					h5:'PHP实现微信公众平台开发',
					p1:'由浅入深带你一起玩转微信公众平台开发',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'1小时19分',
					sp4:'跟我学',
					currentIndex:11
				},
				{
					ename:'全部',
					img:'../../../static/image/be/12.jpg',
					h5:'Canvas玩转图像处理',
					p1:'canvas系列课程第三课。使用canvas编写属于自己的图像算法，创建出炫丽的效果！',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'3小时21分',
					sp4:'跟我学',
					currentIndex:12
				},
				{
					ename:'全部',
					img:'../../../static/image/be/13.jpg',
					h5:'Strust2+Hibernate整合开发案例',
					p1:'使用Struts2+Hibernate开发学生信息管理功能',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'2小时54分',
					sp4:'跟我学',
					currentIndex:13
				},
				{
					ename:'全部',
					img:'../../../static/image/be/14.jpg',
					h5:'Oeasy教你玩转后期剪辑Premiere',
					p1:'Oeasy教你玩转后期剪辑Premiere',

					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'1小时45分',
					sp4:'跟我学',
					currentIndex:14
				},
				{
					ename:'全部',
					img:'../../../static/image/be/15.jpg',
					h5:'Python操作MySQL数据库',

					p1:'使用Python征服MySQL数据库程序的开发更新至8-1360人学习跟我学',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'2小时14分',
					sp4:'跟我学',
					currentIndex:15
				},
				{
					ename:'全部',
					img:'../../../static/image/be/16.jpg',

					p1:'超给力动画插件，动画从此信手拈来',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'3小时27分',
					sp4:'跟我学',
					currentIndex:16
				},
				{
					ename:'全部',
					img:'../../../static/image/be/17.jpg',
					h5:'Struts2拦截器浅析',

					p1:'Struts2拦截器的工作原理及配置更新至8-1360人学习跟我学',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'2小时56分',
					sp4:'跟我学',
					currentIndex:17
				},
				{
					ename:'全部',
					img:'../../../static/image/be/18.jpg',
					h5:'SPHP+Sphinx+MySQL实现全文检索—理论篇',
					p1:'站内搜索神器-sphinx，一个能影响您职场身价的利器！',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'2小时28分',
					sp4:'跟我学',
					currentIndex:18
				},
				{
					ename:'全部',
					img:'../../../static/image/be/19.jpg',
					h5:'Think 2015 PHP 技术峰会(北京站）',
					p1:'PHPCon是由Think社区主办的PHP领域顶级技术盛会',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'1小时49分',
					sp4:'跟我学',
					currentIndex:19
				},
				{
					ename:'全部',
					img:'../../../static/image/be/20.jpg',
					h5:'PHP实现微信公众平台开发',
					p1:'canvas系列课程第三课。使用canvas编写属于自己的图像算法，创建出炫丽的效果！',
					sp1:'更新至8-1',
					sp2:'360人学习',
					sp3:'1小时37分',
					sp4:'跟我学',
					currentIndex:20
				},
				
			],
			fx1:[
				{
					ename:'全部',
					path:'nandu',
					active:false,
					i:1
				},{
					ename:'初级',
					path:'chuji',
					active:false,
					i:1
				},{
					ename:'中级',
					path:'zhongji',
					active:false,
					i:1
				},{
					ename:'高级',
					path:'gaoji',
					active:false,
					i:1
				},
			],	
			fx:[
				{
					ename:'全部',
					path:'quan',
					active:false,
					i:1
				},{
					ename:'HTML/CSS',
					path:'qianduan',
					active:false,
					i:1
				},
				{
					ename:'JavaScript',
					path:'houduan',
					active:false,
					i:1
				},
				{
					ename:'Css3',
					path:'app',
					active:false,
					i:1
				},
				{
					ename:'Html5',
					path:'shuju',
					active:false,
					i:1
				},
				{
					ename:'Jquery',
					path:'tuxiang',
					active:false,
					i:1
				},
				{
					ename:'AngularJS',
					path:'appnew',
					active:false,
					i:1
				},{
					ename:'Bootstrap',
					path:'quannew',
					active:false,
					i:1
				},{
					ename:'Node.js',
					path:'shujunew',
					active:false,
					i:1
				},{
					ename:'WebApp',
					path:'qianduannew',
					active:false,
					i:1
				},{
					ename:'前端工具',
					path:'houduannew',
					active:false,
					i:1
				},
				/*前段结束*/
						
			]	 
		 }
	},
	methods:{
		fn:function(index){
			this.currentIndex = index;
			var sp3=document.getElementsByClassName('sp3');
			for(var i=0;i<sp3.length;i++){
				sp3[index].style="opacity:0.5;right :0px";
			}

		},
		fn1:function(index){
			this.currentIndex = index;
			var sp3=document.getElementsByClassName('sp3');
			for(var i=0;i<sp3.length;i++){
				sp3[index].style="opacity:0;right-100px";
			}
			
		},
	}

}
</script>

<style scoped>
.fx1{
	width:100%;
	height: 50px;
	border-bottom: 1px solid #EDF1F2;
}
.fx2 {
	width:100%;
	height: 50px;
	border-bottom: 1px solid #EDF1F2;
}
.fx1 p {
	float: left;
	width:88%;
	height: 100%;
}
.fx2 p {
	float: left;
	width:88%;
	height: 100%;
}
.fx1 p ul li, .fx2 p ul li{
	float: left;
	width:80px;
	height: 30px;
	text-align: center;
}
.fx1 p ul, .fx2 p ul {
	margin-top: 10px;
}
.fx1 p ul li a, .fx2 p ul li a{
	font-size: 13px;
	color: #666666;
    padding: 4px;
    cursor: pointer;
	color: #666;
	text-align: center;
	line-height: 27px;
}
.fx1 p ul li .router-link-active{
	background: #F01400;	
	color: #ffffff;
}
.fx2  .router-link-active{
	background: #F01400;	
	color: #ffffff;
}
.fx1 span, .fx2 span{
	float: left;
	width:80px;
	height: 100%;
	display: inline-block;
	color: #666;
	font-size: 12px;
	text-indent: 1em;
	line-height: 50px;
}
.zuire{
	width:100%;
	height: 40px;
	background:#F9F9F9;
	line-height: 40px;
}
.zuire span{
	float: left;
    margin: 0 20px;
    font-size: 13px;
    color: #656e73;
}
.zuire span:hover{
	
    color: #000;
}
.down{
	width:100%;
	
}.down1{
	width:280px;
	height: 270px;
	float: left;
	margin: 0px  10px 20px 10px;
	transition: all 0.5s  ease;
}
.down2:hover{
	box-shadow:0px 0px 5px #666;

}
.down1 .down2{
	width:85.7%;
	height: 90%;
	transition: all 0.5s  ease;
	padding:20px;
	overflow: hidden;
	float: left;
	margin-right: 10px;
	position: relative;
	/* overflow: hidden; */
}
.down1 .down2 h5{
	margin: 18px 0 0;
    height: 18px;
    line-height: 18px;
    color: #14191e;
    text-align: left;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.down1 .down2 .p1{
	margin-left: 8px;
	margin-top: 8px;
    height: 18px;
    line-height: 18px;
    color: #ccc;
   font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.down1 .down2 .sp1, .down1 .down2 .sp2{
	
	margin-top: 8px;
    height: 18px;
    line-height: 18px;
    color: #666;
   font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.down1 .down2 .sp2{
	margin-left: 10px; 
	margin-top: 8px;
    height: 18px;
    line-height: 18px;
    color: #666;
   font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.down1 .down2 .sp3{
	position: absolute;
	top:0px;
	display: inline-block;
	width:60px;
	height: 20px;
	font-size: 12px;
	color:#ffffff;
	right:-90px;
	text-align: center;
	line-height: 20px;
	opacity: 0;
	background: #000;
	background-color: rgba(0, 0, 0, 0.9);
}
.down1 .down2 .sp4{
	display: block;
    position: absolute;
    left: 15px;
    top: 25px;
    width: 46px;
    height: 23px;
    line-height: 23px;
    padding-bottom: 5px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background: url(../../../static/image/bg/follow_label.png);
}
.down .daohang{
	width:100%;
	height: 55px;

	float: left;
	margin: 20px 0px 30px 0px;
}
.down .daohang .daohang1{
	width:35%;
	height: 23px;

	
	margin: 10px auto;
}
.down .daohang ul li{
	float: left;
	font-size: 13px;
	height: 100%;
	text-align: center;
	cursor: pointer;
	margin-left:10px;
	line-height: 23px;
	width:23px;

}.down .daohang ul .li1{
	background: red;
	color: #ffffff;

}.down .daohang ul .li1:hover{

	color: #ffffff;

}
.down .daohang ul li:hover{	
	border-bottom: 1px solid red;
	color: red;
}
.down .daohang ul {
	float: left;

}
.down .daohang span {
	float: left;
	font-size: 13px;
	height: 100%;
	text-align: center;
	cursor: pointer;
	margin-left:10px;
	line-height: 23px;

}
.down .daohang span:hover{
	color: red;
	border-bottom: 1px solid red;
}

</style>