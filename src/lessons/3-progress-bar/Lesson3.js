import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
    margin-bottom: 0.75rem;

`
const Div = styled.div `
    height: 1rem;
    overflow: hidden;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .25rem;
    margin-bottom: 1rem;
    
`
const MyBar = styled.div `
    width: ${props => props.percent}%;
    height: 15px;
    background-color: #007BFF;    
    line-height: 30px;
    color: white;
  `

function Progress({percent}) {
    // toDO
    return <>
        <span>{percent}%</span>
        <Div>
            <MyBar percent={percent}/>
        </Div>
    </>
  }
  
Progress.propTypes = {
    // toDO
  }
  
export default function Lesson3() {
    return <div className="wrapper_lesson">
      <div style={{width: "800px"}}>       
        <Wrapper><Progress percent={0}/></Wrapper>
        <Wrapper><Progress percent={10}/></Wrapper>
        <Wrapper><Progress percent={50}/></Wrapper>
        <Wrapper><Progress percent={90}/></Wrapper>
        <Wrapper><Progress percent={100}/></Wrapper>
      </div>
    </div>
  }