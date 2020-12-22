
import React from 'react';
import styled, {css} from 'styled-components';


let ListItems = styled.ul`   
    display: flex;
    flex-direction: column;
    list-style: none;
`;
let Link = styled.a`
    position: relative;    
    &&&{text-decoration: none; color: #222; font-size: 0.75em};
    display: block;
    padding: .75rem 1.25rem;
    background-color: #fff;    
    border: 1px solid rgba(0,0,0,.125);
    border-bottom: none;
    :last-of-type {
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
    &:hover{
        background-color: #e6e6e6;
    }     
    ${props =>
        props.active &&
        css`
            &&&{                
                background-color: #007BFF;
                color: #fff;
            }
    `}
`


let arrayItem = ["First Item", "Second Item", "Third Item", "Fourth Item", "Fifth Item"]

ListItems = ({children}) => {
    return children
}


export default function Lesson5() {
    
    return (
        <div className="wrapper_lesson">
            <h3>Урок 5</h3>
            <h3>Pattern "Slots"</h3>
            <p style={{textAlign:"center", fontSize:"15px", color:"tomato"}}>Решение задачи</p>
            <ListItems>   
                 {
                     arrayItem.map((item)=>{
                        let el = <Link href="!#">{item}</Link>
                        return el
                     })
                 }            
                                
            </ListItems>
            
        </div>
    );
}


