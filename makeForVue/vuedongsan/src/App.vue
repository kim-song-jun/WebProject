<template>
  <div class="menu">
    <!-- HTML 반복문 -->
    <a v-for="product,index in menus" :key="product">
      {{product}}
      {{index}}
    </a>
  </div>

  <!-- 
    Q. 쇼핑몰 이름도 데이터 바인딩 할까?
    A. 자주 변경이 되지 않는 데이터들은 바인딩해도 쓸모가 없음
    애초에 바뀔 일이  없으면 안해도됨 
  -->
  <!-- HTML 속성도 데이터 바인딩 가능 -->
  <!-- <h4 class="red" style="color: blue"> -->
  원룸샵
  <div>
    <img src="C:\Users\USER\OneDrive\문서\WebProject\makeForVue\vuedongsan\src\assets\logo.png">
    <div v-for="price,index in price1" :key="index">
      <h4 :style="스타일">
        {{products[index]}}
      </h4>
      <p>
        {{price}} 만원
        <button @click="increase(index)">
          click
        </button>
        <span>신고수 : {{num[index]}}</span>
        <!-- vue 문법 => 데이터 넣는방법 -->
        <!-- 
          데이터 바인딩 하는 이유
          1. HTML에 하드코딩 해놓으면 나중에 변경이 어려움
          2. Vue의 실시간 자동 렌더링 쓰려면 해야함
          : 실시간 자동 랜더링이란?
          Vue는 data를 변경하면 실시간으로 data와 관련된 HTML에 실시간으로 반영됨 
          장점: 웹앱같은걸 만들수 있음 -> 무언가 조작을 하면 HTML이 바뀌면서 동작함
        -->
      </p>
    </div>
  </div>

</template>


<script>

export default {
  name: 'App',
  // 데이터 보관함
  data(){
    return {
      // 데이터 보관하는곳
      // 데이터는 object 자료로 저장해야함
      // {자료이름 : 자료내용}
      price1 : [10,20,30],
      스타일: 'color : blue',
      products:['역삼동 원룸','천호동 원룸','마포구 원룸'],
      menus :['Home','Products','About','Shop'],
      num: [0,0,0],
    }
  },
  components: {
  },
  methods: {
    increase(i){
      this.num[i]++
    }
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

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
</style>
