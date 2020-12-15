import React from 'react';

import styled from "styled-components"
import PropTypes from 'prop-types';

const DataCards = [
    { 
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Road_and_nature_of_beautifull_Bangladesh_village.jpg/320px-Road_and_nature_of_beautifull_Bangladesh_village.jpg",
        cardTitle: "Card title 1",
        cardText: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        featured: false,
        salesEnds: false,
        bestDeal: false,
    },
    {
        src:"",
        cardTitle: "Card title 2",
        cardText: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        featured: false,
        salesEnds: false,
        bestDeal: false,
    },
    {
        src:"",
        cardTitle: "Card title 3",
        cardText: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        featured: false,
        salesEnds: false,
        bestDeal: false,
    },
]
const Container = styled.div`
    display: flex;
    justify-content: space-between;

`
const CardHeader = styled.div` 
  padding: .75rem 1.25rem;
  margin-bottom: 0;
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
const Badge = styled.span`
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
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
`

function Card(props) {
    // toDO
    return props.children
  }
  
  Card.propTypes = {
    // toDO
  }
  
export default  function Lesson4() {
    return <div className="wrapper_lesson">
    <Container> 
        <Card>
          <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Road_and_nature_of_beautifull_Bangladesh_village.jpg/320px-Road_and_nature_of_beautifull_Bangladesh_village.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#">Go somewhere</a>
          </div>
        </Card>
  
        <Card header={<span className="badge badge-secondary">Featured</span>}>
          <div>
            <h5>Card title 2</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#">Go somewhere</a>
          </div>
        </Card>
  
        <Card header={<span className="badge badge-warning">Best Deal</span>}
              footer={<span class="text-secondary">sales ends on Dec 31 2020</span>}>
          <div>
            <h5>Card title 3</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#">Go somewhere</a>
          </div>
        </Card>
    </Container>
    </div>
    
  }  
  