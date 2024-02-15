import styled from "@emotion/styled";

import { BlogBody } from "@/components/atoms/BlogBody";
import { BlogTitle } from "@/components/atoms/BlogTitle";

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
  width: 100%;
  max-width: 800px;
`;

interface Props {
  title: string;
  body: string;
}

export const BlogItem = ({ title, body }: Props) => {
  return (
    <Container>
      <BlogTitle title={title} />
      <BlogBody body={body} />
    </Container>
  );
};
