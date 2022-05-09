<template>
    <div class="black-bg" v-if="uiStatus == true">
    <div class="white-bg" >
      <img :src="oneRooms[uiInfo].image" style="width:100%">
      <h4>{{oneRooms[uiInfo].title}}</h4>
      <p>{{oneRooms[uiInfo].content}}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model="month">
      <!-- <textarea v-model="month"></textarea> -->
      <!-- <select v-model="month">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>6</option>
      </select> -->
      <p>{{month}}개월 선택함: {{oneRooms[uiInfo].price*month}} 원</p>
      <button @click="$emit('closeModal',false)">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props:{
    oneRooms: Array,
    uiInfo: Number,
    uiStatus: Boolean,
  },
  data() {
    return {
      month: 1,
    }
  },
  beforeUpdate(){
    if(this.month == 2){
      alert('2개월은 너무 적음.. 안팝니다')
      this.month = 3
    }
    if (typeof a == typeof String){
      alert('문자 입력하지 마셈')
      this.month = 1
    }
  },
  watch:{
    month(a){
      // user가 month를 글자로 입력하면 경고문을 띄워주세요
      // if month > 13 -> warning 
      if (a>=13){
        alert('13이상 입력하지 마셈')
        this.month = 1
      }
    },
  },
}
</script>

<style>

</style>