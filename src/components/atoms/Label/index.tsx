import styled from "@emotion/styled";

const Container = styled.div`
  font-size: 1.2rem;
`;

interface Props {
  text: string;
}

export const Label = ({ text }: Props) => {
  return <Container>{text}</Container>;
};
