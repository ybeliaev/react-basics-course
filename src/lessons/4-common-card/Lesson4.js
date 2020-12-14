function Card(props) {
    // toDO
    return <pre>
      <code>{JSON.stringify(props)}</code>
    </pre>
  }
  
  Card.propTypes = {
    // toDO
  }
  
export default  function Lesson4() {
    return <div className="p-3">
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
      </div>
    </div>
  }  
  