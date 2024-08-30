import { TitleText } from "../../../../components/typography";
import { UseCart } from "../../../../hooks/use-cart";
import { CoffeeCartCard } from "../coffee-cart-card";
import { ConfirmationSection } from "./confirmation.section";
import { Container, DetailsContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = UseCart();
  return (
    <Container>
      <TitleText size="xs" color="subtitle">
        Cafés seleciondaos
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </Container>
  );
}
