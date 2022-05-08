<template>
  <!-- <h1>원룸샵</h1> -->
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{menu}}</a>
    <!-- <a>Product </a> -->
    <!-- <a>About</a>/ -->
  </div>

  <div class="black-bg" v-if="uiStatus == true">
    <div class="white-bg" >
      <img :src="oneRooms[uiInfo].image" style="width:100%">
      <h4>{{oneRooms[uiInfo].title}}</h4>
      <p>{{oneRooms[uiInfo].content}}</p>
      <p>{{oneRooms[uiInfo].price}} 원</p>
      <button @click="uiStatus = false">닫기</button>
    </div>
  </div>

  <!-- <div v-for="(item, index) in products" :key="index">
    <h4>{{products[index]}}</h4>
    <p>{{prices[index]}}</p>
  </div> -->

  <div v-for="(item,index) in oneRooms" :key="index">
    <img :src="item.image" class="room-img" style="width:70%">
    <div class="">
      <h4 @click="uiStatus = true, uiInfo = index">{{item.title}}</h4>
      <p>{{item.price}} 만원</p>
    </div>
  </div>

</template>

<script>

import dataList from './data/post.js'

export default {
  name: 'App',
  data(){
    return {
      // 데이터 보관하는곳
      // ex) 가격데이터
      // object 자료 형식
      // {자료이름 : 자료 내용}
      // price1: 60,
      // price2: 70,
      // prices: [60,70,80],
      // products: ['역삼동 원룸','천호동 원룸','마포구 원룸'],
      // 스타일 : 'color:blue',
      menus: ['Home','Shop','About'],
      score: [0,0,0],
      uiStatus: false,
      uiInfo: 0,
      oneRooms: dataList
    }
  },
  methods: {
    increase(i){
      this.score[i]++;
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin : 0
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; 
  padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img{
  width: 100%;
  margin-top: 40px;
}

.menu{
  position: fixed; 
  width: 100%;
  background:rgba(72,61,139,1);
  padding: 15px;
  border-radius: 3px;
}
.menu a{
  color: white;
  padding: 10px;

}
</style>
