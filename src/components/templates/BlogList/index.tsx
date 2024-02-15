import styled from "@emotion/styled";

import { Button } from "@/components/atoms/Button";
import { BlogItem } from "@/components/organisms/BlogItem";
import { Header } from "@/components/organisms/Header";
import { RegisterBlogDialog } from "@/components/organisms/RegisterBlogDialog";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts?: Post[];
}

export const BlogList = ({ posts = [] }: Props) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Container>
      <Header />
      {posts.map((blog) => (
        <BlogItem key={blog.id} title={blog.title} body={blog.body} />
      ))}
      <ButtonContainer>
        <Button label="등록" onClick={() => setShowDialog(true)} />
      </ButtonContainer>
      {showDialog && (
        <RegisterBlogDialog onClose={() => setShowDialog(false)} />
      )}
    </Container>
  );
};
