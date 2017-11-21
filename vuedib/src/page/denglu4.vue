<template>
	<div class='text'>
		<div class='text1'>
			<div class='tet'>
				<h5>数据预测</h5>
        		<span class="p2">未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</span>
			</div>
       		<div class='jiage'>
       			<div class='shir'>	
	       				<div class='gm'>购买数量：  </div>
	       				<div class="btn1">
	       					<div @click='fn1' class="jia">-</div>
	       					<div class='input'>{{num}}</div>
	       					<div @click='fn2' class="jian">+</div>
	       				</div>
       			</div>
       			<div class='shir1'>	
					<p class='p'>
	       				<span>行业：  </span>
	       				<select name="selse"  class='input'>
							<option >出版业</option>
							<option >媒体</option>
							<option >金融</option>
							<option >互联网</option>
							<option >游戏</option>
	       				</select >
	       			</p>
       			</div>
       			<p class='p'>
       				<span>  产品类型：  </span>
       				<ul>
       					<li v-for="name in ys">{{name.sj}}</li>
       				</ul>
       			</p>
       			
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
        <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
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
		          sj: "初级版",
		          value: 0
		        },
		        {
		          sj: '中级版',
		          value: 1
		        },
		        {
		          sj: '高级版',
		          value: 2
		        },
		        {
		          sj: '专业版',
		          value: 2
		        }
      		],
      		num:'20'
		}
	},
	methods:{
		fn1(){
			this.num--;
		    if(this.num<=20){
				this.num="20";
			}
		},
		fn2(){
			this.num++;
			if(this.num>=100){
				this.num="100";
			}
		}
	}
}
</script>

<style scoped>
	.text1{
		width:100%;
		height:430px;
		background: #ffffff;
		color: #444444;
		cursor: pointer;
	} 
	.text1 h5{
		width:100%-20px;
		height:60px;
		font-size: 22px;
		line-height: 60px;
		padding-left: 20px;
		color: #444444;	

	}
	.text1 .tet .p2{
		width:100%-20px;
		height:65px;
		font-size: 14px;
		display: block;
		line-height: 30px;
		padding-left: 20px;
		padding-top: 5px;
		color: #999;	
		text-indent:2em;
		background: #F7FCFF;
	}
	.text1 .jiage{
		width:100%-40px;
		height:276px;
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
		margin-left: 45px;
		width:300px;
		height: 28px;
		display: inline-block;
	}
	.text1 .jiage .shir .gm{
		float: left;
		width: 14%;
	}.text1 .jiage .shir{
		width: 100%-20px;
		height: 40px;
	}
	.text1 .jiage .shir .btn1{
		float: left;
		width: 85%;
	}
	.text1 .jiage .shir .btn1 .input{
		float: left;
		width: 32px;
		height: 27px;
		border: 1px solid #F0F2F5;
		line-height: 27px;
		text-align: center;
		font-size: 13px;
	}
	.text1 .jiage .shir .btn1 .jia,.text1 .jiage .shir .btn1 .jian{
		float: left;
		width: 27px;
		height: 27px;
		line-height: 27px;
		text-align: center;
		border: 1px solid #F0F2F5;
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
		border: 1px solid #F0F2F5;
		border-radius: 5px;
		text-align: center;
		line-height: 35px;
		cursor: pointer;
		font-size: 13px;
		color: #ffffff;
		background: #4FC08D;
	}
	.text1 .jiage .shir1 .input{
		margin-left: 75px;
		border-radius: 5px;
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