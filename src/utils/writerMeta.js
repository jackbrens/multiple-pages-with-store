export const writer = (to) => {
  //首先找到head里的meta
  const deleArr = []
  document.head.childNodes.forEach((item) => {
    switch (item.tagName) {
      case 'META':
        deleArr.push(item)
        break
      case 'TITLE':
        //顺便设置title
        document.title = to.meta.title || to.name
        break
    }
  })
  //删除原来的meta
  deleArr.forEach((item) => {
    document.head.removeChild(item)
  })
  //添加想要的meta（全局）
  const metas = document.createElement('META')
  const creatArr = [
    { charset: 'UTF-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    //视图缩放
    {
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui',
    },
    {
      'http-equiv': 'Cache-Control',
      content: 'no-cache, no-store, must-revalidate',
    },
    {
      'http-equiv': 'Pragma',
      content: 'no-cache',
    },
    {
      'http-equiv': 'Expires',
      content: '0',
    },
  ]

  //将单个路由设定的meta加到creatArr数组中
  //局部meta和全局meta重复时，局部meta替换全局meta
  const tmpArr = to.meta.data ? to.meta.data.concat() : []
  if (tmpArr.length > 0) {
    to.meta.data.forEach((item, index) => {
      creatArr.forEach((ele, ind) => {
        if (Object.keys(item)[0] == Object.keys(ele)[0]) {
          creatArr[ind] = JSON.parse(JSON.stringify(item))
          tmpArr.splice(index, 1)
        }
      })
    })
    tmpArr[0]['data-n-head'] = tmpArr[1]['data-n-head'] = 'ssr'
    tmpArr[0]['data-hid'] = 'keywords'
    tmpArr[1]['data-hid'] = 'description'
    tmpArr[0]['name'] = 'keywords'
    tmpArr[1]['name'] = 'description'
  }

  //生成合并后的数组
  const eleArr = creatArr.concat(tmpArr)
  //将设定的值写入文档片段
  const creatFrag = document.createDocumentFragment()
  eleArr.forEach((ele) => {
    creatFrag.append(metas.cloneNode())
    Object.entries(ele).forEach((item) => {
      creatFrag.lastChild.setAttribute(item[0], item[1])
    })
  })
  //将文档片段写入head
  document.head.prepend(creatFrag)
}
