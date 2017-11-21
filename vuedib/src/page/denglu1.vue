<template>
	<div class='text'>
		<div class='text1'>
			<div class='tet'>
				<h5 data-v-7a981d2f>数据统计</h5>
       		<p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
			</div>
       		<div class='jiage'>
       			<p class='p'>
       				<span>  产品类型：  </span>
       				<ul>
       					<li v-for="name in ys">{{name.sj}}</li>
       				</ul>
       			</p>
       			<div class='shir'>	
					<p class='p'>
	       				<span>适用地区：  </span>
	       				<select name="selse"  class='input'>
							<option >北京</option>
							<option >天津</option>
							<option >上海</option>
							<option >杭州</option>
							<option >广东</option>
							<option >深圳</option>
							<option >福建</option>
	       				</select >
	       			</p>
       			</div>
       			<div class='youx'>
	       			<p>有效时间:</p>
	       			<span>半年</span>
       			</div>
       			<div class='zongj'>
       			<p>总价：</p>
       			<span>500元</span>
       			</div>
       			<div class="btn">
       				立即购买
       			</div>
       		</div>
       		
		</div >
		<div class='text2'>
			<h2>产品说明</h2>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
        <table border='1' bordercolor='#F0F2F5' width='100%' height='75%' rules="all">
        	<tr>
        		<td>安全安保</td>	
        		<td>办公文教</td>	
        		<td>彩票</td>	
        		<td>车辆物流</td>	
        		<td>成人用品</td>	
        		<td>出版传媒</td>	
        		<td>电脑硬件</td>	
        	</tr>
        	<tr>
        		<td>电子电工</td>
        		<td>房地产建筑装修</td>
        		<td>分类平台</td>
        		<td>服装鞋帽</td>
        		<td>箱包饰品</td>
        		<td>化工原料制品</td>
        		<td>机械设备</td>
        	</tr>
        	<tr>
        		<td>家庭日用品</td>
        		<td>家用电器</td>
        		<td>教育培训</td>
        		<td>节能环保</td>
        		<td>金融服务</td>
        		<td>礼品</td>
        		<td>旅游住宿</td>
        	</tr>
        	<tr>
        		<td>美容化妆</td>
        		<td>母婴护理</td>
        		<td>农林牧渔</td>
        		<td>软件</td>
        		<td>商务服务</td>
        		<td>生活服务</td>
        		<td>食品保健品</td>
        	</tr>
        	<tr>
        		<td>手机数码</td>
        		<td>通讯服务设备</td>
        		<td>网络服务</td>
        		<td>医疗服务</td>
        		<td>游戏</td>
        		<td>运动休闲娱乐</td>
        		<td>招商加盟</td>
        	</tr>	
         </table>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
		 	ys: [
		        {
		          sj: "红色版",
		          value: 0
		        },
		        {
		          sj: '绿色版',
		          value: 1
		        },
		        {
		          sj: '紫色版',
		          value: 2
		        }
      		]
		}
	}
}
</script>

<style scoped>
	.text1{
		width:100%;
		height:380px;
		background: #ffffff;
		color: #444444;
	} 
	.text1 h5{
		width:100%;
		height:60px;
		font-size: 22px;
		line-height: 60px;
		padding-left: 20px;
		color: #444444;	
	}
	.text1 .tet p{
		width:100%-20px;
		height:40px;
		font-size: 14px;
		line-height: 40px;
		padding-left: 20px;
		color: #999;	
		background: #F7FCFF;
	}
	.text1 .jiage{
		width:100%-;
		height:216px;
		padding-left: 20px ;
		padding-right: 20px ;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	.text1 .jiage ul li{
		float: left;
		width:60px;
		height: 28px;
		display: inline-block;
		margin-right: 7px;
		border: 1px solid #c1c1c2;
		border-radius: 5px;
		text-align: center;
		line-height: 28px;
		cursor: pointer;
	}
	.text1 .jiage ul {
		margin-left: 50px;
		width:300px;
		height: 28px;
		display: inline-block;
	}
	.text1 .jiage .shir .input{
		margin-left: 50px;
		border-radius: 5px;
	}
	.text1 .jiage .p{
		width:100%;
		height: 40px;
		font-size: 14px;
	}
	.text1 .jiage span {
		float: left;
		padding: 5px;
	}
	.text1 .jiage .zongj {
		float: left;
		width:100%;
		height:34px;
	}
	.text1 .jiage .zongj  p{
		float: left;
		padding: 5px;
		font-size: 13px;
	}
	.text1 .jiage .zongj  span{
		float: left;
		margin-left: 72px;
		font-size: 13px;
		
	}
	.text1 .jiage .youx  p{
		float: left;
		padding: 5px;
		font-size: 13px;
		
	}.text1 .jiage .youx{
		float: left;
		width:100%;
		height:34px;
		
	}
	.text1 .jiage .youx  span{
		float: left;
		font-size: 13px;
		margin-left: 57px;
	}	
	.text1 .jiage .btn{
		width:95px;
		height: 35px;
		margin-left: 125px;
		margin-top: 20px;
		float: left;
		border: 1px solid #c1c1c2;
		border-radius: 5px;
		text-align: center;
		line-height: 35px;
		cursor: pointer;
		font-size: 13px;
		color: #ffffff;
		background: #4FC08D;
	}
	.text2{
		width:100%-40px;
		height:315px;
		padding: 20px;
		margin-top:30px;
		background: #ffffff;
		color:#444444;
	}
	.text2 h2{
		width:100%;
		height: 35px;
		font-size: 20px;
	}
	.text2 p{
		width:100%;
		height: 32px;
		font-size: 14px;
		margin-bottom: 20px;
		}
    .text2  td{
		font-size: 13px;
		color:#444444;
		padding-left: 10px;
		}

</style>