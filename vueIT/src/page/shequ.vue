<template>
	<div class='le-1'>
		<div class="left">
			<p class='p1'>
				<img src="../../static/image/ln_mksq11.jpg" alt="it社区">
				<ul>
					<li>课程回答</li>
					<li>技术回答</li>
					<li>技术分享</li>
					<li>活动建议</li>

				</ul>
			</p>
			<p class='p2'>
				<span>全部回答</span>
				<ul>
					<li>课程回答</li>
					<li>技术回答</li>
					<li>技术分享</li>
					<li>活动建议</li>
				</ul>
			</p>
			<p class='p3'>
				<ul>
					<li class="li1"> 最新</li>
					<li>热门</li>
					<li>等待回复</li>
				
				</ul>
			</p>
			<div class="wz" v-for='(obj,index) in fx'>
				<div class='wz1'>
					<div class='le'>
						<img :src="obj.img" alt="">
						<span>{{obj.lespan}}</span>
					</div>
					<div class='center'>
						<h3 class='h3'>
							<a href="javascript:void(0)" class='a'>{{obj.h3a}}</a>
							<span> {{obj.h3span}}</span>
						</h3>
						<div class='center1'> 	
							<a href="javascript:void(0)">{{obj.center1a1}}</a>  
							<a href="javascript:void(0)"><img :class="[('img'+(index+1))]" :src="obj.center1img" alt=""></a>
							<a href="javascript:void(0)">{{obj.h3span}}</a>
						</div>
						<div class='center2'>	
							<span>{{obj.center2span1}}</span> 
							<span class='span'> {{obj.center2span2}}</span>
							<span class='span'  :class="[('spn'+(index+1))]">{{obj.center2span3}}</span>
							<span class='span' :class="[('hot'+(index+1))]">{{obj.center2span4}}</span>
							<span>{{obj.center2span5}}</span>
							<span>{{obj.center2span6}}</span>
						</div>
					</div>
					<div class='right1'>
						<div class="z">
							<span id='sp1'>{{obj.zspan1}}</span>
							<span>{{obj.zspan2}}</span>
						</div>
						<div class="y">
							<span>{{obj.yspan1}}</span>
							<span>{{obj.yspan2}}</span>
						</div>
					</div>

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
		<div class='right2'>
			<div class='up11'>
				<p class='pp1'>新问题</p>
				<div class='oo'><span class="qq" v-for='arr in spannn'>{{arr}}</span></div>
			</div>
			<div class='zz11'>
				<h4>一周热门问题</h4>
				<hr style="margin-top:25px;"/>
				<div class='remen' v-for='(obj, index) in fx1'>
					<span class='span4' :class="[('hoot'+(index+1))]">{{obj.spn4}}</span>
					<span class='span5'> <a href="">{{obj.spn5}}</a></span>
					<p >
						<span class='span6'>{{obj.spa6}}</span>
						<span class='span6'>{{obj.spa7}}</span>
					</p>
				</div>
			</div>
			<div class='down11'>
				<h4>一周回答雷锋榜</h4>
				<hr style="margin-top:25px;"/>
				<div class='remen' v-for='(obj, index) in fx2' :class="[('div'+(index+1))]">
					<img class='span4' :src="obj.spn4" alt="">
					<span class='span5'> 
						<a href=""  :class="[('a'+(index+1))]">{{obj.spn5}}</a>
						<a href="" class='aa2'>{{obj.spn51}}</a>
					</span>
					<p >
						<span class='span6'>{{obj.spa6}}</span>
						<span class='span6'>{{obj.spa7}}</span>
					</p>
				</div>

			</div>

		</div>
	</div>
</template>
<script>
	export default {
	data(){
		return{
			fx2:[
				{
					spn4:'../../static/image/1.jpg',
					spn5:' 王书奎',
					spn51:' 这个学过没？没事反正你们学过跟没学过一样!我从新讲一遍!',
					spa6:1119,
					spa7:'回答',
				},
				{
					spn4:'../../static/image/2.jpg',
					spn5:'邵山欢',
					spn51:'咋啦,孩子们,又蒙X了啦!',
					spa6:1319,
					spa7:'回答',
				},
				{
					spn4:'../../static/image/3.jpg',
					spn5:'  李楠',
					spn51:'别人说你胖,你还喘了!',
					spa6:4019,
					spa7:'回答',
				},
				{
					spn4:'../../static/image/4.jpg',
					spn5:'  武甲天',
					spn51:' 看什么？',
					spa6:3609,
					spa7:'回答',
				},
				{
					spn4:'../../static/image/5.jpg',
					spn5:' 刘欢',
					spn51:'  别说我是歌手,其实我是一个程序员',
					spa6:3419,
					spa7:'回答',
				}
			],
			fx1:[
				{
					spn4:'熱',
					spn5:' 不知道哪错了？对照着别人的看了半天',
					spa6:6,
					spa7:'回答',
				},
				{
					spn4:'熱',
					spn5:'图像无法显示,不知道为什么',
					spa6:5,
					spa7:'回答',
				},
				{
					spn4:'熱',
					spn5:'  都是按照老师说的打的，大家看看我的代码哪里错了？',
					spa6:3,
					spa7:'回答',
				},{
					spn4:'熱',
					spn5:'  编辑器下载地址',
					spa6:2,
					spa7:'回答',
				},{
					spn4:'熱',
					spn5:'  xsheel连接失败',
					spa6:1,
					spa7:'回答',
				}
			],
			spannn:['PHP','JAVA','Html/CSS','Maya','MongoDB','Premiere','Photoshop','Mysql','Android','Node.js','Html5','JQuery','Python','iOS','Linux','云计算','AngularJS','Bootstrap','CSS3','WebApp','COracle','C++','GoUnity3D','Cocos2d-x','SQL Server','C#'],
			fx:[
				{
					img:'../../static/image/wenda_tx/1.jpg',
					lespan:'考拉',
					h3a:'顶',
					h3span:' 怎么写代码才能不像粑粑？？？',
					center1a1:'最赞回答',
					center1img:'../../static/image/wenda_tx/1.jpg',
					center1a2:'mahuarengBC: 腾讯的实习生写的也是粑粑',
					center2span1:'提问时间：2015-07-28',
					center2span2:'PHP',
					center2span3:'Android',
					center2span4:'ios',
					center2span5:'源自：JavaScript进阶篇',
					center2span6:'此课问答',
					zspan1:'123',
					zspan2:'回答',
					yspan1:'1234',
					yspan2:'浏览',
					index:1
				},
				{
					img:'../../static/image/wenda_tx/2.jpg',
					lespan:'weibo薛定谔',
					h3a:'  ',
					h3span:' 你会写运动框架吗',
					center1a1:'最赞回答',
					center1img:'../../static/image/wenda_tx/2.jpg',
					center1a2:'qq_维帕尔: 做了一个奇葩的workaround在node.js中',
					center2span1:'提问时间：40分钟前',
					center2span2:' ',
					center2span3:'node',
					center2span4:'',
					center2span5:'源自：node建站攻略 ',
					center2span6:'此课问答',
					zspan1:'0',
					zspan2:'回答',
					yspan1:'34',
					yspan2:'浏览',
					index:2
				},
				{
					img:'../../static/image/wenda_tx/3.jpg',
					lespan:'狮子座上客',
					h3a:'精',
					h3span:' 学过六脉神剑吗?',
					center1a1:'嗯～～，',
					center1img:'',
					center1a2:'这个提问大家都在考虑......',
					center2span1:'提问时间：一小时前 ',
					center2span2:'',
					center2span3:'JAVA',
					center2span4:'',
					center2span5:'',
					center2span6:'此课问答',
					zspan1:'78',
					zspan2:'回答',
					yspan1:'454',
					yspan2:'浏览'
				},
				{
					img:'../../static/image/wenda_tx/4.jpg',							 
					lespan:'领悟1995',
					h3a:'',
					h3span:' javaScript攻城狮平均薪资多少钱?',
					center1a1:'嗯～～，',
					center1img:'',
					center1a2:'这个提问大家都在考虑......',
					center2span1:'提问时间：3分钟前',
					center2span2:'Html/css',
					center2span3:'',
					center2span4:'JavaScript',
					center2span5:'',
					center2span6:'此课问答',
					zspan1:'0',
					zspan2:'回答',
					yspan1:'14',
					yspan2:'浏览'
				},
				{
					img:'../../static/image/wenda_tx/5.jpg',
					lespan:'活抓麻花疼',
					h3a:'',
					h3span:' int a=3;b=4;计算a+b%(a+b)/a+a*b-b运算结果',
					center1a1:'嗯～～，',
					center1img:'',
					center1a2:'这个提问大家都在考虑......',
					center2span1:'提问时间：6分钟前',
					center2span2:'',
					center2span3:'c',
					center2span4:'',
					center2span5:'',
					center2span6:'此课问答',
					zspan1:'0',
					zspan2:'回答',
					yspan1:'343',
					yspan2:'浏览'
				},
				{
					img:'../../static/image/wenda_tx/1.jpg',
					lespan:'狗尾巴狼',
					h3a:'',
					h3span:' 哪错啦过不去',
					center1a1:'嗯～～，',
					center1img:'',
					center1a2:'这个提问大家都在考虑.....',
					center2span1:'提问时间：3小时前',
					center2span2:'',
					center2span3:'IOS',
					center2span4:'',
					center2span5:'',
					center2span6:'此课问答',
					zspan1:'0',
					zspan2:'回答',
					yspan1:'1234',
					yspan2:'浏览'
				},

			]
	 	}
	 },
	 methods: {  
		addClassFun: function(index) {  
		this.qwerqwre = index;  
		}  
	} ,
	methods: {  
		
	} 
}
</script>
<style scoped>
.le-1{
	width:95%;
	height: 95%;
	margin: 33px 0px 0px 62px;
}
.le-1 .left{
width:68%;
float: left;
height: 100%;

}
.le-1 .right2{
width:23%;
float: right;
height: 100%;

}
.le-1 .left .p1{
width:100%;
height: 70px;

background: #EEF1F2;
}
.le-1 .left .p1 ul{
float: left;
display: block;
height: 100%;
width:60%;
}
.le-1 .left .p1 ul li{
float: left;
height: 100%;
width:25%;
text-align: center;
line-height: 70px;

}
.le-1 .left .p1 img{
float: left;
margin-top: 20px;
margin-left: 20px;
}


.le-1 .left .p2{
width:100%;
height: 60px;

}
.le-1 .left .p2 span{
float: left;
text-align: center;
display: block;
color: #979EA0;
height: 100%;
line-height: 60px;
font-size: 17px;
}
.le-1 .left .p2 ul{
float: left;
display: block;
height: 100%;
width:60%;
}
.le-1 .left .p2 ul li{
float: left;
height: 100%;
font-size: 13px;
width:22%;
color: #666;
text-align: center;
line-height: 60px;

}
.le-1 .left .p2 ul li:hover{
color: #000;

}
.le-1 .left .p3{
width:100%;
height: 45px;

background: #F9F9F9;
}
.le-1 .left .p3 ul li{
float: left;
height: 100%;
font-size: 13px;
width:8%;
color: #666;
text-align: center;
line-height: 45px;
}
.le-1 .left .p3 ul li:hover{
color: #000;

}
.le-1 .left .p3 ul .li1{
color: #000;
}
.le-1 .left .wz{
	width: 100%;
	height: 154px;
	border-bottom: 1px solid #666;
	
}
.le-1 .left .wz .wz1{
	width: 100%;
	height: 85px;
	
	padding-top: 40px;
}
.le-1 .left .wz .wz1 .le{
	width: 120px;
    height: 66px;
    float: left;
}
.le-1 .left .wz .wz1 .le img{
	border-radius: 50%;
	width:40px;
	text-align: center;
	height: 40px;
	margin: 10px auto;
	display: block;
	
}
.le-1 .left .wz .wz1 .le span{
	width:120px;
	height: 20px;
	display: block;
	text-align: center;
	line-height: 20px;
	font-size: 12px;
	float: left;
}
.le-1 .left .wz .wz1 .center{
	float: left;
	width: 500px;
    height: 85px;
    padding-top: 10px;
}
.le-1 .left .wz .wz1 .center .h3{
	font-size: 13px;
}
.le-1 .left .wz .wz1 .center .h3 .a{
	color:#ffffff;
	background: red;
}
.le-1 .left .wz .wz1 .center .center1 a img{
	width: 20px;
	height: 20px;
	vertical-align:middle;
	display: inline-block;
	border-radius: 50%;
}
.le-1 .left .wz .wz1 .center .center1{
	margin-top:5px;
}
.le-1 .left .wz .wz1 .center .center1 a {
	font-size: 12px;
	color: #666;
}
.le-1 .left .wz .wz1 .center .center1 a .img3,.le-1 .left .wz .wz1 .center .center1 a .img4,.le-1 .left .wz .wz1 .center .center1 a .img5,.le-1 .left .wz .wz1 .center .center1 a .img6{
	width:0px;
	height: 0px;
}
.le-1 .left .wz .wz1 .center .center2 span{
	font-size: 12px;
	margin-right:10px; 
	color: #ccc;
}.le-1 .left .wz .wz1 .center .center2 .spn5{
	width: 20px;
	display: inline-block;
}
.le-1 .left .wz .wz1 .center .center2 .span{
	text-align: center;
	background: #edf1f2;
}

.le-1 .left .wz .wz1 .right1{
	float: left;
	font-size: 12px;
    height: 85px;
    color: #787d82;
    text-align: center;
    width: 110px;
}
.le-1 .left .wz .wz1 .right1 .z{
	float: left;
	width:50px;
	height: 50px;
	margin-top: 20px;
	text-align: center;
	cursor: pointer;
}
.le-1 .left .wz .wz1 .right1 .z span{
	font-size: 12px;
	display: block;
	width:50px;
	margin-top: 5px;
	color: green;
}.le-1 .left .wz .wz1 .right1 .y span{
	font-size: 12px;
	display: block;
	margin-top: 5px;
	width:50px;
}

.le-1 .left .wz .wz1 .right1 .y{
	float: left;
	width:50px;
	height: 50px;
	margin-top: 20px;
	text-align: center;
	cursor: pointer;
}

.daohang{
	width:100%;
	height: 55px;

	float: left;
	margin: 20px 0px 30px 0px;
}
 .daohang .daohang1{
	width:45%;
	height: 23px;

	
	margin: 10px auto;
}
.daohang ul li{
	float: left;
	font-size: 13px;
	height: 100%;
	text-align: center;
	cursor: pointer;
	margin-left:10px;
	line-height: 23px;
	width:23px;

}
 .daohang ul .li1{
	background: red;
	color: #ffffff;

}
 .daohang ul .li1:hover{

	color: #ffffff;

}
 .daohang ul li:hover{	
	border-bottom: 1px solid red;
	color: red;
}
 .daohang ul {
	float: left;

}
 .daohang span {
	float: left;
	font-size: 13px;
	height: 100%;
	text-align: center;
	cursor: pointer;
	margin-left:10px;
	line-height: 23px;

}
 .daohang span:hover{
	color: red;
	border-bottom: 1px solid red;
}
.right2 .up11{
	width:100%;
	height: 245px;
}
.right2 .up11 .oo{
	margin-top: 30px;
	width:100%;
}
.right2 .up11 .pp1{
	width:100%;
	height:40px;
	background: #FF0000;
	font-size: 13px;
	color: #ffffff;
	text-align: center;
	line-height: 40px;
}
.right2 .up11 .qq{
	font-size: 12px;
	float: left;
	padding: 3px;
	background: #F9F9F9;
	margin-left:5px;
	    color: #787d82;
	margin-top: 5px;
}
.right2 .up11 .qq:hover{
	background: #EEF1F2;
}


.right2 .zz11{
	width:100%;
	height: 395px;
	margin-top:30px;
	
}
.right2 .zz11 .remen{
	width:100%;
	height: 63px;	
	border-bottom: 1px solid #ccc;
}
.right2 .zz11 .remen .span4{
	font-size: 12px;
	display:block;
	width: 20px;
	float: left;
	height: 20px;
	text-align: center;

	line-height: 18px;
	border-radius: 50%;
	margin-top: 20px;
	margin-right: 10px;
	

}
.right2 .zz11 .remen  .span5{
	font-size: 14px;
	display:block;
	width: 209px;
	
	float: left;
	margin-top: 18px;
}
.right2 .zz11 .remen  .span5 a{
	color:#000;

}
.right2 .zz11 .remen  .span5 a:hover{
	color:red;
	border-bottom: 1px solid red;
}
.right2 .zz11  .remen p{
	display:block;
	width: 30px;
	float: left;
	height: 30px;
	margin-top: 15px;
}
.right2 .zz11 .remen p .span6{
	font-size: 12px;
	display:block;
	width: 30px;
	height: 10px;
	margin-top: 5px;
	line-height: 10px;
	text-align: center;
	color: green;
}
.hoot1{
	background: #CC0000;
	color: #ffffff;

}
.hoot2{
	background: #FF3300;
	color: #ffffff;

}
.hoot3{
	background: #CCCC00;
	color: #ffffff;

}
.hoot5,.hoot4{
	background: #CCCCCC;
	color: #ffffff;

}



.right2 .down11{
	width:100%;
	height: 100%;
	margin-top:10px;

}
.right2 .down11 .remen{
	width:100%;
	height: 76px;	
	border-bottom: 1px solid #ccc;
}
.right2 .down11 .div1{
	width:100%;
	height: 115px;
}
.right2 .down11 .remen .span4{
	font-size: 12px;
	display:block;
	width: 45px;
	float: left;
	height: 45px;
	text-align: center;

	line-height: 45px;
	border-radius: 50%;
	margin-top: 20px;
	margin-right:18px;
	

}
.right2 .down11 .remen  .span5{
	font-size: 14px;
	display:block;
	width: 150px;
	margin-right:18px;
	float: left;
	margin-top: 18px;

}
.right2 .down11 .remen  .span5 .aa2{
	color:#ccc;
	display:block;
	width:100%;
}
.right2 .down11 .remen  .span5 .a1:hover{
	color:red;
	border-bottom: 1px solid red;
}
.right2 .down11 .remen  .span5 .a2:hover{
	color:red;
	width:20px;
	border-bottom: 1px solid red;
}
.right2 .down11 .remen  .span5 .a3:hover{
	color:red;
	border-bottom: 1px solid red;
}
.right2 .down11 .remen  .span5 .a4:hover{
	color:red;
	border-bottom: 1px solid red;
}
.right2 .down11 .remen  .span5 .a5:hover{
	color:red;
	border-bottom: 1px solid red;
}
.right2 .down11 .remen  .span5 .a1{
	color:#000;
}
.right2 .down11 .remen  .span5 .a2{
	color:#000;
}
.right2 .down11 .remen  .span5 .a3{
	color:#000;

}
.right2 .down11 .remen  .span5 .a4{
	color:#000;
}
.right2 .down11 .remen  .span5 .a5{
	color:#000;
	
}

.right2 .down11  .remen p{
	display:block;
	width: 30px;
	float: left;
	height: 30px;
	margin-top: 15px;
}
.right2 .down11 .remen p .span6{
	font-size: 12px;
	display:block;
	width: 30px;
	height: 10px;
	margin-top: 5px;
	line-height: 10px;
	text-align: center;
	color: green;
}

</style>