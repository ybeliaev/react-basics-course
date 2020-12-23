import React from 'react';

import styled from "styled-components"
import PropTypes from 'prop-types';

const DataCards = [
    { 
        id: 1,      
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Road_and_nature_of_beautifull_Bangladesh_village.jpg/320px-Road_and_nature_of_beautifull_Bangladesh_village.jpg",
        cardTitle: "Card title 1",
        cardText: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        href: "#",
        featured: false,
        salesEnds: false,
        bestDeal: false,
    },
    {
        id: 2,
        src:"",
        cardTitle: "Card title 2",
        href: "#",
        cardText: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        featured: true,
        bestDeal: false,
        salesEnds: false,
    },
    {
        id: 3,
        src:"",
        cardTitle: "Card title 3",
        cardText: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        href: "#",
        featured: false,
        bestDeal: true,
        salesEnds: true,
    },
]
const CommonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const CardWrapper = styled.div`    
    width: calc(33% - 1rem);
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin-right: 1rem;
    
`
const CardHeader = styled.div` 
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
  background-color: rgba(0,0,0,.03);
  border-bottom: 1px solid rgba(0,0,0,.125);
`
const Img = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
`
const CardText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`
const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

`
const CardButton = styled(Button)`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    text-decoration: none;
    margin-top: auto;
`
const CardBody = styled.div`
  
  padding: .75rem 1.25rem;

`
const Badge = styled.span`
    display: inline-block;
    padding: .25em .4em;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

`
const BadgeFeatured = styled(Badge)`
  color: #fff;
  background-color: #6c757d;
`
const BadgeWarning = styled(Badge)`
  color: #212529;
  background-color: #ffc107;
`
const TextSecondary = styled.span`
  color: #6c757d;
  font-size: 1.2rem;
`

function Card({DataCards, children}) {
 const elements = DataCards.map((item,idx)=>{
   return (
     <CardWrapper>
       {item.src ? <Img src={item.src} /> : null}
       {item.featured ? <CardHeader><BadgeFeatured>featured</BadgeFeatured></CardHeader> : null}
       {item.bestDeal ? <CardHeader><BadgeWarning>Best Deal</BadgeWarning></CardHeader> : null}
       <CardBody>
        <h5 className="card-title">{item.cardTitle}</h5>
        <CardText>{item.cardText}</CardText>
        <CardButton as="a" href={item.href}>Go somewhere</CardButton>
       </CardBody>
       {item.salesEnds ? <CardHeader><TextSecondary>sales ends on Dec 31 2020</TextSecondary></CardHeader> : null}
     </CardWrapper>
   )
 })
    return <>
      {elements}    
    </>
}
  
  Card.propTypes = {
    DataCards: PropTypes.array,
    children: PropTypes.node.isRequired,
  }
  
const Lesson4 = () => {
    return <div className="wrapper_lesson">
        <h3>Урок 4</h3>
        <h4>Card component</h4>
        <CommonContainer>
          <Card DataCards={DataCards}/>    
        </CommonContainer>
    </div>
    
  }  
export default  Lesson4;