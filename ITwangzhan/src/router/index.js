import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Shequ from '../page/shequ.vue'
import quanbu from '../page/fangxiang/quanbu.vue'
import houduankaifa from '../page/fangxiang/houduankaifa.vue'
import qianduankaifa from '../page/fangxiang/qianduankaifa.vue'
import yidongkaifa from '../page/fangxiang/yidongkaifa.vue'
import shujuchuli from '../page/fangxiang/shujuchuli.vue'
import tuxiangchuli from '../page/fangxiang/tuxiangchuli.vue'

import quan from '../page/tiaozhuang/quan.vue'
import houduan from '../page/tiaozhuang/houduan.vue'
import qianduan from '../page/tiaozhuang/qianduan.vue'
import app from '../page/tiaozhuang/app.vue'
import shuju from '../page/tiaozhuang/shuju.vue'
import tuxiang from '../page/tiaozhuang/tuxiang.vue'

import quannew from '../page/tiaozhuang/quannew.vue'
import houduannew from '../page/tiaozhuang/houduannew.vue'
import qianduannew from '../page/tiaozhuang/qianduannew.vue'
import appnew from '../page/tiaozhuang/appnew.vue'
import shujunew from '../page/tiaozhuang/shujunew.vue'
/*前端*/
import php from '../page/tiaozhuang/php.vue'
import quan1 from '../page/tiaozhuang/quan1.vue'
import javaee from '../page/tiaozhuang/javaee.vue'
import linux from '../page/tiaozhuang/linux.vue'
import c1 from '../page/tiaozhuang/c1.vue'
import python from '../page/tiaozhuang/python.vue'
import c2 from '../page/tiaozhuang/c2.vue'
import go from '../page/tiaozhuang/go.vue'
/*后端*/
import quan2 from '../page/tiaozhuang/quan2.vue'
import android from '../page/tiaozhuang/android.vue'
import iso from '../page/tiaozhuang/iso.vue'
import unity from '../page/tiaozhuang/unity.vue'
import cococo from '../page/tiaozhuang/cococo.vue'
/*移动端*/
import quan3 from '../page/tiaozhuang/quan3.vue'
import mysql from '../page/tiaozhuang/mysql.vue'
import mongo from '../page/tiaozhuang/mongo.vue'
import yunjisuan from '../page/tiaozhuang/yunjisuan.vue'
import dashuju from '../page/tiaozhuang/dashuju.vue'
import oracle from '../page/tiaozhuang/oracle.vue'
import sqlserver from '../page/tiaozhuang/sqlserver.vue'
/*数据*/
import quan4 from '../page/tiaozhuang/quan4.vue'
import photoshop from '../page/tiaozhuang/photoshop.vue'
import maya from '../page/tiaozhuang/maya.vue'
import promiere from '../page/tiaozhuang/promiere.vue'
/*图像*/

import nandu from '../page/nandu/nandu.vue'
import nandu1 from '../page/nandu/nandu1.vue'
import nandu2 from '../page/nandu/nandu2.vue'
import nandu3 from '../page/nandu/nandu3.vue'
import nandu4 from '../page/nandu/nandu4.vue'
import nandu5 from '../page/nandu/nandu5.vue'
import chuji from '../page/nandu/chuji.vue'
import chuji1 from '../page/nandu/chuji1.vue'
import chuji2 from '../page/nandu/chuji2.vue'
import chuji3 from '../page/nandu/chuji3.vue'
import chuji4 from '../page/nandu/chuji4.vue'
import chuji5 from '../page/nandu/chuji5.vue'
import zhongji from '../page/nandu/zhongji.vue'
import zhongji1 from '../page/nandu/zhongji1.vue'
import zhongji2 from '../page/nandu/zhongji2.vue'
import zhongji3 from '../page/nandu/zhongji3.vue'
import zhongji4 from '../page/nandu/zhongji4.vue'
import zhongji5 from '../page/nandu/zhongji5.vue'
import gaoji from '../page/nandu/gaoji.vue'
import gaoji1 from '../page/nandu/gaoji1.vue'
import gaoji2 from '../page/nandu/gaoji2.vue'
import gaoji3 from '../page/nandu/gaoji3.vue'
import gaoji4 from '../page/nandu/gaoji4.vue'
import gaoji5 from '../page/nandu/gaoji5.vue'



Vue.use(Router)

export default new Router({
  routes: [
	  	{ path: '*', redirect: '/index'},   
	    { path: '/shequ', component: Shequ},
	    {
	    	path: '/index', 
	   	 	component: Index,
	   	 	redirect: '/quanbu',
	   	 	children:[
				{ path: '/quanbu', component: quanbu},
				{	path: '/houduankaifa',
				 	component: houduankaifa,
				 	children:[
				 			{ 	path: '/quan1', 
				 				component: quan1,
				 				children:[
				 					{ path: '/nandu2', component: nandu2},
							 		{ path: '/chuji2', component: chuji2},
							 		{ path: '/zhongji2', component: zhongji2},
							 		{ path: '/gaoji2', component: gaoji2},
				 				]



				 		},
							{ path: '/php', component: php},
					 		{ path: '/javaee', component: javaee},
					 		{ path: '/linux', component: linux},
					 		{ path: '/python', component: python},
					 		{ path: '/c1', component: c1},
					 		{ path: '/c2', component: c2},
					 		{ path: '/go', component: go},
										 	
				 	]	
				},
				{ 	path: '/qianduankaifa',
					component: qianduankaifa,
				 	children:[
				 		{ 	path: '/quan',
				 			component: quan,
				 			children:[
				 					{ path: '/nandu1', component: nandu1},
							 		{ path: '/chuji1', component: chuji1},
							 		{ path: '/zhongji1', component: zhongji1},
							 		{ path: '/gaoji1', component: gaoji1},
				 				]
				 	},
				 		{ path: '/qianduan', component: qianduan},
				 		{ path: '/houduan', component: houduan},
				 		{ path: '/app', component: app},
				 		{ path: '/shuju', component: shuju},
				 		{ path: '/tuxiang', component: tuxiang},
				 		{ path: '/quannew', component: quannew},
				 		{ path: '/qianduannew', component: qianduannew},
				 		{ path: '/houduannew', component: houduannew},
				 		{ path: '/appnew', component: appnew},
				 		{ path: '/shujunew', component: shujunew},
				 		
				 	]
				},
				{ 	path: '/yidongkaifa', 
					component: yidongkaifa,
				 	children:[
				 		{ 	path: '/quan2',
				 			component: quan2, 
				 			children:[
				 					{ path: '/nandu3', component: nandu3},
							 		{ path: '/chuji3', component: chuji3},
							 		{ path: '/zhongji3', component: zhongji3},
							 		{ path: '/gaoji3', component: gaoji3},
				 				]
				 	},
				 		{ path: '/android', component: android},
				 		{ path: '/iso', component:iso},
				 		{ path: '/unity', component: unity},
				 		{ path: '/cococo', component: cococo},
					]
				},
				{ 	path: '/shujuchuli',
				 	component: shujuchuli,
				 	children:[
				 		{ 	path: '/quan3',
				 			component: quan3,
				 			children:[
				 					{ path: '/nandu4', component: nandu4},
							 		{ path: '/chuji4', component: chuji4},
							 		{ path: '/zhongji4', component: zhongji4},
							 		{ path: '/gaoji4', component: gaoji4},
				 				] 
				 	},
				 		{ path: '/mysql', component: mysql},
				 		{ path: '/mongo', component:mongo},
				 		{ path: '/dashuju', component: dashuju},
				 		{ path: '/yunjisuan', component: yunjisuan},
				 		{ path: '/oracle', component: oracle},
				 		{ path: '/sqlserver', component: sqlserver}
				 		
					]
				},
				{ 	path: '/tuxiangchuli',
				 	component: tuxiangchuli,
				 	children:[
				 		{ 	path: '/quan4',
				 			component: quan4,
				 			children:[
				 					{ path: '/nandu5', component: nandu5},
							 		{ path: '/chuji5', component: chuji5},
							 		{ path: '/zhongji5', component: zhongji5},
							 		{ path: '/gaoji5', component: gaoji5},
				 				]
				 		 },
				 		{ path: '/photoshop', component: photoshop},
				 		{ path: '/maya', component:maya},
				 		{ path: '/promiere', component: promiere}
					]
				},
					
				
	   	 	]
	   	}

    ]
})
