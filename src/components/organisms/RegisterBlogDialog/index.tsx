import styled from "@emotion/styled";

import { Button } from "@/components/atoms/Button";
import { DialogTitle } from "@/components/atoms/DialogTitle";
import { Input } from "@/components/molecules/Input";
import { useState } from "react";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface Props {
  onClose: () => void;
}

export const RegisterBlogDialog = ({ onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const registerPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (typeof onClose === "function") {
          onClose();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Background />
      <Contents>
        <DialogTitle title="블로그 글 등록" />
        <Input label="Title:" value={title} onChange={setTitle} />
        <Input label="Body:" value={body} onChange={setBody} />
        <Actions>
          <Button label="등록하기" onClick={registerPost} />
          <Button label="닫기" color="#304ffe" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  );
};
