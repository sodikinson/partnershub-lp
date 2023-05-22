import Modal from "react-modal";
import { useState } from "react";
import Image from "next/image";

export default function Dialog() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#dialog");

  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="text-center" id="dialog">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="btn btn-danger d-flex text-center justify-content-center mb-3"
          onClick={closeModal}
        >
          close
        </button>

        <form>
          <Image
            className="d-flex justify-content-center mb-5"
            src="/img/newpromo.jpeg"
            width={345}
            height={320}
            alt="promotion banner"
          />

          <a
            href="https://wa.link/5cm4a3"
            type="submit"
            className="btn btn-primary "
          >
            Ambil promonya disini
          </a>
        </form>
      </Modal>
    </div>
  );
}
