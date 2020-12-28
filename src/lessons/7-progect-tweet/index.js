import React from 'react';

import PT from "prop-types";
import styled, {css} from 'styled-components';

let Wrap = styled.div`
    width: 40%;
`

let Textarea = styled.textarea `
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
    transition: border .15s ease-in-out;
    &:focus{
        border: 2px solid #007BFF;
    }
`
let Button = styled.button`
    display: inline-block;
    font-weight: 400;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    background-color: #0069d9;
    transition: color .15s ease-in-out,background-color .15s ease-in-out;
    &:hover{
      color: #fff;
      background-color: #007BFF;
      text-decoration: none;
    }

`
let Footer = styled.div`
    display: flex;
    justify-content: space-between;
    

`
// Footer = ({children}) => children;
// Button = ({children}) => children;


export default function Lesson7(){
    
    return (
        <div className="wrapper_lesson">
            <h3>Урок 7</h3>
            <h4>Проект Tweet</h4>
            <p><strong>Tweet:</strong></p>
            <Wrap>
                <Textarea cols="40" rows="4" placeholder="Input up to 140 characters..."></Textarea>
                <Footer>
                    <Button>Tweet</Button>
                    <small style={{fontSize:"14px"}}>140</small>
                </Footer>
            </Wrap>
        </div>    
    )
}