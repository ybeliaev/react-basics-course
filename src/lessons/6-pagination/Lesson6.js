import React, {useState} from 'react';

import PT from "prop-types";
import styled, {css} from 'styled-components';


let Link = styled.a`
    position: relative;    
    &&&{text-decoration: none; color: #222; font-size: 0.75em};    
    padding: .75rem 1.25rem;
    background-color: #fff;    
    border: 1px solid rgba(0,0,0,.125);
    border-right: none;
    :last-of-type {
        border-right: 1px solid rgba(0,0,0,.125);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    :first-of-type {        
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    &:hover{
        background-color: #e6e6e6;
    }    
    
    &.active{
        background-color: #007BFF;        
        color: #fff !important;
    }
`

let ListItems = ({PagesArray, children}) => {
    return children
}
let pagesArray = [1,2,3,4,5,6,7,8,9,10]


export default function Lesson6(){
    const [isActive, setActive] = useState(1);

    let length = pagesArray.length
    
    let handlerClick = (e,idx) => {
        e.preventDefault();                                        
        setActive(idx);
        let prev = idx >= 1 ? idx - 1 : null
        let next = idx + 1 <= length - 1 ? idx + 1 : null
        console.log('prev ', prev);
        console.log('next ', next);
    }
    return (
        <div className="wrapper_lesson">
            <h3>Урок 6</h3>
            <h4>Pagination</h4>
            <ListItems pagesArray = {pagesArray}>
                {
                   pagesArray.map((item, idx) => {
                       let el = <Link 
                                    key={idx} 
                                    href="!#"
                                    className={isActive == idx ? "active" : ""}
                                    onClick={(e)=>handlerClick(e,idx)}
                                >{item}</Link>
                       return el;
                   }) 
                }
            </ListItems>
        </div>    
    )
}

