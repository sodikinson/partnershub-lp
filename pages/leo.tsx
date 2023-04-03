import { useEffect, useState } from "react";
import AOS from "aos";
// import Navbar from "../components/organism/Navbar";
import MainBanner from "../components/organism/MainBanner";
import TransactionStep from "../components/organism/TransactionStep";
import Accordion from "../components/atoms/Accordion";
import Pricing from "../components/atoms/Pricing";
import FeaturedGame from "../components/organism/FeaturedGame";
import Reached from "../components/organism/Reached";
import Story from "../components/organism/Story";
import Footer from "../components/organism/Footer";
import WhyUs from "../components/organism/WhyUs";
import Hero from "../components/atoms/Hero";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import Dialog from "../components/organism/Dialog";

export default function Leo() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* NAVBAR */}
      {/* <Navbar /> */}

      {/* HEADER */}
      <MainBanner />

      {/* <Dialog /> */}

      {/* STORY */}
      <Story />

      {/* PRICING */}
      <Pricing />

      {/* FETURED GAME */}
      <FeaturedGame />

      {/* WHY US */}
      <WhyUs />

      {/* FEATURE */}
      <TransactionStep />

      {/* HERO */}
      <Hero />

      {/* REACHED */}
      <Reached />

      {/* ACCORDION FAQ */}
      <Accordion />

      {/* FOOTER */}
      <Footer />

      <FloatingWhatsApp
        phoneNumber="6289675759186"
        avatar="/img/avatar.pngmpm r"
        accountName="Leo"
        darkMode={true}
        placeholder="Tulis pesan ..."
        statusMessage="🟢 Online"
        chatMessage="😊 Hello, Ada yang bisa saya bantu ?"
        allowEsc
        allowClickAway
        notification
        notificationSound={true}
      />
    </>
  );
}
