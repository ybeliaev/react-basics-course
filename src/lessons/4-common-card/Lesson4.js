import React from 'react';

import styled from "styled-components"
import PropTypes from 'prop-types';

const ArrayCards = [
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
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </Card>
  
        <Card header={<span className="badge badge-secondary">Featured</span>}>
          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </Card>
  
        <Card header={<span className="badge badge-warning">Best Deal</span>}
              footer={<span class="text-secondary">sales ends on Dec 31 2020</span>}>
          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </Card>
    </Container>
    </div>
    
  }  
  