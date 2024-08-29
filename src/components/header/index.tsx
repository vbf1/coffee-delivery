import { Button, ButtonsContainer, Container } from "./styles";
import CoffeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <Container>
      <div className="container">
        <img src={CoffeDeliveryLogo} alt="Logo Coffe Delivery" />

        <ButtonsContainer>
          <Button variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </Button>
          <Button variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </Button>
        </ButtonsContainer>
      </div>
    </Container>
  );
}
