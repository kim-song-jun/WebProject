<template>
  <div
    :class="`${this.filtersName} filter-item`"
    :style="`background-image:url(${this.url})`"
    @click="fire"
  >
    {{ filtersName }}
  </div>
</template>

<script>
export default {
  name: 'filterbox',
  components: {},
  props: {
    url: String,
    filtersName: String,
  },
  data() {
    return {};
  },
  methods: {
    fire() {
      this.emitter.emit('fire', this.filtersName);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
