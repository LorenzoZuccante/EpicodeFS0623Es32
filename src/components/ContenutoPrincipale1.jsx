import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Books from "../Data/books.json";
import CommentsSection from "./CommentsSection";

const SingleBook = ({ libro, isSelected, handleClick }) => {
  return (
    <div className={`col-md-4 col-sm-6 col-lg-3 p-2`} onClick={() => handleClick(libro.asin)}>
      <Card style={{ width: "8rem" }} className={isSelected ? 'border border-danger' : ''}>
        <Card.Img variant="top" src={libro.img} />
        <Card.Body>
          <Card.Text>{libro.title}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const ContenutoPrincipale1 = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBook, setSelectedBook] = useState("");

  const allBooks = [].concat(...Object.values(Books));
  const booksByCategory = { ...Books, all: allBooks };
  const allCategories = Object.keys(booksByCategory);

  const handleCardClick = (asin) => {
    setSelectedBook(asin === selectedBook ? "" : asin);
  };

  const filteredBooks =
    selectedCategory === "all"
      ? allBooks.filter((libro) =>
          libro.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : booksByCategory[selectedCategory].filter((libro) =>
          libro.title.toLowerCase().includes(searchValue.toLowerCase())
        );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="my-4">
            <Form>
              <Form.Group controlId="formSearch">
                <Form.Label>Cerca per titolo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il titolo del libro"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formCategory">
                <Form.Label>Scegli la categoria</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {allCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
          <div className="row">
            {filteredBooks.map((libro, index) => (
              <SingleBook
                key={index}
                libro={libro}
                isSelected={libro.asin === selectedBook}
                handleClick={handleCardClick}
              />
            ))}
          </div>
        </div>
        {selectedBook && (
          <div className="col-md-6">
            <CommentsSection elementId={selectedBook} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContenutoPrincipale1;
