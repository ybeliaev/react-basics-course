import React from 'react';

import PropTypes from "prop-types"

export default function Lesson5Resource() {
    return <div className="wrapper_lesson">
      <h3>Урок 5</h3>
        <h3>Pattern "Slots"</h3>
        <p style={{textAlign:"center", fontSize:"15px", color:"tomato"}}>Исходники проекта</p>
        <div className="p-3">
    <div className="card-columns">
      <Card>
        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Road_and_nature_of_beautifull_Bangladesh_village.jpg/320px-Road_and_nature_of_beautifull_Bangladesh_village.jpg" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>
      <Card>
        <Card.Header>
          <span className="badge badge-secondary">Featured</span>
        </Card.Header>
        <div className="card-body">
          <h5 className="card-title">Card title 2</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>
      <Card>
        <Card.Header>
          <span className="badge badge-warning">Best Deal</span>
        </Card.Header>
        <div className="card-body">
          <h5 className="card-title">Card title 3</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <Card.Footer>
          <span className="text-secondary">sales ends on Dec 31 2020</span>
        </Card.Footer>
      </Card>
    </div>
  </div>
    </div>
  }
  function Card({children}) {
    children = React.Children.toArray(children)
    let headerComponent = children.find(node => {
      console.log("node: ", node.type);
      return node.type == Card.Header
    })
    let footerComponent = children.find(node => node.type == Card.Footer)
    let content = children.filter(node => node.type != Card.Header && node.type != Card.Footer)
    return <div className="card"> 
      {headerComponent && <div className="card-header">{headerComponent}</div>}
      {content}
      {footerComponent && <div className="card-footer">{footerComponent}</div>}
    </div>
  }
  Card.propTypes = {
    children: PropTypes.node.isRequired,
  }
  Card.Header = ({children}) => children
  Card.Header.propTypes = {
    children: PropTypes.node.isRequired,
  }
  Card.Footer = ({children}) => children
  Card.Footer.propTypes = {
    children: PropTypes.node.isRequired,
  }