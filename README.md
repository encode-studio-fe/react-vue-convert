# react-vue-convert

印客学院 React Vue 代码转换

实现 React 和 Vue 代码转换的思路主要有两种：

1. 通过编译原理，将 React 的 JSX 与 Vue 的模板语言转为统一的 AST，可借助 Babel 等工具，在原有 AST 转换的基础之上在包装一层，但需要同步保持框架更新，对于编译时的开发成本比较高；
2. 借助 React 和 Vue 提供的 Function Render 的能力，借助原生 API 实现框架间的转换，开发成本低，同时只要框架版本不做大的 Break Change，可以不用过多考虑兼容性问题；

此项目采用第二种。

## React-to-Vue

- React
  - [render](https://react.dev/reference/react-dom/render)
  - [unmountComponentAtNode](https://react.dev/reference/react-dom/unmountComponentAtNode)

- Vue
  - [defineComponent](https://cn.vuejs.org/api/general.html#definecomponent)
  - [h](https://cn.vuejs.org/api/render-function.html#h)
  - [onBeforeUnmount](https://cn.vuejs.org/api/composition-api-lifecycle.html#onbeforeunmount)
  - [onMounted](https://cn.vuejs.org/api/composition-api-lifecycle.html#onmounted)
  - [onUpdated](https://cn.vuejs.org/api/composition-api-lifecycle.html#onupdated)
  - [ref](https://cn.vuejs.org/api/reactivity-core.html#ref)

## Vue-to-React

- Vue
  - [createapp](https://cn.vuejs.org/api/application.html#createapp)
  - [h](https://cn.vuejs.org/api/render-function.html#h)

- React
  - [useRef](https://react.dev/reference/react/useRef)
  - [useEffect](https://react.dev/reference/react/useEffect)
  - [createElement](https://react.dev/reference/react/createElement)