import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./shared/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofUse from "./pages/TermsofUse";
import ContactUs from "./pages/ContactUs";
import GoogleTagManager from "./GoogleTag";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <HelmetProvider>
      <GoogleTagManager />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chopmoney</title>
        <meta
          name="description"
          content="chop money, budget, budgeting, money, finance, expenses, chopmoney, chopmoney app, sticking to your budget, stick to my budget, savings, financial planning, frugal, money management, Stick to your budget in Ghana, Chop money app, Budgeting app ghana"
        />
        <link rel="canonical" href="http://chopmoney.co" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-of-use" element={<TermsofUse />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
};

export default App;
