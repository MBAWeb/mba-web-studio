import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
