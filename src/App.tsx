import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofUse from "./pages/TermsofUse";
import ContactUs from "./pages/ContactUs";
import GoogleTagManager from "./GoogleTag";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import AboutUs from "./pages/AboutUs";
import Verified from "./pages/verification/Verified";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./shared/MainLayout";

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
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="term-of-use" element={<TermsofUse />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="verified/:userId/:token" element={<Verified />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HelmetProvider>
  );
};

export default App;
