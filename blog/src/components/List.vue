<template>
  <div>
    <h5 @click="$router.push('/detail/0')">
    {{blogData[0].title}}</h5>
    <p>{{blogData[0].date}}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/1')">{{blogData[1].title}}</h5>
    <p>{{blogData[1].date}}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/2')">{{blogData[2].title}}</h5>
    <p>{{blogData[2].date}}</p>
  </div>
</template>

<script>
export default {
  name : "List",
  props: {
    blogData : Array,
  },
  data() {
    return {
      detail: '',
    }
  },
}
</script>

<style>

</style>