import './CardComponent.css'

function CardComponent(props) {
  let myColor = props !== {} ? 'lightblue': 'lightgreen';
    return (
        <div className="col-sm">
                <div className="card" id="cardDetail">
                    <div className="card-header">
                      <span>Detail Contact</span>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{background: myColor}}>Mario Rossi</h3>
                      <p className="card-text">City: London</p>
                      <p className="card-text">Phone: +39 123.456789</p>
                      <p className="card-text">Email: mark.otto@example.com</p>
                    </div>
                </div>
            </div>  
    )
}

export default CardComponent;