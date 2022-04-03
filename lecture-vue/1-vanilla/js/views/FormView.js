import View from "./View.js";

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function(el){
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show=true) {
    this.resetEl.style.display = show ? 'block' :'none'
}

FormView.bindEvents = function () {
    this.on('submit',e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset())
}


// 키 입력하는 부분
FormView.onKeyup = function(e){
    const enter = 13
    // 만약 입력한 버튼이 있을 경우? => showResetBtn에서 인자로 들어감
    this.showResetBtn(this.inputEl.value.length)
    // 만약 입력값이 지워졌다는것을 확인할려면
    if (this.inputEl.value.length) this.emit('@reset')
    if (e.keyCode !== enter) return
    this.emit('@submit',{input: this.inputEl.value})
}

FormView.onClickReset = function () {
    this.emit('@reset')
    this.showResetBtn(false)
}

FormView.setValue = function(value = '') {
    this.inputEl.value = value
    this.showResetBtn(this.inputEl.value.length)
}

export default FormView