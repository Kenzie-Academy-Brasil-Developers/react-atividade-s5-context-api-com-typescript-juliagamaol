import { ReactNode } from "react";
import { Container } from "./styles";


interface ButtonProps {
    children:ReactNode
    whiteSchema:boolean
    onClick: () => void
}

const Button = ({ children, whiteSchema, ...rest }:ButtonProps) => {
  return (
    <Container whiteSchema={whiteSchema} {...rest}>
      {children}
    </Container>
  );
};

export default Button;