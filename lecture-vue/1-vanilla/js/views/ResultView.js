import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.messages = {
  NO_RESULT: '검색 결과가 없습니다'
}

// view 객체의 init 메소드
ResultView.setup = function (el) {
  this.init(el)
}

// 서버에서 검색결과 데이터를 받아서 동적으로 
// 데이터는 컬렉션으로 가져옴
ResultView.render = function (data = []) {
  console.log(tag, 'render()', data)
  // 데이터가 있을경우 / 없을경우
  // 배열의 길이가 있을경우
  this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT
  this.show()
}

ResultView.getSearchResultsHtml = function (data) {
  return data.reduce((html, item) => {
    html += this.getSearchItemHtml(item)
    return html
  }, '<ul>') + '</ul>'
}


ResultView.getSearchItemHtml = function (item) {
  return `<li>
    <img src="${item.image}" />
    <p>${item.name}</p>
  </li>`
}


export default ResultView