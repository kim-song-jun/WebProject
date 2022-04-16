import SearchModel from "./models/SearchModel.js"
import KeywordModel from "./models/KeywordModel.js"
import HistoryModel from "./models/HistoryModel.js"

import FormComponent from "./components/FormComponent.js"
import ResultComponent from "./components/ResultComponent.js"
import ListComponent from "./components/ListComponent.js"
import TabComponent from "./components/TabComponent.js"


new Vue({
  el: '#app',
  data: {
    // 입력데이터를 받아서 저장함
    // 만약 query 안에 데이터를 저장하면, 검색창에서도 
    // 양방향 바인딩이 됨
    // => view-Model은 양방향 바인딩을 지원한다.
    query: '',
    // 검색결과 표현 (T/F)
    submitted: false,
    // 검색결과 데이터 
    searchResult: [],
    tabs: ['추천 검색어', '최근 검색어'],
    selectedTab: '',
    keywords: [],
    history: []
  },
  components: {
    'search-form': FormComponent,
    'search-result': ResultComponent,
    'list': ListComponent,
    'tabs': TabComponent
  },
  created() {
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()
    this.fetchHistory()
  },
  methods: {
    // 검색 후 enter가 눌렸을때
    onSubmit(query) {
      this.query=query
      this.search()
    },
    onKeyup() {
      
    },
    onReset() {
      this.query = ''
      // todo 검색결과를 숨기는 ... 무언가를 해야함
      this.submitted = false
      this.searchResult = []
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true
        this.searchResult = data
      })
      HistoryModel.add(this.query)
      this.fetchHistory()
    },
    onClickTab(tab) {
      this.selectedTab = tab
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data
      })
    },
    fetchHistory()
    {
      HistoryModel.list().then(data => {
        this.history = data
      })
    },
    onClickKeyword(keyword) {
      this.query = keyword
      this.search()
    },
    onClickRemoveHistory(keyword) {
      HistoryModel.remove(keyword)
      this.fetchHistory()
    }
  } 
})