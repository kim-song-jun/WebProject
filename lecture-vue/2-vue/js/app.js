import SearchModel from "./models/SearchModel"

new Vue({
  el: '#app',
  data: {
    // 입력데이터를 받아서 저장함
    // 만약 query 안에 데이터를 저장하면, 검색창에서도 
    // 양방향 바인딩이 됨
    // => view-Model은 양방향 바인딩을 지원한다.
    query: '',
    // 검색결과 데이터 
    searchResult: []
  },
  methods: {

    // 검색 후 enter가 눌렸을때
    onSubmit(e) {
      this.search()
    },
    onKeyup() {
      if(!this.query.length) this.onReset()
    },
    onReset() {
      this.query = ''
      // todo 검색결과를 숨기는 ... 무언가를 해야함
      debugger
    },
    search() {
      SearchModel.list().then(data => {
        this.searchResult = data
      })
    }
  } 
})