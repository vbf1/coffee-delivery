import { Button, ButtonsContainer, Container } from "./styles";
import CoffeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { UseCart } from "../../hooks/use-cart";

export function Header() {
  const { cartQuantity } = UseCart();

  return (
    <Container>
      <div className="container">
        <NavLink to="/">
          <img src={CoffeDeliveryLogo} alt="Logo Coffe Delivery" />
        </NavLink>

        <ButtonsContainer>
          <Button variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </Button>
          <NavLink to="/complete-order">
            <Button variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </Button>
          </NavLink>
        </ButtonsContainer>
      </div>
    </Container>
  );
}
