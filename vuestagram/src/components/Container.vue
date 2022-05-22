<template>
  <div v-if="step == 0">
    <Post v-for="item in instaData" :key="item.id" :instaData="item" />
    <div class="d-grid gap-2" v-if="index < 2">
      <button type="button" class="btn btn-secondary" @click="more">
        More
      </button>
    </div>
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step == 1">
    <div class="upload-image" :style="{ backgroundImage: `url(${url})` }"></div>
    <div class="filters">
      <FilterBox
        :url="url"
        v-for="item in this.filtersName"
        :key="item.id"
        :filtersName="item"
      >
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div class="upload-image" :style="{ backgroundImage: `url(${url})` }"></div>
    <div class="write">
      <textarea
        class="write-box"
        v-model="write"
        @change="$emit('write', write)"
      ></textarea>
      <!-- <textarea class="write-box" @input="$emit('write',$event.target.value)"></textarea> -->
    </div>
  </div>
  <!-- <div style="margin-block: 10px; text-align: center">
    <button
      style="margin-right: 5px"
      type="button"
      class="btn btn-primary btn-lg btn-group-lg"
      @click="$emit('curstep', 0)"
    >
      Post
    </button>
    <button
      style="margin-right: 5px"
      type="button"
      class="btn btn-primary btn-lg btn-group-lg"
      @click="$emit('curstep', 1)"
    >
      Filter
    </button>
    <button
      style="margin-right: 5px"
      type="button"
      class="btn btn-primary btn-lg btn-group-lg"
      @click="$emit('curstep', 2)"
    >
      Write
    </button>
  </div> -->
</template>

<script>
import FilterBoxVue from "./FilterBox.vue";
import PostVue from "./Post.vue";

export default {
  name: "container",
  components: {
    Post: PostVue,
    FilterBox: FilterBoxVue,
  },
  props: {
    instaData: Array,
    step: Number,
    index: Number,
    url: String,
    more: Function,
  },
  data() {
    return {
      write: "write!",
      filtersName: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
