<template>
<div class="allCards">
  <div class="imgWarp" v-for="(obj,index) in imgArr" :key="index">
    <img :alt="obj.name" v-lazy="obj.src">
    <span>{{obj.name}}</span>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    imgArr: [{
        src: './static/zytxnk.png',
        name: '中银通虚拟卡'
      },
      {
        src: './static/zytjm.png',
        name: '中银通记名卡'
      },
      {
        src: './static/zytbjm.png',
        name: '中银通不记名卡'
      },
      {
        src: './static/jlkm.png',
        name: '莞籍敬老卡(男)'
      },
      {
        src: './static/jlkw.png',
        name: '莞籍敬老卡(女)'
      },
      {
        src: './static/fgjjlkm.png',
        name: '非莞籍敬老卡(男)'
      },
      {
        src: './static/fgjjlkw.png',
        name: '非莞籍敬老卡(女)'
      },
      {
        src: './static/jdyk.png',
        name: '义务监督员卡'
      },
      {
        src: './static/axk.png',
        name: '爱心卡'
      },
      {
        src: './static/xsk.png',
        name: '学生卡'
      },
      {
        src: './static/yfk.png',
        name: '优抚卡'
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.allCards {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.allCards .imgWarp {
    margin: 15px 10px;
}
.allCards .imgWarp span {
    display: block;
    text-align: center;
    color: #008CD7;
    font-weight: bold;
    font-size: 14px;
}
.allCards .imgWarp img{
  border-radius: 10px;
}
.allCards .imgWarp img:hover{
  box-shadow: 0 0 30px 8px #008CD7;
}
</style>
