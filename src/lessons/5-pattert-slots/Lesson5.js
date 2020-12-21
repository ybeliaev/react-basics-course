
import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`   
    display: flex;
    flex-direction: column;
    list-style: none;
`;
const Link = styled.a`
    position: relative;
    overflow: "hidden";
    text-decoration: none;
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
`


let arrayItem = ["First Item", "Second Item", "Third Item", "Fourth Item", "Fifth Item"]

let ListItem = ({children}) => {
    return children
}


export default function Lesson5() {
    
    return (
        <div className="wrapper_lesson">
            <h3>Урок 5</h3>
            <h3>Pattern "Slots"</h3>
            <p style={{textAlign:"center", fontSize:"15px", color:"tomato"}}>Решение задачи</p>
            <Ul>                
                <Link>0</Link>
                <Link>1</Link>
                <Link>2</Link>
                <Link>3</Link>                
            </Ul>
            
        </div>
    );
}


