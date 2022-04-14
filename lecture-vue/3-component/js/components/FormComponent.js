export default {
  template: '#search-form',
  props: ['value'],
  data() {
    return {
      inputValue: this.value
    }
  },
  methods: {
    onSubmit() {
      // trim == 공백 제거 함수
      // emit은 다른 컴포넌트에게 이벤트를 전달하기 위해 사용할 수 있다.
      this.$emit('@submit',this.inputValue.trim()) 
    },
    onKeyup() {
      if(!this.inputValue.length) this.onReset()
    },
    onReset() {
      this.inputValue = ''
      this.$emit('reset')
    }
  }
}