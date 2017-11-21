<template>
	
		<div class='auto'>
			<div class='auto-z'>
				<img :src="productIcon">
				<ul>
					<router-link v-for='name in xiaom' :to="{ path: name.path }"  tag='li'  >
						{{name.name}}
					</router-link>
									
				</ul>
			</div>
			<div class='auto-y'>		
				<router-view></router-view>
			</div>
		</div >
</template>
<script>
	export default { 
		data(){
			return{
		        xiaom:[
			        {
			          name: '数据统计',
			          path: 'denglu1',
			          icon: './img/1.png',
			          active: false,
			          a:1
			        },
			        {
			          name: '数据预测',
			          path: 'denglu2',
			          active: false,
			          a:1
			        },
			        {
			          name: '流量分析',
			          path: 'denglu3',
			          active: false,
			          a:1
			        },
			        {
			          name: '广告发布',
			          path: 'denglu4',
			          active: false,
			          a:1
			        }
			],
	      imgMap: {
	        '/denglu1':"../../static/img/1.png",
	        '/denglu2':"../../static/img/2.png",
	        '/denglu3':"../../static/img/3.png",
	        '/denglu4':"../../static/img/4.png"
	      		}
			}
		},
	computed: {
	    productIcon(){
	      return this.imgMap[this.$route.path]
   			 }
	      }
	}

</script>
<style scope>
#app .section .auto{
	width: 87%;
	
	margin :0px auto;
	
}
#app .section .auto .auto-z{
	width:200px;
	height:300px;
	float: left;
	margin-right: 19px;
	margin-top:10px;
	background: #ffffff;
}
#app .section .auto .auto-z ul li{
	width:100%-10px;
	height:34px;
	line-height: 34px;
	font-size: 14px;
	padding-left: 10px;
	cursor: pointer;
}
#app .section .auto .auto-z ul li:hover{
	background: #4FC08D;
	color: #ffffff;
}
#app .section .auto .auto-z img{
	margin:20px 20px 20px 50px;
	cursor: pointer;
}
#app .section .auto .auto-y{
	width:80%;
	
	float: left;
	margin-top:10px;
	border: 1px solid #000000;
}
#app .section .auto .auto-z ul .router-link-active{
    background: #4fc08d;
    color: #fff;
}
</style>