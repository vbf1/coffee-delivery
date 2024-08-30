import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/quantity-input";
import { RegularText } from "../../../../components/typography";
import { ActionContainer, Container, RemoveButton } from "./styles";

export function CoffeeCartCard() {
  return (
    <Container>
      <div>
        <img src="/coffees/americano.png" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </Container>
  );
}
