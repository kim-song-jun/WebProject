<template>

  <!-- <h1>원룸샵</h1> -->
  <!-- <div class="start" :class="{ end : uiStatus }">
    <Modal 
    :oneRooms="oneRooms" :uiInfo="uiInfo" :uiStatus="uiStatus" 
    @closeModal="uiStatus=$event"/>
  </div> -->
  <div class="start" :class="{end:uiStatus}">
    <transition name="fade">
      <Modal 
      :oneRooms="oneRooms" :uiInfo="uiInfo" :uiStatus="uiStatus" 
      @closeModal="uiStatus=$event"/>
    </transition>
  </div>

  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{menu}}</a>
  </div>

  <Discount v-if="showDiscount == true"
  :amount="amount"/>

  <div>
    <button @click="priceLowSort">가격낮은순 정렬</button>
    <button @click="priceHighSort">가격높은순 정렬</button>
    <!-- <button @click="nameSort">이름 정렬</button> -->
    <button @click="returnSort">원래대로</button>
  </div>

  <Card 
  v-for="(item,index) in oneRooms" :key="index" 
  :oneRooms="oneRooms[index]"
  @openModal="uiStatus=true; uiInfo=index"/>

</template>

<script>

import dataList from './data/post.js'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'


export default {
  name: 'App',
  data(){
    return {
      // 데이터 보관하는곳
      // ex) 가격데이터
      // object 자료 형식
      // {자료이름 : 자료 내용}
      menus: ['Home','Shop','About'],
      score: [0,0,0],
      uiStatus: false,
      uiInfo: 0,
      oneRooms: [...dataList],
      oneRoomsOrign: [...dataList],
      showDiscount: true,
      amount : 30,
    }
  },
  methods: {
    increase(i){
      this.score[i]++;
    },
    priceLowSort(){
      this.oneRooms.sort(function(a,b){
        return a.price - b.price
      })
    },
    priceHighSort(){
      this.oneRooms.sort(function(a,b){
        return b.price - a.price
      })
    },
    // nameSort(){
      //   this.oneRooms.sort(function(a,b){
        //     return a.title - b.title
    //   })
    // },
    returnSort(){
      [...this.oneRooms] = [...this.oneRoomsOrign]
    },
  },
  // mounted() {
  //   setTimeout(()=>{
  //     this.showDiscount = false
  //   },2000);
  // },
  // 이런기능? page가 로딩시 30퍼센트 할인 1초마다 1씩 감소
  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  },
  mounted() {
    setInterval(()=>{
      if (this.amount == 0){
        return
      }
      this.amount--;
    },1000)
  },
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

.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
  /* position: fixed;  */
  width: 100%;
  background:rgba(72,61,139,1);
  padding: 15px;
  border-radius: 3px;
}
.menu a{
  color: white;
  padding: 10px;

}
.start{
  opacity: 0;
  transition: all 1s;
}
.end{
  opacity: 1;
}

.fade-enter-form {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-form {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

</style>
