<template>
	<div class='le-1'>
		<div class='up'>
			<div class='qbkc'>
				<p class='p1'>全部课程:</p>
				<p class='p2'><img src="" alt=""></p>
			</div>
			<div class='fx'>
				<span>方向:</span>
				<ul>
					<li v-for='(obj,$index ) in fx' ><router-link  :to="{ path: obj.path }">{{obj.ename}}</router-link></li>
				</ul>
			</div>
		</div>
		<div class='down'>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
	name: 'app',
	data(){
		return{		
			fx:[
				{
					ename:'全部',
					path:'quanbu',
					active:false,
					i:1
				},
				{
					ename:'前端开发',
					path:'qianduankaifa',
					active:false,
					i:1
				},
				{
					ename:'后端开发',
					path:'houduankaifa',
					active:false,
					i:1
				},
				{
					ename:'移动开发',
					path:'yidongkaifa',
					active:false,
					i:1
				},
				{
					ename:'数据处理',
					path:'shujuchuli',
					active:false,
					i:1
				},
				{
					ename:'图像处理',
					path:'tuxiangchuli',
					active:false,
					i:1
				}
			]	 

		 }
	}

}
</script>

<style scoped>
.le-1{
	width:95%;
	height: 95%;
	margin: 33px 0px 0px 62px;
}
.le-1 .qbkc{
	width:100%;
	height: 60px;
	border-bottom: 1px solid #EDF1F2;
}
.le-1 .qbkc .p1{
	font-size: 16px;
	float:left;
	line-height: 60px;
}
.le-1 .qbkc .p2{
	background: url(../../static/image/bg/courseBg.png) no-repeat 0px 0px;
	float:right;
	width: 100px;
	height: 60px;
	margin-right: 10px;
	margin-top: 20px;
	line-height: 60px;
}
.le-1 .fx{
	width:100%;
	height: 52px;
	border-bottom: 1px solid #EDF1F2;
}
.le-1 .fx ul li{
	float: left;
	width:80px;
	height: 50px;
	line-height: 50px;
	text-align: center;
}
.le-1 .fx ul li a{
	font-size: 13px;
	color: #666666;
	color: #666;
    padding: 5px;
    cursor: pointer;
	margin-top: 13px;
	text-align: center;
	line-height: 27px;
}
.le-1 .fx ul li .router-link-active{
	background: #F01400;
	
	color: #ffffff;
}
.le-1 .fx ul {
	float: left;
	
}
.le-1 .fx span {
	float: left;
	width:80px;
	height: 100%;
	display: block;
	color: #666;
	font-size: 12px;
	text-indent: 1em;
	line-height: 50px;
}

</style>