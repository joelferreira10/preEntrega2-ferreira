import Items from "./items";
import Container from "react-bootstrap/Container";

function ItemListContainer({ greeting }) {
  return (
    <>
      <Container>
        <h1>{greeting}</h1>
        <Items/>
      </Container>
    </>
  );
}

export default ItemListContainer;
