### 命令

> 脚手架安装 npm install -g create-react-app
>
> 创建项目  create-react-app myapp
>
> 启动项目 npm start



### Mvc

```javascript
// model、view、controll

// model数据
state= {
    name:"张三"
}

// view 视图 jsx语法

// controll 控制层 事件写在这一层 通过控制层修改model，model更新会通知视图层进行渲染

```



### 脚手架

```  javascript
// babel-preset-react-app  解析jsx语法            // {
            //   test: cssRegex,
            //   exclude: cssModuleRegex,
            //   use: getStyleLoaders({
            //     importLoaders: 1,
            //     sourceMap: isEnvProduction
            //       ? shouldUseSourceMap
            //       : isEnvDevelopment,
            //     modules: {
            //       mode: 'icss',
            //     },
            //   },
            //   'less-loader'
            //   ),
            //   // Don't consider CSS imports dead code even if the
            //   // containing package claims to have no side effects.
            //   // Remove this when webpack adds a warning or an error for this.
            //   // See https://github.com/webpack/webpack/issues/6571
            //   sideEffects: true,
            // },

// proxy 代理写在package.json文件里，具体写法与vue里写法相同，因为读取的地方就是在package.json里面

// 修改less (react配置了sass)
// 第一步安装less  
// 第二步 修改webpack.config.js   
const cssRegex = /\.(css|less)$/;
{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
    modules: {
      mode: 'icss',
    },
  },
  'less-loader'
  ),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
},
```



### JSX语法

``` javascript
// ReactDOM  将虚拟dom渲染为真是dom
1.每个视图只能存在一个根节点
// ReactDOM.render( [JSX],[container],[callback] )
// container 不建议是html/body,指定一个容器
// callback 将虚拟dom渲染到浏览器页面中触发的回调函数，但是一般不使用，可以在生命周期函数中完成相关操作


2.JSX语法基于{}绑定动态数据值或者js表达式
// 在括号中不能直接使用对象或者函数（引用数据类型值不是合法JSX元素，数组除外（数组会变成字符串，但是数组里也不能包含对象））


3.给JSX设置样式
// 设置样式类是className 
// 设置行内样式 不能是字符串 必须是一个对象  style={{color:'red'}}


4.大括号中如果是Js表达式，可以返回有效的数据值或者返回一个新的JSX元素
 // let sex = 0
// <div>{sex ==0 ? '男'：'女' }</div>
// {sex == 1 ? <p>我我我</p> : null}  // 根据条件渲染元素

5.循环渲染
// JSX 要求循环绑定的元素要设置key 存储的值是当前循环中的唯一值（key是dom diff 时候重要凭证，一般不设置为循环的索引）

<ul>{data.map((item, index) => {
  return <li key={item.id}>{item.sex}</li>
})}</ul>
```

### react组件

``` javascript
每一个组件都是一个单独的个体（数据私有、有完整的生命周期、有自己的视图…）

创建组件的方式
1.函数式组件
2.React.Component类创建组件
3.React HOOK 

// 函数式组件 只要让函数返回一个JSX元素即可（掌握props）
// 函数式组件被称为静态组件，没有state状态管控内容的变化，也没有生命周期函数等
// 特点：简单（开发简单渲染快速，但是一旦组件被调用，里面的内容渲染完成，当前组件中信息基本不变。除非重新调用组件传递不同的属性信息）


// React.Children.map 遍历传进来的JSX对象（子元素props.children）
ReactDOM.render(
  <div>
    <Vote title='啦啦啦'>
      <span>陈</span>
      <span>胡</span>
    </Vote>
  </div>,
  document.getElementById('root')
);

export default function Vote(props){
    return <div>我是组件</div>
}

export default function Vote (props) {
  console.log(props)
  return <div>
    {props.title}
    
    {React.Children.map(props.children, (item) => {
      return <div>{item}</div>
    })}
    // 或者
    {props.children.map((item, index) => {
      return <div key={index}>{item}</div>
    })}
  </div>
}



// ES6中类
// class类实现继承
/*  1.原型继承 
 *  2.CALL继承
 *  3.寄生组合继承 object.create
 *  4.ES6中基于CLASS实现继承
 */

class Clock {
  constructor(){
    this.x = 100
  }

  y=200 
  // 新增语法 给实例设置的私有属性 与以下效果一样
  // constructor(){
  //   this.y = 200
  // }

  AAA(){}
  // 等同于 Clock.prototype.AAA 

  static CCC = 300 // es7新增语法 直接在类上设置静态属性 React脚手架已经设置了这种语法的处理

  static BBB(){
    // Clock.BBB
  }
}


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

    

```

### 注意点

```javascript
1.jsx中不允许用class属性，需用className代替
2.组件名必须大写
3.事件必须修正this,绑定事件必须是小驼峰
4.jsx中不允许label标签使用for属性，需用htmlFor代替
5.jsx中所有的标签都必须闭合，<br>不行,必须<br/>
```







