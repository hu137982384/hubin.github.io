<template>
	<div>hahah</div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return{
      img:'../../static/image/logo.png',
      inp:'inp',
      input:'input',
      ok: false,
      p1:'p1',
      p:'p',
      or:false,
      op:false,
      foot:[
          {name:"Copyright ? 2015 imooc.com All Rights Reserved"},
          {name:"|"},
          { name:"京ICP备 13046642号-2"},
      ]
    }
  },
  methods: {
    fn1(){
      this.ok= true
    },
    fn2(){
      this.ok= false
    }
  }
}
</script>

<style scoped>
	


</style>