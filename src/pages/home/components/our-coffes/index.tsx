import { TitleText } from "../../../../components/typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../coffee-card";
import { CoffeeList, Container } from "./styles";

export function OurCoffes() {
  return (
    <Container className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </Container>
  );
}
