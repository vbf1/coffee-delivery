import { TitleText } from "../../../../components/typography";
import { CoffeeCartCard } from "../coffee-cart-card";
import { ConfirmationSection } from "./confirmation.section";
import { Container, DetailsContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <Container>
      <TitleText size="xs" color="subtitle">
        Cafés seleciondaos
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </Container>
  );
}
