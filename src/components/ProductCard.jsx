import Card from "react-bootstrap/Card";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Text>{product.price} $ </Card.Text>
        <Card.Text>{product.stock}</Card.Text>
        <Card.Text>
          {product.stock > 0 ? "En stock" : "Rupture de stock"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
