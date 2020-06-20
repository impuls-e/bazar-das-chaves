import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { Container } from "./styles";

export default function FloatWhatsapp() {
  return (
    <Container>
      <a href="https://wa.me/554888394527" target="_blank">
        {" "}
        <FaWhatsapp size={40} />
      </a>
    </Container>
  );
}
