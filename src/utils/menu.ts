/**
 * 头部菜单
 * @author: yj
 */

export const menu = [
  {
    id: 1,
    title: '首页',
    name: '',
  },
  {
    id: 2,
    title: '算法中心',
    name: 'productCenter',
  },
  {
    id: 3,
    title: '解决方案',
    name: 'appScheme',
  },
  {
    id: 4,
    title: '行业',
    width: 200,
    children: [
      {
        id: 5,
        title: '工业检测',
        name: 'industryCheck',
      },
    ],
  },
  {
    id: 6,
    title: '关于我们',
    width: 200,
    children: [
      {
        id: 7,
        title: '新闻资讯',
        name: 'newsConsultation',
      },
      {
        id: 8,
        title: '公司介绍',
        name: 'aboutUs',
      },
      {
        id: 9,
        title: '联系我们',
        name: 'contactUs',
      },
    ],
  },
]
