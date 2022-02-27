import React from "react"

// 函数式组件
// export default function Vote (props) {
//   console.log(props)
//   return <div>
//     {props.title}

//     {/* {React.Children.map(props.children, (item) => {

//       return <div>{item}</div>

//     })} */}


//     {props.children.map((item, index) => {
//       return <div key={index}>{item}</div>
//     })}

//   </div>
// }

// ES6中类
// class类实现继承
/*  1.原型继承 
 *  2.CALL继承
 *  3.寄生组合继承 object.create
 *  4.ES6中基于CLASS实现继承
 */

// class Clock {
//   constructor(){
//     this.x = 100
//   }

//   y=200 
//   // 新增语法 给实例设置的私有属性 与以下效果一样
//   // constructor(){
//   //   this.y = 200
//   // }

//   AAA(){}
//   // 等同于 Clock.prototype.AAA 

//   static CCC = 300 // es7新增语法 直接在类上设置静态属性 React脚手架已经设置了这种语法的处理

//   static BBB(){
//     // Clock.BBB
//   }
// }


// 类组件
// class xxx extends React.Component  / React.PureComponent
// 当REACT-DOM.render渲染的的时候，如果发现虚拟DOM中type是一个类组件，会创建这个类的已实例，并且把解析出来的props传递给这个类:new Clock(props)
class Clock extends React.Component {
  constructor(props){
    // 先执行constructor（此时props并未挂载到实例上，基于this.props不能获取到值，但是可以直接使用形参中props，解决方法：super(props)，这样在constructor也可以使用this.props）
    // 当constructor执行完 react会帮我们继续处理，把props、context... 挂载到实例上（后期在其他的钩子函数中可以基于this.props获取传递的属性值）
    // props:调取组件传递进来的属性
    // super执行 相当于React.Component当做普通函数执行，让方法中this是当前实例
    // this => {props:xxx,context:xxx.refs:{},updater:{...}}
    super(props)
    // 此时执行后 才可以this.props  相当于把props传递给实例
  }

  // 必须要有render函数 它返回的内容是我们当前组件要渲染的视图
  render(){

    return <div>
      <h2>{ }</h2>
    </div>
  }

}
