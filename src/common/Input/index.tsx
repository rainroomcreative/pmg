import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder , onChange, t, labelName, required}: InputProps) => (
  <Container>
    <Label htmlFor={name}>{labelName}</Label>
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
      required={required}
    />
  </Container>
);

export default withTranslation()(Input);
