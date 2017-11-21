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
       			<p class='p'>
       				<span>  产品类型：  </span>
       				<ul>
       					<li v-for="name in ys">{{name.sj}}</li>
       				</ul>
       			</p>
       			
       			<div class='youx'>
	       			<p>有效时间:</p>
	       			<span>一年</span>
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
        <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
		以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
		大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
		作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
		关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
		 	ys: [
		        {
		          sj: "纸质报告",
		          value: 0
		        },
		        {
		          sj: 'pdf',
		          value: 1
		        },
		        {
		          sj: '页面报告',
		          value: 2
		        },
		        {
		          sj: '邮件',
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

<style scope>
	.text1{
		width:100%;
		height:380px;
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
		height:200px;
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
		line-height: 25px;
		text-indent:2em;
		}
    

</style>
