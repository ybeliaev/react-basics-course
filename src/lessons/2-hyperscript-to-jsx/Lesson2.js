import React from 'react';
import styled from 'styled-components';
// ***JSX***
// data list
let items = [
  {name:"Home", href: "#home"}, 
  {name: "Library", href: "#library"}, 
  {name: "Data", href: null}
]
// styles
let Ol = styled.ul`
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
`
let Li = styled.li`
  display: inline;
  font-size: 18px;
  padding: 8px;
  &+&::before {
    content:"/";
    display: inline-block;
    padding-right: .75rem;
    color: #6c757d;
  }
`
let A = styled.a`
  color: #0275d8;
  text-decoration: none;
    &:hover {
      color: #01447e;
      text-decoration: underline;
    }
    /* не знаю как реализовать &:last-child:hover */
`

// *******************JSX************************
let jsx = <div>
  <nav>
    <Ol class="breadcrumb">
      {items.map((item, idx) => {
        const {name, href} = item; 
        if(idx == items.length - 1){
             return <Li key={idx}>{name}</Li>
        }else{
          return(          
          <Li key={idx}><A href={href}>{name}</A></Li>
          )
        }     
      })}
    </Ol>
  </nav>
</div>

// *******************HyperScript************************
let LiHyperScript = items.map((item, idx) => {
  const {name, href} = item; 
  if(idx == items.length - 1){
       return <Li key={idx}>{name}</Li>
  }else{
    return(          
    <Li key={idx}><A href={href}>{name}</A></Li>
    )
  }     
})

let hs = React.createElement("div", {}, [
  React.createElement("nav", {}, [
    React.createElement(Ol, {}, [LiHyperScript]),
  ]),
])

// Вариант Клешнина
// HyperScript
// let li = (attrs, children ) => React.createElement("li", attrs, children)
// let a = (attrs, children) => React.createElement("a", attrs, children)
// // let div = ... etc
// // ^ the spoiler of how H.S. can be made more comfortable

// let hs = React.createElement("nav", {}, [
//   React.createElement("ol", {className: "breadcrumb"}, [
//     li({className: "breadcrumb-item"}, [a({href: "#home"}, "Home")]),
//     li({className: "breadcrumb-item"}, [a({href: "#library"}, "Library")]),
//     li({className: "breadcrumb-item active"}, "Data"),
//   ])
// ])
export default function Lesson2() {
  return <div className="wrapper_lesson">
    <h3>Урок 2</h3>
    <h4>JSX Breadcrumbs (toDo)</h4>
    <div>{jsx}</div>

    <h4>HyperScript Breadcrumbs! (toDo)</h4>
    <div>{hs}</div>
  </div>
}

