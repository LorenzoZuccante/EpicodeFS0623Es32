import React from "react";
import Card from "react-bootstrap/Card";
import Books from "../Data/books.json";

const ContenutoPrincipale = () => {
  return (
    <div className="container">
      <div className="row">
        {Books.history.map((libro) => {
          return (
            <div className="col-md-4 col-sm-6 col-lg-3">
              <Card style={{ width: "13rem" }}>
                <Card.Img variant="top" src={libro.img} />
                <Card.Body>
                  <Card.Text>{libro.title}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContenutoPrincipale;
