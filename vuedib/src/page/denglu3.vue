<template>
	
	<div class='text'>
		<div class='text1'>
			<div class='tet'>
				<h5>流量分析</h5>
    			<span class="p1">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</span>
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
	       				<span>产品类型：  </span>
	       				<select name="selse"  class='input'>
							<option >入门版</option>
							<option >中级版</option>
							<option >高级版</option>
	       				</select >
	       			</p>
       			</div>
       			<p class='p'>
       				<span>  有效时间：  </span>
       				<ul>
       					<li v-for="name1 in ys">{{name1.sj}}</li>
       				</ul>
       			</p>
       			<p class='p'>
       				<span>  产品版本：  </span>
       				<ul>
       					<li v-for="name2 in hs">{{name2.sj}}</li>
       				</ul>
       			</p>
       			
       			<div class='youx'>
	       			<p>有效时间:</p>
	       			<span>一年</span>
       			</div>
       			<div class='zongj'>
       			<p>总价：</p>
       			<span>678元</span>
       			</div>
       			<div class="btn">
       				立即购买
       			</div>
       		</div>
       		
		</div >
		<div class='text2'>
			<h2>产品说明</h2>
        	<p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

        <h3>用户行为指标</h3>
	        <ul>
	          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
	          <li>用户在网站的停留时间；</li>
	          <li>用户来源网站（也叫“引导网站”）；</li>
	          <li>用户所使用的搜索引擎及其关键词；</li>
	          <li>在不同时段的用户访问量情况等。</li>
	        </ul>

        <h3>浏览网站方式</h3>
	        <ul>
	          <li>用户上网设备类型</li>
	          <li>用户浏览器的名称和版本</li>
	          <li>访问者电脑分辨率显示模式</li>
	          <li>用户所使用的操作系统名称和版本</li>
	          <li>用户所在地理区域分布状况等</li>
	        </ul>
      </div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
		 	ys: [
		        {
		          sj: "半年",
		          value: 0
		        },
		        {
		          sj: '一年',
		          value: 1
		        },
		        {
		          sj: '三年',
		          value: 2
		        }		 
      		],
      		hs: [
		        {
		          sj: "客户版",
		          value: 0
		        },
		        {
		          sj: '代理商版',
		          value: 1
		        },
		        {
		          sj: '专家版',
		          value: 2
		        }		 
      		],
      		num:'1'
		}
	},
	methods:{
		fn1(){
			this.num--;
		    if(this.num<=1){
				this.num="1";
			}
		},
		fn2(){
			this.num++;
			if(this.num>=10){
				this.num="10";
			}
		}
	}
}
</script>

<style scoped>
	.text1{
		width:100%;
		height:465px;
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
	.text1 .tet .p1{
		width:100%-20px;
		height:65px;
		font-size: 14px;
		line-height: 30px;
		padding-left: 20px;
		display: block;
		padding-top: 5px;
		color: #999;	
		background: #F7FCFF;
	}
	.text1 .jiage{
		width:100%-40px;
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
	.text1 .jiage .shir1 .input{
		margin-left: 50px;
		border-radius: 5px;
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
	.text2{
		width:100%-40px;
		height:400px;
		padding: 20px;
		margin-top:30px;
		background: #ffffff;
		color:#444444;
	}
	.text2 h2{
		width:100%;
		height: 35px;
		font-size: 18px;
	}
	.text2 h3{
		width:100%;
		height: 35px;
		font-size: 19px;
		font-weight: bold;
		margin-top: 15px;
	}
	.text2 p{
		width:100%;
		height: 32px;
		font-size: 14px;
		margin-bottom: 30px;
		line-height: 25px;
		text-indent:2em;
		}
    .text2 ul li {
		font-size: 15px;
	}
    

</style>
