<template>
    <div>
    <img :src="oneRooms.image" class="room-img" style="width:70%">
    <h4>{{oneRooms.title}}</h4>
    <p>{{oneRooms.price}} 만원</p>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props:{
    oneRooms :Object,
  }
}
</script>

<style>

</style>