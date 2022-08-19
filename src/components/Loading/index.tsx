import { Container, Spinner } from "./style";
import "./style";

export default function LoadingSpinner() {
  return (
    <Container>
      <Spinner />
      <h2>Carregando</h2>
    </Container>
  );
}