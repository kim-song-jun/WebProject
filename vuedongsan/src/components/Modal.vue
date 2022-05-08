<template>
    <div class="black-bg" v-if="uiStatus == true">
    <div class="white-bg" >
      <img :src="oneRooms[uiInfo].image" style="width:100%">
      <h4>{{oneRooms[uiInfo].title}}</h4>
      <p>{{oneRooms[uiInfo].content}}</p>
      <p>{{oneRooms[uiInfo].price}} 원</p>
      <!-- <button @click="uiStatus = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props:{
    oneRooms: Array,
    uiInfo: Boolean,
    uiStatus: Boolean,
  }
}
</script>

<style>

</style>