// 菜单对象属性定义
export type MenuProps = {
  id?: number
  title?: string
  name?: string
  width?: number
  children?: { name?: string; id?: number; title?: string }[]
}

// 响应式属性定义
export interface Responsive {
  width: number
  height: number
  mobile(): boolean
  tablet(): boolean
  desktop(): boolean
  wide(): boolean
}

// tabs切换属性定义
export type TabsProps = {
  id: number
  title: string
  algorithmType: number // 算法类型
}

// 产品详情属性定义
export type ProductCenterDetailProps = {
  id: number
  title: string
  algorithmType: number // 算法类型
  desc: string
  scene: string // 应用场景
  feature: string
}
