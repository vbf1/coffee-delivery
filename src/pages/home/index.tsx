import { Intro } from "./components/intro";
import { OurCoffes } from "./components/our-coffes";
import { Container } from "./styles";

export function HomePage() {
  return (
    <Container>
      <Intro />
      <OurCoffes />
    </Container>
  );
}
