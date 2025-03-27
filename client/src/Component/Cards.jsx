import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ item }) {
  const truncateText = (text, limit) =>
    text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <Card className="custom-card shadow-sm mb-4">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={item.image || "https://via.placeholder.com/300x300"}
          alt={item.title || "Product Image"}
          className="product-image"
        />
      </div>
      <Card.Body className="card-body">
        <div className="card-content">
          <Card.Title className="card-title">
            {truncateText(item.title, 50)}
          </Card.Title>
          <Card.Text className="card-description">
            {truncateText(item.description, 100)}
          </Card.Text>
          <h5 className="card-price">${item.price}</h5>
        </div>
        <div className="card-footer">
          {item.rating && (
            <p className="card-rating">
              ⭐ {item.rating.rate} / 5 ({item.rating.count} reviews)
            </p>
          )}
          <Button variant="success" className="buy-button">
            Buy Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
