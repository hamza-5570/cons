import React from "react";
import Navbar from "./component/navbar";
import Banner from "./component/banner";
import Why from "./component/why";
import Process from "./component/process";
import Mission from "./component/mission";
import Faq from "./component/faq";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Why />
      <Process />
      <Mission />
      <Faq />
      <Footer />
    </>
  );
}
