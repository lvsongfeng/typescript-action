export const dataType = ()=> {
  // 定义原始类型
  let bool: boolean = false
  let str: string = 'this is string'
  let num: number | null | undefined = null  // 可以定义多个类型

  // 定义数组
  let numbers: number[] = [1,2] // 声明数组类型，并把数组里类型也声明
  let numbers2: Array<number | string> = [1, '1', 3] // 声明数组里不同类型

  // 元组: 类似于数组 可以声明多个不同类型对象, 有几个值
  let t1: [number, string] = [1, '1']
  t1.push(4) // 越界添加时，数值类型是已定义的，可以添加
  // t1.push(true) // 越界添加时，数值类型是未定义的，不可能添加
  // t1[2] = '88' // 索引越界不能不添加

  // 对象
  let obj: object = {a:1, b:2, c: false, d:'234234'}
  let obj1: {a: number, b: string} = {a:1, b:'hi'} // 定义对象固定属性类型

  // 函数
  let func = (x: number, y: number) => x + y
  let func1: (x: number, y: number) => number

  // symbol
  let s1: symbol = Symbol()
  let s2 = Symbol()
  // console.log(s1 === s2) // false

  // undefined, null: 用来定义两个原始类型的数据
  let un: undefined = undefined
  let nu: null = null
  num = undefined
  num = null

  // void: 表示没有任何返回值的函数
  let noReturn = (): void => {}

  // any：可以定义任意类型的数据
  let x
  x = 1
  x = []
  x = () => {}
  
  // never: 永远不存在值的类型，一般用于错误处理函数
  let error = (): never => {
    throw new Error('error')
}
}

