import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

interface Props {
  readonly icon: ReactNode;
  readonly text: string | ReactNode;
  readonly iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: Props) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}
