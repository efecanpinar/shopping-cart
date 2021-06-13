import React from "react";
import "./ProductCard.css";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { MinusCircleIcon, PlusCircleIcon, CartIcon } from "../icons";

const ProductCard = ({ product, onIncrement, onDecrement, cartItem }) => {
  return (
    <Col style={{ margin: "30px 0px" }}>
      <Card className="">
        <Card.Img
          top
          className="image"
          src={product.image}
          alt={product.title}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title tag="h5">{product.title}</Card.Title>
          <Card.Subtitle tag="h6" className="mb-2 text-muted">
            {product.subtitle}
          </Card.Subtitle>
          <Card.Text className="text">{product.description}</Card.Text>
          <Row>
            {cartItem.value > 0 ? (
              <>
                <Col>
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() => onDecrement(cartItem)}
                    style={{ "margin-top": "auto" }}
                  >
                    <MinusCircleIcon />
                  </Button>
                </Col>
                <Col>
                  <Badge
                    variant="secondary"
                    style={{ fontSize: 30, width: "100%" }}
                  >
                    {cartItem.value}
                  </Badge>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => onIncrement(cartItem)}
                    style={{ "margin-top": "auto" }}
                  >
                    <PlusCircleIcon />
                  </Button>
                </Col>
              </>
            ) : (
              <Col>
                <Button
                  variant="primary"
                  onClick={() => onIncrement(cartItem)}
                  style={{ "margin-top": "auto" }}
                >
                  Add to Cart
                  <CartIcon />
                </Button>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
