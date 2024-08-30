import { ReactNode } from "react";
import { Container } from "./styles";
import { RegularText } from "../../../../components/typography";

interface Props {
  readonly title: string;
  readonly subtitle: string;
  readonly icon: ReactNode;
}

export function SectionTitle({ icon, subtitle, title }: Props) {
  return (
    <Container>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </Container>
  );
}
