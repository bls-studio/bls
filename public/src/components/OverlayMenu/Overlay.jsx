// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// // I use the same div here that I mount my app into
// // so the modal will be a sibling of the rest of the app
// // in the DOM hierachy
// const modalRoot = document.getElementById('root')

// export default class Modal extends Component {

//   constructor(props) {
//     super(props)
//     this.el = document.createElement('div')
//   }

//   componentDidMount() {
//     modalRoot.appendChild(this.el)
//   }

//   componentWillUnmount() {
//     modalRoot.removeChild(this.el)
//   }

//   render() {
//     return ReactDOM.createPortal(this.props.children, this.el)
//   }
// }