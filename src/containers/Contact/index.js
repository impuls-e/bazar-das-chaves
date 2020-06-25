import React, { createRef, useState, useEffect } from "react";

import Footer from "../../components/Footer";
import { Container, ContactContent, Map } from "./styles";

import { FiInstagram, FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [showVideo, setShowVideo] = useState(false);

  const container = createRef();

  useEffect(() => {
    const videoObserver = new IntersectionObserver(onVideoIntersection, {
      rootMargin: "100px 0px",
      threshold: 0.25,
    });
    if (window && "IntersectionObserver" in window) {
      if (container && container.current) {
        videoObserver.observe(container.current);
      }
    } else {
      setShowVideo(true);
    }
  }, [container]);
  function onVideoIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true);
      videoObserver.disconnect();
    }
  }
  return (
    <>
      <Container id="contato">
        <ContactContent>
          <h3
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Solicite um Orçamento
          </h3>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Contato</h4>
            <a href="tel:(48)3224-1849">
              <FiPhone /> (48) 3224-1849
            </a>
            <a href="https://wa.me/5548996979837">
              <FaWhatsapp /> (48) 99697-9837
            </a>
            <a href="https://wa.me/5548999163111">
              <FaWhatsapp /> (48) 99916-3111
            </a>
            <a href="https://www.instagram.com/bazardaschavesecarimbos/">
              <FiInstagram /> Instagram
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Endereço</h4>
            <p>Rua. Felipe Schmidt, 80 Centro.</p>
            <p>Florianópolis – Sc.</p>
            <p>Cep: 88010-000.</p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Horário de Funcionamento</h4>
            <p>Segunda à Sexta: 08:00 – 19:00.</p>
            <p>Sábado: 09:00 - 13:00.</p>
            <p>Domingo: Fechado.</p>
          </div>
        </ContactContent>
        <Map ref={container}>
          {showVideo ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.886729873184!2d-48.55313458461728!3d-27.59704112873844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527382034abb0ab%3A0x63956861f012973d!2sBazar%20das%20Chaves%20e%20Carimbos!5e0!3m2!1sen!2sbr!4v1593030454663!5m2!1sen!2sbr"
              allowfullscreen=""
              width="100%"
              height="450"
              frameborder="0"
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          ) : (
            undefined
          )}
        </Map>
      </Container>
      <Footer />
    </>
  );
};
export default Contact;
