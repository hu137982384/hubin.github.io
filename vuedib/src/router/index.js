import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Artic from '../page/artic.vue'
import Denglu1 from '../page/denglu1.vue'
import Denglu2 from '../page/denglu2.vue'
import Denglu3 from '../page/denglu3.vue'
import Denglu4 from '../page/denglu4.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/index', component: Index}, 
    {
    	path: '/artic', 
    	component: Artic,
    	redirect: '/page/denglu1',
        
    	children :[
			{path: '/denglu1', component: Denglu1}, 
		    {path: '/denglu2', component: Denglu2}, 
		    {path: '/denglu3', component: Denglu3}, 
		    {path: '/denglu4', component: Denglu4}
    	]
    
			}, 
     
    {path: '*', redirect: '/index'}
  ]
})
