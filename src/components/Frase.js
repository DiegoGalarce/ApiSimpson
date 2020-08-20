import React from 'react';
import Card from 'react-bootstrap/Card'

const Frase = (props) => {
    return (
        <Card className="bg-dark px-3 shadow">
            <Card.Header></Card.Header>
            <Card.Body>
                <div className="row shadow bg-warning">
                    <div className="col-sm-12 col-md-4">
                        <img src={props.personaje.image} alt=""></img>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <Card.Title>{props.personaje.character}</Card.Title>
                        <Card.Text>
                            {props.personaje.quote}
                    </Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Frase;