import React from "react";
import styled from "@emotion/styled";
import { Modal, ModalContent } from "semantic-ui-react";

const ModalInput = ({ isOpen, handleModal }) => {
  return (
    <Modal open={isOpen}>
      <ModalContent>
        <Button>Test</Button>
      </ModalContent>
    </Modal>
  );
};

const Button = styled.button({
  height: "50px",
  borderRadius: "7px",
  backgroundColor: "#FDFD96",
  border: "none",
  cursor: "pointer",
  fontFamily: "Poppins",
  fontSize: 16,
  fontWeight: "bold",
});

export default ModalInput;
