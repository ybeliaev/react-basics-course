import React from 'react';

import styled from 'styled-components'
import "./style.css"

import ReactLogo from  "./close.svg"

const AlertStyled = styled.div`
    position: relative;
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;     
    padding-left: 20px;
    border: 1px solid transparent;
    border-radius: .25rem;
`
const ButtonStyled = styled.button`    
    cursor: pointer;
    background-color: transparent;
    border: 0;
    appearance: none;
    padding: 14px 28px;
    font-size: 24px;
    color:  rgb(21, 87, 36);
        &:hover{
            color:  rgb(22,22,22);
        }
`
const PreStyled = styled.pre`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// JSX
let jsx = <>
  <PreStyled>
    <code>Modify index.js</code>
    <ButtonStyled>&times;</ButtonStyled>    
  </PreStyled>
</>

// HyperScript
let hs = React.createElement("div", {className: "lesson-1 div"}, [
  React.createElement("pre", {className: "pre"}, [
    React.createElement("code", {}, ["Modify index.js"]),
    React.createElement("button", {className: "btn"}, [
        React.createElement("span", {dangerouslySetInnerHTML: {__html: "&times;"}, className: "span"})
      ]),
  ]),
])

export default function Lesson1() {
  return <div>
    <h4>JSX Alert (toDo)</h4>
    <AlertStyled>{jsx}</AlertStyled>    
    <h4>HyperScript Alert (toDo)</h4>
    <AlertStyled>{hs}</AlertStyled>
  </div>
}