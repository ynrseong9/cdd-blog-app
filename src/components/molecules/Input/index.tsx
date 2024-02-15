import styled from "@emotion/styled";

import { InputText } from "@/components/atoms/InputText";
import { Label } from "@/components/atoms/Label";

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

interface Props {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

export const Input = ({ label, value, onChange }: Props) => {
  return (
    <InputGroup>
      <Label text={label} />
      <InputText value={value} onChange={onChange} />
    </InputGroup>
  );
};
