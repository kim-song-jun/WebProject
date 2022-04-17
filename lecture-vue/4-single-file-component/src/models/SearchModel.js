const data = [
  {
    id: 1,
    name: '[한석원] 애니메이션 빡빡이', 
    image: 'https://serieamania.com/g2/data/file/freetalk/mania-done-1637822350_Ar2fJhSC_f2059a9f140ff80ae76db5c85d91caea7136952fa4cb5ff10dcacd1ffb1d36a9.jpg'
  },
  {
    id: 2,
    name: '[한석원] 탈락',
    image: 'https://serieamania.com/g2/data/file/freetalk/mania-done-1637822351_MPqodeh8_4e2c78ead596c9cfef13065ac84c7009e2f62def57ab74e20a239465aad7a7c6.jpg'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  } 
}