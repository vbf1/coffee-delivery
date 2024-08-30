import { CompleteOrderForm } from "./components/complete-order-form";
import { SelectedCoffees } from "./components/selected-coffees";
import { Container } from "./styles";

export function CompleteOrderPage() {
  return (
    <Container className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </Container>
  );
}
