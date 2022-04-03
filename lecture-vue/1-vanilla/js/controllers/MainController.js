import FormView from "../views/FormView.js"
import TabView from "../views/TabView.js"
import KeywordView from "../views/KeywordView.js"
import ResultView from "../views/ResultView.js"

import SearchModel from "../models/SearchModel.js"
import KeywordModel from "../models/KeywordModel.js"


const tag = '[MainController]'

export default{
  init(){
    //console.log(tag, 'init()')
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())
    
    TabView.setup(document.querySelector('#tabs'))
      .on('@change', e => this.onChangeTab(e.detail.tabName))
    KeywordView.setup(document.querySelector('#search-keyword'))
      .on('@click', e=> this.onClickKeyword(e.detail.keyword))
    ResultView.setup(document.querySelector('#search-result'))
    this.selectedTab = '추천 검색어'
    this.renderView()
  },

  renderView() {
    console.log(tag,'renderView()')
    TabView.setActiveTab(this.selectedTab)

    if (this.selectedTab === '추천 검색어') {
      this.fetchSearchKeyword()
    } else {
      debugger
    }

    ResultView.hide()
  },

  fetchSearchKeyword() {
    KeywordModel.list().then(data => {
      KeywordView.render(data)
    })
  },

  search(query) {
    // console.log(tag, 'search()', query)
    // search api
    FormView.setValue(query)
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
    // this.onSearchResult([])
  },

  onSubmit(input){
    console.log(tag, 'onSubmit()', input)
    // 입력데이터를 받아서 검색 요청을함
    this.search(input)
  },

  onResetForm() {
    console.log(tag,'onResetFrom()')
    this.renderView()
    //ResultView.hide()
    //TabView.show()
    //KeywordView.show()
  },

  onSearchResult(data) {
    TabView.hide()
    KeywordView.hide()
    ResultView.render(data)
  },

  onChangeTab(tabName) {
    debugger
  },

  onClickKeyword(keyword) {
    this.search(keyword)
  }
}